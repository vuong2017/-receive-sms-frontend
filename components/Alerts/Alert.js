const Alert = (props) => {
    const { bgColor } = props;
    return (
        <div className={`alert ${bgColor}`} role="alert">
            {props.children}
        </div>
    )
}

export default Alert;