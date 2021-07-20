package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	app := gin.Default()
	app.GET("/hello", func(content *gin.Context) {
		content.JSON(http.StatusOK, gin.H{
			"message": "world",
		})
	})
	// htmlのディレクトリを指定
	//HTML表示
	app.LoadHTMLGlob("html/*")
	app.GET("/gin", func(content *gin.Context) {
		content.HTML(http.StatusOK, "index.html", gin.H{
			"message": "こんにちは",
			"name":    "お酒",
		})
	})
	//画像表示
	app.Static("/image", "./images")

	//POSTでデータ取得・表示
	app.POST("/post", func(content *gin.Context) {
		name := content.PostForm("name")
		content.JSON(http.StatusOK, gin.H{"name": name,})
	})
	app.Run(":5000")
}
