import React from 'react';
import RoomItem from './RoomItem';
import RoomNavigator from './RoomNavigator';
import RoomItemFixture from './RoomItem.fixture'; 

export default class RoomList extends React.Component {
    constructor(props) {
        super(props);
        this.handleModeChange = this.handleModeChange.bind(this);        
        this.state = {
            mode: 'list'
        }                       
    }

    handleModeChange(e) {   
        e.persist();        
        this.setState(() => ({ mode: e.target.text || 'list'}));         
    }

    shouldComponentUpdate(nextProps, nextState) {       
        if (this.state.mode !== nextState.mode) {          
           return true;
        }

        return false;
    }

    render () {                            
        let roomList = [];

        RoomItemFixture.forEach((item) => {                         
            roomList.push(
                <div className="grid-item" key={item.id} style={this.state.mode === 'grid' ? {'width': '33%' } : {'width': '100%'}}>
                    <RoomItem             
                    name={item.name}
                    images={item.images}
                    address={item.address}
                    showMap={item.showMap}
                    distance={item.distance}
                    score={item.score}
                    stars={item.stars}
                    reviewComment={item.reviewComment}
                    reviewCount={item.reviewCount}
                    roomTypes={item.roomTypes}  
                    mode={this.state.mode}          
                    />            
                </div>                          
            );    
        }); 

        return (            
            <div className="room-list__left">   
                <RoomNavigator onModeChange={this.handleModeChange}/>
                <div 
                    className="room-view" 
                    style={this.state.mode === 'grid' ? {'flexDirection': 'row', 'flexWrap': 'wrap'} : {'flexDirection': 'column'}}>
                    {roomList}
                </div> 
            </div>   
        );
    }
}

