import React,{useState} from "react";
import "./Slider.css";
import img1 from '../../Assets/1.webp';
import img2 from '../../Assets/2.webp';
import img3 from '../../Assets/3.webp';
import img4 from '../../Assets/4.jpg';
import img5 from '../../Assets/5.jpg';
function Slider() {
    const arr=[img1,img2,img3,img4,img5];
    let [value,changeIndex] = useState(0);
    const changeImg=(btn)=>{
        let i = value;
        let n=arr.length
        if(btn==='left'){
            i--;
            if(i < 0){
                i=arr.length-1;
            }
        } 
        if(btn==='right'){
            i++;
            if(i >= n){
                i = 0;
            }  
        }
        changeIndex(i);
    }
    return (
        
        <div className="slide" style={{backgroundImage: `url(${arr[value]})`}}>
            <button id="Left" onClick={()=>changeImg('left')}><i className="fa-solid icon fa-angles-left"></i></button>
            <button id="Right" onClick={()=>changeImg('right')}><i className="fa-solid icon fa-angles-right"></i></button>
        </div>
    )
  
}

export default Slider;
