import axios from 'axios'
import qs from "qs"

const instance = axios.create({
    timeout: 1000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});
const testTrue = function (url: string, id: string, email: string, tele: string) {
    const word = instance.post(url, qs.stringify({ id: id, email: email, tele: tele }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'title': "哎呀，网络出问题了" }];
        });
    return word
}

const changePass = function (url: string, newPassword: string, id: string) {
    const word = instance.post(url, qs.stringify({ newPass: newPassword, id: id }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'title': "哎呀，网络出问题了" }];
        });
    return word
}

export { testTrue, changePass }