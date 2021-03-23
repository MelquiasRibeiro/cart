import axios from 'axios';

const api = axios.create({
    baseURL: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210323T180905Z&X-Amz-Expires=86400&X-Amz-Signature=2da719066ad2c421b690706e4e3ffd50ef364069d11b1cf162db4d35a279e513&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22',
});

export default api;