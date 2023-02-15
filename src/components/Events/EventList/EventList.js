import { useEffect, useState } from "react";
import { useSearchParams, Link } from 'react-router-dom';

import { getLastEvents } from '../../../services/eventService.js';
import { EventItem } from "../EventItem/EventItem.js";
import { Loader } from "../../common/Loader/Loader.js";

import './EventList.css';

export const EventList = () => {

    const [events, setEvents] = useState([]);
    const [pages, setPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams({});

    const page = Number(searchParams.get('page') || 1);

    useEffect(() => {
        setIsLoading(true);
        getLastEvents(page)
            .then(result => {
                const events = result.data.map(x => ({
                    ...x, date: new Date(x.date)
                }));
                setEvents(events);
                setPages(result.pages);
                setSearchParams({ page: page });
                setIsLoading(false);
            })
    }, [page]);

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
            <div key={x.objectId}>
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

            {isLoading
                ? <Loader/>
                : <>
                    {events.length > 0
                        ? currentEvents
                        : <p style={{ fontSize: "25px", color: "red", padding: "50px 0" }}>
                            {`No events in Database`}
                        </p>}
                    <div className="events-pages">
                        {pages > page
                            ? <Link to={`/calendar?page=${page + 1}`}>&lt;&lt; Previous</Link>
                            : null}
                        {page !== 1
                            ? <Link to={`/calendar?page=${page - 1}`}>Next &gt;&gt;</Link>
                            : null}
                    </div>
                </>}
        </section>
    );
}
