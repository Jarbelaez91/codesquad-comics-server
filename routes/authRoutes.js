const express = require("express")

const router = express.Router()

const { register, login, logout, localLogin } = require("../controllers/authController");

router.post("/register", register)
router.get("/login", login)

router.get("/login/error", (request, response, next) => {
    return response.json("login error")
})

router.get("/login/local", localLogin)

router.get("/logout", logout)

router.get("/authenticated", (request, response, next) => {
    console.log("returning to the homepage")
    response.redirect ("/")
})

module.exports = router