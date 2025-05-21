const { response } = require("express")

const register = async (request, response, next) => {
    const {firstName, lastName, username, password } = request.body

    console.log ({firstName,lastName,username,password})

    try {
        const newUser = {
            firstName,
            lastName,
            username,
            password
        }
        console.log ("new user ")
    
    return response.status(201).json ({
        success: {message: "new user created"},
        data: {newUser}
    })
} catch (error) {
    console.error("error", error)
    
    return response.status (500).json ({
        error: {message: "internal server error"}
    })
}
}


const login = async (request, response, next) => {
    return response.status(200).json ({
        success: {message: "user logged in"},
    })
}



const logout = async (request, response, next) => {
    console.log ("initializing logout controller logic")
    response.clearCookie("connect.sid")

    
    function sessionDestruction(err) {
        //error handling as a final check and a failsafe
        if (err) {
            return next(err);
        }
    }
    sessionDestruction();
    
    return response.status(200).json ({
        success: {message: "user logged out"},
    })
}



const localLogin = async (request, response, next) => {
    const result = true

    function mockPassport(err, user) {
        //error handling as a final check and a failsafe
        if (err) {
          return next(err);
         }
        }
        //call the mockPassport feature
        mockPassport();
   
    
    return response.status(200).json ({
        success: {message: "login successful"},
        result: result
    })
} 


module.exports = {register, login, logout, localLogin}