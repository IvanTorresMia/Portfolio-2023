import React from "react";
import { Typography } from "antd";
let { Text, Title } = Typography;

const Hero = () => {

    return (
        <div className="h-vh main-bc d-flex justify-content-center flex-column align-items-center">
            <Title className="text-color-w">
                Ivan Torres
            </Title>
            <Text className="text-color-w secondary-c font-xl">
                Sofware engineer aka googling expert
            </Text>
        </div>
    )
}

export default Hero