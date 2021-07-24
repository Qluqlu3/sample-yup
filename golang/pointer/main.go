package main

import ("fmt")

func main() {
	p := &[3]int{1, 2, 3}

	fmt.Println(*p)
	fmt.Println(&p)
}
