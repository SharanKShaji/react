import "./Navbar.css";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/login/loginaction";
import { useEffect, useState } from "react";
import { fetchFilter } from "../../api/shopping-cart/filterapi";

function Navbar() {
  let { url } = useRouteMatch();
  const dispatch = useDispatch();
  const displayUser = () => {
    dispatch(userLogin({}));
    sessionStorage.clear();
    localStorage.clear()
  };
  const FilterData = useSelector((state)=>state.filterReducer.filter)
  const [id, setId] = useState("");
  useEffect(()=>{
    dispatch(fetchFilter(id))
  },[dispatch, id])

  return (
    <div className="topnav">
      <Link to={`${url}`}>Home</Link>
      <Link to={`${url}/Profile`}>Profile</Link>
      <Link to="/home/Order">Orders</Link>
      <div className="search-container">
        <form action="/action_page.php">
          <input
            type="text"
            placeholder="Search for products"
            name="search"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input> 
          <div className="topnav-i">
            <span className="user"></span>
            <Link to={""}>
              <i className="fa-solid fa-user-check" onClick={displayUser}>
                Logout
              </i>
            </Link>
            <Link to="/home/Prime">
              <i className="fa-solid fa-award">Prime</i>
            </Link>
            <Link to="/home/Cart">
              <i className="fa-solid fa-cart-arrow-down">Cart</i>
            </Link>
          </div>
        </form>
      </div>
      <div className="navmain">
        {FilterData.length < 1 ? <p>Sorry! We dont sell that</p> : <p></p>}
        {FilterData.length > 6 ? (
          <p></p>
        ) : (
          FilterData &&FilterData.map((post) => (
            <div className="main-container">
              <div className="con-cartbody">
                <div className="conid">{post.id}</div>
                <div className="conname">{post.mName}</div>
                <div className="conprice">${post.price}</div>
                <div className="conimg">
                  <img src={post.img} alt=""></img>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Navbar;
