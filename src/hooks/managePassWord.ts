import {myaxios} from "@/hooks/myAxios"
import qs from "qs"


const testTrue = function (url: string, id: string, email: string, tele: string) {
    const word = myaxios.post(url, qs.stringify({ id: id, email: email, tele: tele }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'title': "哎呀，网络出问题了" }];
        });
    return word
}

const changePass = function (url: string, newPassword: string, id: string) {
    const word = myaxios.post(url, qs.stringify({ newPass: newPassword, id: id }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'title': "哎呀，网络出问题了" }];
        });
    return word
}

const rebackUser = function (url: string, id: string) {
    const word = myaxios.post(url, qs.stringify({ id: id }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'title': "哎呀，网络出问题了" }];
        });
    return word
}
const changeUserPower = function (url: string, id: string, power: number) {
    const word = myaxios.post(url, qs.stringify({ id: id, power: power }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'title': "哎呀，网络出问题了" }];
        });
    return word
}


export { testTrue, changePass, rebackUser,changeUserPower }