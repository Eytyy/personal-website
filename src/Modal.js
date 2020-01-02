import React, { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import { ModalWrapper } from './Modal.styles'

const ModalStateContext = React.createContext()

function ModalProvider({ children }) {
  const [visible, setVisible] = useState(false)
  return (
    <ModalStateContext.Provider value={{ setVisible, visible }}>
      {children}
    </ModalStateContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

function useModal() {
  const context = useContext(ModalStateContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

const Modal = ({ children }) => {
  return createPortal(
    <ModalWrapper>{children}</ModalWrapper>,
    document.getElementById('modal')
  )
}

export default Modal

export { ModalProvider, useModal }
