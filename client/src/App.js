import "./App.css";
import Header from "./components/header/Header";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState();
  const [ipAdress, setIpAdress] = useState();

  const ENDPOINT = "http://localhost:3000";

  const [loading, setLoading] = useState("Loading");

  const [data, setData] = useState({});

  useEffect(() => {
    console.log(ipAdress);
    const getInfos = async (ipAdress) => {
      const res = await fetch(`${ENDPOINT}/ip/${ipAdress}`);

      const data = await res.json();

      setData(data);
      setLoading("Completed");
    };
    getInfos(ipAdress);

    console.log(location);
  }, [ipAdress]);

  return (
    <div className='app'>
      <Header data={data} setIpAdress={setIpAdress} />
      <div className='map'>
        <MapContainer
          center={[
            typeof location !== "undefined" ? location.lat : 54,
            typeof location !== "undefined" ? location.lng : -3,
          ]}
          zoom={typeof location === "undefined" ? 4 : 13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker
            position={[
              typeof location !== "undefined" ? location.lat : 54,
              typeof location !== "undefined" ? location.lng : -3,
            ]}
          ></Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
