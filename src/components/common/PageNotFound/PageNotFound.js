import './PageNotFound.css'
export const PageNotFound = (props) => {
    console.log(props)
    return (
        <section className="not-found-page">
            <div className="not-found-page-container">
                {!props.err
                    ? <div>
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <p>The Page you are looking for doesn't exist or another error occurred. Go to <a href="/">Home page</a>.</p>
                    </div >
                    : <div>
                        <h1>Error: </h1>
                        <h2>{props.err}</h2>
                        <h2>Page Not Found</h2>
                        <p>The Page you are looking for doesn't exist or another error occurred. Go to <a href="/">Home page</a>.</p>
                    </div>}

            </div>
        </section>
    );
}