import React from "react";
import './FormField.css';

const FormField = ({ children, ...props }) => {
    return <form { ...props }>
        {children}
    </form>
}

export default FormField;