package main

import (
	"net/http"
	"strings"

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
	list := []string{"大根", "にんじん", "きゅうり", "玉ねぎ"}
	app.GET("/gin", func(content *gin.Context) {
		content.HTML(http.StatusOK, "index.html", gin.H{
			"message": "こんにちは",
			"name":    "お酒",
			"list":    list,
		})
	})

	//画像表示
	app.Static("/image", "./images")

	//POSTでデータ取得・表示
	app.POST("/post", func(content *gin.Context) {
		name := content.PostForm("name")
		content.JSON(http.StatusOK, gin.H{"name": name})
	})
	app.POST("/form", func(content *gin.Context) {
		text := content.PostForm("text")
		sex := content.PostForm("sex")
		hobbies := content.PostFormArray("hobbies")
		age := content.PostForm("age")
		content.JSON(http.StatusOK, gin.H{"text": text, "sex": sex, "hobbies": hobbies, "age": age})
	})

	app.POST("/tag", func(content *gin.Context) {
		tags := content.PostForm("tags")
		slice := strings.Split(tags, ",")
		content.HTML(http.StatusOK, "tag.html", gin.H{"tags": slice})
	})

	app.POST("/password", func(content *gin.Context) {
		passsword := content.PostForm("passsword")
		rePasssword := content.PostForm("re_passsword")
		content.JSON(http.StatusOK, gin.H{"passsword": passsword, "re_passsword": rePasssword, "result": passsword == rePasssword})
	})
	app.Run(":5000")
}
