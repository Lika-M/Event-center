
import './Services.css';
export const Services = () => {


    return (
        <>
            <h1 className="perfect-title">ABOUT/services</h1>
            <section className="services">
                <article className="services-text">

                    <h1>
                        The event center services
                    </h1>
                    <p>
                        The center has a team of highly qualified professionals who are always ready to advise and assist in organizing and managing national and international conferences, seminars, business forums, exhibitions, trainings, presentations, ceremonies, company celebrations and more.
                    </p>
                    <p>
                        It works in constant collaboration with the best experts in the field of industry, high technology, science and innovation, as well as with various industry and non-governmental organizations and many foreign partners
                    </p>
                    <p>
                        The center has congress and seminar halls, areas for coffee breaks, cocktails, networking, specialized exhibitions, presentations; and open space part with the ability to follow in real time the events in the halls of the center.
                    </p>
                    <p>
                        We appreciate each project and we believe that each client is unique and deserves special attention!
                    </p>

                </article>
                <div>
                <article className="services-image">
                    <div className="services-image-wrapper">

                        <img src="/images/entire-center.jpg" alt="Center img" />
                    </div>
                </article>
                <article className="icon">
                    <img src="/images/icon.png" alt="Icon" />
                    <span>EVENT CENTER</span>
                </article>
                </div>
            </section>
        </>
    );
}