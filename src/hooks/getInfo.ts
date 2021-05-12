import axios from 'axios'
// “我的主页——获取用户信息”
const getInfo = function (url: string) {
    const word = axios.get(url)
        .then(function (response) {
            return response.data['data']
        })
        .catch(function () {
            return [{ 'name': "unknow", 'id': "0000001", "email": "unknow", "tele": "unknow" }];
        });
    return word
}
// 管理员页面——获取用户信息
const getAllInfo = function (url: string) {
    const word = axios.get(url)
        .then(function (response) {
            console.log(response.data);
            
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'data': { 'name': "unknow", 'id': "0000001", "password": "unknow" }, 'msg': "网络出现问题了" }];
        });
    return word
}



export { getInfo, getAllInfo }