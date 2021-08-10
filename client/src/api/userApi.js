import { instance } from '.';

export default class userApi {
    static register(data) {
        try {
            return instance.post('users/register', data).then((res) => {
                console.log(res);
                return res;
            });
        } catch (e) {
            console.log(e);
            return e
        }
    };

    static login(data) {
        try {
            return instance.post('users/login', data).then((res) => {
                console.log(res);
                return res;
            });
        } catch (e) {
            console.log(e);
            return e
        }
    };
}
