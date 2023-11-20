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
 //token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWIwMzQ2YWYzOGMxM2U2YTYyODEwNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAwNDY1MzA1fQ.vfW52z8KKdkM8OjOjAWO0nksJAeA48IEDBSVCxA21-o";
  return token;
};