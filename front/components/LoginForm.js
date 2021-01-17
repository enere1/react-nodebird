import React , {useCallback, useState ,useMemo} from 'react'
import { Button, Form , Input , Space} from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput'
import Link from 'next/link'
import styled from 'styled-components'
import { loginAction } from '../reducers/user'

const ButtonWrapper = styled.div`
    margin-Top : 10px;
`
const FormWrapper = styled(Form)`
    padding : 10px;
`;


const LoginForm = () => {
    const dispatch = useDispatch();
    const [id,handleChangeId] = useInput('');
    const [password,handleChangePassword] = useInput('');
    
    const handleSubmit = useCallback(()=>{
        console.log(id,password);
        dispatch(loginAction({id,password}))
    },[id,password])

    return (
        <FormWrapper onFinish={handleSubmit} style={{pedding: '10px'}}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <input name="user-id" value={id} onChange={handleChangeId} required/>
            </div>
            <div>            
                <Space direction="vertical">
                <Input.Password placeholder="input password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                name="user-password" value={password} onChange={handleChangePassword} required/>
                </Space>
            </div> 
            <div >
            <ButtonWrapper>
                    <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
            </div>
 
        </FormWrapper>
    )
}

export default LoginForm