import { useNavigate } from 'react-router-dom';
import { deleteEventById } from '../../../services/eventService';
import './ModalDialog.css';

export const ModalDialog = ({ id, modal, setModal }) => {
    const navigate = useNavigate();

    const onDelete = () => {
            deleteEventById(id)
                .then(res => {
                    navigate('/calendar');
                });
    }
    const onCancel = () => {
        setModal(`hide`);
    }

    return (

        <div className="modal">
            <div className="container">
                <h1> Do you really want to delete it?</h1>
                <div className="buttons">
                    <button onClick={onDelete} type="button" className="delete-btn">YES</button>
                    <button onClick={onCancel} type="button" className="cancel-btn">NO</button>
                </div>
            </div>

        </div>
    );
}