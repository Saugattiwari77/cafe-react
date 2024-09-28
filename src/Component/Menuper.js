import React, { useState } from "react";
import "../Styles/menuper.css";
import { IoMdSearch } from "react-icons/io";
import { MENU__CATEGORIES, ALL_ITEMS } from "./data";
import { Link } from "react-router-dom";

const Menuper = () => {
  const [category, setCategory] = useState(ALL_ITEMS);
  const [search, setSearch] = useState("");
  const [item, setItem] = useState([]);

  const handleCategory = (idcategory) => {
    //console.log (idcategory);
    console.log(ALL_ITEMS[idcategory]);

    setItem(ALL_ITEMS[idcategory]);
  };

  return (
    <>
      <div className="menuper-div">
        <div className="leftside-d">
          <div className="fnbtn">
            <input id="srch" type="text" placeholder="Search" />
            <button className="menu-srch">
              <IoMdSearch />
            </button>
          </div>
          <div className="categories" id="menu-browse-category">
            <h1 className="title">Browse by categories</h1>
            <button className="active" value="MENU">
              All
            </button>
            {MENU__CATEGORIES.map((data, index) => {
              return (
                <>
                  <button
                    key={index}
                    onClick={() => {
                      handleCategory(data.id);
                    }}
                  >
                    {data.name}
                  </button>
                </>
              );
            })}
            
          </div>
        </div>

        <div className="rightside-d">
          <h2> Our Menu</h2>
        
       
          <div className="menu-wrap">
            {item.map((data, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card__image">
                    <img src={data.img} />
                  </div>
                  <div className="card__info">
                    <div className="car__info--title">
                      <h3>{data.name}</h3>
                      <p>{data.desc}</p>
                    </div>
                    <div className="card__info--price">
                      <p>Rs {data.price}</p>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        
        </div>
      </div>
    </>
  );
};
export default Menuper;
