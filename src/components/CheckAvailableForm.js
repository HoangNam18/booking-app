import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'; 
import OptionModal from './OptionModal';

export default class CheckAvailableForm extends React.Component {
    state = {
        //defaultLocation: 'Ho Chi Minh',
        location: 'Ho Chi Minh',
        rooms: 1,
        //defaultRoomQuantity: 1,
        //startDate: moment(),
        // endDate: moment().add(1, 'days'),              
        // startDate: null,
        // endDate: null,   
        focusedInput: null,
        selectedOption: undefined
    };

    onLocationChange = (e) => {        
        this.setState({location: e.target.value});
    };
    
    onRoomChange = (e) => {        
        this.setState({rooms: e.target.value});
    };

    onDatesChange = ({startDate, endDate}) => {        
        this.setState({ startDate, endDate })
    };

    onFocusChange = (focusedInput) => {        
        this.setState({focusedInput});        
    };

    isOutsideRange = (startDate) => {
        return startDate < moment();
    };

    handleOnCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }));     
    }

    handleOnOpenModal = () => {
        this.setState(() => ({ selectedOption: 'Thank You !!' }));     
    }

    handleSubmit = (e) => {
        e.preventDefault();
    
        if (!this.state.startDate || !this.state.endDate) {
          this.setState(() => ({ error: '*Please provide description and amount.' }));
        } else {
          //this.setState(() => ({ error: '' }));
        //   this.props.onSubmit({                      
        //   });
        this.setState(() => ({
            location: this.state.location,
            rooms: this.state.rooms,
            checkin: this.state.startDate,
            checkout: this.state.endDate,  
            selectedOption: "Thank You !!"
        }));
        }
      };

    render() {   
       return (
           <div className="form">
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <label>
                            Location:                             
                        </label> 
                        <select value={this.state.location} id="location" onChange={this.onLocationChange}> 
                                <option value="Ho Chi Minh">Ho Chi Minh</option> 
                                <option value="Quang Binh">Quang Binh</option>
                                <option value="Hue">Hue</option>
                        </select>
                    </div>                
                    <div className="form-row">
                        <label>
                            Dates:                            
                        </label>
                        <div id="date-range-picker">
                            <DateRangePicker
                                startDate={this.state.startDate} // momentPropTypes.momentObj or null,                    
                                startDateId="checkin" // PropTypes.string.isRequired,
                                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                endDateId="checkout" // PropTypes.string.isRequired,
                                onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                                showClearDates={true}
                                numberOfMonths={1}
                                isOutsideRange={this.isOutsideRange}
                                enableOutsideDays={true}
                                startDatePlaceholderText="Checkin"
                                endDatePlaceholderText="Checkout"
                                showClearDates={true}
                            />
                        </div>        
                    </div>   
                    <div className="form-row">
                        <label>
                            Rooms:                                                                                        
                        </label>
                        <select id="room" value={this.state.rooms} onChange={this.onRoomChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>                  
                    <div className="button">     
                        <input className="button" type="submit" value="Submit" />
                    </div>
                </form>
                <OptionModal 
                handleOnCloseModal={this.handleOnCloseModal}
                selectedOption={this.state.selectedOption}/>
           </div>
       )     
    }
}