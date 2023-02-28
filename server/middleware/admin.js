const adminMiddleware = async (req, res, next) => {
  try {
    if (req.user.userType === 'admin') {
      req.user = user;
      next();
    } else {
      res.status(403).send('Not an admin!');
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = adminMiddleware;
