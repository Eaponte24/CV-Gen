const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token;

    if (req.headers.authorization) {
      const [scheme, tokenValue] = req.headers.authorization.split(' ');
      if (scheme === 'Bearer' && tokenValue) {
        token = tokenValue;
      }
    }

    if (token) {
      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
      } catch (err) {
        console.log('Invalid or expired token:', err);
        throw new Error('Invalid or expired token');
      }
    }

    return req;
  },

  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
