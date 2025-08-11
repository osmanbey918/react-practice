const jwt = require('jsonwebtoken');
const secretKey = 'abcde12345';

const token = jwt.sign({
  id: 1,
  username: 'GFG'
}, secretKey, { expiresIn: '1h' });

console.log(token);