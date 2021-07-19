package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	app := gin.Default()
	app.GET("/hello", func(content *gin.Context) {
		content.JSON(200, gin.H{
			"message": "world",
		})
	})
	// htmlのディレクトリを指定
	app.LoadHTMLGlob("html/*")
	app.GET("/gin", func(content *gin.Context) {
		content.HTML(200, "index.html", gin.H{
			"message": "こんにちは",
		})
	})
	app.Run(":5000")
}
