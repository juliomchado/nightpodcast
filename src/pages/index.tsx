/* eslint-disable @next/next/no-img-element */
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Plans } from "../components/Plans";

import styles from './styles.module.scss';

function Home() {

    return (
        <>
            <Header />
            <Banner />
            <section className={styles.plans_container}>
                <div>
                    <Plans
                        title="Starter Plan"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring"
                        value={12}
                    />
                    <Plans
                        title="Standard Plan"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring"
                        value={12}
                    />
                    <Plans
                        title="Premium Plan"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring"
                        value={17}
                    />
                </div>
                <button className={styles.plans_button}>Get a free trial</button>
            </section>
            <section className={styles.talktous_section}>
                <div className={styles.talktous_container}>
                    <div className={styles.talktous_infos_container}>
                        <h3>Listen from one of the best singers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring</p>
                        <button>Talk to us</button>
                    </div>
                    <div className={styles.talktous_image_container}>
                        <img src="/images/podcast.png" alt="Night Podcast Peoples Talking" />
                    </div>
                </div>
            </section>
            <section className={styles.infos}>
                <div className={styles.info_hear_what}>
                    <div>
                        <h4>Hear what others say</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring</p>
                    </div>
                    <img src="/images/hear.png" alt="Hear what others say" />
                </div>
                <div className={styles.info_listen_section}>
                    <div>
                        <h4>Listen on desktop or mobile</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring</p>
                    </div>
                    <div>
                        <img src="/images/mobiledesktop.png" alt="Listen on desktop or mobile" />
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )

}

export default Home;
