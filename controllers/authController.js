const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const signupRequest = async (request, response, next) => {
  const { firstName, lastName, username, password, googleId, githubId } =
    request.body;

  console.log({ firstName, lastName, username, password });

  if (!firstName || !username || !password) {
    return response.status(400).json({
      error: { message: "missing required fields" },
      statusCode: 400,
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: hashedPassword,
      googleId: googleId,
      githubId: githubId,
    });
    console.log("new user ");

    await newUser.save();

    return response.status(201).json({
      success: { message: "new user created" },
      data: { newUser },
      statusCode: 201,
    });
  } catch (error) {
    console.error("error", error);

    return response.status(500).json({
      error: { message: "internal server error" },
      statusCode: 500,
    });
  }
};

const loginLocal = async (request, response, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      return response.status(401).json({
        error: { message: info.message },
        statusCode: 401,
      });
    }

    request.login(newUser, (err) => {
      if (err) {
        return next(err);
      }
    });

    const userCopy = { ...request.user._doc };
    userCopy.password = undefined;

    response.status(200).json({
      success: {
        message: "login successful within local authentication feature",
      },
      data: { user: userCopy },
      statusCode: 200,
    });
  });
};

const login = async (request, response, next) => {
  return response.status(200).json({
    success: { message: "user logged in" },
    statusCode: 200,
  });
};

const logoutRequest = async (request, response, next) => {
  request.logout((err) => {
    if (err) return next(err);

    request.session.destroy((err) => {
      if (err) return next(err);
    });
    response.clearCookie("connect.sid");
    return response.status(200).json({
      succes: { message: "user logged out" },
      statusCode: 200,
    });
  });
  console.log("initializing logout controller logic");

  function sessionDestruction(err) {
    if (err) {
      return next(err);
    }
  }
  sessionDestruction();

  return response.status(200).json({
    success: { message: "user logged out" },
    statusCode: 200,
  });
};

const localLogin = async (request, response, next) => {
  const result = true;

  function mockPassport(err, user) {
    if (err) {
      return next(err);
    }
  }
  mockPassport();

  return response.status(200).json({
    success: { message: "login successful" },
    result: result,
    statusCode: 200,
  });
};

module.exports = { signupRequest, login, localLogin, logoutRequest };
