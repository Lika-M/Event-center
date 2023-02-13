import { useState, useEffect, useContext } from 'react';
import { useParams, Link, } from 'react-router-dom';

import { getEventById } from '../../../services/eventService.js'
import { PageNotFound } from '../../common/PageNotFound/PageNotFound.js';
import { Loader } from '../../common/Loader/Loader.js';
import { AuthContext } from '../../../contexts/AuthContext.js';
import { ModalDialog } from '../ModalDialog/ModalDialog.js';
import { bookEvent, getBookingEvents } from '../../../services/bookingService.js'
import './EventDetail.css';

export const EventDetail = () => {

    const [event, setEvent] = useState({});
    const [err, setErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const [owner, setOwner] = useState({});
    const [modal, setModal] = useState('hide');
    const [booking, setBooking] = useState({
        participants: 0,
        isBooked: false
    });

    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getEventById(id)
            .then(res => {
                setIsLoading(false)
                setOwner(res.owner)
                return setEvent(res);
            })
            .catch(err => {
                setErr(err.message);
            })
    }, [id]);

    useEffect(() => {
        getBookingEvents(id)
            .then(res => {
                setBooking(state => ({
                    ...state,
                    participants: res.results.length,
                }));
                if (res.results.find(x => x.owner.objectId === currentUser._id)) {
                    setBooking(state => ({
                        ...state,
                        isBooked: true
                    }));
                }
            })
    }, [id, currentUser])

    const isOwner = (currentUser && owner && owner.objectId === currentUser._id);
    const expired = new Date(event.date) < new Date();

    if (err) {
        return (
            <PageNotFound err={err} />
        );
    }

    function onDelete() {
        setModal('show');
    }

    function onBooking() {
        bookEvent(id, {})
            .then(res => setBooking({ isBooked: true }))
    }

    return (

        <>
            {modal === 'show' && <div className="modal-backdrop"></div>}
            <section id="details-page">
                <div className="details-wrapper">

                    {isLoading
                        ? <Loader />
                        : <>
                            <div className="details-img">
                                <img src={event.imgUrl} alt={`${event.topic}`} />
                                {/* <!-- logged in user with available pieces--> */}

                                {!expired && currentUser && !isOwner &&
                                    <div className="details-btn subscribe">
                                        {!isOwner && !booking.isBooked
                                            ? <button onClick={onBooking}>Subscribe</button>
                                            : <p>You have already subscribed</p>}

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
                                                {booking.participants > 0
                                                    ? <h2>Enrolled participants: {booking.participants}</h2>
                                                    : <h2>There are no participants yet</h2>}
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
                                {currentUser && isOwner &&
                                    <div className="details-btn own">

                                        {/* <!-- Only for registered user and creator of the housing offer--> */}
                                        {/* <!-- Only if not expired--> */}
                                        {!expired && <Link to={`/event/${id}/edit`} className="edit">Edit</Link>}

                                        <p className="remove" onClick={onDelete}>Delete</p>
                                    </div>}

                            </div>

                        </>}
                </div>
                {modal === 'show' && <ModalDialog id={id} setModal={setModal} />}
            </section>
        </>
    );
}