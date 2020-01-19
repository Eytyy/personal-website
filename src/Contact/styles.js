import React from 'react'
import styled, { css } from 'styled-components'

import { CommonStyles, vars } from '../Styles'

export const Form = styled.form`
  ${CommonStyles.FixedWrapperStyle}
`

export const FormGroup = styled.div`
  margin-bottom: 40px;
`

export const Label = styled.label`
  display: block;
  color: #666;
`

const SharedFormFieldsStyles = css`
  ${CommonStyles.strippedFormElementStyle}
  ${CommonStyles.BigType}
	line-height: 1.2;
  color: #000;
  width: 100%;
  max-width: 100%;
`

export const TextField = styled.input`
  ${SharedFormFieldsStyles};
`
export const TextArea = styled.textarea`
  ${SharedFormFieldsStyles};
`

export const Select = styled.select`
  ${SharedFormFieldsStyles};
`

export const Button = styled.button`
  ${CommonStyles.strippedFormElementStyle}
  ${CommonStyles.BigType}
  color: ${vars.colors.blue};
`

export const PageTitle = styled.h1`
  ${CommonStyles.BigType}
  margin-bottom: 40px;
`
