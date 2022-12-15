import './Home.css'

const Home = () => {
    return (
        <section className='home'>
            <div className="img-wrapper">
                <img src="/images/hall-1.jpg" alt="hall-1" />
            </div>
            <h1 className="title">
                EVENT CENTER
            </h1>
            <p className="subtitle">
                Modern Event space. Multifunctional halls.Combining art, design & technology.

            </p>
            <button className="header-btn">BOOK EVENT</button>
            {/* <article className="action">
                See it in action
                <i className="fa-solid fa-arrow-right"></i>

            </article> */}
        </section>
    )
}

export default Home;