"use client";
import { useBackgroundLinearGradientAnimation } from "@/hooks/background";
import React from "react";

/**
 *
 * @returns
 */
const Welcome = (): JSX.Element => {
    useBackgroundLinearGradientAnimation();

    return <div>{"Hello"}</div>;
};

export default Welcome;
