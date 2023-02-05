import './App.css';
import React, { useCallback, useMemo } from "react"
import { Menu } from 'antd';
import Hero from './Pages/Hero';
import AboutMe from './Pages/AboutMe';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faAddressBook } from '@fortawesome/free-regular-svg-icons'
import { faCode, faBusinessTime } from "@fortawesome/free-solid-svg-icons"

function App() {
  const getItem = useCallback((label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }, [])

  let items = useMemo(() => {
    let items = [
      getItem("Get to know me", "about", <FontAwesomeIcon icon={faAddressBook} />),
      getItem("Experience", "experience", <FontAwesomeIcon icon={faBusinessTime} />),
      getItem("Technologies I work with", "tech", <FontAwesomeIcon icon={faCode} />),
      getItem("Resume", "resume",   <FontAwesomeIcon icon={faFile} />),

    ]
    return items
  }, [getItem])

  const handleNavClick = (e) => {

  }
  return (
    <div className="container main-bc">
      <div className='sider-menu'>
        <div className='header font-xl p-m main-bc d-flex justify-content-between'>
          <div className='text-color-w'>
            Ivan Codes
          </div>
          <div className='d-flex justify-content-between' style={{ width: "100px"}}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
        <Menu
          onClick={handleNavClick}
          style={{
            width: 256,
            height: 500
          }}
          className="navigation main-bc"
          theme="dark"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </div>
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
