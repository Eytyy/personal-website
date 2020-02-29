import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { fetchProject } from './actions'
import { UseStore } from './context'

import PageWithFixedHeader from '../PageWithFixedHeader'
import ProjectBlock from './ProjectBlock'
import ProjectCollaborators from './ProjectCollaborators'
import ProjectLinks from './ProjectLinks'
import MediaBlock from '../ContentBlocks/MediaBlock'

import {
  Header,
  Title,
  Brief,
  ContentBlock,
  Body,
  WebsiteLink,
  ProjectRole
} from './styles'

import { CommonStyles } from '../styles'

const Details = ({ match }) => {
  const { isLoading, content, dispatch } = UseStore(match.params.id)

  React.useEffect(() => {
    !content && fetchProject({ dispatch, id: match.params.id })
  }, [match.params.id])

  if (isLoading || !content) {
    return (
      <CommonStyles.Loading full big className="loading">
        <div className="c c1"></div>
        <div className="c c2"></div>
        <div className="c c3"></div>
        <div className="c c4"></div>
      </CommonStyles.Loading>
    )
  }

  const {
    title,
    brief,
    media,
    description,
    blocks,
    collaborators,
    links,
    link,
    role,
    autoplay,
    fullwidth
  } = content.fields

  return (
    <PageWithFixedHeader>
      {({ scrolled, headerRef }) => (
        <>
          <Header ref={headerRef} state={scrolled ? 'inside' : 'outside'}>
            <div className="header-top">
              {title && <Title className="main-title">{title}</Title>}
            </div>
          </Header>
          <ContentBlock>
            <Brief>{brief}</Brief>
            {role && <ProjectRole>{role}</ProjectRole>}
          </ContentBlock>
          <ContentBlock>
            <MediaBlock
              autoplay={autoplay}
              fullwidth={fullwidth}
              content={media}
            />
            <div className="brief">
              <Body>{description}</Body>
            </div>
          </ContentBlock>
          {blocks &&
            blocks.map(({ fields, sys }) => (
              <ProjectBlock
                autoplay={autoplay}
                fullwidth={fullwidth}
                key={sys.id}
                content={fields}
              />
            ))}
          {link && (
            <WebsiteLink>
              <a target="_blank" rel="noopener noreferrer" href={link}>
                visit website
              </a>
            </WebsiteLink>
          )}
          <div className="project_meta">
            <ProjectCollaborators content={collaborators} />
            <ProjectLinks content={links} />
          </div>
        </>
      )}
    </PageWithFixedHeader>
  )
}

Details.propTypes = {
  match: PropTypes.object
}

export default withRouter(Details)
