import React from 'react';
import RestroCard from './RestroCard';
// import  {FIRST_RESTRO_URL} from "./utils/constants"
import resList  from "./utils/mockData.js";
import { useState } from 'react';

const Body = () => {

//normal js varibale--
// let listOfRestraunts=[{
//     type: "restraunt",
//     info: {
//         id: "761003",
//         name: "DMB Sweets Pvt Ltd",
//         img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_250,h_250/hwjuowcqqipouf39a532",
//         locality: "Near Jain temple",
//         areaName: "Jhotwara",
//         costForTwo: "₹300 for two",
//         cuisines: [
//             "South Indian, ",
//             "Chinese... ",
            
//         ],
//         avgRating: 4.5,
//         veg: true,
//         deliveryTime: "30-35 minutes",
//         discount:"50% off upto 50 rs"

//     },
// },
// {
//     type: "restraunt",
//     info: {
//         id: "741630",
//         name: "Theobroma",
//         img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w-250,h_250/uxdv5her51zgkj7fykfw",
//         locality: "Vaishali Nagar",
//         areaName: "Near Nursery Circle",
//         costForTwo: "₹400 for two",
//         cuisines: [
//             "Bakery, ",
//             "Desserts... "
//         ],
//         avgRating: 4.7,
//         veg: true,
//         deliveryTime: "30-35 minutes",
//         discount:"50% off upto 50 rs"
//     },
// },
// {
//     type: "restraunt",
//     info: {
//         id: "44421",
//         name: "Agarwal Caterers",
//         img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_250,h_250/b14cd9fc40129fcfb97aa7e621719d07",
//         locality: "Vaishali Nagar",
//         areaName: "Vaishali Nagar",
//         costForTwo: "₹200 for two",
//         cuisines: [
//             "Sweets, ",
//             "Italian, "
//         ],
//         avgRating: 4.5,
//         deliveryTime: "30-35 minutes",
//         discount:"50% off upto 50 rs"
//     },
// },

// ];


//local state variable---
const [listOfRestro,setListofRestro]=useState(resList)

  return (
    <div className="body">
      {/* had to makae the search bar   */}
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          //filter logic here ,whose rating above 4.5
          const FilterListOfRestro=listOfRestro.filter((res) => {
            return res.info.avgRating > 4.5;
          });

          setListofRestro(FilterListOfRestro);
        }}>
          Top Rated Restraunts
        </button>
      </div>

      <div className="restro-container">
        {/* restro card */}
        {/* <RestroCard img={FIRST_RESTRO_URL} discount="50% OFF UPTO ₹100" rating="4.6 •" duration="35-40 mins" resName="Dmb(Doodh Misthan Bhandar)" cuisine="Navratri Special, Thalis, Chinese..." location="Bani Park" /> */}
        {
          listOfRestro.map((restro,index) => (
            <RestroCard
              key={index} // Add a unique key for each RestroCard component
              resData={restro}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Body;