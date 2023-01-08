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

    return (
        <section className="events">
            <div className="events-img">
                <img src="https://www.onecalendar.nl/images/onecalendar.jpg" alt="calendar" />
            </div>
            <div className="events-title">Calendar</div>
            <div className="events-date">
                <span>January 2023</span>
            </div>
            {events.length > 0
                ? <ul className="event-list">
                    {events.map(x => <EventItem key={x._id} {...x} />)}
                </ul>
                : <p style={{ fontSize: "30px", color: "red" }}>
                    {`No events in Database`}
                </p>}
            <button>Next >></button>
        </section>
    );
}
// {
//     plants.items.length > 0
//     ? <ul className="plants-list">
//         {plants.items.map(x => <PlantCard key={x._id} plant={x} />)}
//     </ul>
//     : <p style={{ fontSize: "30px", color: "red" }}>
//         {`No ${type[0].toUpperCase() + type.slice(1)} in Database`}
//     </p>
// }