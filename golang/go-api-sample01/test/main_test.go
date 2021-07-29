package main

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

func TestGetHello(t *testing.T) {
	ginContext, _ := gin.CreateTestContext(httptest.NewRecorder())
	req, _ := http.NewRequest("GET", "/hello", nil)
	ginContext.Request = req

	asserts := assert.New(t)
	asserts.Equal(ginContext.Request.Method, "GET")
}
func TestPostPost(t *testing.T) {
	ginContext, _ := gin.CreateTestContext(httptest.NewRecorder())
	req, _ := http.NewRequest("POST", "/post", nil)
	ginContext.Request = req

	asserts := assert.New(t)
	asserts.Equal(ginContext.PostForm("name"), "")
}
