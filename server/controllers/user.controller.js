const userUtils = require('../utils/users');
const userModel = require('../models/users.model');

const {
    validateRegister,
    comparePassword,
    encryptPassword,
    generateToken,
} = userUtils;

module.exports = {
    register: async (data) => {
        const { name, user, password } = data;
        const validate = validateRegister(data);
        const isUser = await userModel.findOne({ ghUser: user }).then(res => res);
        const { success } = validate;
        if (!success) {
            return validate;
        }
        if (isUser) {
            return {
                success: false,
                error: 'The user already exists',
            }
        }
        try {
            const newUser = new userModel({
                name,
                ghUser: user,
                password,
            });
            newUser.password = await encryptPassword(password);
            return newUser.save()
                .then((value) => {
                    return {
                        success: true,
                        message: 'User successfully registered',
                        value
                    }
                }).catch((err) => {
                    console.log('then catch');
                    console.log(err);
                    return {
                        success: false,
                        error: 'Then Catch Error see logs',
                    }
                });
        } catch (e) {
            console.log('try catch');
            console.log(e);
            return {
                success: false,
                error: 'Try Catch Error see logs',
            }
        }
    },

    login: async (data) => {
        const { user, password: formPass } = data;
        const userExists = await userModel.findOne({ ghUser: user }).then(res => res);
        if (!userExists) {
            return {
                success: false,
                error: 'Invalid user',
            }
        }
        try {
            const { password: userPass, ghUser: user, name, __id: id } = userExists;
            const comparePass = await comparePassword(formPass, userPass);
            if (!comparePass) {
                return {
                    success: false,
                    error: 'Invalid password',
                }
            }
            const token = generateToken(id);
            return {
                success: true,
                message: 'Successfully logged',
                token,
                userData: {
                    id,
                    user,
                    name,
                }
            }

        } catch (e) {
            console.log('try catch');
            console.log(e);
            return {
                success: false,
                error: 'Try Catch Error see logs',
            }
        }
    },
}
