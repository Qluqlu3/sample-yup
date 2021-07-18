package main

import "github.com/gin-gonic/gin"

func main() {
	app := gin.Default()
	app.GET("/hello", func(content *gin.Context) {
		content.JSON(200, gin.H{
			"message": "world",
		})
	})
	app.Run(":5000")
}
