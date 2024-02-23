import LoadingSpinner from '../../loading/spinner'
import styles from './primary-button.module.scss'

export type PrimaryButtonProps = {
  buttonText: string
  isLoading?: boolean
  onClick?: () => void
}

const PrimaryButton = ({
  buttonText,
  isLoading = false,
  onClick,
  ...buttonProps
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      {...buttonProps}
      disabled={isLoading}
      className={styles.primaryButton}
    >
      <span className={styles.bottomLayer}></span>
      <span className={styles.topLayer}>
        {isLoading ? <LoadingSpinner /> : buttonText}
      </span>
    </button>
  )
}

export default PrimaryButton
