import './OfferCard.css';

export const OfferCard = ({ content, onClose }) => {
    console.log(content.images)
    const onCloseHandler = () => {
        onClose(false);
    }

    return (
        <article className="offer-card">
            <h2 className="offer-card-title">{content.title}</h2>
            <p className="offer-card-description">{content.subtitle}</p>
            <div>
                <h3 className="offer-card-subtitle">{content.description}</h3>
                <div className="offer-card-images">
                    {content?.images
                        .map(x => (<div className="offer-card-img" key={x}>
                            <img src={x} alt="" />
                        </div>))}
                </div>
                <button onClick={onCloseHandler}>Close</button>
            </div>
        </article >
    );
}