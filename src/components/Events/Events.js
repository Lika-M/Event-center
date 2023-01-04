import { EventItem } from "./EventItem.js";
import './Events.css'


export const Events = () => {


    return (
        <>
        <section className="events">
            <div className="events-img">
                <img src="https://www.onecalendar.nl/images/onecalendar.jpg" alt="calendar" />
            </div>
            <div className="events-title">Calendar</div>
            <div className="events-date">
                <span>January 2023</span>
            </div>
            <EventItem />
            <EventItem />
        </section>
        </>
    );
}