import React from "react";
import styled from "styled-components";

export default function Login() {
    return(
        <Wrapper id="login">
            <div className="lightBg">
                <div className="container">
                    <HeaderInfo>
                        <br />
                        <h1 className="font40 extraBold">Login/ SignUp</h1>
                        <p className="font13">
                        Unlock the full potential of our platform. 
                        <br />
                        Sign up or log in now to access personalized financial insights and expert guidance tailored just for you.
                        </p>
                    </HeaderInfo>
                    <div className="row" style={{paddingBottom: "30px"}}>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <Form>
                                <label className="font13">Name: </label>
                                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                                <label className="font13">Email: </label>
                                <input type="email" id="email" name="email" className="font20 extraBold" />
                                <label className="font13">Password: </label>
                                <input type="password" id="subject" name="subject" className="font20 extraBold"/>
                            </Form>
                            <SumbitWrapper className="flex">
                            <ButtonInput type="submit" value="Submit" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
                            </SumbitWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 0px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;