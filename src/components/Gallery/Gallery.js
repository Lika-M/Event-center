import './Gallery.css'
export const Gallery = () => {

    return (

        <section className="gallery">
            <div className="gallery-container">
                <div className="card">
                    <img src="/images/entire-center.jpg" alt="Entire center" />
                    <div className="card__head">Event Center</div>
                </div>
                <div className="card">
                    <img src="/images/library-hall.jpg" alt="Library hall" />
                    <div className="card__head">Library Hall</div>
                </div>
                <div className="card">
                    <img src="/images/4-seasons.jpg" alt="Four seasons hall" />
                    <div className="card__head">For seasons hall</div>
                </div>
                <div className="card">
                    <img src="/images/conference-hall.jpg" alt="Conference hall" />
                    <div className="card__head">Conference Hall</div>
                </div>
                <div className="card">
                    <img src="/images/open-space.jpg" alt="Open Space Zone" />
                    <div className="card__head">Open Space Zone</div>
                </div>
            </div>
        </section>
    );
}