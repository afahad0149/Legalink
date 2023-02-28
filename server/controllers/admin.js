const getAdmin = async (req, res, next) => {
  try {
    const { _id} = req.body;
    const admin = await User.find({ _id }); 
    res.status(201).send(admin);
  } catch (err) {
    res.status(401).send('Admin not found');
  }
};

module.exports = getAdmin;
