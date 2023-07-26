import React from "react";
import Cordinates from "./Cordinates";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Main(){
    const refresh = () => {
        window.location.reload();
    }

    return(
        <>
            <Cordinates />
            <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh}>обновить</Button>
        </>
    );
}


export default Main;