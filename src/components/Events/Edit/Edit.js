import { useParams, } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { EventForm } from '../EventForm/EventForm.js';
import { getEventById } from '../../../services/eventService.js';
import { PageNotFound } from '../../common/PageNotFound/PageNotFound.js';

export const Edit = () => {

    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const title = 'Edit Event';
    const { id } = useParams();
    const btnName = 'Edit Event';

    useEffect(() => {
        getEventById(id)
            .then(event => {
                return setData({
                    imgUrl: event.imgUrl,
                    topic: event.topic,
                    location: event.location,
                    date: event.date,
                    time: event.time,
                    description: event.description,
                    address: event.organizer.address,
                    email: event.organizer.email,
                    phone: event.organizer.phone
                })
            })
            .catch(err => {
                console.log(err);
                setError(err)
            });
    }, [id])

    if (error) {
        return (
            <PageNotFound err={error} />
        );
    }

    return (
        <>
            {data && <EventForm title={title} btnName={btnName} event={data} />}
        </>
    )
}