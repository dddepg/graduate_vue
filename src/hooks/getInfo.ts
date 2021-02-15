import axios from 'axios'
const getInfo = function (url: string) {
    const word=axios.get(url)
        .then(function (response) {
            return response.data['data']
        })
        .catch(function () {
            return [{'name': "unknow",'id':"0000001","email":"unknow","tele":"unknow"}];
        });
    return word
}
export {getInfo}