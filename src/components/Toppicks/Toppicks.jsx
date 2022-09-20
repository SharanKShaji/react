import React, { useState,useEffect } from 'react'
import Product from './Toppro';
import './Toppicks.css'

    function Toppicks() {
        const [ToppicksItem, setToppicksItem] = useState();
        useEffect(() => {
            fetch("http://localhost:3000/toppick")
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setToppicksItem(data);
            });
        }, []);
        return(
                <div>
                    {ToppicksItem &&
                            ToppicksItem.map((top) => {
                        return (
                            <Product key={top.id} id={top.id} Name={top.Name} offer={top.offer} img={top.img}
                        />
                        );
                    })}
                </div>
        )             

}

export default Toppicks;