import { Link } from "react-router-dom";
import './EventItem.css'

export const EventItem = () => {

    return (

        <article className="event-card">
            <div className="event-card-content">
                <div className="event-card-content-date">
                    <span>24</span>Jan
                </div>
                <h4 className="event-card-content-title">
                    <Link to="/calendar/details">
                        Information day: Open European programs for green energy and infrastructure,
                        energy efficiency and green solutions
                    </Link>
                    <span className="event-color"></span>
                    <span className="event-expired">
                        Expired
                    </span>
                </h4>
                <div className="event-card-content-detail">
                    Thursday, <span>The whole center</span>
                </div>
            </div>
            <div className="event-card-btn-wrapper">
                <Link to="/calendar/details" className="event-card-link">
                    EVENT DETAIL
                </Link>
            </div>
        </article>
    );
}