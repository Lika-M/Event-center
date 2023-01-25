import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { createEvent, editEvent } from '../../services/eventService';
import { Notify } from '../Notify/Notify.js';
import './EventForm.css';

export const EventForm = ({ title, btnName, event}) => {

    const [values, setValues] = useState({});
    const [className, setClassName] = useState('notification');
    const [error, setError] = useState({
        emptyFields: false,
        errorMessage: ''
    });

    const navigate = useNavigate();
    const isEdit = title === 'Edit Event';
    const {id}= useParams();

    useEffect(() => {
        if (isEdit) {
            setValues(event);
        } else if (!isEdit) {
            setValues({
                imgUrl: '',
                topic: '',
                location: '',
                date: '',
                time: '',
                description: '',
                address: '',
                email: '',
                phone: ''
            });
        }
    }, [isEdit, event]);

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        let data = Object.fromEntries(formData);


        if (Object.values(data).some(x => x === '')) {
            setError(state => ({
                ...state,
                emptyFields: true,
                errorMessage: 'All fields are required!'
            }));

            setClassName('notification');

        } else {

            const eventData = {
                imgUrl: data.imgUrl,
                topic: data.topic,
                location: data.location,
                date: data.date,
                time: data.time,
                description: data.description,
                organizer: {
                    address: data.address,
                    email: data.email,
                    phone: data.phone
                }
            };

            if (!isEdit) {

                createEvent(eventData)
                    .then(res => {
                        navigate(`/calendar/event/${res._id}`)
                    })
                    .catch(err => setError({
                        emptyFields: false,
                        errorMessage: err
                    }));

            } else if (isEdit) {

                editEvent(id, eventData)
                    .then(res => {
                        navigate(`/calendar/event/${res._id}`)
                    })
                    .catch(err => setError({
                        emptyFields: false,
                        errorMessage: err
                    }));
            }
        }
    }

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    const showNotification = (className) => {
        setClassName(className);
    };

    return (
        <section className="create-form-container">
            {error.errorMessage &&
                <Notify className={className} message={error.errorMessage} showNotification={showNotification} />
            }
            <div className="create-form-container-box">

                <form onSubmit={onSubmit}>
                    <h1>{title}</h1>

                    <label htmlFor="topic">Topic</label>
                    <input type="text" name="topic" id="topic" placeholder="Title"
                        onChange={onChange}
                        value={values.topic}
                        style={{ border: error.emptyFields && values.topic === '' ? '2px solid red' : 'none' }}
                    />

                    <label htmlFor="imgUrl">Image URL</label>
                    <input type="text" name="imgUrl" id="imgUrl" placeholder="Image"
                        onChange={onChange}
                        value={values.imgUrl}
                        style={{ border: error.emptyFields && values.imgUrl === '' ? '2px solid red' : 'none' }}
                    />

                    <label htmlFor="location">Location</label>
                    <select type="location" id="location" name="location"
                        onChange={onChange}
                        value={values.location}
                        style={{ border: error.emptyFields && values.location === '' ? '2px solid red' : 'none' }}
                    >
                        <option defaultValue={"Library hall"}>Library hall</option>
                        <option value={"Open space zone"}>Open space zone</option>
                        <option value={"Four seasons hall"}>Four seasons hall</option>
                        <option value={"Conference hall"}>Conference hall</option>
                        <option value={"Entire center"}>Entire center</option>
                        <option value={""}>Chose location</option>
                    </select>

                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date"
                        onChange={onChange}
                        value={values.date}
                        style={{ border: error.emptyFields && values.date === '' ? '2px solid red' : 'none' }}
                    />

                    <label htmlFor="time">Time</label>
                    <input type="time" name="time" id="time"
                        onChange={onChange}
                        value={values.time}
                        style={{ border: error.emptyFields && values.time === '' ? '2px solid red' : 'none' }}
                    />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description"
                        rows="4" cols="42" maxLength="250"
                        placeholder="Enter Description"
                        onChange={onChange}
                        value={values.description}
                        style={{ border: error.emptyFields && values.description === '' ? '2px solid red' : 'none' }}
                    >
                    </textarea>

                    <h3>Organizer</h3>

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder="Enter address"
                        onChange={onChange}
                        value={values.address}
                        style={{ border: error.emptyFields && values.address === '' ? '2px solid red' : 'none' }}
                    />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter email"
                        onChange={onChange}
                        value={values.email}
                        style={{ border: error.emptyFields && values.email === '' ? '2px solid red' : 'none' }}
                    />

                    <label htmlFor='phone'>Phone</label>
                    <input type="number" name="phone" id="phone" placeholder="Enter phone number"
                        onChange={onChange}
                        value={values.phone}
                        style={{ border: error.emptyFields && values.phone === '' ? '2px solid red' : 'none' }}
                    />

                    <input type="submit" value={btnName} className="btn" />
                </form>
            </div>
        </section>
    );
}