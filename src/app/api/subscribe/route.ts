import axios from 'axios'
import { NextResponse, type NextRequest } from 'next/server'

// Define response data type
// type ResponseData = { message?: string; error?: string; };
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(req: NextRequest) {
  // 1. Validate email address

  const body = await req.json()
  const validEmail = validateEmail(body.email)

  if (!validEmail) {
    return new NextResponse('Please enter a valid email address', {
      status: 400,
    })
  }

  // 2. Retrieve Mailchimp credentials from environment variables
  const API_KEY = process.env.MAILCHIMP_API_KEY
  const API_SERVER = process.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

  // 3. Construct Mailchimp API request URL
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

  // 4. Prepare request data
  const data = {
    email_address: body.email,
    status: 'subscribed',
  }

  // 5. Set request headers
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `api_key ${API_KEY}`,
    },
  }

  // 6. Send POST request to Mailchimp API
  try {
    const response = await axios.post(url, data, options)
    if (response.status == 200) {
      return new NextResponse('Awesome! You have successfully subscribed!', {
        status: 201,
      })
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data.title == 'Member Exists') {
        return new NextResponse(
          "Uh oh, it looks like this email's already subscribed🧐",
          { status: 400 },
        )
      }
    }

    return new NextResponse(
      `Oops! There was an error subscribing you to the newsletter. Please email me at hello@chernikadigital.com to help us resolve this issue.`,
      { status: 500 },
    )
  }
}
