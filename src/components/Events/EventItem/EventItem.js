import { Link } from "react-router-dom";
import './EventItem.css'

export const EventItem = ({
    objectId, topic, date, location
}) => {
    const day = date.toString().slice(8, 11);
    const weekDay = new Date(date).toLocaleString('en-us', { weekday: 'long' })
    const month = new Date(date).toLocaleString('default', { month: 'long' });
    const expired = new Date(date) < new Date();

    return (

        <article className="event-card">
            <div className="event-card-content">
                <div className="event-card-content-wrapper">
                    <div className="event-card-content-date">
                        <span>{day}</span><span>{month.slice(0, 3)}</span>
                    </div>
                    <h1 className="event-card-content-title">
                        {topic}
                    </h1>
                        {expired
                            ? <span className="event-expired">
                                expired
                            </span>
                            : ''
                        }

                </div>
                <div className="event-card-btn-wrapper">
                    <Link to={`/calendar/event/${objectId}`} className="event-card-link">
                        EVENT DETAIL
                    </Link>
                </div>
            </div>
            <div className="event-card-content-detail">
                <span> {weekDay}, </span><span>{location}</span>
            </div>
        </article>

    );
}