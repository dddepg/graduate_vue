import axios from 'axios'
import qs from "qs"

const instance = axios.create({
    timeout: 1000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});
const getMyPaper = function (url: string, theid: string) {
    const word = instance.post(url, qs.stringify({ id: theid }))
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return [{ 'URL': "/User/first", 'title': "哎呀，网络出问题了" }];
        });
    return word
}

export { getMyPaper }