import { ref } from "vue";
import axios from "axios";
// import { ElMessage } from "element-plus";
function getWords(url: string) {
    const result = ref(null)
    axios.get(url).then((res) => {
        result.value = res.data["data"]["list"]
    }).catch(e => {
        console.log(e);
    })
    return {
        result,

    }

}

export default getWords