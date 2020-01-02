import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { fetchWork } from './actions'
import { UseStore } from './context'

import { CommonStyles } from '../styles'
import { ListItem, ListItemTag, ListItemTitle } from './styles'
import ExternalLinkIcon from '../icons/externalLink'

const Landing = () => {
  const { isLoading, content, dispatch } = UseStore()

  React.useEffect(() => {
    if (!content || content.length <= 1) fetchWork({ dispatch })
  }, [])

  return isLoading ? (
    <CommonStyles.Loading className="loading">
      <div className="c c1"></div>
      <div className="c c2"></div>
      <div className="c c3"></div>
      <div className="c c4"></div>
    </CommonStyles.Loading>
  ) : (
    <CommonStyles.List>
      {content.map(({ fields, sys }) => {
        const { title, category, link, format, slug, state } = fields

        return (
          <ListItem key={sys.id} className="projects-list__item">
            {format && format === 'Expanded' ? (
              <Link to={`/work/${slug}`}>
                {state && state === 'in-progress' && (
                  <div className="state">{state}</div>
                )}
                <ListItemTitle className="projects-list__item__title">
                  {title}
                </ListItemTitle>
                <ListItemTag className="projects-list__item__tagline">
                  {category.map(({ fields, sys }) => (
                    <span className="category" key={sys.id}>
                      {fields.name}
                    </span>
                  ))}
                </ListItemTag>
              </Link>
            ) : link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <ListItemTitle className="title">
                  <ExternalLinkIcon />
                  {title}
                </ListItemTitle>
                <ListItemTag className="projects-list__item__tagline">
                  {category.map(({ fields, sys }) => (
                    <span className="category" key={sys.id}>
                      {fields.name}
                    </span>
                  ))}
                </ListItemTag>
              </a>
            ) : (
              <span className="unpublished-link">
                <h3 className="projects-list__item__title">{title}</h3>
              </span>
            )}
          </ListItem>
        )
      })}
    </CommonStyles.List>
  )
}

Landing.propTypes = {
  content: PropTypes.array
}

export default Landing
