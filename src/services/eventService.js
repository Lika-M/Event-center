import * as api from './api.js';

const endpoints = {
    all: '/data/events'
}

export async function loadEvents(){
    return api.get(endpoints.all);
}