import React, { useEffect, useState } from "react";
import "./header.css";
import { BiRightArrow } from "react-icons/bi";
import InfoCart from "../info cart/InfoCart";

function Header({ setIpAdress, data }) {
  const [ip, setIp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIpAdress(ip);
    setIp("");
  };

  return (
    <div className='header'>
      <div className='container'>
        <h1>IP adress Tracker</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={ip}
            placeholder='Search for any Ip adress or Domain'
            onChange={(e) => setIp(e.target.value)}
          />
          <button type='submit'>
            <BiRightArrow />
          </button>
        </form>
        <InfoCart data={data} />
      </div>
    </div>
  );
}

export default Header;
