// 创建用户与新闻的方法
import {myaxios} from "@/hooks/myAxios"
import qs from "qs"
// 新增一个用户
const creatOneUser = function (url: string, name: string) {
    const word = myaxios.post(url, qs.stringify({ num: 1, name: name }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "网络出现问题了" }];
        });
    return word
}
// 新增多个用户，注意参数为数字
const creatMoreUser = function (url: string, beginname: number, endname: number) {
    const word = myaxios.post(url, qs.stringify({ num: 2, beginname: beginname, endname: endname }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "网络出现问题了" }];
        });
    return word
}
// 新增新闻
const addNews = function (url: string, title: string, newsurl: string, state: string) {
    const word = myaxios.post(url, qs.stringify({ newsurl: newsurl, title: title, state: state }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "网络出现问题了" }];
        });
    return word
}

export { creatOneUser, creatMoreUser,addNews }