import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../api/shopping-cart/categoryapi";
import "./Filter.css";
export const Filter = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("Mobile");
  const posts = useSelector((state)=>state.categoryReducer.category)
  useEffect(()=>{
    dispatch(fetchCategory(id))
  },[dispatch, id])
  
  return (
    <div>
      <select id="category" onChange={(e) => setId(e.target.value)}>
        <option value="Mobile">MOBILE</option>
        <option value="Boy">MEN</option>
        <option value="Girl">WOMEN</option>
        {/* <option value="">ALL</option> */}
      </select>
      <div className="mainF">
        {posts.length < 1 ? (
          <h1>Sorry,We dont sell that</h1>
        ) : (
          posts.map((post) => (
            <div className="main-container">
              <div className="con-filterbody">
                <div className="conid">{post.id}</div>
                <div className="conprice">${post.price}</div>
                <div className="conimg">
                  <img src={post.img} alt=""></img>
                </div>
                <div className="coname">{post.mName}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
