import React, { useEffect, useMemo, useRef, useState } from 'react';
import throttle from 'lodash.throttle';
import styled from 'styled-components';

const Wrapper = styled.div<{ disabled?: boolean }>`
  padding-top: 30px;
  padding-left: 30px;
  flex-grow: 1;
  opacity: ${({ disabled }) => disabled && 0.5};
`;

const Scale = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  padding: 2px 0;
  cursor: pointer;
`;

const ScaleInner = styled.div`
  position: relative;
  width: 200px;
  height: 4px;
  border-radius: 2px;
  background: #06790c;
`;

const ScaleFill = styled.div<{ width: number }>`
  position: absolute;
  width: ${({ width }) => width}px;
  height: 4px;
  border-radius: 2px;
  background: #f00;
`;

const Circle = styled.div<{ position: number; disabled?: boolean }>`
  position: absolute;
  top: -7px;
  width: 15px;
  height: 15px;
  transform: ${(props) => `translateX(${props.position - 10}px) `};
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    box-sizing: border-box;
    background: #fff;
    width: 14px;
    height: 14px;
    border: 2px solid ${({ disabled }) => (disabled ? '#000' : '#00F')};
    border-radius: 10px;
  }
  &:hover::after {
    border: 2px solid '#00F';
  }
`;

type Props = {
  maxValue: number;
  minValue: number;
  value: number;
  disabled?: boolean;
  onChange: (value: number) => void;
  onMouseUp?: (value: number) => void;
};

export const ScaleBar: React.FC<Props> = React.memo(({ disabled, value, maxValue, minValue, onChange, onMouseUp }) => {
  const [translate, setTranslate] = useState(0);
  const refScale = useRef<HTMLDivElement>(null);
  const valueOnMouseMove = useRef(value);

  useEffect(() => {
    if (!refScale.current) return;
    const rect = refScale.current.getBoundingClientRect();
    const percentage = Math.min(Math.max((value - minValue) / (maxValue - minValue), 0), 1);
    setTranslate(rect.width * percentage);
    valueOnMouseMove.current = Math.min(Math.max(value, minValue), maxValue);
  }, [maxValue, minValue, value]);

  const handleMouseMove = useMemo(
    () =>
      throttle((event: MouseEvent): void => {
        if (!refScale.current) return;
        const rect = refScale.current.getBoundingClientRect();
        const percentage = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
        const value = minValue + (maxValue - minValue) * percentage;
        setTranslate(rect.width * percentage);
        const newValue = Math.min(Math.max(value, minValue), maxValue);
        valueOnMouseMove.current = newValue;
        onChange(newValue);
      }, 50),
    [maxValue, minValue, onChange]
  );

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    onMouseUp?.(valueOnMouseMove.current);
  };

  const handleMouseDown = () => {
    if (disabled) return;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleClick: React.MouseEventHandler = (event) => {
    if (disabled) return;
    handleMouseMove(event.nativeEvent);
    setTimeout(() => onMouseUp?.(valueOnMouseMove.current), 0);
  };

  return (
    <Wrapper disabled={disabled}>
      <Scale ref={refScale} onClick={handleClick}>
        <ScaleInner>
          <ScaleFill width={translate} />
          <Circle onMouseDown={handleMouseDown} position={translate} disabled={disabled} /> 
        </ScaleInner>
      </Scale>
    </Wrapper>
  );
});
