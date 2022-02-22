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
        </>
    )

}

export default Home;
