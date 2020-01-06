import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { fetchProject } from './actions'
import { UseStore } from './context'

import ProjectBlock from './ProjectBlock'
import ProjectCollaborators from './ProjectCollaborators'
import ProjectLinks from './ProjectLinks'

import {
  ProjectWrapper,
  Header,
  Title,
  ProjectSection,
  SubTitle,
  Body,
  ExternalProjectLink
} from './styles'

import MediaBlock from '../ContentBlocks/MediaBlock'
import { CommonStyles } from '../styles'

const Details = ({ match }) => {
  const [headerHeight, updateHeaderHeight] = React.useState(0)
  const [scrolled, updateScrolledState] = React.useState(false)

  const { isLoading, content, dispatch } = UseStore(match.params.id)

  const header = React.useRef()
  const heightRef = React.useRef(headerHeight)
  const scrolledRef = React.useRef(scrolled)

  React.useEffect(() => {
    !content && fetchProject({ dispatch, id: match.params.id })
  }, [match.params.id])

  React.useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', updateScrolled)
    return function cleanup() {
      window.removeEventListener('scroll', updateScrolled)
    }
  }, [])

  // update header height value if header dom node is not null
  // and the current header height is not equal to previous one
  React.useEffect(() => {
    if (header.current && header.current.offsetHeight !== heightRef.current) {
      updateHeaderHeight(header.current.offsetHeight)
      heightRef.current = header.current.offsetHeight
    }
  })

  // UpdateScrolled() is used to change the color of the header based on the winddow scroll position.
  //
  // Updates state.scrolled based on the window scroll position:
  //  - If scroll position is less the than header height and the state.scrolled  is true then set to false
  //  - If scroll position is greater than header height and the state.scrolled is false, then set to true.
  //  - Otherwise, return.
  //
  const updateScrolled = () => {
    if (
      !header.current ||
      (window.scrollY < heightRef.current && !scrolledRef.current) ||
      (window.scrollY > heightRef.current && scrolledRef.current)
    ) {
      return
    }
    updateScrolledState(prevState => !prevState)
    scrolledRef.current = !scrolledRef.current
  }

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
    role,
    link
  } = content.fields
  return (
    <ProjectWrapper headerHeight={headerHeight} className="project">
      <Header ref={header} state={scrolled ? 'inside' : 'outside'}>
        <div className="header-top">
          {title && <Title className="main-title">{title}</Title>}
        </div>
        {role && <div className="role">{role}</div>}
      </Header>
      <ProjectSection>
        <MediaBlock content={media} />
        <SubTitle>{brief}</SubTitle>
        <Body>{description}</Body>
        {link && (
          <ExternalProjectLink target="_blank" href={link}>
            view website
          </ExternalProjectLink>
        )}
      </ProjectSection>
      {blocks &&
        blocks.map(({ fields, sys }) => (
          <ProjectBlock key={sys.id} content={fields} />
        ))}

      <div className="project_meta">
        <ProjectCollaborators content={collaborators} />
        <ProjectLinks content={links} />
      </div>
    </ProjectWrapper>
  )
}

Details.propTypes = {
  match: PropTypes.object
}

export default withRouter(Details)
