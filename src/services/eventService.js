import * as api from './api.js';

const pageSize = 3;
const endpoints = {
    all: (page) => `/data/events/?sortBy=_createdOn%20desc&offset=${(page - 1) * pageSize}&pageSize=${pageSize}`,
    count: '/data/events?count'

}

export async function getLastEvents(page) {
   
    const [data, count] = await Promise.all([
        api.get(endpoints.all(page)),
        api.get(endpoints.count)
    ]);
    console.log(data)
    console.log(Math.ceil(count / pageSize))
    return {
        data,
        pages: Math.ceil(count / pageSize)
    };
}