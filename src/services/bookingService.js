import * as api from './api.js';
import { addOwner, createPointer, createPointerQuery } from './util';

const endpoints = {
    book: '/classes/Book',
    bookingByEventId: (eventId) => `/classes/Book?where=${createPointerQuery('event', 'Event', eventId)}&include=owner`,
};

export async function bookEvent(eventId, data) {
    data.event = createPointer('Event', eventId);
    addOwner(data);
    return await api.post(endpoints.book, data)
}

export async function getBookingEvents(eventId) {
    return await api.get(endpoints.bookingByEventId(eventId))
}




