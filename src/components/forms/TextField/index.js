import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Text from '../../foundation/Text'

const InputWrapper = styled.div`
  margin-bottom: 17px;
`

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ theme, isFieldInvalid }) =>
    isFieldInvalid &&
    css`
    border-color: ${theme.colors.error.main.color};
    & + span {
      color: ${theme.colors.error.main.color};
      font-size: 11px;
    }]
  `}
`

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1'
}

export default function TextField({ placeholder, name, onChange, value, error, isTouched, ...props }) {
  const hasError = Boolean(error)
  const isFieldInvalid = hasError && isTouched

  return (
    <InputWrapper>
      <Input
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isFieldInvalid={isFieldInvalid}
        {...props}
      />

      {isFieldInvalid && (
        <Text variant="smallestException" color="error.main" role="alert">
          {error}
        </Text>
      )}
    </InputWrapper>
  )
}

TextField.defaultProps = {
  error: '',
  isTouched: false
}

TextField.propTypes = {
  error: PropTypes.string,
  isTouched: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
}
