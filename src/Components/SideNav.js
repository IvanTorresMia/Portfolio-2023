import React, { useMemo } from "react";
import { faFile, faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faCode, faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "antd";
import { Link } from "react-scroll";
const SideNav = () => {
  let items = useMemo(() => {
    return [
      {
        label: (
          <Link
            to="aboutme"
            smooth={true}
            hashSpy={true}
            duration={500}
            offset={-100}
          >
            Get to know me
          </Link>
        ),
        key: "AboutMe",
        icon: <FontAwesomeIcon icon={faAddressBook} />,
      },
      {
        label: (
          <Link
            to="experience"
            smooth={true}
            hashSpy={true}
            duration={500}
            offset={-100}
          >
            My experience
          </Link>
        ),
        key: "experience",
        icon: <FontAwesomeIcon icon={faBusinessTime} />,
      },
      {
        label: (
          <Link
            to="tech"
            smooth={true}
            hashSpy={true}
            duration={500}
            offset={-100}
          >
            Tech I've worked with
          </Link>
        ),
        key: "tech",
        icon: <FontAwesomeIcon icon={faCode} />,
      },
      {
        label: (
          <Link
            to="resume"
            smooth={true}
            hashSpy={true}
            duration={500}
            offset={-100}
          >
            My resume
          </Link>
        ),
        key: "resume",
        icon: <FontAwesomeIcon icon={faFile} />,
      },
    ];
  }, []);

  const handleNavClick = (e) => {};
  return (
    <>
      <Menu
        onClick={handleNavClick}
        style={{
          width: 256,
          height: 500,
        }}
        className="navigation main-bc font-robo"
        theme="dark"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default SideNav;
