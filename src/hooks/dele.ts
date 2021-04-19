import axios from 'axios'
import qs from "qs"
const instance = axios.create({
    timeout: 1000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});
const delepaper = function (url: string, userid: string, paperid: string) {
    const word = instance.post(url, qs.stringify({ userid: userid, paperid: paperid }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'URL': "/User/first", 'title': "哎呀，网络出问题了" }];
        });
    return word
}
const deleUser = function (url: string, userid: string) {
    const word = instance.post(url, qs.stringify({ userid: userid }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'URL': "/User/first", 'title': "哎呀，网络出问题了" }];
        });
    return word
}

const deleNews = function (url: string, id: string, thetype: number) {
    console.log(thetype);
    const word = instance.post(url, qs.stringify({ id: id, type: thetype }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "0", 'title': "哎呀，网络出问题了" }];
        });
    return word
}
export { delepaper, deleUser, deleNews }