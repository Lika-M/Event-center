import './Home.css'

const Home = () => {
    return (
        <section className='home'>
            <div class="img-wrapper">
                <img src="/images/hall-1.jpg" alt="hall-1" />
            </div>
            <h1 class="title">
                EVENT CENTER
            </h1>
            <p class="subtitle">
                Modern Event space. Multifunctional halls.Combining art, design & technology.

            </p>
            <button class="header-btn">BOOK EVENT</button>
            {/* <article class="action">
                See it in action
                <i class="fa-solid fa-arrow-right"></i>

            </article> */}
        </section>
    )
}

export default Home;