import userApi from "../api/userApi";

export function registerUser(userData) {
    return userApi.register(userData).then((res) => {
        const { data } = res;
        return data;
    });
}

export function loginUser(userData) {
    return userApi.login(userData).then((res) => {
        const { data } = res;
        return data;
    })
}
