import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleOnCloseModal} 
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="Modal"
    >
    <h3 className="modal__title">Title</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button button--secondary" onClick={props.handleOnCloseModal}>Close</button>   
    </Modal>     
);

export default OptionModal;