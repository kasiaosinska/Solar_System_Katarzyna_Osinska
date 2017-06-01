import React from 'react';
import ReactDOM from 'react-dom';

//components
import Header from "./components/headerComponent.jsx";
import SolarSystem from "./components/solarSystem.jsx";
import OnePicEveryDay from "./components/OnePicEveryDay.jsx";
import PlanetInfo from "./components/planetInfo.jsx";
import Footer from "./components/footerComponent.jsx";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <SolarSystem/>
                <PlanetInfo/>
                <OnePicEveryDay/>
                <Footer/>
            </div>
        )
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});