import React from 'react'

const Summary = ({ setCurrentStep, form }) => {
    const total = form.plan?.price + (form.addons?.reduce((total, addon) => total + addon.price, 0) || 0);
    return (
        <div className='p-10'>
            <h1 className='text-4xl font-bold pb-3'>Finishing up</h1>
            <p className='text-gray-400 pb-8'>Double-check everything looks OK before confirming.</p>
            <div className='bg-[#F7F9FF] p-4 rounded-lg flex gap-4 flex-col'>
                <div className='flex text-lg font-bold justify-between items-center pb-1'>
                    <div>
                        <h2>{form.plan?.name}
                            <span>{form.plan?.billing === 'mo' ? ' (Monthly)' : ' (Yearly)'}</span></h2>
                        <h3 onClick={()=>{setCurrentStep(1)}} className='text-gray-400 text-base font-normal cursor-pointer hover:text-[#413DFF] underline'>Change</h3>
                    </div>
                    <div>
                        <h2>${form.plan?.price}/{form.plan?.billing}</h2>
                    </div>
                </div>
                {form.addons?.length > 0 && (
                <hr className='opacity-20' />
                )}
                {
                    form.addons?.map((addon, i) => {
                        return (
                            <div key={i} className='flex text-gray-400 justify-between'>
                                <div>
                                    <h2>{addon.name}</h2>
                                </div>
                                <div>
                                    <h2 className='text-black/70'>+${addon.price}/{addon.billing}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex p-5 justify-between'>
                <div>
                    <h2 className='text-gray-400'>Total (per {form.plan?.billing === 'mo' ? 'month' : 'year'})</h2>
                </div>
                <div>
                    <h2 className='text-[#413DFF] font-bold text-xl'>+${total}/{form.plan?.billing}</h2>
                </div>
            </div>
            <div className='flex absolute bottom-10 left-91 font-semibold'>
                <button
                    onClick={() => setCurrentStep((currentStep) => currentStep - 1)}
                    className='text-gray-400 hover:text-[#164A8B] cursor-pointer p-3 px-7 rounded-lg'
                >
                    Go Back
                </button>
            </div>
            <div className='flex absolute bottom-10 right-29 font-semibold'>
                <button
                    onClick={() => setCurrentStep((currentStep) => currentStep + 1)}
                    className='bg-[#413DFF] hover:bg-[#413DFF]/90 cursor-pointer text-white p-3 px-7 rounded-lg'
                >
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default Summary