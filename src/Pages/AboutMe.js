import React from "react";
import ProfileImage from "../Images/profile-pic.jpeg";
import { Image } from "antd";
import { Typography } from "antd";
let { Text, Title } = Typography;

const AboutMe = () => {
  return (
    <div
      className="d-flex justify-content-between w-60 m-auto h-vh"
      id="aboutme"
    >
      <div className="p-m">
        <Image width={400} src={ProfileImage} alt="Ivan-Torres" />
      </div>
      <div className="text-color-w d-flex flex-column text-center p-m">
        <Title className="font-xxl secondary-c title">Who is this guy?</Title>
        <Text className="text-color-w font-16 p-b-m">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text className="text-color-w font-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
          <span className="secondary-c">
            ed do eiusmod tempor incididunt ut{" "}
          </span>{" "}
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Text>
      </div>
    </div>
  );
};

export default AboutMe;
