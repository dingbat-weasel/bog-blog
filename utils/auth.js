const withAuth = (req, res, next) => {
  if (!req.session.loggin_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
