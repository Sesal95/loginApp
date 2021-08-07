const bcrypt = require('bcrypt');

module.exports = {
    validateRegister: (data) => {
        const { name, user, password, password2 } = data;
        const returnData = { success: true }
        let errors = [];
        if (!name || !user || !password || !password2)  {
            errors.push('\n -Please fill in all fields');
        }
        if (password !== password2) {
            errors.push('\n -Passwords dont match');
        }
        if (password.length < 6) {
            errors.push('\n -Password at least 6 characters');
        }
        if (errors.length > 0) {
            returnData.success = false;
            returnData.err = errors;
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
}