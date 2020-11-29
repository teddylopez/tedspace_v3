import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 5% 0;
  height: 800px;
  background: url("/images/nats_win.jpg");
  background-size: cover;
  background-attachment: fixed;
  margin: 0 auto;
  background-color: red;
  overflow: hidden;
`

export const ContactHeader = styled.h1`
  font-family: 'Permanent Marker', cursive;
  transform: rotate(-4deg);
  color: #ff1744;
  text-align: center;
  font-size: 2.5rem;
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HiddenBtn = styled.button`
`

export const ContactBtn = styled.button`
  border-radius: 50px;
  background: #ff1744;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`

export const ContactInputField = styled.input`
  margin: 10px 0;
  width: 400px;
  height: 40px;
  padding: 5px;

  @media screen and (max-width: 768px) {
    width: 230px;
  }
`

export const ContactInputTextArea = styled.textarea`
  margin: 10px 0;
  padding: 5px;
  width: 800px;
  height: 400px;
  outline: none;

  @media screen and (max-width: 768px) {
    width: 230px;
    height: 300px;
  }
`
