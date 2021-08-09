const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    validateRegister: (data) => {
        const { name, user, password, password2 } = data;
        const returnData = { success: true }
        if (!name || !user || !password || !password2)  {
            returnData.success = false;
            returnData.error = 'Please fill all fields';
        }
        if (password !== password2) {
            returnData.success = false;
            returnData.error = 'Passwords dont match';
        }
        if (password.length < 6) {
            returnData.success = false;
            returnData.error = 'Password at least 6 characters';
        }
        return returnData;
    },

    comparePassword: async (formPass, userPass) => {
        return await bcrypt.compareSync(formPass, userPass);
    },

    encryptPassword: async (pass) => {
        return await bcrypt.hash(pass, 10).then(hash => {
            return hash
        })
    },

    generateToken: (id) => {
        return jwt.sign({ id }, 'secretKey', { expiresIn: '1h' });
    },
}