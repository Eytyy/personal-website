import React from 'react'
import PropTypes from 'prop-types'

import { ProjectMetaItem, ExternalProjectLink } from './styles'
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
      <h2>Links</h2>
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
