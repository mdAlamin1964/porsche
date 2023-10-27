import React from 'react'
export default function Footer2() {
    return (
        <>
            <div className="footer-2-main">
                <div className="footer-2-top">
                    <h3 className="style-h3">
                            Current Region/region:
                    </h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <select name="footer-select" id="" className="select-style-1">
                                <option className='select-title' value="default" defaultValue>Select region</option>
                                <option value="North America">North America</option>
                                <option value="Latin America">Latin America</option>
                                <option value="Europe">Europe</option>
                                <option value="Middle East">Middle East</option>
                                <option value="Africa">Africa</option>
                                <option value="Asia">Asia</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </div>
                        <div className="col-sm-6">
                            <select name="footer-sub-select" id="" className="select-style-1">
                                    <option className='select-title' value="default" defaultValue >Select a country/region</option>
                                    <option value="North America">North America</option>
                                    <option value="Latin America">Latin America</option>
                                    <option value="Europe">Europe</option>
                                    <option value="Middle East">Middle East</option>
                                    <option value="Africa">Africa</option>
                                    <option value="Asia">Asia</option>
                                    <option value="Australia">Australia</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="copy-right">
                        <p className="style-paragraph-1">
                            © 2023 Porsche Cars North America, Inc. <a href="#" className="text-link-underline">Legal notice</a> . Privacy notice. California Privacy. Accessibility Statement. Open Source Software Notice. Whistleblower System. Emergency Responder Guides. Recall Information. 3G Wireless Turndown FAQs. Do Not Sell or Share My Personal Information.
                        </p>
                    </div>
                    <div className="footer-link-btns">
                        <a href="#" className="site-btn-8">
                        <i className="fa fa-angle-right" aria-hidden="true"></i> Contact us
                        </a>
                        <a href="#" className="site-btn-8">
                        <i className="fa fa-angle-right" aria-hidden="true"></i> Recall Information
                        </a>
                        <a href="#" className="site-btn-8">
                        <i className="fa fa-angle-right" aria-hidden="true"></i> 3G Wireless Turndown FAQs
                        </a>
                        <a href="#" className="site-btn-8">
                        <i className="fa fa-angle-right" aria-hidden="true"></i> Do Not Sell or Share My Personal Information
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}