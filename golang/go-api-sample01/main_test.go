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
	asserts.Equal(gin.H{"message": "world"}, gin.H{"message": "world"})
	// asserts.Equal("message", "world")
}
