const crypto = require('crypto');
const refreshSecret = crypto.randomBytes(64).toString('hex');
console.log(refreshSecret);