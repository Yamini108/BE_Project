import React from "react";
import styled from "styled-components";
import { registerUser } from "../../api/api";

export default function SignUp() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await registerUser({
        first_name: formData.get("fname"),
        last_name: formData.get("lname"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        username: formData.get("uname"),
        password: formData.get("subject"),
      });
      // Handle successful registration here
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" id="fname" name="fname" />
        <label>Last Name:</label>
        <input type="text" id="lname" name="lname" />
        <label>Email:</label>
        <input type="email" id="email" name="email" />
        <label>Phone No.:</label>
        <input type="text" id="phone" name="phone" />
        <label>Username:</label>
        <input type="text" id="uname" name="uname" />
        <label>Password:</label>
        <input type="password" id="subject" name="subject" />
        <button type="submit">Submit</button>
      </Form>
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
    margin-bottom: 10px;
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