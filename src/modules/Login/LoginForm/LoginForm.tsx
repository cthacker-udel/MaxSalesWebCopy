"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { useCSSInjection } from "@/hooks/injection";

import styles from "./LoginForm.module.css";

type LoginFormValues = {
    username: string;
    password: string;
};

const LOGIN_FORM_DEFAULT_VALUES: LoginFormValues = {
    password: "",
    username: "",
};

/**
 *
 * @returns
 */
export const LoginForm = (): JSX.Element => {
    useCSSInjection([
        { className: styles.login_form_body_injection, cssQuery: "body" },
    ]);
    const { register: _register } = useForm<LoginFormValues>({
        criteriaMode: "all",
        defaultValues: LOGIN_FORM_DEFAULT_VALUES,
        mode: "all",
        reValidateMode: "onBlur",
    });

    return <div>{"Hello"}</div>;
};
