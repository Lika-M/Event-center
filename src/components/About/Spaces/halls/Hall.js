export const Hall = ({ hall }) => {

    return (
        <article className="hall">
            <h2 className="hall-title">{hall.title}</h2>
            <p>{hall.subtitle}</p>
            {hall.description && <p>{hall.description}</p>}

            <div className="hall-content">
                {hall.schemas.map(x =>
                    <div key={x} className="hall-content-schema">
                        <h2>schema</h2>
                        <img src={x} alt="Schema" />
                    </div>)}

                <div className="hall-content-capacity">
                    <span>capacity: </span><span>{hall.capacity}</span> <span>seats</span>
                </div>
            </div>
        </article>
    );
}