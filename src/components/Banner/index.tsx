/* eslint-disable @next/next/no-img-element */

import styles from './styles.module.scss';

export function Banner() {
    return (
        <section className={styles.container}>
            <div className={styles.banner_content}>
                <h1>Night Podcast</h1>
                <h3>Listen to our Podcast at night after a tiring day</h3>
                <button>
                    <img src="/images/listen.png" alt="Listen Night Podcast" />
                    <div>
                        <p> We are now available on</p>
                        <span>Apple podcasts</span>
                    </div> 
                </button>
            </div>
        </section>
    );
}