import React from 'react'
export default function Search() {
    return (
        <>
            <div className="page-search page">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="search-item-box">
                            <form action="#" className="seach-form">
                                <input type="text" className="search-input input-style-1" placeholder='Search e.g. 911 Carrera' />
                                 <button className="search-btn site-btn-7">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </div>
                        <div className="results">
                            <p className='condition-text-style-1'>No web pages containing "erwwr" were found, but we found 1 similar results.</p>
                        </div>
                    </div>
                </div>
                <div className="more-saction">
                    <h1 className="sac-title">More about</h1>
                    <div className="list">
                        <ul className="list-ul p-0">
                            <li>
                                <a href="#" className="text-link-underline">Models</a>
                            </li>
                            <li>
                                <a href="#" className="text-link-underline">Events & Racing</a>
                            </li>
                            <li>
                                <a href="#" className="text-link-underline">Services & Accessories</a>
                            </li>
                            <li>
                                <a href="#" className="text-link-underline">Company & Brand</a>
                            </li>
                            <li>
                                <a href="#" className="text-link-underline">Mission X</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}