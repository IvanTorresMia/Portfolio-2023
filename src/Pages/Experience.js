import { Row, Col, Typography, Button } from "antd";
import React, { useCallback, useState } from "react";
import ReactIcon from "../icons/tech_logos/react-js-icon.png";
import AngularIcon from "../icons/tech_logos/angular-icon.png";
import cSharpIcon from "../icons/tech_logos/cSharp-icon.png";
import NextJsIcon from "../icons/tech_logos/nextjs-icon.png";
import DartJsIcon from "../icons/tech_logos/dart-icon.png";
import JsIcon from "../icons/tech_logos/js-icon.png";
import FlutterIcon from "../icons/tech_logos/flutter-icon.png";
import TsIcon from "../icons/tech_logos/ts-icon.png";
import HtmlIcon from "../icons/tech_logos/html-icon.png";
import CssIcon from "../icons/tech_logos/css-icon.png";

let { Text, Title } = Typography;

const companies = [
  {
    name: "Slain Tech",
    key: 0,
  },
  {
    name: "Rewired One",
    key: 1,
  },
  {
    name: "Anzenna",
    key: 2,
  },
  {
    name: "Aible AI",
    key: 3,
  },
  {
    name: "Bethel Tech",
    key: 4,
  },
];
const content = [
  {
    title: "Slain Tech",
    description: "Some description",
    icons: [ReactIcon, TsIcon, JsIcon],
  },

  {
    title: "Rewired One",
    description:
      "At Rewired I took part in building a mobile and web project using Next Js FLutter with dart and other fun libraries. ",
    icons: [DartJsIcon, FlutterIcon, NextJsIcon],
  },
  {
    title: "Anzenna",
    description:
      "At Anzenna I produced front end features using React Js and  multiple features with scalable code using technologies like AXIOS, Loadash, React, and ANTD design library. I was mentored under experienced full stack senior engineers having weekly training sessions for growing my skill set. Additionally I participated in daily standups updating the team on tickets that have been completed and what I am currently working on, as well as participated in reviewing code and giving feedback. I also had consistent communication with UI/UX designers converting feature design to code.",
    icons: [JsIcon, ReactIcon],
  },
  {
    title: "Able AI",
    description: "Some description",
    icons: [JsIcon, CssIcon, HtmlIcon],
  },
  {
    title: "Bethel Tech",
    description: "Some description",
    icons: [cSharpIcon, ReactIcon, JsIcon, AngularIcon],
  },
];

const Experience = () => {
  const [activeContent, setActiveContent] = useState(content[0]);
  const [activeButton, setActiveButton] = useState(0);

  const updateContent = useCallback((key) => {
    setActiveContent(content[key]);
    setActiveButton(key);
  }, []);

  return (
    <div
      className="h-vh main-bc d-flex flex-column v-60 m-auto"
      id="experience"
    >
      <div className="text-center m-b-l">
        <Title className="text-color-w title">The experience part</Title>
      </div>

      <div className="d-flex m-l-r w-60">
        {/* buttons */}
        <div className="d-flex flex-column w-30 p-m">
          {companies.map((c, i) => (
            <Button
              style={{ border: "none" }}
              className={`m-b-m main-black secondary-c text-left font-lg ${
                activeButton == c.key ? "active" : ""
              }`}
              key={i}
              onClick={() => updateContent(c.key)}
            >
              {c.name}
            </Button>
          ))}
        </div>
        {/* content */}
        <div className="w-80 p-m bc-blue border-radius-10">
          <div className="text-color-w font-xxl m-b-l">
            {activeContent.title || ""}
          </div>
          <div className="text-color-w ">{activeContent.description || ""}</div>
          <div className="d-flex">
            {activeContent.icons.map((icon, i) => (
              <div className="w-10 image-margin">
                <img src={icon} alt={i} className="w-100" />
              </div>
            ))}
          </div>
          <div className="text-right">
            <Button
              className="underline pointer text-color-w p-0 border-radius-0"
              type="link"
              href="https://docs.google.com/document/d/1maNpkxa5KXVrUPQFLhxNPJLqK-fk-TtTDdIiw01sqrk/edit?usp=sharing"
              target="_blank"
            >
              Read more in my resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
