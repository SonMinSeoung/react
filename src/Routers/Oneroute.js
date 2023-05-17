import React, { lazy } from "react";

const importComponent =(componentName) => {
    return lazy(() => import(`../common/${componentName}`));
}

const App = () => {
    const componentNames = ['']
}