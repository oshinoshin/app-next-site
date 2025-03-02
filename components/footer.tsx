import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import styles from "@/styles/footer.module.css";

export function Footer() {
    return (
        <Container>
            <footer className={styles.wrapeer}>
                <div className={styles.flexContainer}>
                    <Logo />
                    [ソーシャル]
                </div>
            </footer>
        </Container>
    );
}
