import React from 'react'
import styled from 'styled-components'

import { CommonStyles, vars } from './styles'

const ContactList = styled(CommonStyles.List)`
  margin-top: 1.5em;
  li {
    margin-bottom: ${vars.layout.gutter_mobile / 2}px;
  }
`

const ContactStyles = styled.section`
  max-width: 620px;
  font-size: 22px;
  em {
    font-family: ${vars.fonts.bold};
    font-style: normal;
    margin-right: 5px;
  }
  @media (min-width: ${vars.layout.desktop}px) {
    font-size: 26px;
  }
`

const Info = () => {
  return (
    <ContactStyles className="contact">
      <div className="info">
        <p>
          I&apos;m an Interaction designer and software engineer focusing on
          incorporating design and technology to research, design and build
          simple solutions for complicated problems.
        </p>
        <p>
          My work spans across a variety of domains ranging from front-end
          development, UX and UI design, Interactive Installations, to research
          and planning.
        </p>
        <p>
          Previously, I have worked as a Digital Team Lead at Syntax Design, and
          as a Front-end Development team lead at Spring Technologies.
        </p>
      </div>

      <ContactList className="contact-list">
        <li>
          <em>Email</em>
          <a
            className="contact__item__link"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:e.tayyem@gmail.com"
          >
            e.tayyem@gmail.com
          </a>
        </li>

        <li>
          <em>Phone</em>
          <a className="contact__item__link" href="tel:00962796659649">
            +962 79 6659 649
          </a>
        </li>

        <li>
          <em className="contact__item__name">Code</em>
          <a
            className="contact__item__link"
            href="https://github.com/Eytyy"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/Eytyy
          </a>
        </li>
      </ContactList>
    </ContactStyles>
  )
}

export default Info
