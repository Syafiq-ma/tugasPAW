import React from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import VetIlustration from "../assets/vet_ilustration.jpg"
import "../styles/home.css"

const Home = () => {
    let navigate = useNavigate()

    const redirectToQueue = () =>{
        navigate('/queue')
    }

    return(
        <div>
            <Navbar/>
            <div className="Home">
                <div className="contentArea">
                    <div className="homeTitle">Veterinary</div>
                    
                    <div className="homeContent">
                        Veterinary adalah sebuah Aplikasi yang memudahkan masyarakat untuk mendatangi dokter hewan. Masyarakat dapat mendaftar ke dokter hewan melalui aplikasi ini sehingga tidak perlu mengantri ketika hendak memeriksakan hewan peliharaannya. Aplikasi ini juga memudakan masyarakat untuk melakukan pendataan kondisi hewan dan riwayat penyakit hewan peliharaannya
                    </div>
                    <button className="homeBtn" onClick={redirectToQueue}>Periksa Sekarang!</button>
                </div>
                <div className="Ilustration">
                    <img src={VetIlustration} alt="Veternier"></img>
                </div>
            </div>
        </div>
    )
}

export default Home