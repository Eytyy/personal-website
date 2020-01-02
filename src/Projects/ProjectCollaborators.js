import React from 'react'
import PropTypes from 'prop-types'

import { ProjectMetaItem, Collaborator } from './styles'

const ProjectCollaborators = ({ content }) => {
  return content ? (
    <ProjectMetaItem>
      <h2>Collaborators</h2>
      {content.map(({ fields, sys }) => (
        <Collaborator key={sys.id}>
          <span className="name">{fields.name}</span>
          {Array.isArray(fields.role)
            ? fields.role.map((item, index) => (
                <span key={`${name}-role-${index}`}>{`${item} . `}</span>
              ))
            : fields.role}
        </Collaborator>
      ))}
    </ProjectMetaItem>
  ) : null
}

ProjectCollaborators.propTypes = {
  content: PropTypes.array
}

export default ProjectCollaborators
