import React from 'react';
import RoomNavigatorFixture from './RoomNavigator.fixture';

const toggleMenu = (e) => {                
    e.preventDefault();   
    console.log();        
    let showing = document.getElementsByClassName('dropdown-content show'); 
    
    if (showing.length > 0) {
        showing[0].classList.toggle('show');
    }         
    
    const dropdown = document.getElementById(e.target.id).nextElementSibling;

    if (dropdown) {
        dropdown.classList.toggle('show');
    }     
}

const closeMenu = (e) => {

    if (!e.target.matches('.dropdown-toggle')) {
        let showing = document.getElementsByClassName('dropdown-content show');     
        
        if (showing.length > 0) {
            showing[0].classList.toggle('show');
        }
    }                
}

const RoomNavigator = (props) => {
    // constructor(props) {
    //     super();

    //     this.toggleMenu = this.toggleMenu.bind(this);
    //     this.closeMenu = this.closeMenu.bind(this);        
    // }

    // handleShowMenu(e) {                                     
    //     e.preventDefault();
    //     this.setState({showMenu: true}, () => {
    //         document.addEventListener('click', this.handleCloseMenu);
    //     });         
    // }

    // handleCloseMenu() {
    //     this.setState({showMenu: false}, () => {
    //         document.removeEventListener('click', this.handleCloseMenu);
    //     });
    // }

    
     
    let nav = [];
    let mode = [];
    window.onclick = closeMenu;
    RoomNavigatorFixture.navigator.forEach((item, index) => {    
        let subMenu = [];
        item.child.length > 0 && item.child.forEach((child, index) => {
            subMenu.push(
                <li key={index}>
                    <a href="#">{child}</a>
                </li>
            );                
        })       

        nav.push(
            <li key={index} className="dropdown">
                <a id={'menu-toggle' + index} className="dropdown-toggle" href="#" onClick={toggleMenu}>{item.parent}</a>                    
                {
                    subMenu.length > 0 && 
                    <ul className="dropdown-content">
                        {subMenu}
                    </ul>
                }
            </li>
        );                               
    });
    
    RoomNavigatorFixture.mode.forEach((item, index) => {         
        mode.push(
            <li key={index} className={index === 0 ? 'pull-right' : ''}>
                <a 
                    href="#" 
                    onClick={(e) => props.onModeChange(e)}>
                    {item}
                </a>
            </li>
        );                               
    });
    
    return(
        
        <div id="room-navigator" className="room-list__navigator">
            <ul>
                {nav}
                {mode}
            </ul>        
        </div>
    );                            
}                               

export default RoomNavigator;
