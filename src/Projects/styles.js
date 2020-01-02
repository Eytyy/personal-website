import styled from 'styled-components'
import { vars, CommonStyles } from '../styles'

// export const ProjectWrapper = styled.article`
//   padding: ${vars.layout.gutter_mobile * 3}px ${vars.layout.gutter_mobile * 2}px
//     ${vars.layout.gutter_mobile * 2}px;

//   @media (min-width: ${vars.breakpoints.mobile}px) {
//     padding: ${vars.layout.gutter_mobile * 4}px
//       ${vars.layout.gutter_mobile * 3}px ${vars.layout.gutter_mobile * 3}px;
//   }
//   @media (min-width: ${vars.breakpoints.desktop}px) {
//     padding: ${vars.layout.gutter_desktop * 3}px
//       ${vars.layout.gutter_desktop * 2}px ${vars.layout.gutter_desktop * 2}px;
//   }
// `

export const ListItem = styled.li`
  line-height: 16px;
  position: relative;
  margin-bottom: 20px;
  .state {
    font-family: ${vars.fonts.bold};
    font-size: 12px;
    color: ${vars.colors.blue};
  }
  &:hover a {
    color: ${vars.colors.blue};
    .arrow {
      stroke: ${vars.colors.blue};
    }
    .state {
      color: #000;
    }
  }
`

export const ListItemTag = styled.div`
  font-size: 12px;
  display: block;

  @media (min-width: ${vars.breakpoints.tablet}px) {
    font-size: 14px;
  }
`

export const ListItemTitle = styled.h3`
  font-size: 26px;
  margin-right: 10px;
  line-height: 1.3;
  font-family: ${vars.fonts.bold};
  svg {
    margin-right: 5px;
  }

  @media (min-width: ${vars.breakpoints.mobile}px) {
    font-size: 38px;
  }
  @media (min-width: ${vars.breakpoints.desktop}px) {
    font-size: 42px;
  }
`

export const Header = styled.header`
  padding: 20px 40px 20px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
  color: ${props => (props.state === 'inside' ? vars.colors.blue : '#000')};
  mix-blend-mode: hard-light;
  transition: color 200ms ease-in-out;
  .role {
    max-width: 920px;
  }

  @media (min-width: ${vars.breakpoints.tablet}px) {
    padding: 30px 60px 30px;
  }
  @media (min-width: ${vars.breakpoints.desktop}px) {
    font-size: 22px;
    padding: 40px 80px 40px;
  }
`

export const ProjectWrapper = styled.div`
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

export const Title = styled.h1`
  ${CommonStyles.BigType}
  display: inline;
`

export const SubTitle = styled.h2`
  font-family: ${vars.fonts.title};
  font-size: 28px;
  line-height: 1;
  max-width: 920px;
  margin: 20px 0 10px;

  @media (min-width: ${vars.breakpoints.mobile}px) {
    margin: 30px 0 15px;
    font-size: 38px;
  }

  @media (min-width: ${vars.breakpoints.tablet}px) {
    font-size: 42px;
  }

  @media (min-width: ${vars.breakpoints.laptop}px) {
    font-size: 42px;
  }

  @media (min-width: ${vars.breakpoints.desktop}px) {
    margin: 60px 0 30px;
    font-size: 62px;
  }
`

export const Body = styled.div`
  max-width: 920px;
  line-height: 1.5em;

  @media (min-width: ${vars.breakpoints.mobile}px) {
    font-size: 16px;
  }

  @media (min-width: ${vars.breakpoints.tablet}px) {
    font-size: 18px;
    .project__bottom & {
      font-size: 16px;
    }
  }

  @media (min-width: ${vars.breakpoints.desktop}px) {
    font-size: 22px;
  }
`

export const ProjectSection = styled.div`
  margin-bottom: 40px;
  @media (min-width: ${vars.breakpoints.desktop}px) {
    margin-bottom: 80px;
  }
`

export const ExternalProjectLink = styled.a`
  color: ${vars.colors.blue};
  font-size: 16px;
  font-family: ${vars.fonts.bold};

  @media (min-width: ${vars.breakpoints.mobile}px) {
    font-size: 18px;
  }

  @media (min-width: ${vars.breakpoints.tablet}px) {
    font-size: 20px;
  }

  @media (min-width: ${vars.breakpoints.desktop}px) {
    font-size: 24px;
  }
`

export const ProjectMetaItem = styled.div`
  margin-bottom: 20px;
  line-height: 1.5em;

  h2 {
    font-family: ${vars.fonts.bold};
    margin-bottom: 10px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .link {
    word-break: break-all;
    text-decoration: none;

    display: block;

    .icon {
      width: 20px;
      top: 5px;
      transform: none;
      position: absolute;
      left: -30px;
    }

    &:hover {
      color: ${vars.colors.blue};
    }
  }

  @media (min-width: ${vars.breakpoints.tablet}px) {
    font-size: 18px;
    margin-bottom: 30px;
  }

  @media (min-width: ${vars.breakpoints.desktop}px) {
    margin-bottom: 40px;
    font-size: 22px;
  }
`

export const Collaborator = styled.div`
  line-height: 1.2em;
  margin: 10px 0px;
  .name {
    margin-right: 10px;
    font-family: ${vars.fonts.bold};
  }
`

export const Nav = styled.nav``
