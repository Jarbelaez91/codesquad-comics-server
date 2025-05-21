const express = require("express")

const router = express.Router()

const { register, login, logout, localLogin } = require("../controllers/authController");

router.get("/register", register)
router.get("/login", login)

router.get("/login/error", (request, response) => {
    response.status(401).json ({ message: "login error"})
})

router.get("/login/local", localLogin)

router.get("/logout", logout)

router.get("/authenticated", (request, response) => {
    console.log("returning to the homepage")
    response.redirect ("/")
})

module.exports = router