import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

export const Ex6 = () => (
    <Flex align="center" gap="middle">
        <Spin indicator={<LoadingOutlined spin />} size="large" style={{color:"red"}}/>
        <Spin indicator={<LoadingOutlined spin />} size="large" style={{color:"green"}}/>
        <Spin indicator={<LoadingOutlined spin />} size="large" style={{color:"yellow"}}/>
    </Flex>
)
