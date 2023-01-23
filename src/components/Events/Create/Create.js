import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { createEvent } from '../../../services/eventService.js';
import './Create.css';

export const Create = () => {

    const [values, setValues] = useState({
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
    const [error, setError] = useState({
        emptyFields: false,
        errorMessage: ''
    });
    const navigate = useNavigate()

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
            }
            console.log(eventData);
            console.log(error);

            createEvent(eventData);
            navigate('/calendar');
        }
    }

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }


    return (
        <section className="create-form-container">
            <div className="create-form-container-box">
                <form onSubmit={onSubmit}>
                    <h1>Add Event</h1>

                    <label htmlFor="topic">Topic</label>
                    <input type="text" name="topic" id="topic" placeholder="Title"
                        onChange={onChange}
                        value={values.topic}
                    />

                    <label htmlFor="imgUrl">Image URL</label>
                    <input type="text" name="imgUrl" id="imgUrl" placeholder="Image"
                        onChange={onChange}
                        value={values.imgUrl}
                    />
                    
                    <label htmlFor="location">Location</label>
                    <select type="location" id="location" name="location"
                        onChange={onChange}
                        value={values.location}
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
                    />

                    <label htmlFor="time">Time</label>
                    <input type="time" name="time" id="time"
                        onChange={onChange}
                        value={values.time}
                    />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description"
                        rows="4" cols="42" maxLength="250"
                        placeholder="Enter Description"
                        onChange={onChange}
                        value={values.description}
                    >
                    </textarea>

                    <h3>Organizer</h3>

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder="Enter address"
                        onChange={onChange}
                        value={values.address}
                    />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter email"
                        onChange={onChange}
                        value={values.email}
                    />

                    <label htmlFor='phone'>Phone</label>
                    <input type="number" name="phone" id="phone" placeholder="Enter phone number"
                        onChange={onChange}
                        value={values.phone} />

                    <input type="submit" value="ADD" className="btn" />
                </form>
            </div>
        </section>
    );
}