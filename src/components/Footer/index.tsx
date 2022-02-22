/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import styles from './styles.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_content}>
                <nav>
                    <div className={styles.navigation_container}>
                        <ul>
                            <label>Navigation</label>
                            <li>
                                <Link href="#">
                                    <a>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        Articles
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        Blog
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <label>Our socials</label>
                            <li>
                                <Link href="#">
                                    <a>
                                        Instagram
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        Spotify
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        Facebook
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/">
                        <a >
                            <img src="/images/logo.png" alt="Night Podcast Logo" />

                        </a>
                    </Link>
                    <div className={styles.navigation_container}>
                        <ul>
                            <label>Usefull links</label>
                            <li>
                                <Link href="#">
                                    <a>
                                        Privacy policy
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        Terms & conditions
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        Exchange and return policy
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <label>Information</label>
                            <li>
                                <Link href="#">
                                    <a>
                                        About us
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        Contact us
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        Blogs
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        FAQ
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={styles.copyright}>
                <span>copyright 2022 all rights reserved</span>
            </div>
        </footer>
    );
}