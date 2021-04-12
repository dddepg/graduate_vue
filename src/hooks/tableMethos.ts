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
            return [{ 'result': "1", 'msg': "哎呀，网络出问题了" }];
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
            return [{ 'result': "1", 'msg': "哎呀，网络出问题了" }];
        });
    return word
}


const postTableSecondDate = function (url: string, id: string, ketiming2: string, guanjianci: string, xiangmuleibie: string, xuekefenlei: string, yanjiuleixing: string, ketifuzeren: string,
    xingbie: string,
    mingzu: string,
    chushengri: string,
    xingzhengzhiwu: string,
    zhuanyezhicheng: string,
    yanjiuzhuanchang: string,
    zuihouxueli: string,
    zuihouxuewei: string,
    danrendaoshi: string,
    suozaisheng1: string,
    suozaisheng2: string,
    suoshuxitong1: string,
    suoshuxitong2: string,
    gongzuodanwei: string,
    lianxidianhua: string,
    shengfenzheng1: string,
    sfzhm: string,
    sfgat: string,
    yuqicg: string,
    yuqizs: string,
    sqjfei: string,
    jihuawanchengshijian: string,) {
    console.log(ketiming2);
    console.log(guanjianci);
    const word = instance.post(url,
        qs.stringify({
            id: id,
            ketiming2: ketiming2,
            guanjianci: guanjianci,
            xiangmuleibie: xiangmuleibie,
            xuekefenlei: xuekefenlei,
            yanjiuleixing: yanjiuleixing,
            ketifuzeren: ketifuzeren,
            xingbie: xingbie,
            mingzu: mingzu,
            chushengri: chushengri,
            xingzhengzhiwu: xingzhengzhiwu,
            zhuanyezhicheng: zhuanyezhicheng,
            yanjiuzhuanchang: yanjiuzhuanchang,
            zuihouxueli: zuihouxueli,
            zuihouxuewei: zuihouxuewei,
            danrendaoshi: danrendaoshi,
            suozaisheng1: suozaisheng1,
            suozaisheng2: suozaisheng2,
            suoshuxitong1: suoshuxitong1,
            suoshuxitong2: suoshuxitong2,
            gongzuodanwei: gongzuodanwei,
            lianxidianhua: lianxidianhua,
            shengfenzheng1: shengfenzheng1,
            sfzhm: sfzhm,
            sfgat: sfgat,
            yuqicg: yuqicg,
            yuqizs: yuqizs,
            sqjfei: sqjfei,
            jihuawanchengshijian: jihuawanchengshijian,
        }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "哎呀，网络出问题了" }];
        });
    return word
}

const postTableLastDate = function (url: string, id: string, name: string, ketishejilunzheng: string, yanjiujichu: string) {
    const word = instance.post(url,
        qs.stringify({ id: id, ketishejilunzheng: ketishejilunzheng, yanjiujichu: yanjiujichu, name: name }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "哎呀，网络出问题了" }];
        });
    return word
}

const postDropRow = function (url: string, id: string) {
    const word = instance.post(url,
        qs.stringify({ id: id}))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "哎呀，网络出问题了" }];
        });
    return word
}

const getMyTable = function (url: string, theid: string) {
    const word = instance.post(url, qs.stringify({ id: theid }))
        .then(function (response) {
            console.log(response.data['data']);
            return response.data
        })
        .catch(function () {
            return [{ 'URL': "/User/first", 'title': "哎呀，网络出问题了","date":"0000-00-00" }];
        });
    return word
}


export { postTableInfo, postTableFirstDate, postTableSecondDate, postTableLastDate,postDropRow,getMyTable}
