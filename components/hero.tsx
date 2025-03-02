import styles from "@/styles/hero.module.css";

interface HeroProps {
    title: string;
    subtitle: string;
    imageOn?: boolean;
}

export function Hero({ title, subtitle, imageOn = false }: HeroProps) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            {imageOn && <figure> [画像] </figure>}
        </div>
    );
}
