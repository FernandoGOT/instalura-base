import React from 'react'

export const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = React.useState(initialValues)

  const handleChange = (event) => {
    const fieldValue = event.target.value
    const fieldName = event.target.getAttribute('name')

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: fieldValue
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(values)
  }

  return {
    values,
    handleChange,
    handleSubmit
  }
}

export default {
  useForm
}
