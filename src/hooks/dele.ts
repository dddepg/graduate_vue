// 删除方法
import {myaxios} from "@/hooks/myAxios"
import qs from "qs"
// 删除论文
const delepaper = function (url: string, userid: string, paperid: string) {
    const word = myaxios.post(url, qs.stringify({ userid: userid, paperid: paperid }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'URL': "/User/first", 'title': "哎呀，网络出问题了" }];
        });
    return word
}

// 超管删除用户方法
const deleUser = function (url: string, userid: string) {
    const word = myaxios.post(url, qs.stringify({ userid: userid }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'URL': "/User/first", 'title': "哎呀，网络出问题了" }];
        });
    return word
}

// 删除新闻
const deleNews = function (url: string, id: string, thetype: number) {
    console.log(thetype);
    const word = myaxios.post(url, qs.stringify({ id: id, type: thetype }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'title': "哎呀，网络出问题了" }];
        });
    return word
}
export { delepaper, deleUser, deleNews }