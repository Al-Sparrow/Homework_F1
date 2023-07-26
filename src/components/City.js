import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Cities.css";
import cities_array from "../cities.json";
import Forecast from "./Forecast";


function City(props){
    const cities = cities_array;
    const [getCity, setGetCity] = React.useState("Novosibirsk");
    const handleChange = e => setGetCity(e.target.value);
    const [showCity, setShowCity] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            city: getCity
        };
        const json = JSON.stringify(data);
        console.clear();
        console.log(json);
        setShowCity(true);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Выберите город из списка:
                        <select value={getCity} onChange={handleChange}>
                            {cities.map(item => {
                                return (<option key={item.name} value={item.name}>{item.name}</option>);
                            })}
                        </select>
                    </label>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
            {showCity && <Forecast city={getCity}/>}
        </>
    );
}
export default City;