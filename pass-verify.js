const bcrypt = require('bcrypt')

async function verifyPassword () {
const myPassword = 'admin 123 .202'
const hash = '$2b$10$8yBBfK4W2OS8mUATdU.Vh.PwmZJAXf3hF6hcaK6rsbWXEcWFM7uJK'
const isMatch = await bcrypt.compare(myPassword, hash) 
console.log(isMatch)
}

verifyPassword()