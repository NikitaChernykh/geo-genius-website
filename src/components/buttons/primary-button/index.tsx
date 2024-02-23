import { useEffect, useState } from 'react'
import fontKanit from '../../../app/fonts'
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
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isClicked])

  const handleClick = () => {
    setIsClicked(true)
    if (onClick) onClick()
  }

  return (
    <button
      onClick={handleClick}
      {...buttonProps}
      disabled={isLoading}
      className={`${styles.primaryButton} ${fontKanit.variable} font-sans`}
    >
      <span className={styles.bottomLayer}></span>
      <span
        className={`${styles.topLayer} ${isClicked ? styles.moveDown : ''}`}
      >
        {isLoading ? (
          <div className={styles.loadingSpinnerFixedSize}>
            <LoadingSpinner />
          </div>
        ) : (
          buttonText
        )}
      </span>
    </button>
  )
}

export default PrimaryButton
