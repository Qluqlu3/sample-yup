package main

import "fmt"

func main() {
	// type MyInt int
	// var n1 MyInt = 5
	// n2 := MyInt(7)
	// fmt.Println(n1)
	// fmt.Println(n2)

	// type Point struct {
	// 	x int
	// 	y int
	// }
	// var pt Point
	// fmt.Println(pt.x)
	// fmt.Println(pt.y)

	// pt2 := Point{x: 10, y: 99}
	// fmt.Println(pt2.x)
	// fmt.Println(pt2.y)

	c := make([]int, 5)
	// c := make([]int, 0, 5)
	for i := 0; i < 5; i++ {
		c = append(c, i)
		fmt.Println(c)
	}
	fmt.Println(c)
}
