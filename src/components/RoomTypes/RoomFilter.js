import React from 'react';

const RoomFilter = (props) =>  {    
    let filter = [];
    props.values.map((value, index) => {                
        filter.push(<li key={index}>
            <a 
                className="triggerfiltering" 
                href="#"
                data-filteringkey={props.filteringKey} 
                data-filteringvalue={value.filteringValue} 
                >
            <i className="far fa-square"></i>{value.value}
            </a>
        </li>);
    });
    
    return (        
        <fieldset>
            <legend>{props.legend}</legend>
            <ul className="list-unstyled">
                {filter}                
            </ul>
        </fieldset>            
    );    
}

export default RoomFilter;