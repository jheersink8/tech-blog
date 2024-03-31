// Confirm the user is logged in for routes with "confirmAuth"
const confirmAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = confirmAuth;
  