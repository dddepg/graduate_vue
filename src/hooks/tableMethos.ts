// 项目申请表部分的方法
//   （1）生成的方法
//   （2）删除的方法
//   （3）获取的方法
import {myaxios} from "@/hooks/myAxios"
import qs from "qs"


// 发送创建表的信息(对应创建申请表步骤1)
const postTableInfo = function (url: string, title: string, id: string) {
    // 使用qs将对象格式化
    const word = myaxios.post(url, qs.stringify({ thetabletitle: title, ownerid: id }))
    // 请求成功后执行函数
    word.then(function (response) {
        return response.data
    })
    // 请求失败后执行函数
    word.catch(function () {
        return [{ 'result': "1", 'msg': "哎呀，网络出问题了" }];
    });
}

// 发送申请表首页基本信息(对应创建申请表步骤2)
const postTableFirstDate = function (url: string, id: string, xueke: string, xiangmu: string, ketiming: string,
    shenqingname: string, tianbaodate: string) {
    const word = myaxios.post(url,
        qs.stringify({ xueke: xueke, id: id, xiangmu: xiangmu, ketiming: ketiming, shenqingname: shenqingname, tianbaodate: tianbaodate }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "哎呀，网络出问题了" }];
        });
    return word
}

// 发送申请表后续大部分信息(对应创建申请表步骤3)
// 此处传参方法较为笨拙,建议更换使用对象传参，或者将该页面拆分为多个步骤
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
    const word = myaxios.post(url,
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

// 发送申请表最后一部分信息(对应创建申请表步骤4)
const postTableLastDate = function (url: string, id: string, name: string, ketishejilunzheng: string, yanjiujichu: string) {
    const word = myaxios.post(url,
        qs.stringify({ id: id, ketishejilunzheng: ketishejilunzheng, yanjiujichu: yanjiujichu, name: name }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "哎呀，网络出问题了" }];
        });
    return word
}

// 发送删除某一行数据的消息
const postDropRow = function (url: string, id: string) {
    const word = myaxios.post(url,
        qs.stringify({ id: id}))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'result': "1", 'msg': "哎呀，网络出问题了" }];
        });
    return word
}

// 获取申请表列表的方法
const getMyTable = function (url: string, theid: string) {
    const word = myaxios.post(url, qs.stringify({ id: theid }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'URL': "/User/first", 'title': "哎呀，网络出问题了","date":"0000-00-00" }];
        });
    return word
}


export { postTableInfo, postTableFirstDate, postTableSecondDate, postTableLastDate,postDropRow,getMyTable}
