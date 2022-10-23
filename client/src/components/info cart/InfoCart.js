import React from "react";
import "./infoCart.css";

function InfoCart({ data }) {
  return (
    <div className='infoCart'>
      <div className='mini-cart'>
        <span>Id adress</span>
        <h1>{data.ip}</h1>
      </div>
      <div className='mini-cart'>
        <span>location</span>
        <h1>
          {data.location.city}, {data.location.region},{" "}
          {data.location.postalCode}
        </h1>
      </div>
      <div className='mini-cart'>
        <span>TimeZone</span>
        <h1>{data.location.timezone}</h1>
      </div>
      <div className='mini-cart'>
        <span>ISP</span>
        <h1>{data.isp}</h1>
      </div>
    </div>
  );
}

export default InfoCart;
