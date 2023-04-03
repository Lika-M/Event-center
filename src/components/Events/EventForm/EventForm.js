import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormControl } from '../hooks/useFormControl.js';

import { createEvent, editEvent } from '../../../services/eventService';
import { Notify } from '../../common/Notify/Notify.js';
import './EventForm.css';

export const EventForm = ({ title, btnName, event }) => {

    const isEdit = title === 'Edit Event';

    const [values, setValues] = useFormControl(event, isEdit);
    const [error, setError] = useState({
        emptyFields: false,
        errorMessage: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

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

        } else {
            const eventData = {
                imgUrl: data.imgUrl,
                topic: data.topic.toLowerCase(),
                location: data.location,
                date: data.date,
                time: data.time,
                description: data.description,
                company: data.company.toLowerCase(),
                organizer: {
                    address: data.address,
                    email: data.email,
                    phone: data.phone
                }
            };

            if (!isEdit) {

                createEvent(eventData)
                    .then(res => {
                        navigate(`/calendar/event/${res.objectId}`)
                    })
                    .catch(err => setError({
                        emptyFields: false,
                        errorMessage: err.message
                    }));

            } else if (isEdit) {
                editEvent(id, eventData)
                    .then(res => {
                        navigate(`/calendar/event/${id}`)
                    })
                    .catch(err => {
                        //TODO add guard

                        setError({
                            emptyFields: false,
                            errorMessage: err.message
                        })
                    });
            }
        }
    }

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));

    };
    const onClose = () => {
        setError({ errorMessage: '' });
    };

    return (
        <section className="create-form-container">
            <div className="create-form-container-box">
                {error.errorMessage &&
                    <Notify message={error.errorMessage} onClose={onClose} />
                }

                <form onSubmit={onSubmit}>
                    <h3>{title}</h3>

                    <label htmlFor="topic">Topic</label>
                    <input type="text" name="topic" id="topic" placeholder="Title"
                        onChange={onChange}
                        value={values.topic || ''}
                        style={{ border: error.emptyFields && values.topic === '' ? '2px solid  rgb(217, 90, 90)' : 'none' }}
                    />

                    <label htmlFor="imgUrl">Image URL</label>
                    <input type="text" name="imgUrl" id="imgUrl" placeholder="Image"
                        onChange={onChange}
                        value={values.imgUrl || ''}
                        style={{ border: error.emptyFields && values.imgUrl === '' ? '2px solid  rgb(217, 90, 90)' : 'none' }}
                    />

                    <label htmlFor="location">Location</label>
                    <select type="location" id="location" name="location"
                        onChange={onChange}
                        value={values.location || ''}
                        style={{ border: error.emptyFields && values.location === '' ? '2px solid  rgb(217, 90, 90)' : 'none' }}
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
                        min={new Date().toISOString().split('T')[0]}
                        onChange={onChange}
                        value={values.date || ''}
                        style={{ border: error.emptyFields && values.date === '' ? '2px solid  rgb(217, 90, 90)' : 'none' }}
                    />

                    <label htmlFor="time">Time</label>
                    <input type="time" name="time" id="time"
                        min="09:00" max="18:00"
                        onChange={onChange}
                        value={values.time || ''}
                        style={{ border: error.emptyFields && values.time === '' ? '2px solid  rgb(217, 90, 90)' : 'none' }}
                    />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description"
                        rows="4" cols="42" maxLength="250"
                        placeholder="Enter Description"
                        onChange={onChange}
                        value={values.description || ''}
                        style={{ border: error.emptyFields && values.description === '' ? '2px solid  rgb(217, 90, 90)' : 'none' }}
                    >
                    </textarea>

                    <h3>Organizer</h3>

                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" id="company" placeholder="Enter company name"
                        onChange={onChange}
                        value={values.company || ''}
                        style={{ border: error.emptyFields && values.company === '' ? '2px solid  rgb(217, 90, 90)' : 'none' }}
                    />

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder="Enter address"
                        onChange={onChange}
                        value={values.address || ''}
                        style={{ border: error.emptyFields && values.address === '' ? '2px solid  rgb(217, 90, 90)' : 'none' }}
                    />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter email"
                        onChange={onChange}
                        value={values.email || ''}
                        style={{ border: error.emptyFields && values.email === '' ? '2px solid  rgb(217, 90, 90)' : 'none' }}
                    />

                    <label htmlFor='phone'>Phone</label>
                    <input type="tel" name="phone" id="phone" placeholder="Enter phone number"
                        onChange={onChange}
                        value={values.phone || ''}
                        style={{ border: error.emptyFields && values.phone === '' ? '2px solid  rgb(217, 90, 90)' : 'none' }}
                    />

                    <input type="submit" value={btnName} className="btn" />
                </form>
            </div>
        </section>
    );
}