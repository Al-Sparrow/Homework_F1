import React, { useEffect, useState } from "react";
import Cities from "./Cities";

function Cordinates() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    }, [lat, long]);


    return (
        <div>
            <Cities lat={lat} long={long} />

        </div>
    )
}

export default Cordinates;