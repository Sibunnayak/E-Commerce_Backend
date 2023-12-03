const passport = require('passport');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME, // gmail
    pass: process.env.MAIL_PASSWORD, // pass
  },
});

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
 //token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjhjOTlhNzE1N2QwYmU0YWU1MmQ0NSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAxNDUxMzI1fQ.rHF4kR-ZwoYheVjvWGXbQ--ZLjhwSs1QMB2BHmMULL4";
 //token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjhjYjQzMjdhOWYwYTQxMTE3ZDAxZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwMTM2NjU5NX0.mLbFN_nPuEVRAzD9zEnGA5Mt_LVucFn8p22FPl_QGj8";
  return token;
};

exports.sendMail = async function ({to, subject, text, html}){
  let info = await transporter.sendMail({
      from: `"E-commerce" <${process.env.MAIL_USERNAME}>`, // sender address
      to,
      subject,
      text,
      html
    });
  return info;  
}