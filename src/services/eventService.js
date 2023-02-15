import * as api from './api.js';
import { addOwner } from './util.js';

const pageSize = 3;

const endpoints = {
    all: (page) => `/classes/Event?order=-date&skip=${(page - 1) * pageSize}&limit=${pageSize}`,
    count: '/classes/Event?count',
    getById: (id) => `/classes/Event/${id}?include=owner`,
    eventById: (id) => `/classes/Event/${id}`,
    create: '/classes/Event',
}

export async function getLastEvents(page) {

    const [data, count] = await Promise.all([
        api.get(endpoints.all(page)),
        api.get(endpoints.count)
    ]);

    return {
        data: data.results,
        pages: Math.ceil(count.results.length / pageSize)
    };
}

export async function getEventById(id) {
    return await api.get(endpoints.getById(id));
}

export async function createEvent(eventData) {
    addOwner(eventData);
    return await api.post(endpoints.create, eventData);
}

export async function editEvent(id, data) {
    return await api.put(endpoints.eventById(id), data);
}

export async function deleteEventById(id) {
    return await api.delete(endpoints.eventById(id));
}