import axios from 'axios';

let normalAxios = axios.create();
normalAxios.defaults.headers.common['cache-control'] = 'no-cache';
normalAxios.defaults.headers.post['Content-Type'] = 'no-cache';
normalAxios.defaults.headers.put['Content-Type'] = 'no-cache';

export const naxios = normalAxios;
