import './Notify.css';

export const Notify = ({ message, onClose}) => {

    
    return (
        <div className="notification">
            <span className="notify-message">{message}</span>
            <span className="notify-close-btn" onClick={onClose} >&#10005;</span>
        </div>
    );
}