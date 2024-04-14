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
        <Label htmlFor="fname">First Name:</Label>
        <Input type="text" id="fname" name="fname" />
        <Label htmlFor="lname">Last Name:</Label>
        <Input type="text" id="lname" name="lname" />
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" />
        {/* <Label htmlFor="phone">Phone No.:</Label>
        <Input type="text" id="phone" name="phone" /> */}
        <Label htmlFor="uname">Username:</Label>
        <Input type="text" id="uname" name="uname" />
        <Label htmlFor="subject">Password:</Label>
        <Input type="password" id="subject" name="subject" />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
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
`;
const Label = styled.label`
  margin-bottom: 5px;
  font-size: 13px;
  color: black;
`;
const Input = styled.input`
  padding: 8px;
//   margin-bottom: 15px;
  border: 1px solid #707070;
  border-radius: 8px;
  outline: none;
`;
const Button = styled.button`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
