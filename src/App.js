import { useEffect } from 'react'
import './App.css';
import  Header  from "./components/Header/Header";
import Container from "./components/Container/Container";
import Jumbo from "./components/Jumbo/Jumbo";
import Kateqoriyalar from "./components/Kateqoriyalar/Kateqoriya";
import { Switch, Route, useLocation } from 'react-router-dom';
import Modern from "./components/Modern/Modern";
import Klassik from "./components/Klassik/Klassik";
import Minimalist from "./components/Minimalist/Minimalist";
import Rustik from "./components/Rustik/Rustik";
import Bohem from "./components/Bohem/Bohem";
import Enenevi from "./components/Enenevi/Enenevi";
import Deniz from "./components/Deniz/Deniz";

import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

import Oneroom from "./components/Modern/Onerooms/Onerooms";
import Tworoom from "./components/Modern/Onerooms/Tworoom";
import Threeroom from "./components/Modern/Onerooms/Threeroom";
import Fourroom from "./components/Modern/Onerooms/Fourroom";
import Dubleks from "./components/Modern/Onerooms/Dubleks";
import Tripleks from "./components/Modern/Onerooms/Tripleks";

import Oneroom2 from "./components/Klassik/Klasinner/Oneroom2";
import Tworoom2 from "./components/Klassik/Klasinner/Tworoom2";
import Threeroom2 from "./components/Klassik/Klasinner/Threeroom2";
import Fourroom2 from "./components/Klassik/Klasinner/Fourroom2";
import Dubleks2 from "./components/Klassik/Klasinner/Dubleks2";
import Tripleks2 from "./components/Klassik/Klasinner/Tripleks2";

import Oneroom3 from "./components/Minimalist/Minimalistinner/Oneroom3";
import Tworoom3 from "./components/Minimalist/Minimalistinner/Tworoom3";
import Threeroom3 from "./components/Minimalist/Minimalistinner/Threeroom3";
import Fourroom3 from "./components/Minimalist/Minimalistinner/Fourroom3";
import Dubleks3 from "./components/Minimalist/Minimalistinner/Dubleks3";
import Tripleks3 from "./components/Minimalist/Minimalistinner/Tripleks3";

import Oneroom4 from "./components/Rustik/Rustikinner/Oneroom4";
import Tworoom4 from "./components/Rustik/Rustikinner/Tworoom4";
import Threeroom4 from "./components/Rustik/Rustikinner/Threeroom4";
import Fourroom4 from "./components/Rustik/Rustikinner/Fourroom4";
import Dubleks4 from "./components/Rustik/Rustikinner/Dubleks4";
import Tripleks4 from "./components/Rustik/Rustikinner/Tripleks4";

import Oneroom5 from "./components/Bohem/Boheminner/Oneroom5";
import Tworoom5 from "./components/Bohem/Boheminner/Tworoom5";
import Threeroom5 from "./components/Bohem/Boheminner/Threeroom5";
import Fourroom5 from "./components/Bohem/Boheminner/Fourroom5";
import Dubleks5 from "./components/Bohem/Boheminner/Dubleks5";
import Tripleks5 from "./components/Bohem/Boheminner/Tripleks5";

import Oneroom6 from "./components/Enenevi/Eninner/Oneroom6";
import Tworoom6 from "./components/Enenevi/Eninner/Tworoom6";
import Threeroom6 from "./components/Enenevi/Eninner/Threeroom6";
import Fourroom6 from "./components/Enenevi/Eninner/Fourroom6";
import Dubleks6 from "./components/Enenevi/Eninner/Dubleks6";
import Tripleks6 from "./components/Enenevi/Eninner/Tripleks6";

import Oneroom7 from "./components/Deniz/Denizinner/Oneroom7";
import Tworoom7 from "./components/Deniz/Denizinner/Tworoom7";
import Threeroom7 from "./components/Deniz/Denizinner/Threeroom7";
import Fourroom7 from "./components/Deniz/Denizinner/Fourroom7";
import Dubleks7 from "./components/Deniz/Denizinner/Dubleks7";
import Tripleks7 from "./components/Deniz/Denizinner/Tripleks7";

function App() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

