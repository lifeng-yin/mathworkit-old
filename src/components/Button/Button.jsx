import React from "react"
import './Button.css'

const Button = ({ type, children, ...props }) => {
    return <a 
        className={"button-" + type}
        role="button"
        { ...props }
    >{children}</a>
}

export default Button;