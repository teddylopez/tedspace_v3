import React from 'react';
import emailjs from 'emailjs-com';
import {ContactContainer, ContactHeader, ContactForm, HiddenBtn, ContactInputField, ContactInputTextArea, ContactBtn} from "./ContactElements"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      `${process.env.REACT_APP_SERVICE_KEY}`,
      `${process.env.REACT_APP_TEMPLATE_KEY}`,
      e.target,
      `${process.env.REACT_APP_USER_KEY}`
      )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    toast("Thank you for contacting me! I'll get back to you soon.")
  }

  return (
    <ContactContainer id="contact">
      <ContactHeader>Contact Me</ContactHeader>
      <ContactForm onSubmit={sendEmail}>
        <HiddenBtn type="hidden" name="contact_number" />
        <ContactInputField type="text" name="from_name" placeholder="Name" />
        <ContactInputField type="text" name="from_email" placeholder="Email" />
        <ContactInputField type="text" name="subject" placeholder="Subject" />
        <ContactInputTextArea name="message" placeholder="..."/>
        <ContactBtn type="submit">Send Complaint</ ContactBtn>
      </ContactForm>
    </ContactContainer>
  )
}

export default Contact
