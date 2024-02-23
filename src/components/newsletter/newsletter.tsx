import axios from 'axios'
import { FormEvent, useState } from 'react'
import PrimaryButton from '../buttons/primary-button'
import TextInput from '../inputs/text-input'
import styles from './newsletter.module.scss'

const Newsletter = () => {
  const [email, setEmail] = useState<string>('')
  const [status, setStatus] = useState<
    'success' | 'error' | 'loading' | 'idle'
  >('idle')
  const [responseMsg, setResponseMsg] = useState<string>('')
  const [, setStatusCode] = useState<number>()

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const response = await axios.post('/api/subscribe', { email })

      setStatus('success')
      setStatusCode(response.status)
      setEmail('')
      setResponseMsg(response.data)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setStatus('error')
        setStatusCode(err.response?.status)
        setResponseMsg(err.response?.data)
      }
    }
  }

  return (
    <form onSubmit={handleSubscribe} noValidate className={styles.form}>
      <TextInput
        placeholder="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={status == 'loading'}
      />
      <PrimaryButton buttonText="Subscribe" isLoading={status == 'loading'} />
      {status === 'success' ? (
        <p className={styles.success}>{responseMsg}</p>
      ) : null}
      {status === 'error' ? (
        <p className={styles.error}>{responseMsg}</p>
      ) : null}
    </form>
  )
}

export default Newsletter
