import { Link } from 'react-router-dom';
import './EventDetail.css';

export const EventDetail = () => {
    return (
        <section id="details-page">
            <div className="details-wrapper">
                <div className="details-img">
                    <img src="https://www.keele.ac.uk/business/businesssupport/Research_Innovation_960_640.jpg" alt="science-and-business" />
                    {/* <!-- logged in user with available pieces--> */}
                    <div className="details-btn subscribe">
                        <Link to="#/">Subscribe</Link>
                        <p>You have already subscribed</p>
                    </div>
                </div>
                <div className="details-info">
                    <div className="details-text">
                        <div className="details-text">
                            <div className="details-text-data">
                                <h1>Topic: National Conference “Science in Support of Business”</h1>
                                <h2>Location: The entire center</h2>
                                <h2>Date: 4 March 2023</h2>
                                <h2>Time: 12:00</h2>
                                <p>expired</p>
                            </div>
                            <div className="details-text-content">
                                <h1>Description: </h1>
                                <p>Presentation of the QUASAR Competence Center to the representatives of small and medium business, with a view to possible opportunities for future cooperation.</p>
                                <div className="details text-data">
                                    <h2>List of participants: 102</h2>
                                    {/* <p>Enrolled participants: 43 </p> */}

                                    {/* <!-- If not participants: --> */}
                                    <h2>There are no participants yet.</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- if there is no registered user, do not display buttons--> */}
                    <div className="details-btn own">
                        {/* <!-- Only for registered user and creator of the housing offer--> */}
                        <Link to="#/" className="edit">Edit</Link>
                        <Link to="#/" className="remove">Delete</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}