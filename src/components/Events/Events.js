import { useEffect, useState } from "react";
import { loadEvents } from '../../services/eventService.js'
import { EventItem } from "./EventItem.js";
import './Events.css'


export const Events = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        loadEvents()
            .then(result => {
                const events = result.map(x => ({
                    ...x, date: new Date(x.date)
                })).sort((a, b) => a.date - b.date);
                setEvents(events);
            })
    }, []);

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
            <>
                {visible
                    ? <div className="events-date">
                        <span>{currentMonth} {year}</span>
                    </div>
                    : ''
                }
                <ul className="event-list">
                    <EventItem key={x._id} {...x} />
                </ul>
            </>


        );
    })

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
            <button>Next >></button>
        </section>
    );
}
