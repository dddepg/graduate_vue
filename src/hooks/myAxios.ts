// 设置axios基本请求头
import axios from 'axios'

const myaxios = axios.create({
    timeout: 1000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

export {myaxios}