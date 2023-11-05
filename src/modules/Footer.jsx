import React from 'react'
export default function Footer({ghUrl}) {
    return (
        <>
            <div className="main-footer">
                <div className="language-sac default-mar-b">
                    <h3 className="style-h3">
                        Current Region / Language
                    </h3>
                    <div className="language-img">
                        <img src={ghUrl+"./src/assets/usa-flag1.jpg"} alt="" /> 
                        <span>United States / English</span> <a href="#" className='change-lang-btn text-link-underline'>change</a>
                    </div>
                </div>

                <div className="row default-mar-b">
                    <div className="col-md-6">
                        <div className="row">
                            
                            <div className="col-sm-6">
                                <div className="footer-info default-mar-b">
                                    <h4 className="style-h3">Newsletter</h4>
                                    <p className="style-paragraph-1">Latest news directly in your inbox</p>
                                    <a href="#" className="site-btn-3">Subscribe</a>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="footer-info default-mar-b">
                                    <h4 className="style-h3">Contact</h4>
                                    <p className="style-paragraph-1">Have any questions?</p>
                                    <a href="#" className="site-btn-3">Contact Form</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="footer-info default-mar-b">
                            <h4 className="style-h3">Social Media</h4>
                            <p className="style-paragraph-1">Latest news directly in your inbox</p>
                            <div className="social-media-follow">
                                <div className="social-icon">
                                    <a href="#" className='site-btn-3'>
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className='site-btn-3'>
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className='site-btn-3'>
                                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className='site-btn-3'>
                                        <i className="fa fa-youtube" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row default-mar-b">
                    <div className="footer-bottom">
                        <h4 className="style-h3">Company</h4>
                        <ul className="footer-bottom-ul p-0">
                            <li>
                                <a href="#" className='text-link-underline'>Porsche at galance</a>
                            </li>
                            <li>
                                <a href="#" className='text-link-underline'>Porsche at galance</a>
                            </li>
                            <li>
                                <a href="#" className='text-link-underline'>Porsche at galance</a>
                            </li>
                            <li>
                                <a href="#" className='text-link-underline'>Porsche at galance</a>
                            </li>
                            <li>
                                <a href="#" className='text-link-underline'>Porsche at galance</a>
                            </li>
                            <li>
                                <a href="#" className='text-link-underline'>Porsche at galance</a>
                            </li>
                            <li>
                                <a href="#" className='text-link-underline'>Porsche at galance</a>
                            </li>
                            <li>
                                <a href="#" className='text-link-underline'>Porsche at galance</a>
                            </li>
                            <li>
                                <a href="#" className='text-link-underline'>Porsche at galance</a>
                            </li>
                            <li>
                                <a href="#" className='text-link-underline'>Porsche at galance</a>
                            </li>
                            <li>
                                <a href="#" className='text-link-underline'>Porsche at galance</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom-copy">
                    <p className="style-paragraph-1">
                        © 2023 Porsche Cars North America, Inc. <a href="#" className="text-link-underline">Legal notice</a> . Privacy notice. California Privacy. Accessibility Statement. Open Source Software Notice. Whistleblower System. Emergency Responder Guides. Recall Information. 3G Wireless Turndown FAQs. Do Not Sell or Share My Personal Information.
                    </p>

                    <div className="main-logo m-auto">
                            <svg className='header-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300"><title>Porsche</title><path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path></svg>
                        </div>
                </div>
            </div>
        </>
    )
}