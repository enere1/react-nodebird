import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu , Input , Row , Col} from 'antd';
import styled from 'styled-components' 
import UserProfile from './UserProfile'
import LoginForm from './LoginForm'
import { useSelector} from 'react-redux'

//컴포넌트 커스터마이징은 
const SearchInput = styled(Input.Search)`
    verticalAlign : "middle"
`

const AppLayout = ({children}) => {
    //isLoggedIn가 바뀌면 알아서 리렌더링
    const {isLoggedIn} = useSelector(state=>state.user);
    return (
        <div>
            <Menu mode = "horizontal">
                <Menu.Item>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}> 
                    {
                        isLoggedIn ? <UserProfile />  : <LoginForm />
                    }
                </Col>
                <Col xs={24} md={6}> 
                    {children}
                </Col>
                <Col xs={24} md={6}> 
                    <a href="https://zerocho.com" target="_blank" rel="noreferrer noopener">Made in Zerocho</a>
                </Col>
            </Row>
            
        </div>
    )
}

AppLayout.prototype = {
    children: PropTypes.node.isRequired,
};

export default AppLayout