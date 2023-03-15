import './OfferCard.css';

export const OfferCard = ({ content, onClose }) => {

    const onCloseHandler = () => {
        onClose(false);
    }

    return (
        <div className="offer-card">
            <div>
                <h2 className="offer-card-title">{content.title}</h2>
                {content.subtitle && <p className="offer-card-description">{content.subtitle}</p>}
            </div>

            {content.text.map(x => (
                <article>
                    {x.title && <h3 className="offer-card-subtitle">{x.title}</h3>}
                    {x.description && <p className="offer-card-description">{x.description}</p>}
                    <div div className="offer-card-images" >
                        {
                            x.images && x.images
                                .map(x => (<span className="offer-card-img" key={x} >
                                    <img src={x} alt={x} />
                                </span>))
                        }
                    </div>
                </article >
            ))}

            <button onClick={onCloseHandler}>Close</button>
        </div >
    );
}