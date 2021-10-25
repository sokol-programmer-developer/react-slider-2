import React, {useEffect, useState} from 'react'
import "./Style.css"
import pic1 from './../assets/pic-1.webp'
import pic2 from './../assets/pic-2.webp'
import pic3 from './../assets/pic-3.webp'
import pic4 from './../assets/pic-4.webp'
import pic5 from './../assets/pic-5.webp'

const Slider = () => {

    const [ step, setStep ] = useState(1);

    
    useEffect(() => {
        const interval = setInterval(() => {
            setStep(step === 5 ? 1 : step + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, [step]);

    
    const handleLeftArrow = () => {
        if(step === 1){
            setStep(5);
        }
        else{
            setStep(step - 1);
        }
    }

    const handleRightArrow = () => {
        if(step === 5) {
            setStep(1);
        }
        else{
            setStep(step + 1)
        }
    }

    const slider1 = () => {
        setStep(1);
    }

    const slider2 = () => {
        setStep(2);
    }

    const slider3 = () => {
        setStep(3);
    }

    const slider4 = () => {
        setStep(4);
    }

    const slider5 = () => {
        setStep(5);
    }

    return(
        <div className="slider_wrapper">
            <div className="slider_section">


            <div className='slider_indicators'>


                {step === 1&&
                <>
                    <div className='indicator' onClick={slider5}> </div>
                    <div className='indicator active'>

                        <img src={pic1} alt="pic1" className="pic" />

                        <div className="slider_arrow">
                            <div className="left_arrow" onClick={handleLeftArrow} >  &#10094; </div>
                            <div className="right_arrow" onClick={handleRightArrow} >  &#10095; </div>
                        </div>

                        <div className="slider_content">

                            <div className="slider_text">

                                <h2 className="slider_h2"> Slide - 1 </h2>
                                <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>

                            </div>

                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Click Me </h2>
                            </button>

                        </div>
                    </div>
                    <div className='indicator' onClick={slider2}>  </div>
                </>
                }

                {step === 2&&
                <>
                    <div className='indicator' onClick={slider1}> </div>
                    <div className='indicator active'>

                        <img src={pic2} alt="pic2" className="pic" />

                        <div className="slider_arrow">
                            <div className="left_arrow" onClick={handleLeftArrow} >  &#10094; </div>
                            <div className="right_arrow" onClick={handleRightArrow} >  &#10095; </div>
                        </div>

                        <div className="slider_content">

                            <div className="slider_text">

                                <h2 className="slider_h2"> Slide - 2 </h2>
                                <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>

                            </div>

                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Click Me </h2>
                            </button>

                        </div>
                    </div>
                    <div className='indicator' onClick={slider3}> </div>
                </>
                }

                {step === 3&&
                <>
                    <div className='indicator' onClick={slider2}> </div>
                    <div className='indicator active'>

                        <img src={pic3} alt="pic3" className="pic" />

                        <div className="slider_arrow">
                            <div className="left_arrow" onClick={handleLeftArrow} >  &#10094; </div>
                            <div className="right_arrow" onClick={handleRightArrow} >  &#10095; </div>
                        </div>

                        <div className="slider_content">

                            <div className="slider_text">

                                <h2 className="slider_h2"> Slide - 3 </h2>
                                <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>

                            </div>

                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Click Me </h2>
                            </button>

                        </div>
                    </div>
                    <div className='indicator' onClick={slider4}> </div>
                </>
                }

                {step === 4&&
                <>
                    <div className='indicator' onClick={slider3}> </div>
                    <div className='indicator active'>

                        <img src={pic4} alt="pic4" className="pic" />

                        <div className="slider_arrow">
                            <div className="left_arrow" onClick={handleLeftArrow} >  &#10094; </div>
                            <div className="right_arrow" onClick={handleRightArrow} >  &#10095; </div>
                        </div>

                        <div className="slider_content">

                            <div className="slider_text">

                                <h2 className="slider_h2"> Slide - 4 </h2>
                                <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>

                            </div>

                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Click Me </h2>
                            </button>

                        </div>
                    </div>
                    <div className='indicator' onClick={slider5}> </div>
                </>
                }

                {step === 5&&
                <>
                    <div className='indicator' onClick={slider4}> </div>
                    <div className='indicator active'>

                        <img src={pic5} alt="pic5" className="pic" />

                        <div className="slider_arrow">
                            <div className="left_arrow" onClick={handleLeftArrow} >  &#10094; </div>
                            <div className="right_arrow" onClick={handleRightArrow} >  &#10095; </div>
                        </div>

                        <div className="slider_content">

                            <div className="slider_text">

                                <h2 className="slider_h2"> Slide - 5 </h2>
                                <h3 className="slider_h3"> Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>

                            </div>

                            <button className="slider_button">
                                <h2 className="slider_button_h2"> Click Me </h2>
                            </button>

                        </div>
                    </div>
                    <div className='indicator' onClick={slider1}> </div>
                </>
                }

            </div>
        </div>
        </div>

    )
}

export default Slider;
