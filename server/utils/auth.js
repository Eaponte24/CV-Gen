const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
   authMiddleware(context) {
    const { req } = context;
  
    let token = req.headers.authorization || '';
  
    if (token.startsWith('Bearer ')) {
      token = token.substring(7, token.length);
    }
  
    if (!token) {
      return context;
    }
  
    try {
      const decoded = jwt.verify(token, secret);
      context.user = decoded.data;
    } catch (err) {
      console.log('Invalid token');
    }
  
    return context;
  },
  
   signToken({ email, _id }) {
    const payload = { email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};
