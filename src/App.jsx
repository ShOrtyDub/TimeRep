/**
 * Composant principal.
 */
import {useEffect, useState} from "react";
import RepButton from "./components/RepButton.jsx";
import CountDown from "./components/CountDown.jsx";
import TimeButtons from "./components/TimeButtons.jsx";
import PauseButtons from "./components/PauseButtons.jsx";

function App() {
    const [countDown, setCountDown] = useState(0);
    const [rep, setRep] = useState(0);
    const minutes = Math.floor(countDown / 60);
    const seconds = countDown % 60;
    const [audio, setAudio] = useState(new Audio('beep.mp3'));

    const handleClickDown = () => {
        if (rep > 0) {
            setRep(rep - 1);
        }
    };

    const handleClickUp = () => {
        setRep(rep + 1);
    };

    const handleTimeValue = (event) => {
        let newCountDown = event.target.value;
        setCountDown(newCountDown);
        let repCopy = rep;
        setRep(rep === 0 ? 0 : repCopy - 1);
    };

    // Fonction pour gérer le temps de pause choisi
    const handlePauseTime = (pauseTime) => {
        setCountDown(pauseTime);  // Met à jour le temps de pause
    };

    useEffect(() => {
        const interval = setInterval(() => {
            let countDownCopy = countDown;

            if (countDown > 0) {
                if (countDown >= 1 && countDown <= 5) {
                    const newAudio = new Audio('beep.mp3');
                    newAudio.play()
                        .then(() => setCountDown(countDownCopy - 1))
                        .catch(() => console.error("le son n'est pas joué"));
                    setAudio(newAudio);
                }
                setCountDown(countDownCopy - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
            audio.pause();
            audio.currentTime = 0;
        }
    }, [countDown, audio]);

    return (<div className="container-fluid">
        <h1 id="title" className="container text-center mt-5 mb-4">Time' Rep</h1>
        <CountDown minutes={minutes} seconds={seconds}/>
        <RepButton repCount={rep} handlePlus={handleClickUp} handleLess={handleClickDown}/>
        <TimeButtons handleTimeValue={handleTimeValue}/>
        <PauseButtons handlePauseTime={handlePauseTime}/>
        <div id="copyright" className="container text-center mt-5">
            Copyright © TimeRep' v0.2 propriété de Mathieu RAKOTOARITSIMA 08 dec 2023
        </div>
    </div>);
}

export default App;
