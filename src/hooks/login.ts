// 登录方法
import qs from "qs"
import {myaxios} from "@/hooks/myAxios"


const gologin = function (url: string, username: string, password: string) {
    // 使用qs格式化信息
    const word = myaxios.post(url, qs.stringify({
        username: username,
        password: password
    }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return { 'result': "1", 'title': "哎呀，网络出问题了" };
        });
    return word
}
export { gologin }