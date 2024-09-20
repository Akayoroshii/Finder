import axios from "axios";

// 89709083/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;