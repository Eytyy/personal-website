import React from 'react'
import PropTypes from 'prop-types'

import { ProjectMetaItem, Collaborator, SubTitle } from './styles'

const ProjectCollaborators = ({ content }) => {
  return content ? (
    <ProjectMetaItem>
      <SubTitle>Collaborators</SubTitle>
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
