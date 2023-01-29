import { useState } from 'react';
import './Notify.css';

export const Notify = ({ message, className, showNotification }) => {

    const onClose = () => {
        showNotification('hidden');
    };

    return (

        <div className={className}>
            <span className="notify-message">{message}</span>
            <span className="notify-close-btn" onClick={onClose} >&#10005;</span>
        </div>
    );
}