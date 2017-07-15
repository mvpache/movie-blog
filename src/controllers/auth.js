const { User } = require('../models');
const { requireSignIn } = require('../services/passport');
const getTokenForUser = require('../services/token');

const signIn = (req, res) => {
  res.send({
    token: getTokenForUser(req.user)
  });
};

module.exports = (app) => {
  app.post('/signin', requireSignIn, signIn);
};
