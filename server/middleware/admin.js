const adminMiddleware = async (req, res, next) => {
  // console.log(req)
  try {
    if (req.body.userType === 'admin') {
      
      next();
    } else {
      res.status(403).send('Not an admin!');
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = adminMiddleware;
