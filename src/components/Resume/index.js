import React from 'react'
import {ResumeContainer, ResumeJobWrapper, ResumeH1, ResumeJobTitle, ResumeJobCompany, ResumeJobDesc, IconSpan, ResumeJobTime} from "./ResumeElements"
import {jobOne, jobTwo, jobThree, jobFour} from "../Resume/Data"
import JobSection from "./JobSection"

function Resume({title, company, time, desc}) {
  return (
    <ResumeContainer id="experience">
      <ResumeH1>
        Experience
      </ResumeH1>

      <ResumeJobWrapper>
        <JobSection {...jobOne} />
      </ResumeJobWrapper>
      <ResumeJobWrapper>
        <JobSection {...jobTwo} />
      </ResumeJobWrapper>
      <ResumeJobWrapper>
        <JobSection {...jobThree} />
      </ResumeJobWrapper>
      <ResumeJobWrapper>
        <JobSection {...jobFour} />
      </ResumeJobWrapper>
    </ResumeContainer>
  )
}

export default Resume
