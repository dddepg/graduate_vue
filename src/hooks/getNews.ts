import axios from 'axios'

// 获取首页的新闻消息
const getFirstPageNews = function (url: string) {
    const word=axios.get(url)
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{'URL': "/User/first",'title':"哎呀，网络出问题了"}];
        });
    return word
}


export {getFirstPageNews}