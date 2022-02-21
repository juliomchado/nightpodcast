/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.header_container}>
            <nav className={styles.header_content}>
                <ul className={styles.header_options_container}>
                    <li>
                        <Link href="#">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Articles</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Blog</a>
                        </Link>
                    </li>
                </ul>
                <div className={styles.logo_container}>
                    <Link href="/" >
                        <a>
                            <img src="/images/logo.png" alt="Night Podcast" />
                        </a>
                    </Link>
                </div>
                <ul className={styles.contacts_container}>
                    <li className={styles.contacts}>
                        <Link href="#" >
                            <a target="_blank">
                                <img src="/images/instagramlogo.png" alt="Night Podcast Instagram" />
                            </a>
                        </Link>
                    </li>
                    <li className={styles.contacts}>
                        <Link href="#" >
                            <a target="_blank">
                                <img src="/images/facebooklogo.png" alt="Night Podcast Facebook" />
                            </a>
                        </Link>
                    </li>
                    <li className={styles.contacts}>
                        <Link href="#" >
                            <a target="_blank">
                                <img src="/images/spotifylogo.png" alt="Night Podcast Spotify" />
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}