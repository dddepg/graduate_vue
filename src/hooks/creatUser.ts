import axios from 'axios'
import qs from "qs"
const instance = axios.create({
    timeout: 1000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

const creatOneUser = function (url: string, name: string) {
    const word = instance.post(url, qs.stringify({ num: 1, name: name }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "网络出现问题了" }];
        });
    return word
}
const creatMoreUser = function (url: string, beginname: number, endname: number) {
    const word = instance.post(url, qs.stringify({ num: 2, beginname: beginname, endname: endname }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "网络出现问题了" }];
        });
    return word
}

const addNews = function (url: string, title: string, newsurl: string, state: string) {
    const word = instance.post(url, qs.stringify({ newsurl: newsurl, title: title, state: state }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "网络出现问题了" }];
        });
    return word
}

export { creatOneUser, creatMoreUser,addNews }