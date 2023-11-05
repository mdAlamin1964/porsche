import React from 'react'
export default function FindCenter({ghUrl}) {
    return (
        <>
            <div className="find-center">
                <div className="row g-0 h-100">
                    <div className="col-md-7 order-md-2">
                        <div className="find-center-img-box site-bg-image-style-1">
                            <img src={ghUrl+"src/assets/slider-1.jpg"} alt="" />
                        </div>
                    </div>
                    <div className="col-md-5 find-center-left order-md-1">
                        <div className="find-center-info">
                            <div className="find-center-title">
                                <h2 className='style-h2'>Find Your Porsche Center</h2>
                            </div>
                            <div className="find-center-text">
                                <p className='style-paragraph-1'>
                                A Porsche Center, and your dream Porsche vehicle, may be closer than you think. Search our Porsche Center network for the location closest to you. 
                                </p>
                            </div>
                            <a href="#" className="site-btn-3">
                                Search now.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}