
const Show = ({ message, icon }) => {
    return (
        <div className="pop-up">
            <p>{message}</p>
            {icon}
        </div>
    );
}

export default Show;