return (
    <div className = "App">
        <a id='scroll' href='#'>IN</a>
                <Header/>
        <Switch>
            <Route path={'/'} exact>
                <Container/>
               <div className='cont'>
                        <a className='in' href='#scroll'>&#8593;</a>
               </div>
                <Kateqoriyalar/>
                <Jumbo/>
                <Content/>
            </Route>
            <Route path={'/modern'}>
                <Modern/>
            </Route>
            <Route path={'/klassik'}>
                <Klassik/>
            </Route>
            <Route path={'/minimalist'}>
                <Minimalist/>
            </Route>
            <Route path={'/rustik'}>
                <Rustik/>
            </Route>
            <Route path={'/bohem'}>
                <Bohem/>
            </Route>
            <Route path={'/ənənəvi'}>
                <Enenevi/>
            </Route>
            <Route path={'/dəniz'}>
                <Deniz/>
            </Route>
            <Route path={'/1otaqlimodern'}>
                <Oneroom/>
            </Route>
            <Route path={'/2otaqlimodern'}>
                <Tworoom/>
            </Route>
            <Route path={'/3otaqlimodern'}>
                <Threeroom/>
            </Route>
            <Route path={'/4otaqlimodern'}>
                <Fourroom/>
            </Route>        
            <Route path={'/dubleksmodern'}>
                <Dubleks/>
            </Route>
            <Route path={'/tripleksmodern'}>
                <Tripleks/>
            </Route>
            <Route path={'/1otaqliklassik'}>
                <Oneroom2/>
            </Route>
            <Route path={'/2otaqliklassik'}>
                <Tworoom2/>
            </Route>
            <Route path={'/3otaqliklassik'}>
                <Threeroom2/>
            </Route>
            <Route path={'/4otaqliklassik'}>
                <Fourroom2/>
            </Route>        
            <Route path={'/dubleksklassik'}>
                <Dubleks2/>
            </Route>
            <Route path={'/tripleksklassik'}>
                <Tripleks2/>
            </Route>
            <Route path={'/1otaqliminimalist'}>
                <Oneroom3/>
            </Route>
            <Route path={'/2otaqliminimalist'}>
                <Tworoom3/>
            </Route>
            <Route path={'/3otaqliminimalist'}>
                <Threeroom3/>
            </Route>
            <Route path={'/4otaqliminimalist'}>
                <Fourroom3/>
            </Route>        
            <Route path={'/dubleksminimalist'}>
                <Dubleks3/>
            </Route>
            <Route path={'/tripleksminimalist'}>
                <Tripleks3/>
            </Route>
            <Route path={'/1otaqlirustik'}>
                <Oneroom4/>
            </Route>
            <Route path={'/2otaqlirustik'}>
                <Tworoom4/>
            </Route>
            <Route path={'/3otaqlirustik'}>
                <Threeroom4/>
            </Route>
            <Route path={'/4otaqlirustik'}>
                <Fourroom4/>
            </Route>        
            <Route path={'/dubleksrustik'}>
                <Dubleks4/>
            </Route>
            <Route path={'/tripleksrustik'}>
                <Tripleks4/>
            </Route>
            <Route path={'/1otaqlibohem'}>
                <Oneroom5/>
            </Route>
            <Route path={'/2otaqlibohem'}>
                <Tworoom5/>
            </Route>
            <Route path={'/3otaqlibohem'}>
                <Threeroom5/>
            </Route>
            <Route path={'/4otaqlibohem'}>
                <Fourroom5/>
            </Route>        
            <Route path={'/dubleksbohem'}>
                <Dubleks5/>
            </Route>
            <Route path={'/tripleksbohem'}>
                <Tripleks5/>
            </Route>
            <Route path={'/1otaqlienenevi'}>
                <Oneroom6/>
            </Route>
            <Route path={'/2otaqlienenevi'}>
                <Tworoom6/>
            </Route>
            <Route path={'/3otaqlienenevi'}>
                <Threeroom6/>
            </Route>
            <Route path={'/4otaqlienenevi'}>
                <Fourroom6/>
            </Route>        
            <Route path={'/dubleksenenevi'}>
                <Dubleks6/>
            </Route>
            <Route path={'/tripleksenenevi'}>
                <Tripleks6/>
            </Route>
            <Route path={'/1otaqlideniz'}>
                <Oneroom7/>
            </Route>
            <Route path={'/2otaqlideniz'}>
                <Tworoom7/>
            </Route>
            <Route path={'/3otaqlideniz'}>
                <Threeroom7/>
            </Route>
            <Route path={'/4otaqlideniz'}>
                <Fourroom7/>
            </Route>        
            <Route path={'/dubleksdeniz'}>
                <Dubleks7/>
            </Route>
            <Route path={'/tripleksdeniz'}>
                <Tripleks7/>
            </Route>
        </Switch>
                <Footer/>
        
    </div>
  );
}

export default App;
