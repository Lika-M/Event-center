import './ModalDialog.css';

export const ModalDialog = () => {

    const onDelete = () => {

    }
    const onCancel =() => {

    }

    return (
        <section id="modal" className="modal">
            <div className="modal-backdrop"></div>
            <div className="container">
                <h1> Do you really want to delete it?</h1>
                <div className="buttons">
                    <button onClick={onDelete} type="button" className="delete-btn">YES</button>
                    <button onClick={onCancel} type="button" className="cancel-btn">NO</button>
                </div>
            </div>
        </section>
    );
}