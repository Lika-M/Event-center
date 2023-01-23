import * as api from './api.js';

const pageSize = 3;
const endpoints = {
    all: (page) => `/data/events/?sortBy=_createdOn%20desc&offset=${(page - 1) * pageSize}&pageSize=${pageSize}`,
    count: '/data/events?count',
    eventById: (id) => `/data/events/${id}`,
    create: '/data/events',

}

export async function getLastEvents(page) {

    const [data, count] = await Promise.all([
        api.get(endpoints.all(page)),
        api.get(endpoints.count)
    ]);

    return {
        data,
        pages: Math.ceil(count / pageSize)
    };
}

export async function getEventById(id) {
    return api.get(endpoints.eventById(id));
}

export function createEvent(data) {
    return api.post(endpoints.create, data);
}