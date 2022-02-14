package main

import "os"

func main() {
	if _, err := os.Stat("./ok.png"); os.IsNotExist(err) {
		return false
	}
	return true
}