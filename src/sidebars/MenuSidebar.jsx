import React from 'react'
export default function MenuSidebar({sideMenu, close_menu}) {
    return (
        <>
           <div className="menu-sidebar">
            <div className="row">
                <div className="col-lg-5 order-lg-2 menu-sidebar-right">
                    <span className="icon-cross icon"  onClick={close_menu}>
                        <i className="fa fa-times site-primary-btn" aria-hidden="true"></i>
                    </span>

                    <div className="icon-back icon-menu icon">
                        <i className="fa fa-angle-left site-primary-btn" aria-hidden="true"></i>
                    </div>

                    <div className="empty-area" onClick={close_menu}></div>
                </div>
                <div className="col-lg-7 order-lg-1">
                    <div className="row menu-content">
                        <div className="col-sm-6 left">
                            <ul className='main-menu-left-sidebar'>
                                <li className=''>
                                    <a className='active' name="ModelsBox" href="#">Models<span className="icon-menu"><i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </span></a> 
                                </li>
                                <li className=''>
                                    <a href="#" name="ShipingBox">Shopping Tools<span className="icon-menu"><i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </span></a>
                                </li>
                                <li className=''>
                                    <a href="#">Porche Shop<span className="icon-menu"><i className="fa fa-external-link" aria-hidden="true"></i>
                                    </span></a>
                                </li>
                                <li className=''>
                                    <a href="#" name="ServicesBox" >Services<span className="icon-menu"><i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </span></a>
                                </li>
                                <li className=''>
                                    <a href="#" name="ExperienceBox">Experience<span className="icon-menu"><i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </span></a>
                                </li>
                                <li className=''>
                                    <a href="#"name="FindPorcheBox" >Find your porche center<span className="icon-menu"><i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </span></a>
                                </li>
                                <li className=''>
                                    <a href="#" name="MyPorscheBox" >My porsche<span className="icon-menu"><i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </span></a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-sm-6 right">
                                {sideMenu}
                        </div>

                        <div className="col-2 close">
                            
                        </div>
                    </div>

                </div>
            </div>
           </div>
        </>
    )
}