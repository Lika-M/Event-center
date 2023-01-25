import { useState, useEffect } from 'react';
import { useParams, Link, } from 'react-router-dom';
import { getEventById } from '../../../services/eventService.js'
import { PageNotFound } from '../../../common/PageNotFound/PageNotFound.js';
import './EventDetail.css';

export const EventDetail = () => {

    const [event, setEvent] = useState({});
    const [err, setErr] = useState('');

    const { id } = useParams();

    useEffect(() => {
        getEventById(id)
            .then(res => setEvent(res))
            .catch(err => {
                setErr(err.message);
            })
    }, [id])

    const expired = new Date(event.date) < new Date();
    // console.log(event);

    if (err) {
        return (
            <PageNotFound err={err} />
        );
    }

    return (
        <section id="details-page">
            <div className="details-wrapper">
                <div className="details-img">
                    <img src={event.imgUrl} alt={`${event.topic}`} />
                    {/* <!-- logged in user with available pieces--> */}

                    {!expired &&
                        <div className="details-btn subscribe">
                            <Link to="#/">Subscribe</Link>
                            <p>You have already subscribed</p>
                        </div>
                    }

                </div>
                <div className="details-info">
                    <div className="details-text">
                        <div className="details-text">
                            <div className="details-text-data">
                                <h1>Topic: {event.topic}</h1>
                                <h2>Location: {event.location}</h2>
                                <h2>Date: {event.date}</h2>
                                <h2>Time: {event.time}</h2>
                                {expired &&
                                    <p>expired</p>
                                }

                            </div>
                            <div className="details-text-content">
                                <h1>Description: </h1>
                                <p>{event.description}</p>
                                <div className="details text-data">

                                    <h2>List of participants: 102</h2>

                                    {/* <!-- If not participants: --> */}
                                    <h2>There are no participants yet</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details-text">
                        <div className="details-text-content">
                            <h1>Organizer: </h1>
                            <h4>Address: {event.organizer?.address}</h4>
                            <h4>Email: {event.organizer?.email}</h4>
                            <h4>Phone: {event.organizer?.phone}</h4>
                        </div>
                    </div>

                    {/* <!-- if there is no registered user, do not display buttons--> */}
                    <div className="details-btn own">

                        {/* <!-- Only for registered user and creator of the housing offer--> */}
                        <Link to={`/event/${id}/edit`} className="edit">Edit</Link>
                        <Link to={`/event/${id}/delete`} className="remove">Delete</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}