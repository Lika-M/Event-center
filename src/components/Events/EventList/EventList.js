import { useEffect, useState } from "react";
import { useSearchParams, Link } from 'react-router-dom';

import { getLastEvents } from '../../../services/eventService.js';
import { EventItem } from "../EventItem/EventItem.js";
import { Loader } from "../../common/Loader/Loader.js";
import { PageNotFound } from "../../common/PageNotFound/PageNotFound.js";

import './EventList.css';

export const EventList = () => {

    const [events, setEvents] = useState([]);
    const [pages, setPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
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
                setIsLoading(false);
            })
            .catch(err => {
                setErr(err.message);
                setIsLoading(false);
            });
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

    // if (err) {
    //     return (
    //         <PageNotFound err={err} />
    //     );
    // }
    console.log(!isLoading)
    console.log(err)
    return (

        <section className="events">
            <div className="events-img">
                <img src="https://www.onecalendar.nl/images/onecalendar.jpg" alt="calendar" />
            </div>
            <h1 className="events-title">Calendar</h1>
            {(!isLoading && err) && <PageNotFound err={err} />}
            {isLoading
                ? <Loader />
                : <div className="events-content">
                    {events.length > 0 &&
                        <article className="events-list">
                            {currentEvents}
                        </article>
                    }
                    {(events === [] && !err) &&
                        <p style={{ fontSize: "25px", color: "red", padding: "50px 0" }}>
                            {`No events in Database`}
                        </p>}
                        { events.length > 0 &&
                          <article className="events-pages">
                          {pages > page
                              ? <Link to={`/calendar?page=${page + 1}`}>&lt;&lt; Previous</Link>
                              : null}
                          {page !== 1
                              ? <Link to={`/calendar?page=${page - 1}`}>Next &gt;&gt;</Link>
                              : null}
                      </article>}
                </div>
            }
        </section>
    );
}
