import React from 'react';
import OptionModal from './OptionModal';
import Modal from 'react-modal';

export default class AboutPage extends React.Component {
    state = {
        selectedOption: undefined
    }

    handleOnCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }));     
    }

    handleOnOpenModal = () => {
        this.setState(() => ({ selectedOption: 'About Page' }));     
    }
    
    render () {
        return (
            <div>
                <h1>About page</h1>   
                <button onClick={this.handleOnOpenModal}>Click me !</button>            
                <OptionModal 
                    handleOnCloseModal={this.handleOnCloseModal}
                    selectedOption={this.state.selectedOption} 
                />         
            </div>
        );
    }    
}