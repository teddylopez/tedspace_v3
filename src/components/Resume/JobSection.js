import React from 'react'
import {ResumeJobTime, ResumeJobTitle, ResumeJobDesc, ResumeJobCompany} from "./ResumeElements"

function JobSection({title, company, time, desc}) {
  return (
    <>
    <ResumeJobTitle>{title}</ResumeJobTitle>
    <ResumeJobCompany>{company}</ResumeJobCompany>
    <ResumeJobTime>{time}</ResumeJobTime>
    <ResumeJobDesc>{desc}</ResumeJobDesc>
    </>
  )
}

export default JobSection
