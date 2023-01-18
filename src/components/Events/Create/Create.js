import './Create.css';

export const Create = () => {

    return (
        <section className="create-form-container">
            <div className="create-form-container-box">
                <form >
                    <h1>Add Event</h1>
                    <label htmlFor="topic">Topic</label>
                    <input type="text" name="topic" id="topic" placeholder="Title" />


                    <label htmlFor="location">Location</label>
                    <select type="location" id="location" name="location"
                        // value={input.location}
                        // onChange={onChange}
                    >
                        <option value={"Library hall"}>Library hall</option>
                        <option value={"Open space zone"}>Open space zone</option>
                        <option value={"Four seasons hall"}>Four seasons hall</option>
                        <option value={"Conference hall"}>Conference hall</option>
                        <option value={"Entire center"}>Entire center</option>
                        <option value={""} selected >Chose location</option>
                    </select> 

                    {/* <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" /> */}
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date"
                    // defaultValue="2023-03-22"
                    // min="2023-01-01"
                    // max="2023-12-31"
                    />
                    <label htmlFor="time">Time</label>
                    <input type="time" name="time" id="time"
                    //  defaultValue="10:30" 
                    />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description"
                        rows="4" cols="42" maxLength="250"
                        placeholder="Enter Description">

                    </textarea>
                    <h3>Organizer</h3>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder="Enter address" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter email" />
                    <label htmlFor='phone'>Phone</label>
                    <input type="phone" name="phone" id="phone" defaultValue="Enter phone number" />

                    <input type="submit" value="ADD" class="btn" />
                </form>
            </div>
        </section>
    );
}