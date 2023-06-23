import PropTypes from "prop-types";
import "./button.css";

const Button = ({ children, theme }) => {
    return (
        <button className={theme} >{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.string,
    theme: PropTypes.string
}

export default Button;