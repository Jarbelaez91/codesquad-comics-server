const express = require("express")

const router = express.Router()

const passport = require("passport")

const { signupRequest, login, logoutRequest, localLogin } = require("../controllers/authController");

router.post("/signupRequest", signupRequest)

router.post ("/login",
    passport.authenticate ("local", {
        failureRedirect: "login/error",
        failureMessage: true,
    }), login)

router.get("/login/error", (request, response, next) => {
    return response.json("login error")
})

router.post("/login/local", localLogin)

router.post("/logoutRequest", logoutRequest)

router.get("/login/google", passport.authenticate("google", {scope: ["profile", "email"]}))

router.get("/google/callback",passport.authenticate("google", {successRedirect: "/dashboard", failureRedirect: "/login"})
)

router.get("/authenticated", (request, response, next) => {
    console.log("returning to the homepage")
    response.redirect ("/")
})

module.exports = router