import React from 'react'

export const useForm = ({ initialValues, onSubmit, validateSchema }) => {
  const [errors, setErrors] = React.useState({})
  const [values, setValues] = React.useState(initialValues)
  const [touchedFields, setTouchedFields] = React.useState({})
  const [isFormDisabled, setIsFormDisabled] = React.useState(true)

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

  const handleBlur = (event) => {
    const fieldName = event.target.getAttribute('name')

    setTouchedFields({
      ...touchedFields,
      [fieldName]: true
    })
  }

  React.useEffect(() => {
    validateSchema(values)
      .then(() => {
        setErrors({})
        setIsFormDisabled(false)
      })
      .catch((err) => {
        const formatedErrors = err.inner.reduce((errorObjectAcc, currentError) => {
          const fieldName = currentError.path
          const errorMessage = currentError.message

          return {
            ...errorObjectAcc,
            [fieldName]: errorMessage
          }
        }, {})

        setErrors(formatedErrors)
        setIsFormDisabled(true)
      })
  }, [values])

  return {
    errors,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    touchedFields,
    isFormDisabled
  }
}

export default {
  useForm
}
