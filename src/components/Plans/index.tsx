/* eslint-disable @next/next/no-img-element */

import styles from './styles.module.scss';

interface PlansProps {
    title: string;
    description: string;
    value: number;
}

export function Plans({ title, description, value }: PlansProps) {
    return (
        <div className={styles.container}>
            <img src="/images/plansicon.png" alt="Planos Night Podcast" />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <span>{value}$/mo</span>
            </div>

        </div>
    );
}