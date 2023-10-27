import React from 'react'
export default function sliderModule() {
    return(
        <>
            {/* HOME slider */}
            <div className="main-slider">
                    <div className="slider-box">
                        <div className="slider-title">
                            <span><i className="fa fa-angle-right" aria-hidden="true"></i></span> 
                            <h1> Centrul Porsche Bucureşti.</h1>
                            <h4>Bine aţi venit!</h4>
                        </div>
                        <div className="slider-arrow">
                            <div className="row">
                                <div className="col-6">
                                    <div className="left-arrow">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="right-arrow">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}