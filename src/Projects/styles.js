import styled, { css } from 'styled-components'
import { vars } from '../styles'

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
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
  padding: 20px 40px 20px;
  color: ${props => (props.state === 'inside' ? vars.colors.blue : '#000')};
  mix-blend-mode: hard-light;
  transition: color 200ms ease-in-out;

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
  font-family: ${vars.fonts.bold};
  font-size: 24px;
  text-transform: lowercase;

  @media (min-width: ${vars.breakpoints.tablet}px) {
    font-size: 26px;
  }

  @media (min-width: ${vars.breakpoints.desktop}px) {
    font-size: 28px;
  }
`

export const BlockStyle = css`
  margin-bottom: 60px;
  @media (min-width: ${vars.breakpoints.desktop}px) {
    margin-bottom: 120px;
  }
`

export const Brief = styled.h2`
  font-family: ${vars.fonts.regular};
  text-transform: lowercase;
  font-size: 28px;
  line-height: 1;
  max-width: 1440px;

  @media (min-width: ${vars.breakpoints.mobile}px) {
    font-size: 38px;
  }

  @media (min-width: ${vars.breakpoints.tablet}px) {
    font-size: 42px;
  }

  @media (min-width: ${vars.breakpoints.laptop}px) {
    font-size: 82px;
  }

  @media (min-width: ${vars.breakpoints.desktop}px) {
    font-size: 102px;
  }
`

export const ProjectRole = styled.div`
  margin-top: 20px;
  font-size: 20px;

  @media (min-width: ${vars.breakpoints.tablet}px) {
    font-size: 22px;
  }

  @media (min-width: ${vars.breakpoints.desktop}px) {
    font-size: 24px;
    margin-top: 40px;
  }
`
export const SubTitle = styled.h2`
  font-family: ${vars.fonts.bold};
  font-size: 28px;
  line-height: 1;
  max-width: 1020px;
  margin: 0px 0px 10px;

  @media (min-width: ${vars.breakpoints.mobile}px) {
    font-size: 38px;
    margin: 0px 0px 15px;
  }

  @media (min-width: ${vars.breakpoints.tablet}px) {
    font-size: 42px;
  }

  @media (min-width: ${vars.breakpoints.desktop}px) {
    margin: 0px 0px 30px;
    font-size: 62px;
  }
`

export const Body = styled.div`
  max-width: 980px;
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
    font-size: 24px;
  }
`

export const ContentBlock = styled.div`
  ${BlockStyle}
  .brief {
    margin-top: 40px;
  }
  .block-text {
    margin-bottom: 40px;
  }
  @media (min-width: ${vars.breakpoints.desktop}px) {
    margin-bottom: 120px;
    .brief {
      margin-top: 60px;
    }
    .block-text {
      margin-bottom: 60px;
    }
  }
`

export const ExternalProjectLinkStyle = css`
  color: ${vars.colors.blue};
  font-size: 16px;

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

export const WebsiteLink = styled.div`
  ${BlockStyle}
  font-size: 28px;
  line-height: 1;

  a {
    color: ${vars.colors.blue};
    text-decoration: underline;
  }

  @media (min-width: ${vars.breakpoints.mobile}px) {
    font-size: 38px;
  }

  @media (min-width: ${vars.breakpoints.tablet}px) {
    font-size: 42px;
  }

  @media (min-width: ${vars.breakpoints.desktop}px) {
    font-size: 62px;
  }
`

export const ProjectMetaItem = styled(ContentBlock)`
  line-height: 1.5em;

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
  }

  @media (min-width: ${vars.breakpoints.desktop}px) {
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
