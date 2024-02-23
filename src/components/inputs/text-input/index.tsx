import styles from './text-input.module.scss'

type TextInputProps = {
  placeholder?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const TextInput = ({ placeholder, ...textInputProps }: TextInputProps) => {
  return (
    <input
      className={styles.textInput}
      {...textInputProps}
      placeholder={placeholder}
    ></input>
  )
}

export default TextInput
