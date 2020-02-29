import React from 'react'
import PropTypes from 'prop-types'

import MediaBlock from '../ContentBlocks/MediaBlock'
import { ContentBlock, SubTitle, Body } from './styles'

const ProjectBlock = ({ content }) => {
  const { description, media, title, showTitle, autoplay, fullwidth } = content
  return (
    <ContentBlock>
      <div className="block-text">
        {showTitle && title && <SubTitle>{title}</SubTitle>}
        {description && <Body>{description}</Body>}
      </div>
      {media && (
        <MediaBlock
          className="media-block"
          autoplay={autoplay}
          fullwidth={fullwidth}
          content={media}
        />
      )}
    </ContentBlock>
  )
}

ProjectBlock.propTypes = {
  content: PropTypes.object,
  fullwidth: PropTypes.bool,
  autoplay: PropTypes.bool
}

export default ProjectBlock
