import React from "react";
import {
  ResumeContainer,
  ResumeJobWrapper,
  ResumeH1,
  ResumeJobTitle,
  ResumeJobCompany,
  ResumeJobDesc,
  IconSpan,
  ResumeJobTime,
  TrainingLink,
  TrainingLinkWrapper,
} from "./ResumeElements";
import {
  jobOne,
  jobTwo,
  jobThree,
  jobFour,
  educationOne,
  educationTwo,
} from "../Resume/Data";
import JobSection from "./JobSection";

function Resume({ title, company, time, desc }) {
  return (
    <ResumeContainer id="experience">
      <ResumeH1>Experience</ResumeH1>

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

      <ResumeH1>Education</ResumeH1>

      <ResumeJobWrapper>
        <JobSection {...educationOne} />
      </ResumeJobWrapper>
      <ResumeJobWrapper>
        <JobSection {...educationTwo} />
      </ResumeJobWrapper>

      <ResumeH1>Training</ResumeH1>
      <ResumeJobWrapper>
        <TrainingLinkWrapper>
          <TrainingLink
            href="https://www.udemy.com/professional-rails-5-development-course/"
            target="_blank"
          >
            Dissecting Ruby on Rails 5: Become a Professional Developer
          </TrainingLink>
        </TrainingLinkWrapper>

        <TrainingLinkWrapper>
          <TrainingLink
            href="https://www.udemy.com/professional-ruby-on-rails-coding-course/"
            target="_blank"
          >
            Professional Rails Code Along
          </TrainingLink>
        </TrainingLinkWrapper>

        <TrainingLinkWrapper>
          <TrainingLink
            href="https://www.udemy.com/comprehensive-ruby-programming-tutorial/"
            target="_blank"
          >
            Comprehensive Ruby Programming
          </TrainingLink>
        </TrainingLinkWrapper>

        <TrainingLinkWrapper>
          <TrainingLink
            href="https://www.udemy.com/course/ruby-metaprogramming/"
            target="_blank"
          >
            Ruby Metaprogramming - Complete Course
          </TrainingLink>
        </TrainingLinkWrapper>

        <TrainingLinkWrapper>
          <TrainingLink
            href="https://www.udemy.com/react-2nd-edition/"
            target="_blank"
          >
            The Complete React Web Developer Course (with Redux)
          </TrainingLink>
        </TrainingLinkWrapper>

        <TrainingLinkWrapper>
          <TrainingLink
            href="https://www.udemy.com/understand-javascript/"
            target="_blank"
          >
            JavaScript: Understanding the Weird Parts
          </TrainingLink>
        </TrainingLinkWrapper>
        <TrainingLinkWrapper>
          <TrainingLink
            href="https://www.udemy.com/jquery-course"
            target="_blank"
          >
            The Complete jQuery Course: Beginner to Professional
          </TrainingLink>
        </TrainingLinkWrapper>
        <TrainingLinkWrapper>
          <TrainingLink
            href="https://www.udemy.com/course/the-complete-elixir-and-phoenix-bootcamp-and-tutorial/"
            target="_blank"
          >
            The Complete Elixir and Phoenix Bootcamp
          </TrainingLink>
        </TrainingLinkWrapper>
        <TrainingLinkWrapper>
          <TrainingLink
            href="https://www.udemy.com/ios11-app-development-bootcamp/"
            target="_blank"
          >
            iOS 11 & Swift 4: The Complete iOS App Development Bootkit
          </TrainingLink>
        </TrainingLinkWrapper>
        <TrainingLinkWrapper>
          <TrainingLink
            href="https://www.udemy.com/course/100-days-of-code/"
            target="_blank"
          >
            100 Days of Code - The Complete Python Pro Bootcamp for 2021
          </TrainingLink>
        </TrainingLinkWrapper>
      </ResumeJobWrapper>
    </ResumeContainer>
  );
}

export default Resume;
