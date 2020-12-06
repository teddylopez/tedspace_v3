import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResumeContainer = styled.div`
  padding: 5% 10% 5% 10%;
  background: #000;
  color: #fff;
`;
export const ResumeJobWrapper = styled.div`
  margin: 10px 0;
  margin-bottom: 50px;
`;

export const IconSpan = styled.span`
  padding: 0 60px;
`;

export const ResumeH1 = styled.h1`
  font-family: "Permanent Marker", cursive;
  transform: rotate(-4deg);
  color: #ff1744;
  text-align: center;
  font-size: 2.5rem;
`;

export const ResumeJobTitle = styled.h2`
  font-size: 1.75rem;
  color: #fff;
`;

export const ResumeJobCompany = styled.h3`
  color: #fff
  font-size: 2.5px;
`;

export const ResumeJobDesc = styled.div`
  color: #fff;
`;

export const ResumeJobTime = styled.h3`
  color: #fff
  font-size: 2.5px;
  margin-bottom: 10px;
`;

export const TrainingLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 5px;

  &:hover {
    color: #ff1744;
    transition: all 0.3s ease-in-out;
  }
`;
