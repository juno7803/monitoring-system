import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import khuLogo from '../assets/img/khu-logo.png';

import {
  Container,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Button,
  CardFooter,
} from 'reactstrap';

function SignIn({ history }: any) {
  const [form, setForm] = useState({ id: '', password: '' });
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // userdata API 를 받아오는 thunk 함수 - 비동기 처리를 위해 Promise로 만듦
  // const getUserApi = () => {
  //   return new Promise((resolve) => {
  //     resolve(dispatch(getUserThunk(form)));
  //   });
  // };

  const onClick = async () => {
    // await getUserApi();
    // token이 저장되길 기다린 후
    const token = JSON.parse(localStorage.getItem('userInfo') || '{}').token;
    // 토큰 확인
    if (token) {
      history.push('/');
    }
  };

  return (
    <>
      <Container>
        <Card>
          <CardHeader>
            <h4 className="title">KHU-CARE 로그인</h4>
          </CardHeader>
          <CardBody className="d-flex flex-column align-items-center">
            <br />
            <br />
            <br />
            <div className="text-center">
              <img alt="khu" src={khuLogo} style={{ width: '400px' }} />
            </div>
            <FormGroup>
              <label>&nbsp;아이디</label>
              <Input
                type="text"
                name="id"
                placeholder="ID"
                autoComplete="off"
                onChange={onChange}
                style={{
                  minWidth: '600px',
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>&nbsp;비밀번호</label>
              <Input
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="Password"
                onChange={onChange}
                style={{
                  minWidth: '600px',
                }}
              />
            </FormGroup>
            <Button
              className="btn-fill float-right"
              color="info"
              onClick={onClick}
              style={{
                minWidth: '600px',
                marginTop: '20px',
                marginBottom: '100px'
              }}
            >
              로그인
            </Button>
          </CardBody>
          <CardFooter className="d-flex justify-content-center"></CardFooter>
        </Card>
      </Container>
    </>
  );
}

export default SignIn;
