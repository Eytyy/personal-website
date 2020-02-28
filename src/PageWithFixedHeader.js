import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { vars } from './styles'

const Styles = styled.div`
  margin-top: ${({ headerHeight }) =>
    headerHeight > 0 ? `${headerHeight - 20}px` : '75px'};
  @media (min-width: ${vars.breakpoints.tablet}px) {
    margin-top: ${({ headerHeight }) =>
      headerHeight > 0 ? `${headerHeight - 30}px` : '75px'};
  }
  @media (min-width: ${vars.breakpoints.desktop}px) {
    margin-top: ${({ headerHeight }) =>
      headerHeight > 0 ? `${headerHeight - 40}px` : '75px'};
  }
`

/* PageWithFixedHeader()

  Allows pages with fixed header, to update the content styles based on the scroll position and headerHeight: 
    - headerHeight<int> can be used to apply margin-top for page content.
    - headerRef is passed as a prop to the children render prop, and should be added as a ref to the header; i.e. <Header ref={headerRef} />
    - scrolled<bool> can be used to apply different styling for the page when scrolled past the header element.
    - headeHeight and scrolled can be used in the Styles component for generic styling, or can be passed through
      the children render prop.
*/
function PageWithFixedHeader({ children, pageName }) {
  const [headerHeight, updateHeaderHeight] = React.useState(0)
  const [scrolled, updateScrolledState] = React.useState(false)

  const headerRef = React.useRef()
  const heightRef = React.useRef(headerHeight)
  const scrolledRef = React.useRef(scrolled)

  React.useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', updateScrolled)
    return function cleanup() {
      window.removeEventListener('scroll', updateScrolled)
    }
  }, [])

  /* Only update headerHeight value when headerRef.current is not null and headerHeight value has changed */
  React.useEffect(() => {
    if (
      headerRef.current &&
      headerRef.current.offsetHeight !== heightRef.current
    ) {
      updateHeaderHeight(headerRef.current.offsetHeight)
      heightRef.current = headerRef.current.offsetHeight
    }
  })

  /* 
  Updates scrolled based on the window.scrollY and headerHeight values:
   - If window.scrollY is less than headerHeight and scrolled is true; set scrolled to false
   - If window.scrollY is greater than headerHeight and the scrolled is false; set to true.
	 - otherwise, safeguard and return.
	 */

  const updateScrolled = () => {
    if (
      !headerRef.current ||
      (window.scrollY < heightRef.current && !scrolledRef.current) ||
      (window.scrollY > heightRef.current && scrolledRef.current)
    ) {
      return
    }
    updateScrolledState(prevState => !prevState)
    scrolledRef.current = !scrolledRef.current
  }

  return (
    <Styles headerHeight={headerHeight} className={pageName}>
      {children({ scrolled, headerRef })}
    </Styles>
  )
}

PageWithFixedHeader.propTypes = {
  children: PropTypes.func,
  pageName: PropTypes.string
}

PageWithFixedHeader.defaultProps = {
  pageName: ''
}

export default PageWithFixedHeader
