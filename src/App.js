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

    const setCSSPropertyDisplay = (CSSProperty, nValue) => {
        document.documentElement.style.setProperty(CSSProperty, nValue);
    }

    const setCSSPropertyInt = (CSSProperty, nValue) => {
        document.documentElement.style.setProperty(CSSProperty, nValue);
    }

    const handleSteps = () => {
        if (step > 4) return;
        if (step === 1) {
            setCSSPropertyVH('--c0X', 0);
            setCSSPropertyInt('--c0Opacity', 0);
            setTimeout(() => {
                setCSSPropertyDisplay('--display-c0', 'none');
                setCSSPropertyVH('--h1Y', 5);
                setCSSPropertyVW('--c1X', 42.5);
            }, 300);

        } else if (step === 2) {
            setCSSPropertyVW('--c1X', 18);
            setCSSPropertyVW('--s1X', 31);
            setCSSPropertyVW('--c2X', 40);

        } else if (step === 3) {
            setCSSPropertyVW('--c1X', 4);
            setCSSPropertyVW('--s1X', 7);
            setCSSPropertyVW('--c2X', 13);
            setCSSPropertyVW('--s2X', 18.5);
            setCSSPropertyVW('--c3X', 22);
        } else if (step === 4) {
            setCSSPropertyInt('--opacity', 0);
            setCSSPropertyVH('--c4Y', 0);
        }

        const newStep = (step + 1);
        setStep(newStep);
        if (step > 3) return;
        setCSSPropertyInt('--step', newStep);
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

                {
                    step > 1 ?
                        <>
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


                            <div className='column c4Animation'>
                                <div className='neumorphism columnHeader'>
                                    <h3>Remerciements</h3>
                                </div>

                                <div className='spacer' />

                                <div className='neumorphismInner textsWrapper'>
                                    <div className='neumorphism textWrapper'>
                                        <div className='neumorphismInner iconWrapperSmall'>
                                            <img src={iut} alt='iut' className='iconSmall' />
                                        </div>
                                        <span />
                                        <span>Nicholas JOURNET</span>
                                        <span>Olivier GUIBERT</span>
                                        <span>Les intervenants</span>
                                        <span>Les enseignants</span>
                                    </div>

                                    <div className='neumorphism textWrapper'>
                                        <div className='neumorphismInner iconWrapperSmall'>
                                            <img src={cgi} alt='cgi' className='iconSmall' />
                                        </div>
                                        <span />
                                        <span>Damien BREANT</span>
                                        <span>Peter GILBERT</span>
                                        <span>Adrien MICOL</span>
                                        <span>Loïc HELARY</span>
                                        <span>Alexandre MAILLARD</span>
                                        <span>Juliette COUTURAS</span>
                                    </div>
                                </div>

                            </div>
                        </>
                        : null
                }



            </div>

        </div>
    );
}

export default App;
