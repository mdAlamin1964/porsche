import React from "react";
export default function Home({findCenter, video_play}) {
    return (
        <>
            <div className="home-page">
                {/* HOME Hero image */}
                <div className="home-sac-1">
                    <div className="site-video">
                        <video id="video-ele" src="./src/assets/home-video-1.mp4" autoPlay muted loop></video>
                    </div>
                    <span className="icon-pause icon" onClick={video_play}>
                        <i id="video-icon" className="fa fa-pause site-primary-btn" aria-hidden="true"></i>
                    </span>
                    <div className="home-sac-1-title">
                        <div className="row">
                            <div className="col-xl-6">
                                <h1 className="style-h1 ">Fully-jaw-dropping-electric.</h1>
                                <a href="#" className="site-primary-btn">
                                    The Taycan. Starting at $90,900
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Hero image saction end */}

                {/* HOme saction 2 start */}
                <div className="home-sac-2 home-sac">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="image-box-style-1">
                                    <div className="box-image">
                                        <img src="./src/assets/2023 - KW07 - Rennsport-Reunion.webp" alt="" className="box-img" />
                                    </div>
                                    <div className="image-box-title">
                                        <h4 className="style-h4">Thanks for joining us at RR7</h4>
                                        <i className="fa fa-arrow-right site-secondary-btn" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="image-box-style-1">
                                        <div className="box-image">
                                            <img src="./src/assets/2023 - KW07 - Rennsport-Reunion.webp" alt="" className="box-img" />
                                        </div>
                                        <div className="image-box-title">
                                            <h4 className="style-h4">Thanks for joining us at RR7</h4>
                                            <i className="fa fa-arrow-right site-secondary-btn" aria-hidden="true"></i>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="image-box-style-1">
                                    <div className="box-image">
                                            <img src="./src/assets/2023 - KW07 - Rennsport-Reunion.webp" alt="" className="box-img" />
                                    </div>
                                    <div className="image-box-title">
                                        <h4 className="style-h4">Thanks for joining us at RR7</h4>
                                        <i className="fa fa-arrow-right site-secondary-btn" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* HOme section 2 end */}


                    {/* Home section 3 Modles */}
                    <div className="home-sac-3">
                        <div className="home-sac">
                            <div className="home-sac-3-title">
                                <h1 className="sac-title">Models</h1>
                            </div>
                            <div className="home-sac-3-module">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="image-box-btn-style-1">
                                            <div className="box-image">
                                                <img src="./src/assets/718_Carrange.jpg" alt="" className="box-img" />
                                            </div>
                                            <div className="car-model">
                                                <svg viewBox="0 0 70 36" xmlns="http://www.w3.org/2000/svg"><path d="M65.775 16.54c-.053 2.082-1.376 3.714-3.193 4.966h-.004c-2.666 1.83-6.394 2.846-8.752 3.235-2.812.465-7.38.711-10.852-.256-2.39-.67-4.378-1.997-4.725-4.326-.308-2.078 1.19-3.804 3.221-5.241 3.135-2.22 6.565-2.67 6.565-2.67s-1.243-1.452-.773-3.207c1.385-5.175 9.88-6.698 13.428-6.868 6.933-.33 8.55 3.036 8.625 3.191l.003.005c.645 1.196.389 2.49-.285 3.69-1.523 2.709-5.44 4.127-5.44 4.127s2.182 1.072 2.182 3.354zM63.08 5.654c-1.21-.266-5.307-.598-9.097 1.608l.004.005c-1.128.654-1.773 1.404-1.603 2.248.171.844 1.006 1.342 2.125 1.513 4.298.66 8.016-.939 9.122-1.622 1.1-.678 1.693-1.556 1.603-2.215s-.935-1.266-2.154-1.537zM51.587 21.33c2.642-.327 4.488-1.01 5.835-1.812h-.005c2.386-1.427 2.002-2.708 2.002-2.708-.129-.892-1.02-1.565-2.396-1.954-1.361-.385-3.202-.484-5.227-.237-2.243.27-4.42 1.015-5.749 1.826-1.342.816-2.091 1.727-2.006 2.727.08.935 1.01 1.58 2.367 1.95 1.342.37 3.163.46 5.18.208zM7.978 22.175c2.12-3.714 8.752-11.621 19.073-16.625l-2.675-3.273c-2.68.39-5.128.598-8.22.67-2.58.056-4.687.108-6.769.085-2.356-.027-2.87.55-3.496 1.25l-.152.168s-.842 1.038-1.604 2.053c-.43.572-.833 1.136-1.047 1.504-.441.754.455 1.133 1.28.683 1.765-.953 4.953-1.598 9.127-1.584.895 0 1.78-.018 2.641-.057a41.72 41.72 0 0 0 1.855-.123C9.62 11.223 4.174 17.55 0 24.936h3.647c1.694.018 2.941-.332 4.331-2.76zM27.672 23.261 44.046 4.867 40.702 2.31c-.56.266-4.355 2.23-9.416 3.26l-3.178 3.623c3.226-.057 6.072-.114 6.072-.114L19.969 24.964s2.822-.014 2.983-.019c1.936-.061 3.292-.185 4.72-1.684z"/></svg>
                                            </div>
                                            <div className="imgage-box-info">
                                                <div className="car-info">
                                                    <h4 className="style-h4">Thanks for joining us at RR7</h4>
                                                    <span className="car-price">From $ 68,300 *</span>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <a href="#" className="site-btn-3">
                                                                Build your <span className="model">718</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <a href="#" className="site-primary-btn">
                                                                All <span className="model">718</span> models
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="image-box-btn-style-1">
                                            <div className="box-image">
                                                <img src="./src/assets/718_Carrange.jpg" alt="" className="box-img" />
                                            </div>
                                            <div className="car-model">
                                                <svg viewBox="0 0 70 36" xmlns="http://www.w3.org/2000/svg"><path d="M65.775 16.54c-.053 2.082-1.376 3.714-3.193 4.966h-.004c-2.666 1.83-6.394 2.846-8.752 3.235-2.812.465-7.38.711-10.852-.256-2.39-.67-4.378-1.997-4.725-4.326-.308-2.078 1.19-3.804 3.221-5.241 3.135-2.22 6.565-2.67 6.565-2.67s-1.243-1.452-.773-3.207c1.385-5.175 9.88-6.698 13.428-6.868 6.933-.33 8.55 3.036 8.625 3.191l.003.005c.645 1.196.389 2.49-.285 3.69-1.523 2.709-5.44 4.127-5.44 4.127s2.182 1.072 2.182 3.354zM63.08 5.654c-1.21-.266-5.307-.598-9.097 1.608l.004.005c-1.128.654-1.773 1.404-1.603 2.248.171.844 1.006 1.342 2.125 1.513 4.298.66 8.016-.939 9.122-1.622 1.1-.678 1.693-1.556 1.603-2.215s-.935-1.266-2.154-1.537zM51.587 21.33c2.642-.327 4.488-1.01 5.835-1.812h-.005c2.386-1.427 2.002-2.708 2.002-2.708-.129-.892-1.02-1.565-2.396-1.954-1.361-.385-3.202-.484-5.227-.237-2.243.27-4.42 1.015-5.749 1.826-1.342.816-2.091 1.727-2.006 2.727.08.935 1.01 1.58 2.367 1.95 1.342.37 3.163.46 5.18.208zM7.978 22.175c2.12-3.714 8.752-11.621 19.073-16.625l-2.675-3.273c-2.68.39-5.128.598-8.22.67-2.58.056-4.687.108-6.769.085-2.356-.027-2.87.55-3.496 1.25l-.152.168s-.842 1.038-1.604 2.053c-.43.572-.833 1.136-1.047 1.504-.441.754.455 1.133 1.28.683 1.765-.953 4.953-1.598 9.127-1.584.895 0 1.78-.018 2.641-.057a41.72 41.72 0 0 0 1.855-.123C9.62 11.223 4.174 17.55 0 24.936h3.647c1.694.018 2.941-.332 4.331-2.76zM27.672 23.261 44.046 4.867 40.702 2.31c-.56.266-4.355 2.23-9.416 3.26l-3.178 3.623c3.226-.057 6.072-.114 6.072-.114L19.969 24.964s2.822-.014 2.983-.019c1.936-.061 3.292-.185 4.72-1.684z"/></svg>
                                            </div>
                                            <div className="imgage-box-info">
                                                <div className="car-info">
                                                    <h4 className="style-h4">Thanks for joining us at RR7</h4>
                                                    <span className="car-price">From $ 68,300 *</span>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <a href="#" className="site-btn-3">
                                                                Build your <span className="model">718</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <a href="#" className="site-primary-btn">
                                                                All <span className="model">718</span> models
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="image-box-btn-style-1">
                                            <div className="box-image">
                                                <img src="./src/assets/718_Carrange.jpg" alt="" className="box-img" />
                                            </div>
                                            <div className="car-model">
                                                <svg viewBox="0 0 70 36" xmlns="http://www.w3.org/2000/svg"><path d="M65.775 16.54c-.053 2.082-1.376 3.714-3.193 4.966h-.004c-2.666 1.83-6.394 2.846-8.752 3.235-2.812.465-7.38.711-10.852-.256-2.39-.67-4.378-1.997-4.725-4.326-.308-2.078 1.19-3.804 3.221-5.241 3.135-2.22 6.565-2.67 6.565-2.67s-1.243-1.452-.773-3.207c1.385-5.175 9.88-6.698 13.428-6.868 6.933-.33 8.55 3.036 8.625 3.191l.003.005c.645 1.196.389 2.49-.285 3.69-1.523 2.709-5.44 4.127-5.44 4.127s2.182 1.072 2.182 3.354zM63.08 5.654c-1.21-.266-5.307-.598-9.097 1.608l.004.005c-1.128.654-1.773 1.404-1.603 2.248.171.844 1.006 1.342 2.125 1.513 4.298.66 8.016-.939 9.122-1.622 1.1-.678 1.693-1.556 1.603-2.215s-.935-1.266-2.154-1.537zM51.587 21.33c2.642-.327 4.488-1.01 5.835-1.812h-.005c2.386-1.427 2.002-2.708 2.002-2.708-.129-.892-1.02-1.565-2.396-1.954-1.361-.385-3.202-.484-5.227-.237-2.243.27-4.42 1.015-5.749 1.826-1.342.816-2.091 1.727-2.006 2.727.08.935 1.01 1.58 2.367 1.95 1.342.37 3.163.46 5.18.208zM7.978 22.175c2.12-3.714 8.752-11.621 19.073-16.625l-2.675-3.273c-2.68.39-5.128.598-8.22.67-2.58.056-4.687.108-6.769.085-2.356-.027-2.87.55-3.496 1.25l-.152.168s-.842 1.038-1.604 2.053c-.43.572-.833 1.136-1.047 1.504-.441.754.455 1.133 1.28.683 1.765-.953 4.953-1.598 9.127-1.584.895 0 1.78-.018 2.641-.057a41.72 41.72 0 0 0 1.855-.123C9.62 11.223 4.174 17.55 0 24.936h3.647c1.694.018 2.941-.332 4.331-2.76zM27.672 23.261 44.046 4.867 40.702 2.31c-.56.266-4.355 2.23-9.416 3.26l-3.178 3.623c3.226-.057 6.072-.114 6.072-.114L19.969 24.964s2.822-.014 2.983-.019c1.936-.061 3.292-.185 4.72-1.684z"/></svg>
                                            </div>
                                            <div className="imgage-box-info">
                                                <div className="car-info">
                                                    <h4 className="style-h4">Thanks for joining us at RR7</h4>
                                                    <span className="car-price">From $ 68,300 *</span>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <a href="#" className="site-btn-3">
                                                                Build your <span className="model">718</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <a href="#" className="site-primary-btn">
                                                                All <span className="model">718</span> models
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="image-box-btn-style-1">
                                            <div className="box-image">
                                                <img src="./src/assets/718_Carrange.jpg" alt="" className="box-img" />
                                            </div>
                                            <div className="car-model">
                                                <svg viewBox="0 0 70 36" xmlns="http://www.w3.org/2000/svg"><path d="M65.775 16.54c-.053 2.082-1.376 3.714-3.193 4.966h-.004c-2.666 1.83-6.394 2.846-8.752 3.235-2.812.465-7.38.711-10.852-.256-2.39-.67-4.378-1.997-4.725-4.326-.308-2.078 1.19-3.804 3.221-5.241 3.135-2.22 6.565-2.67 6.565-2.67s-1.243-1.452-.773-3.207c1.385-5.175 9.88-6.698 13.428-6.868 6.933-.33 8.55 3.036 8.625 3.191l.003.005c.645 1.196.389 2.49-.285 3.69-1.523 2.709-5.44 4.127-5.44 4.127s2.182 1.072 2.182 3.354zM63.08 5.654c-1.21-.266-5.307-.598-9.097 1.608l.004.005c-1.128.654-1.773 1.404-1.603 2.248.171.844 1.006 1.342 2.125 1.513 4.298.66 8.016-.939 9.122-1.622 1.1-.678 1.693-1.556 1.603-2.215s-.935-1.266-2.154-1.537zM51.587 21.33c2.642-.327 4.488-1.01 5.835-1.812h-.005c2.386-1.427 2.002-2.708 2.002-2.708-.129-.892-1.02-1.565-2.396-1.954-1.361-.385-3.202-.484-5.227-.237-2.243.27-4.42 1.015-5.749 1.826-1.342.816-2.091 1.727-2.006 2.727.08.935 1.01 1.58 2.367 1.95 1.342.37 3.163.46 5.18.208zM7.978 22.175c2.12-3.714 8.752-11.621 19.073-16.625l-2.675-3.273c-2.68.39-5.128.598-8.22.67-2.58.056-4.687.108-6.769.085-2.356-.027-2.87.55-3.496 1.25l-.152.168s-.842 1.038-1.604 2.053c-.43.572-.833 1.136-1.047 1.504-.441.754.455 1.133 1.28.683 1.765-.953 4.953-1.598 9.127-1.584.895 0 1.78-.018 2.641-.057a41.72 41.72 0 0 0 1.855-.123C9.62 11.223 4.174 17.55 0 24.936h3.647c1.694.018 2.941-.332 4.331-2.76zM27.672 23.261 44.046 4.867 40.702 2.31c-.56.266-4.355 2.23-9.416 3.26l-3.178 3.623c3.226-.057 6.072-.114 6.072-.114L19.969 24.964s2.822-.014 2.983-.019c1.936-.061 3.292-.185 4.72-1.684z"/></svg>
                                            </div>
                                            <div className="imgage-box-info">
                                                <div className="car-info">
                                                    <h4 className="style-h4">Thanks for joining us at RR7</h4>
                                                    <span className="car-price">From $ 68,300 *</span>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <a href="#" className="site-btn-3">
                                                                Build your <span className="model">718</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <a href="#" className="site-primary-btn">
                                                                All <span className="model">718</span> models
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="image-box-btn-style-1">
                                            <div className="box-image">
                                                <img src="./src/assets/718_Carrange.jpg" alt="" className="box-img" />
                                            </div>
                                            <div className="car-model">
                                                <svg viewBox="0 0 70 36" xmlns="http://www.w3.org/2000/svg"><path d="M65.775 16.54c-.053 2.082-1.376 3.714-3.193 4.966h-.004c-2.666 1.83-6.394 2.846-8.752 3.235-2.812.465-7.38.711-10.852-.256-2.39-.67-4.378-1.997-4.725-4.326-.308-2.078 1.19-3.804 3.221-5.241 3.135-2.22 6.565-2.67 6.565-2.67s-1.243-1.452-.773-3.207c1.385-5.175 9.88-6.698 13.428-6.868 6.933-.33 8.55 3.036 8.625 3.191l.003.005c.645 1.196.389 2.49-.285 3.69-1.523 2.709-5.44 4.127-5.44 4.127s2.182 1.072 2.182 3.354zM63.08 5.654c-1.21-.266-5.307-.598-9.097 1.608l.004.005c-1.128.654-1.773 1.404-1.603 2.248.171.844 1.006 1.342 2.125 1.513 4.298.66 8.016-.939 9.122-1.622 1.1-.678 1.693-1.556 1.603-2.215s-.935-1.266-2.154-1.537zM51.587 21.33c2.642-.327 4.488-1.01 5.835-1.812h-.005c2.386-1.427 2.002-2.708 2.002-2.708-.129-.892-1.02-1.565-2.396-1.954-1.361-.385-3.202-.484-5.227-.237-2.243.27-4.42 1.015-5.749 1.826-1.342.816-2.091 1.727-2.006 2.727.08.935 1.01 1.58 2.367 1.95 1.342.37 3.163.46 5.18.208zM7.978 22.175c2.12-3.714 8.752-11.621 19.073-16.625l-2.675-3.273c-2.68.39-5.128.598-8.22.67-2.58.056-4.687.108-6.769.085-2.356-.027-2.87.55-3.496 1.25l-.152.168s-.842 1.038-1.604 2.053c-.43.572-.833 1.136-1.047 1.504-.441.754.455 1.133 1.28.683 1.765-.953 4.953-1.598 9.127-1.584.895 0 1.78-.018 2.641-.057a41.72 41.72 0 0 0 1.855-.123C9.62 11.223 4.174 17.55 0 24.936h3.647c1.694.018 2.941-.332 4.331-2.76zM27.672 23.261 44.046 4.867 40.702 2.31c-.56.266-4.355 2.23-9.416 3.26l-3.178 3.623c3.226-.057 6.072-.114 6.072-.114L19.969 24.964s2.822-.014 2.983-.019c1.936-.061 3.292-.185 4.72-1.684z"/></svg>
                                            </div>
                                            <div className="imgage-box-info">
                                                <div className="car-info">
                                                    <h4 className="style-h4">Thanks for joining us at RR7</h4>
                                                    <span className="car-price">From $ 68,300 *</span>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <a href="#" className="site-btn-3">
                                                                Build your <span className="model">718</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <a href="#" className="site-primary-btn">
                                                                All <span className="model">718</span> models
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="image-box-btn-style-1">
                                            <div className="box-image">
                                                <img src="./src/assets/718_Carrange.jpg" alt="" className="box-img" />
                                            </div>
                                            <div className="car-model">
                                                <svg viewBox="0 0 70 36" xmlns="http://www.w3.org/2000/svg"><path d="M65.775 16.54c-.053 2.082-1.376 3.714-3.193 4.966h-.004c-2.666 1.83-6.394 2.846-8.752 3.235-2.812.465-7.38.711-10.852-.256-2.39-.67-4.378-1.997-4.725-4.326-.308-2.078 1.19-3.804 3.221-5.241 3.135-2.22 6.565-2.67 6.565-2.67s-1.243-1.452-.773-3.207c1.385-5.175 9.88-6.698 13.428-6.868 6.933-.33 8.55 3.036 8.625 3.191l.003.005c.645 1.196.389 2.49-.285 3.69-1.523 2.709-5.44 4.127-5.44 4.127s2.182 1.072 2.182 3.354zM63.08 5.654c-1.21-.266-5.307-.598-9.097 1.608l.004.005c-1.128.654-1.773 1.404-1.603 2.248.171.844 1.006 1.342 2.125 1.513 4.298.66 8.016-.939 9.122-1.622 1.1-.678 1.693-1.556 1.603-2.215s-.935-1.266-2.154-1.537zM51.587 21.33c2.642-.327 4.488-1.01 5.835-1.812h-.005c2.386-1.427 2.002-2.708 2.002-2.708-.129-.892-1.02-1.565-2.396-1.954-1.361-.385-3.202-.484-5.227-.237-2.243.27-4.42 1.015-5.749 1.826-1.342.816-2.091 1.727-2.006 2.727.08.935 1.01 1.58 2.367 1.95 1.342.37 3.163.46 5.18.208zM7.978 22.175c2.12-3.714 8.752-11.621 19.073-16.625l-2.675-3.273c-2.68.39-5.128.598-8.22.67-2.58.056-4.687.108-6.769.085-2.356-.027-2.87.55-3.496 1.25l-.152.168s-.842 1.038-1.604 2.053c-.43.572-.833 1.136-1.047 1.504-.441.754.455 1.133 1.28.683 1.765-.953 4.953-1.598 9.127-1.584.895 0 1.78-.018 2.641-.057a41.72 41.72 0 0 0 1.855-.123C9.62 11.223 4.174 17.55 0 24.936h3.647c1.694.018 2.941-.332 4.331-2.76zM27.672 23.261 44.046 4.867 40.702 2.31c-.56.266-4.355 2.23-9.416 3.26l-3.178 3.623c3.226-.057 6.072-.114 6.072-.114L19.969 24.964s2.822-.014 2.983-.019c1.936-.061 3.292-.185 4.72-1.684z"/></svg>
                                            </div>
                                            <div className="imgage-box-info">
                                                <div className="car-info">
                                                    <h4 className="style-h4">Thanks for joining us at RR7</h4>
                                                    <span className="car-price">From $ 68,300 *</span>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <a href="#" className="site-btn-3">
                                                                Build your <span className="model">718</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <a href="#" className="site-primary-btn">
                                                                All <span className="model">718</span> models
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="condition-text">
                                    <span className="condition-text-style-1">
                                        *Manufacturer’s Suggested Retail Price. Excludes options; taxes; title; registration; delivery, processing and handling fee; dealer charges. Dealer sets actual selling price.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Home saction 4 Find porse center */}
                    <div className="home-sac-4 home-sac">
                        {findCenter}
                    </div>
                    
                    {/* Home saction 5 Find location  module*/}
                    <div className="home-sac-5 home-sac-padding-tb">
                        <div className="find-location-module">
                            <div className="row">
                                <div className="col-md-6 px-5">
                                    <div className="find-location">
                                        <div className="find-location-info">
                                            <h2 className="style-h2">
                                                Find your new or pre-owned Porsche.
                                            </h2>
                                            <p className="style-paragraph">
                                                Making it easy to find your dream Porsche. Enter your location and browse the best car offers available near you.
                                            </p>
                                        </div>
                                        <div className="find-location-input">
                                            <div className="site-input-box-1">
                                                <label htmlFor="find-location-1">
                                                    <span className="style-paragraph">
                                                    Enter a location for your search
                                                    </span>
                                                </label>
                                                <div className="input-box">
                                                    <input className="" type="text" id="find-location-1" />
                                                    <i className="fa fa-search icon" aria-hidden="true"></i>

                                                    <i className="fa fa-times icon-cross-2" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="find-location-img-box site-bg-image-style-1">
                                        <img src="./src/assets/Enhanced-Finder_4-3.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Home saction 6 Online shop*/}
                    <div className="home-sac-6 home-sac-padding-tb">
                        <div className="online-shop-module">
                            <div className="home-sac-6-title">
                                <h1 className="sac-title">Online Shop Highlights</h1>
                            </div>
                            <div className="slider-arrow sac-padding-rl">
                                <div className="arrow-box">
                                    <i className="fa fa-arrow-left site-btn-4" aria-hidden="true"></i>
                                    <i className="fa fa-arrow-right site-btn-4" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="slider-products ">
                                <ul className="slider-products-ul">
                                    <li>
                                        <div className="slider-items">
                                            <img src="./src/assets/SHOPmodule_Wall-Charger_4-3.jpg" alt="" />
                                            <div className="slider-info">
                                                <h4 className="style-h4">Porsche Wall Charger Connect</h4>
                                                <p className="style-paragraph-1">
                                                    An easy charging solution for your home.
                                                </p>
                                                <div className="site-btn-4">
                                                    <i className="fa fa-arrow-right" aria-hidden="true"></i> <span className="style-paragraph-1">Charger</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="slider-items">
                                            <img src="./src/assets/SHOPmodule_Wall-Charger_4-3.jpg" alt="" />
                                            <div className="slider-info">
                                                <h4 className="style-h4">Porsche Wall Charger Connect</h4>
                                                <p className="style-paragraph-1">
                                                    An easy charging solution for your home.
                                                </p>
                                                <div className="site-btn-4">
                                                    <i className="fa fa-arrow-right" aria-hidden="true"></i> <span className="style-paragraph-1">Charger</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="slider-items">
                                            <img src="./src/assets/SHOPmodule_Wall-Charger_4-3.jpg" alt="" />
                                            <div className="slider-info">
                                                <h4 className="style-h4">Porsche Wall Charger Connect</h4>
                                                <p className="style-paragraph-1">
                                                    An easy charging solution for your home.
                                                </p>
                                                <div className="site-btn-4">
                                                    <i className="fa fa-arrow-right" aria-hidden="true"></i> <span className="style-paragraph-1">Charger</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="slider-items">
                                            <img src="./src/assets/SHOPmodule_Wall-Charger_4-3.jpg" alt="" />
                                            <div className="slider-info">
                                                <h4 className="style-h4">Porsche Wall Charger Connect</h4>
                                                <p className="style-paragraph-1">
                                                    An easy charging solution for your home.
                                                </p>
                                                <div className="site-btn-4">
                                                    <i className="fa fa-arrow-right" aria-hidden="true"></i> <span className="style-paragraph-1">Charger</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="site-slider-dots">
                                    <ul className="dots-ul">
                                        <li className="dots-active"></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Home saction 7 Social mededia */}
                    {/* <div className="home-sac-7 sac">
                        <div className="home-sac-7-title">
                            <h1 className="sac-title">Social Media Stories</h1>
                        </div>

                        <div className="image-grid-module">
                            <div className="image-grid-ul">
                                <li>
                                    <div className="grid-item">
                                        <img src="./src/assets/menuimg.jpg" alt="" />
                                        <div className="grid-item-info">
                                            <p className="syle-paragraph-1">we made Rennsport. the girls are having</p>
                                            <p className="style-paragraph-bold">
                                                @porscheusa
                                            </p>
                                            <i className="fa fa-instagram icon" aria-hidden="true"></i>
                                            <div className="action-btn">
                                                <i className="fa fa-angle-right icon" aria-hidden="true"></i> <span className="style-paragraph-1">Follow the action</span>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div> */}


                    {/* Home saction 8 Discover */}
                    <div className="home-sac-8 home-sac sac-padding-tb{">
                        <div className="home-sac-8-title">
                            <h1 className="sac-title">Discover</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="image-box-style-1">
                                    <div className="box-image">
                                        <img src="./src/assets/AP22MODBB0017_low_4-3.jpg" alt="" className="box-img" />
                                    </div>
                                    <div className="image-box-title">
                                        <h4 className="style-h4">Thanks for joining us at RR7</h4>
                                        <i className="fa fa-arrow-right site-secondary-btn" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="image-box-style-1">
                                        <div className="box-image">
                                            <img src="./src/assets/2023 - KW07 - Rennsport-Reunion.webp" alt="" className="box-img" />
                                        </div>
                                        <div className="image-box-title">
                                            <h4 className="style-h4">Thanks for joining us at RR7</h4>
                                            <i className="fa fa-arrow-right site-secondary-btn" aria-hidden="true"></i>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="image-box-style-1">
                                    <div className="box-image">
                                            <img src="./src/assets/2023 - KW07 - Rennsport-Reunion.webp" alt="" className="box-img" />
                                    </div>
                                    <div className="image-box-title">
                                        <h4 className="style-h4">Thanks for joining us at RR7</h4>
                                        <i className="fa fa-arrow-right site-secondary-btn" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}