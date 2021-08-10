import { instance } from './tokenInstance';

export default class querysApi {
    static grapqhl(data) {
        try {
            return instance.get(`querys/graphql/${data}`).then((res) => {
                const { data } = res.data;
                const { user } = data.data;
                const { repositories } = user;
                return {
                    data: repositories,
                };
            });
        } catch (e) {
            console.log(e);
            return e
        }
    };

    static mongoRepos(data) {
        try {
            return instance.get(`querys/mongoRepos/${data}`).then((res) => {
                const { data } = res;
                return data;
            });
        } catch (e) {
            console.log(e);
            return e
        }
    };

    static pushPopRepos(data) {
        const { id, name, user, state } = data;
        try {
            return instance.post(`querys/mongoRepos/pushpop/${id}/${name}/${user}/${state}`).then((res) => {
                console.log(res);
                return res;
            });
        } catch (e) {
            console.log(e);
            return e
        }
    };
}
