import { Navigate, useParams, } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { EventForm } from '../EventForm/EventForm.js';
import { getEventById } from '../../../services/eventService.js';
import { PageNotFound } from '../../common/PageNotFound/PageNotFound.js';
import { AuthContext } from '../../../contexts/AuthContext.js';

export const Edit = () => {

    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const {currentUser }= useContext(AuthContext);
    const title = 'Edit Event';
    const { id } = useParams();
    const btnName = 'EDIT EVENT';

    useEffect(() => {
        // if(!currentUser._id){
        //     setError('Log in first')
        // }
        getEventById(id)
            .then(event => {
                return setData({
                    imgUrl: event.imgUrl,
                    topic: event.topic,
                    location: event.location,
                    date: event.date,
                    time: event.time,
                    description: event.description,
                    company: event.company,
                    address: event.organizer.address,
                    email: event.organizer.email,
                    phone: event.organizer.phone,
                    owner: event.owner.objectId
                });
            })
            .catch(err => {
                setError(err)
            });
    }, [id]);

    if(data.owner && currentUser._id !== data.owner){
        return <PageNotFound/>
    }

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