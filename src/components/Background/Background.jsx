import React, { Component } from 'react';
import Bgimg from '../../Assets/bgimg3.jpg';
import './Background.css'

class Background extends Component {
    state = {  } 
    render() { 
        return (
            <div className='bg-Div'>
                <img src={Bgimg} alt="Backgroundimage"></img>
                
            </div>
        );
    }
}
 
export default Background;