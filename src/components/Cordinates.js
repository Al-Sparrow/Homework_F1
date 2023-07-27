import React, { useEffect, useState } from "react";
import Cities from "./Cities";
import City from "./City";

function Cordinates() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [posFalse, setPosFalse] = useState(false);
    const [posTrue, setPosTrue] = useState(false);
    const error = () => {
        console.log('Невозможно получить ваше местоположение');
        geo = navigator.geolocation
        setPosFalse(true);
        setPosTrue(false);
    };

    const success = (position) => {
        setPosFalse(false);
        setPosTrue(true);
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        };

    useEffect(() => {
        if (!navigator.geolocation) {
            console.log('Geolocation не поддерживается вашим браузером');
        } else {
            navigator.geolocation.getCurrentPosition(success, error,);
        }
    }, [lat, long]);



    return (
        <div>
            {posTrue &&<Cities lat={lat} long={long}/>}
            {posFalse &&<City />}

        </div>
    )
}

export default Cordinates;