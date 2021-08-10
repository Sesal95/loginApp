import querysApi from "../api/querysApi";

export function gitHubRepos(apiData) {
    return querysApi.grapqhl(apiData).then(res => res)
}

export function mongoRepos(apiData) {
    return querysApi.mongoRepos(apiData).then(res => res)
}

export function pushPop(apiData) {
    return querysApi.pushPopRepos(apiData).then((res) => {
        const { data } = res;
        console.log(res);
        return data;
    })
}
