/* eslint-disable @next/next/no-img-element */
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Plans } from "../components/Plans";

import styles from './styles.module.scss';

function Home() {

    return (
        <>
            <Header />
            <Banner />
            <section className={styles.plans_container}>
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
            {/* <section className={styles.infos}>
                <div className={styles.}>
                    <h4>Hear what others say</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring</p>
                    <img src="" alt="" />
                </div>
                <div>

                </div>
            </section> */}
        </>
    )

}

export default Home;
