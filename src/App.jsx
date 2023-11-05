import React from 'react'
import FindCenter from './modules/findCenter'
import Footer from './modules/Footer'
import Footer2 from './modules/Footer2'
import Header from './modules/Header'
import Home from './pages/Home'
import icons from './icons'
import MenuSidebar from './sidebars/MenuSidebar'
import LoginBox from './modules/LoginBox'
// Pages
import Search from './pages/Search'

// Sidebar components
import ModelsBox from './sidebars/ModelsBox'
import ShipingBox from './sidebars/ShippingBox'
import ServicesBox from './sidebars/ServicesBox'
import ExperienceBox from './sidebars/ExperienceBox'
import MyPorscheBox from './sidebars/MyPorscheBox'

import './styles/main.css'

function App() {
  // Window Load done
  const [loadingDone, setLoadingDone] =  React.useState(false)
  React.useEffect(()=> {
    window.addEventListener('load', setLoadingDone(true))
  }, [])


  // Window width
  const [currentWidth, setCurrentWidth] = React.useState(window.innerWidth)
  React.useEffect(()=> {
    window.addEventListener('resize', ()=> {
      setCurrentWidth(window.innerWidth)
    })
  }, [])

  const deskWidth = 992;
  const tabWidth = 768;
  const mobileWidth = 576;


  // Show menu function
  const [showMenu, setShowMenu] = React.useState(false)
  function handleShowMenu() {
    setRightMenu(<ModelsBox />)
    setShowMenu(!showMenu)
  }


  // Video play pause
  function videoPlay() {
    const videoEle = document.getElementById('video-ele');
    const videoIcon = document.getElementById('video-icon');
    if (videoIcon.className.includes('fa-pause')) {
      videoEle.pause();
      videoIcon.classList.remove('fa-pause');
      videoIcon.classList.add('fa-play')
    } else {
      videoEle.play();
      videoIcon.classList.remove('fa-play');
      videoIcon.classList.add('fa-pause')
    }
  }


  // Right menu bar
  const Components = {
    ModelsBox: ModelsBox,
    ShipingBox: ShipingBox,
    ServicesBox: ServicesBox,
    ExperienceBox: ExperienceBox,
    MyPorscheBox: MyPorscheBox
  
  }
  const [rightMenu, setRightMenu] = React.useState(<ModelsBox />)
  React.useEffect(() => {
      var menuList = document.querySelectorAll('.main-menu-left-sidebar li a');
      var menuLeft = document.querySelector('.menu-sidebar .menu-content .left')
      var menuRight = document.querySelector('.menu-sidebar .menu-content .right')
      var backBtn = document.querySelector('.menu-sidebar-right .icon-back')
      menuList.forEach(n => {
        n.addEventListener('click', () => {
          setRightMenu(Components[n.name])
          menuList.forEach(x => x.classList.remove('active'))
          n.classList.add('active')

          if (window.innerWidth < mobileWidth) {
            backBtn.style="display:block"
            menuLeft.style="display:none"
            menuRight.style="display:block"

          }

        })
      })
      if (backBtn) {
          backBtn.addEventListener('click', () => {
            backBtn.style="display:none"
            menuLeft.style="display:block"
            menuRight.style="display:none"
        })
      }
  },[showMenu]);


  
  // Logo link
  if (loadingDone) {
    var mainLogo = document.querySelectorAll('.header-logo')
    mainLogo.forEach(n=> 
        n.addEventListener('click', () => {
          window.location = '/'
        })
      )
  }


  // Header user option
  function showUserOption() {
    setShowMenu(true)
    setTimeout(()=> {
      setRightMenu(<MyPorscheBox />)
      var menuList = document.querySelectorAll('.main-menu-left-sidebar li a');
      menuList.forEach(n => {
        n.name == 'MyPorscheBox'? n.classList.add('active') : n.classList.remove('active');
      })
    
    }, 100)
  }

  function mainHeader(pageStyle) {
    return (
      <Header 
              icons = {icons}
              show_menu={() => handleShowMenu()}
              user_option = {() => showUserOption()}
              page_style = {pageStyle}
              />
    )
  }



  // Image url fix for gh pages
  let ghUrl = "https://raw.githubusercontent.com/mdAlamin1964/porsche/main/" 

  return (
    <>
      <div className="container-fluid px-0 overflow-hidden">
          {/* Main sidebar */}
          {showMenu ? 
            <MenuSidebar
              sideMenu = {rightMenu}
              close_menu={() => handleShowMenu()}
            />
          :
            ""
          }

          {/* Home page */}
            <>  
                {mainHeader('')}
                <Home 
                  findCenter={<FindCenter ghUrl={ghUrl}/>}
                  video_play = {() => videoPlay()}
                  ghUrl = {ghUrl}
                />
                <Footer ghUrl={ghUrl} />
            </>

          {/* Search page */}
          {/* <>  
              {mainHeader('main-header-page')}
              <Search />
              <Footer2 />
          </> */}

      </div>
    </>
  )
}

export default App
