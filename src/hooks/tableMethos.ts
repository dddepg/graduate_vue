import axios from 'axios'
import qs from "qs"

const instance = axios.create({
    timeout: 1000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});
const postTableInfo = function (url: string, title: string, id: string) {
    const word = instance.post(url, qs.stringify({ thetabletitle: title, ownerid: id }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'URL': "/User/first", 'title': "哎呀，网络出问题了" }];
        });
    return word
}

const postTableFirstDate = function (url: string, id: string, xueke: string, xiangmu: string, ketiming: string,
    shenqingname: string, tianbaodate: string) {
    const word = instance.post(url,
        qs.stringify({ xueke: xueke, id: id, xiangmu: xiangmu, ketiming: ketiming, shenqingname: shenqingname, tianbaodate: tianbaodate }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'URL': "/User/first", 'title': "哎呀，网络出问题了" }];
        });
    return word
}




export { postTableInfo, postTableFirstDate }