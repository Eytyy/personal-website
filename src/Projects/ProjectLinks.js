import React from 'react'
import PropTypes from 'prop-types'

import { ProjectMetaItem, ExternalProjectLink, SubTitle } from './styles'
import styled from 'styled-components'

const Link = styled(ExternalProjectLink)`
  margin-bottom: 10px;
  display: inline-block;
  word-break: break-word;
  &:hover {
    color: black;
  }
`

const ProjectLinks = ({ content }) =>
  content ? (
    <ProjectMetaItem>
      <SubTitle>Links</SubTitle>
      {content.map((item, index) => (
        <Link href={item} target="_blank" key={`link-${index}`}>
          {item}
        </Link>
      ))}
    </ProjectMetaItem>
  ) : null

ProjectLinks.propTypes = {
  content: PropTypes.array
}

export default ProjectLinks
