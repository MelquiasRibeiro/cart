import axios from 'axios';

const api = axios.create({
    baseURL: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210323T152708Z&X-Amz-Expires=86400&X-Amz-Signature=db03a75cb5eacbb589258ae928ddc8e45f3eabe6ad3d88ec59edaadc3fff5e7d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22',
});

export default api;