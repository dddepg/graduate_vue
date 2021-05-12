// 论文获取与权限管理方法
import {myaxios} from "@/hooks/myAxios"
import qs from "qs"

// 获取论文
const getMyPaper = function (url: string, theid: string) {
    const word = myaxios.post(url, qs.stringify({ id: theid }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'URL': "/User/first", 'title': "哎呀，网络出问题了" }];
        });
    return word
}
// 更新权限
const updatestate = function (url: string, id: string, state: string) {
    const word = myaxios.post(url, qs.stringify({ id: id, state: state }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "哎呀，网络出问题了" }];
        });
    return word
}


export { getMyPaper, updatestate }