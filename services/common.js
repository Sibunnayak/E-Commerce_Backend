const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt')
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
 token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjhjOTlhNzE1N2QwYmU0YWU1MmQ0NSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAxMzY2MTcwfQ.hEe9Sqe4tAEhXvLCqiiXUVzUCAKUVhF0ojbkR3dwvcc";
 //token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjhjYjQzMjdhOWYwYTQxMTE3ZDAxZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwMTM2NjU5NX0.mLbFN_nPuEVRAzD9zEnGA5Mt_LVucFn8p22FPl_QGj8";
  return token;
};