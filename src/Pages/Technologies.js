import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faJs, faNpm, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { fadata } from '@fortawesome/free-regular-svg-icons'
import { faDatabase } from "@fortawesome/free-solid-svg-icons"


import { Typography } from "antd";
import { Progress } from 'antd';
let { Text, Title } = Typography;

const strokeColor = "#006d75";
const trailColor = "#fff"
const Technologies = () => {

    const technologies = useMemo(() => {
        return [
            {
                icon: faJs,
                text: "JavaScript",
                percent: 90
            },
            {
                icon: faReact,
                text: "React JS",
                percent: 80
            },
            {
                icon: faAngular,
                text: "Angular",
                percent: 50
            },
            {
                icon: faDatabase,
                text: "SQL, Mongo",
                percent: 60
            },
            {
                icon: faNpm,
                text: "Node Js",
                percent: 80
            },
            {
                icon: faGithub,
                text: "Git, GitHub",
                percent: 85
            },


        ]
    }, [])

    return (
        <div className='h-vh main-bc d-flex flex-column w-60 m-auto text-center'>
            <Title className='text-color-w p-b-l'>
                Some technologies I have worked with
            </Title>
            {technologies.map((item, i) => (
                <div key={i} className='d-flex p-b-xl'>
                    <div className='icon-section d-flex flex-column' style={{ width: "200px" }}>
                        <FontAwesomeIcon icon={item.icon} className='p-r-sm fa-lg' />
                        <Text className='text-color-w font-lg'>{item.text}</Text>
                    </div>
                    <Progress style={{ color: "white !important" }} strokeColor={strokeColor} trailColor={trailColor} className='text-color-w' percent={item.percent} />
                </div>
            ))}
            <div className='d-flex flex-column'>
                <Text className='text-color-w font-xxl'>
                    I've also worked with
                </Text>

                <Text className='text-color-w'>Loadash, Express, C#, Entity Framework, Antd Design, Bootstrap, Material UI and more... </Text>
            </div>
        </div>
    )
}

export default Technologies;