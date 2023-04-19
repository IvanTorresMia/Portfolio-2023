import { Row, Col, Typography, Button } from "antd";
import React, { useCallback, useState } from "react";
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
  },
  {
    title: "Rewired One",
    description: "Some description",
  },
  {
    title: "Anzenna",
    description: "Some description",
  },
  {
    title: "Able AI",
    description: "Some description",
  },
  {
    title: "Bethel Tech",
    description: "Some description",
  },
];

const Experience = () => {
  const [activeContent, setActiveContent] = useState(content[0]);

  const updateContent = useCallback((key) => {
    setActiveContent(content[key]);
  }, []);

  return (
    <div
      className="h-vh main-bc d-flex flex-column v-60 m-auto"
      id="experience"
    >
      <div className="text-center">
        <Title className="text-color-w title">The experience part</Title>
      </div>

      <div className="d-flex m-l-r w-40">
        {/* buttons */}
        <div className="d-flex flex-column w-20 p-m">
          {companies.map((c, i) => (
            <Button
              style={{ border: "none" }}
              className="m-b-m main-black secondary-c text-left font-lg active"
              key={i}
              onClick={() => updateContent(c.key)}
            >
              {c.name}
            </Button>
          ))}
        </div>
        {/* content */}
        <div className="w-80 p-m">
          <div className="text-color-w font-xxl m-b-l">
            {activeContent.title || ""}
          </div>
          <div className="text-color-w ">{activeContent.description || ""}</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
