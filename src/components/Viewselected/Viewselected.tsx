import React, { Component } from 'react';
import './Viewselected.css'
import { Link } from 'react-router-dom'
class Select extends Component {
    state = {  } 
    render() { 
        return (
            <div className='select-con'>
                <h1>-Categories-</h1>
            <div className='Select'>
            <div className='child'><Link to="/Mobile">Mobile</Link></div>
            <div className='child'><Link to="/Men">Men's</Link></div>
            <div className='child'><Link to="/Women">Women's</Link></div>
            </div>
            </div>
        );
    }
}
 
export default Select;

