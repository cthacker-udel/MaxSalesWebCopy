"use client";
import Link from "next/link";
import React from "react";

import { useBackgroundLinearGradientAnimation } from "@/hooks/background";

import styles from "./WelcomeButtonBar.module.css";

/**
 *
 * @returns
 */
export const WelcomeButtonBar = (): JSX.Element => {
    useBackgroundLinearGradientAnimation();

    return (
        <div className={styles.welcome_button_bar}>
            <Link
                className={`${styles.login_button} ${styles.welcome_button_bar_button}`}
                href="login"
            >
                {"Login"}
            </Link>
            <Link
                className={`${styles.signup_button} ${styles.welcome_button_bar_button}`}
                href="signup"
            >
                {"Sign Up"}
            </Link>
        </div>
    );
};
