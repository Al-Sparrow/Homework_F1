import React, {useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "../styles/Cities.css";
import Forecast from "./Forecast";
import City from "./City";


function Cities(props) {
    const [city, setCity] = useState([])
    const [showYesButton, setShowYesButton] = useState(true);
    const [showNoButton, setShowNoButton] = useState(false);
    const [showCity, setShowCity] = useState(false);
    const [showForecast, setShowCityForecast] = useState(false);
    const LINK = `https://geocode-maps.yandex.ru/1.x/?apikey=01094b2c-8fe0-47d5-aac2-3010cf703aa1&geocode=${props.long},${props.lat}&format=json`
    axios.get(LINK).then(res => {
        setCity(res.data.response.GeoObjectCollection.featureMember[0].GeoObject.description);
    });
    const toggleYesButton = () => {
        setShowYesButton(!showYesButton);
        setShowNoButton(!showNoButton);
        setShowCity(true);
    };
    const toggleNoButton = () => {
        setShowYesButton(false);
        setShowNoButton(false);
        setShowCity(false);
        setShowCityForecast(true);
    };

    return (
        <div>
            {showYesButton && <p>ваш город {city}?</p>}
            {showYesButton && <Button variant="success" onClick={() => toggleYesButton()}>ДА</Button>}
            {showYesButton && <Button variant="success" onClick={() => toggleNoButton()}>Нет</Button>}
            {showForecast && <City city={city}>

            </City>}
            {showCity && <Forecast lat={props.lat} long={props.long}/>}
        </div>
    )
}

export default Cities;