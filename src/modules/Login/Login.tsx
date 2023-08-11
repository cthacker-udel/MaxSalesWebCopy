import React from "react";

import styles from "./Login.module.css";
import { LoginForm } from "./LoginForm/LoginForm";

/**
 *
 * @returns
 */
const Login = (): JSX.Element => (
    <div className={styles.login_container}>
        <div className={styles.login_header}>{"Login"}</div>
        <LoginForm />
    </div>
);

export default Login;
