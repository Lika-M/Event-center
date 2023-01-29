import * as api from './api.js';
import { getUserData } from './util.js';

const pageSize = 3;

const endpoints = {
    all: (page) => `/classes/Event?order=-createdAt&skip=${(page - 1) * pageSize}&limit=${pageSize}`,
    count: '/classes/Event?count',
    getById: (id) => `/classes/Event/${id}?include=owner`,
    eventById: (id) => `/classes/Event/${id}`,
    create: '/classes/Event',
}

function createPointer(className, objectId) {
    return { __type: "Pointer", className, objectId }
}

function addOwner(collection) {
    const { id } = getUserData();
    collection.owner = createPointer('_User', id);
    return collection;
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
    const result = await api.get(endpoints.getById(id));
    return result;
}
  
export async function createEvent(eventData) {
    addOwner(eventData);
    return await api.post(endpoints.create, eventData);
   
}

export async  function editEvent(id, data) {
    return await  api.put(endpoints.eventById(id), data);
}

export async function deleteEventById(id) {
    return await api.delete(endpoints.eventById(id));
}