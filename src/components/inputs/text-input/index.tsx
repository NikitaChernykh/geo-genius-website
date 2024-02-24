import { useEffect, useState } from 'react'
import styles from './text-input.module.scss'

type TextInputProps = {
  placeholder?: string
  error: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
  placeholder,
  error,
  ...textInputProps
}: TextInputProps) => {
  const [shake, setShake] = useState(false)

  useEffect(() => {
    if (error) {
      setShake(true)
      const timer = setTimeout(() => {
        setShake(false)
      }, 820) // shake duration ms

      return () => clearTimeout(timer)
    }
  }, [error])

  return (
    <input
      className={`${styles.textInput} ${shake ? styles.errorShake : ''}`}
      {...textInputProps}
      placeholder={placeholder}
    ></input>
  )
}

export default TextInput
