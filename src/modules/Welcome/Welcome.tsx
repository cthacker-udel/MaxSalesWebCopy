import React from "react";

import styles from "./Welcome.module.css";
import { WelcomeButtonBar } from "./WelcomeButtonBar/WelcomeButtonBar";

/**
 *
 * @returns
 */
const Welcome = (): JSX.Element => (
    <div className={styles.welcome_container}>
        <div className={styles.welcome_header}>
            {"Welcome to Maximum Sales"}
        </div>
        <WelcomeButtonBar />
    </div>
);

export default Welcome;
