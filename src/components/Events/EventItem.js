import { Link } from "react-router-dom";
import './EventItem.css'

export const EventItem = ({
    topic, date, location
}) => {
    const day = date.toString().slice(8, 11);
    // console.log('current day: ', day);
    const weekDay = new Date(date).toLocaleString('en-us', { weekday: 'long' })
    const month = new Date(date).toLocaleString('default', { month: 'long' });
    const expired = new Date(date) < new Date();

    return (

        <article className="event-card">
            <div className="event-card-content">
                <div>
                    <div className="event-card-content-date">
                        <span>{day}</span>{month.slice(0, 3)}
                    </div>
                    <h4 className="event-card-content-title">
                        <Link to="/calendar/details">
                            {topic}
                        </Link>
                        <span className="event-color"></span>
                        {expired
                            ? <span className="event-expired">
                                expired
                            </span>
                            : ''
                        }
                    </h4>
                </div>
              
            </div>
            <div className="event-card-btn-wrapper">
                <Link to="/calendar/details" className="event-card-link">
                    EVENT DETAIL
                </Link>
            </div>
            <div className="event-card-content-detail">
                    {weekDay}, <span>{location}</span>
                </div>
        </article>
    );
}