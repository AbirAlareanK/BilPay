import Classes from './Button.module.scss';

const Button = (props) => {
    return(
        <span 
                onClick={props.onClick}
                className={`${Classes.themeButton} ${props.className ? props.className : ''}`}>
            {props.children}
        </span>
    )
}

export default Button;
