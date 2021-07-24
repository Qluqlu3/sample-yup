package main

import (
	"fmt"
	"runtime"
)

func main() {
	go fmt.Println("Welcome")
	fmt.Printf("NumCPU: %d\n", runtime.NumCPU())
	fmt.Printf("NumGoroutine: %d\n", runtime.NumGoroutine())
	fmt.Printf("Version; %s\n", runtime.Version())

	list := []int{1, 2, 3}

	var s []int

	fmt.Println(len(s))
	fmt.Println(cap(s))
	fmt.Println(len(list))
	fmt.Println(cap(list))

	list = append(list, 4, 10, 1000)
	fmt.Println(len(list))
	fmt.Println(cap(list))
	fmt.Println(list)

	list2 := make([]int, 0)

	list2 = append(list2, 1, 2, 3)
	fmt.Println(list2)

	}            fmt.Println(name,i)}        fmt.Println(name+"isdone.")}funcmain(){    ch:=make(chanint,20)    goreceive("1stgoroutine",ch)    goreceive("2ndgoroutine",ch)    goreceive("3rdgoroutine",ch)    i:=0    fori<100{        ch<i        i++}    close(ch)    /*ゴルーチンの完了を3秒待つ*/    time.Sleep(3*time.Second)}
 
}
