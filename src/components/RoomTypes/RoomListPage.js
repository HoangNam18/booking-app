import React from 'react';
import RoomList from './RoomList';
import RoomFilter from './RoomFilter';
import Slider, { Range } from 'rc-slider';
import RoomFilterFixture from './RoomFilter.fixture';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

let listFilters = [];
RoomFilterFixture.forEach((filter) => {        
    listFilters.push(
        <div key={filter.filteringKey}>
            <RoomFilter
                legend={filter.legend}
                filteringKey={filter.filteringKey}
                values={filter.values}
            />            
        </div>
    );    
});
const RoomListPage = () => 
    <div className="room-list__container">        
        <RoomList />
        <div className="room-list__right">
            <h3>Filter</h3>                          
            <div className="filter-panel">
                {listFilters}
                <Slider />
                <Range />
            </div>
        </div>                            
    </div>            

export default RoomListPage;