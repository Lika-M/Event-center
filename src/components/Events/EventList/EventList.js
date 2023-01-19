import { useEffect, useState } from "react";
import { useSearchParams, Link } from 'react-router-dom';

import { getLastEvents } from '../../../services/eventService.js';
import { EventItem } from "../EventItem/EventItem.js";

import './EventList.css';

export const EventList = () => {

    const [events, setEvents] = useState([]);
    const [pages, setPages] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams({});

    const page = Number(searchParams.get('page') || 1);

    useEffect(() => {

        getLastEvents(page)
            .then(result => {
                const events = result.data.map(x => ({
                    ...x, date: new Date(x.date)
                }));

                setEvents(events);
                setPages(result.pages);
                setSearchParams({ page: page })
            })
    }, [page, setSearchParams]);

    let currentMonth = new Date(events[0]?.date).toLocaleString('default', { month: 'long' });
    let visible = true;
    let count = 0;

    const currentEvents = events.map(x => {

        const month = new Date(x.date).toLocaleString('default', { month: 'long' });
        const year = x.date.toString().split(' ')[3];

        if (month !== currentMonth) {
            currentMonth = month;
            visible = true;
        } else {
            if (count === 0) {
                count++;
            } else {
                visible = false;
            }
        }

        return (
            <div key={x._id}>
                {visible &&
                    <div className="events-date">
                        <span>{currentMonth} {year}</span>
                    </div>}
                <ul className="event-list">
                    <EventItem  {...x} />
                </ul>
            </div>
        );
    });

    return (
        <section className="events">
            <div className="events-img">
                <img src="https://www.onecalendar.nl/images/onecalendar.jpg" alt="calendar" />
            </div>
            <div className="events-title">Calendar</div>

            {events.length > 0
                ? currentEvents
                : <p style={{ fontSize: "25px", color: "red", padding: "50px 0" }}>
                    {`No events in Database`}
                </p>}
            <div className="events-pages">
                {pages > page
                    ? <Link to={`/calendar?page=${page + 1}`}>&lt;&lt; Backward</Link>
                    : null}
                {pages === page
                    ? <Link to={`/calendar?page=${page - 1}`}>Forward &gt;&gt;</Link>
                    : null}
            </div>
        </section>
    );
}
