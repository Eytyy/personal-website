import React from 'react'
import PropTypes from 'prop-types'

import MediaBlock from '../ContentBlocks/MediaBlock'
import { ProjectSection, SubTitle, Body } from './styles'

const ProjectBlock = ({ content }) => {
  const { description, media, title, showTitle } = content

  return (
    <ProjectSection>
      {media && <MediaBlock className="media-block" content={media} />}
      {showTitle && title && <SubTitle>{title}</SubTitle>}
      {description && <Body>{description}</Body>}
    </ProjectSection>
  )
}

ProjectBlock.propTypes = {
  content: PropTypes.object
}

export default ProjectBlock
