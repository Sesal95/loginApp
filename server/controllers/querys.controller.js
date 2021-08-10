const queryUtils = require('../utils/querys');
const querysModel = require('../models/querys.model');

const { graphQuery } = queryUtils;

module.exports = {
    graphQLData: async (data) => {
        const { user } = data;
        const queryData = await graphQuery(user);
        const { success = true } = queryData;
        if (!success) {
            return {
                queryData,
            }
        }
        return {
            success: true,
            data: queryData,
        }
    },

    getMongoData: async (data) => {
        const { user } = data;
        const mongoRepos = await querysModel.find({ ghUser: user }).then(res => res) || false;
        if (!mongoRepos) {
            return {
                success: false,
                error: 'There are not repos',
            }
        }
        return {
            success: true,
            data: mongoRepos,
        }
    },

    pushPopMongoData: async (data) => {
        const { id, user, name, state, } = data;
        const url = `https://github.com/${user}/${name}`;
        if (state) {
            try {
                const newRepo = new querysModel({
                    id,
                    ghUser: user,
                    name,
                    url,
                });
                return newRepo.save()
                    .then(() => {
                        return {
                            success: true
                        }
                    }).catch((err) => {
                        console.log('then catch');
                        console.log(err);
                        return {
                            success: false,
                            error: 'Then Catch Error see logs',
                        }
                    })
            } catch (e) {
                console.log('try catch');
                console.log(e);
                return {
                    success: false,
                    error: 'Try Catch Error see logs',
                }
            }
        } else {
            try {
                return querysModel.deleteOne({ id, ghUser: user })
                    .then(() => {
                        return {
                            success: true
                        }
                    }).catch((err) => {
                        console.log('then catch');
                        console.log(err);
                        return {
                            success: false,
                            error: 'Then Catch Error see logs',
                        }
                    })
            } catch (e) {
                console.log('try catch');
                console.log(e);
                return {
                    success: false,
                    error: 'Try Catch Error see logs',
                }
            }
        }
    }
}
