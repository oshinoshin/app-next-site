import styles from "@/styles/container.module.css";
import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    large?: boolean;
}

export function Container({ children, large = false }: ContainerProps) {
    return(
        <div className={large ? styles.large : styles.default}>{children}</div>
    )
};
