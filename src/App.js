import { useState } from 'react';
import './App.css';
import graduationHat from './icons/graduation-hat.png';
import idea from './icons/idea.png';
import cgi from './icons/cgi.png';
import iut from './icons/iut.png';
import edf from './icons/edf.png';
import rn from './icons/RN.png';
import MaEVA from './icons/MaEVA.png';
import onlineLearning from './icons/online-learning.png';
import development from './icons/development.png';
import troisPoints from './icons/trois-points.png';

function App() {
    const [step, setStep] = useState(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--step')));

    const setCSSPropertyVW = (CSSProperty, nValue) => {
        document.documentElement.style.setProperty(CSSProperty, `${nValue}vw`);
    }

    const setCSSPropertyVH = (CSSProperty, nValue) => {
        document.documentElement.style.setProperty(CSSProperty, `${nValue}vh`);
    }

    const handleSteps = () => {
        if (step > 3) return;
        if (step === 1) {
            setCSSPropertyVH('--h1Y', 5);
            setCSSPropertyVH('--c0Y', 100);
            setCSSPropertyVW('--c1X', 0);

        } else if (step === 2) {
            setCSSPropertyVW('--c1X', -30);
            setCSSPropertyVW('--s1X', -15);
            setCSSPropertyVW('--c2X', -0);

        } else if (step === 3) {
            setCSSPropertyVW('--c1X', -45);
            setCSSPropertyVW('--s1X', -36.5);
            setCSSPropertyVW('--c2X', -26.5);
            setCSSPropertyVW('--s2X', -17);
            setCSSPropertyVW('--c3X', -8.5);
        }

        const newStep = (step + 1);
        document.documentElement.style.setProperty('--step', newStep);
        setStep(newStep);
    }

    return (
        <div id="appContainer" onClick={() => handleSteps()}>

            <div id='headerContainer ' >
                <div className='neumorphism headerTextWrapper h1Animation'>
                    <h1>Soutenance de Licence Professionnelle DAWIN</h1>
                    <h2>Brung Mathieu - 08/09/2022</h2>
                </div>
            </div>

            <div id='contentContainer' >

                <div className='row c0Animation'>
                    <div className='neumorphism iconWrapperLarge'>
                        <img src={iut} alt='iut' className='iconLarge' />
                    </div>

                    <div className='rowSpacer' />

                    <div className='neumorphism iconWrapperLarge'>
                        <img src={cgi} alt='cgi' className='iconLarge' />
                    </div>
                </div>

                <div className='column c1Animation'>
                    <div className='neumorphism columnHeader'>
                        <h3>Avant</h3>
                    </div>

                    <div className='neumorphism iconWrapper'>
                        <img src={graduationHat} alt='graduation hat' className='icon' />
                    </div>

                    <div className='spacer' />

                    <div className='neumorphism iconWrapper'>
                        <img src={idea} alt='idea' className='icon' />
                    </div>

                </div>

                <div className='verticalSeparator neumorphism s1Animation' />

                <div className='column c2Animation'>
                    <div className='columnHeader neumorphism'>
                        <h3>Pendant</h3>
                    </div>

                    <div className='neumorphismInner iconsWrapper'>
                        <div className='neumorphism iconWrapperSmall'>
                            <img src={cgi} alt='cgi' className='iconSmall' />
                        </div>

                        <div className='neumorphism iconWrapperSmall'>
                            <img src={edf} alt='edf' className='iconSmall' />
                        </div>
                    </div>

                    <div className='spacer' />

                    <div className='neumorphism iconWrapper'>
                        <img src={rn} alt='rn' className='icon' />
                    </div>

                    <div className='spacer' />

                    <div className='neumorphism iconWrapper'>
                        <img src={MaEVA} alt='MaEVA' className='icon' />
                    </div>

                </div>

                <div className='verticalSeparator neumorphism s2Animation' />

                <div className='column c3Animation'>
                    <div className='columnHeader neumorphism'>
                        <h3>Après</h3>
                    </div>

                    <div className='neumorphism iconWrapper'>
                        <img src={onlineLearning} alt='onlineLearning' className='icon' />
                    </div>

                    <div className='spacer' />

                    <div className='neumorphism iconWrapper'>
                        <img src={development} alt='development' className='icon' />
                    </div>

                    <div className='spacer' />

                    <div className='neumorphism iconWrapper'>
                        <img src={troisPoints} alt='troisPoints' className='icon' />
                    </div>

                </div>



            </div>

        </div>
    );
}

export default App;
