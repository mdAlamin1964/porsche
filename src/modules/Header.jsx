import React from 'react'
export default function Header({show_menu, user_option, page_style}) {

    return (
        <>
            <nav className={`main-header px-4 ${page_style}`} >
                <div className="row">
                    <div className="col-4">
                        <div className="icon-hover" onClick={show_menu}>
                            <i className="fa fa-bars icon-primary" aria-hidden="true"></i>
                            <span className='primary-menu-text'>Menu</span>
                        </div>
                    </div>
                    <div className="col-4 d-flex">
                        <div className="main-logo m-auto">
                            <svg className='header-logo header-logo-name' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300"><title>Porsche</title><path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path></svg>
                            
                            <div className="header-logo header-logo-img">
                                <img src="https://raw.githubusercontent.com/mdAlamin1964/porsche/main/src/assets/favicon.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="float-end">
                            <a href="#">
                                <i className=" fa fa-search icon-primary icon-hover" aria-hidden="true"></i>
                            </a>
                            <a href="#" onClick={user_option}>
                                <i className="fa fa-user-o icon-primary icon-hover" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}