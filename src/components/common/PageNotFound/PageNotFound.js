import './PageNotFound.css'
export const PageNotFound = (props) => {
    return (
        <section id="error">
            <div className="hit-the-floor">
                <p>{props.err}</p>
            </div>
            <div className="alternative-versions absolute bottom-0 w-full flex justify-center underline space-x-4 p-12">

            </div>
        </section>
    );
}