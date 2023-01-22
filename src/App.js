import './App.css';
import React, { useCallback, useMemo } from "react"
import { Menu } from 'antd';

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
      getItem("Get to know me", "about"),
      getItem("Experience", "experience"),
      getItem("Technologies I work with", "tech"),
      getItem("Resume", "resume"),
  
    ]
    return items
  }, [getItem])

  const handleNavClick = (e) => {

  }
  return (
    <div className="container">
        <div className='sider-menu'>
        <div className='header font-xl p-m main-bc'>
          Ivan Codes
        </div>
        <Menu
          onClick={handleNavClick}
          style={{
            width: 256,
            height: 500
          }}
          className="navigation"
          theme="dark"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </div>
    </div>
  );
}

export default App;
