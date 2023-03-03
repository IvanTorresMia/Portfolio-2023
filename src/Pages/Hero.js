import React from "react";
import { Typography } from "antd";
let { Text, Title } = Typography;

const Hero = () => {
  return (
    <div
      className="h-vh main-bc d-flex justify-content-center flex-column align-items-center"
      id="hero"
    >
      <Title className="text-color-w m-b-0">Ivan Torres</Title>
      <Title className="secondary-c font-xxl m-t-0 font-robo">
        Software Engineer
      </Title>
      <Text className="text-color-w font-xl w-40 text-center">
        <span className="secondary-c font-xxl font-robo">Hello there 👋 </span>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </div>
  );
};

export default Hero;
