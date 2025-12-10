import React from 'react'

const ThankYou = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center p-4 sm:p-10 h-full'>
      <img className='w-20 h-20 mb-6' src="icon-thank-you.svg" alt="thank-you" />
      <h1 className='text-3xl font-bold text-[#164A8B] mb-4'>Thank you!</h1>
      <p className='text-gray-500 max-w-md leading-relaxed'>
        Thanks for confirming your subscription! We hope you have a wonderful time using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default ThankYou