import React from 'react'

const formatErrors = (yupErrorsInner = []) =>
  yupErrorsInner.reduce((errorObjectAcc, currentError) => {
    const fieldName = currentError.path
    const errorMessage = currentError.message

    return {
      ...errorObjectAcc,
      [fieldName]: errorMessage
    }
  }, {})

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

  const validateValues = async (currentValues) => {
    try {
      await validateSchema(currentValues)
      setErrors({})
      setIsFormDisabled(false)
    } catch (err) {
      const formatedErrors = formatErrors(err.inner)

      setErrors(formatedErrors)
      setIsFormDisabled(true)
    }
  }

  React.useEffect(() => {
    validateValues(values).catch((err) => {
      console.error(err)
    })
  }, [values])

  return {
    errors,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    touchedFields,
    isFormDisabled,
    setIsFormDisabled
  }
}

export default {
  useForm
}
