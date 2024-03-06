import { useState, useEffect } from 'react'

const useInputValidation = (maxLength: number, inputValue: string): boolean => {
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    if (inputValue.length > maxLength) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [inputValue, maxLength])

  return isValid
}

export default useInputValidation