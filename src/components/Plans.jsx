import React, { useState } from 'react'

const Plans = ({ setCurrentStep, form, setForm }) => {
    const [showError, setShowError] = useState(false);

    const handleChange = (plan) => {
        setForm({
            ...form,
            ["plan"]: {
                name: plan.name,
                price: plan.price,
                billing: plan.billing,
            }
        })
        setShowError(false); // Hide error when a plan is selected
        console.log(form)
    }

    const handleNext = () => {
        if (!form.plan) {
            setShowError(true);
            return;
        }
        setCurrentStep((currentStep) => currentStep + 1);
    }

    return (
        <div className='p-10'>
            <h1 className='text-4xl font-bold pb-3'>Select your plan</h1>
            <p className='text-gray-400 pb-8'>You have the option of monthly or yearly billing.</p>
            <div className='flex gap-4'>
                {
                    plans.map((plan, i) => {
                        return (
                            <div key={i} onClick={() => handleChange(plan)} style={form.plan?.name == plan.name ? {borderColor: "#413DFF", backgroundColor: "#F7F9FF"}: {}} className='border hover:border-[#413DFF] border-gray-400 basis-1/3 p-2 rounded-lg cursor-pointer'>
                                <img className='size-9 mb-13' src={plan.img} alt="" />
                                <h2 className='font-semibold'>{plan.name}</h2>
                                <p>${plan.price}/<span>{plan.billing}</span></p>
                            </div>
                        )
                    })
                }
            </div>
            {showError && (
                <p className='text-red-500 text-sm mt-4 font-medium'>Please select a plan to continue</p>
            )}
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
                    onClick={handleNext} 
                    className='bg-[#164A8B] hover:bg-[#164A8B]/90 cursor-pointer text-white p-3 px-7 rounded-lg'
                >
                    Next Step
                </button>
            </div>
        </div>
    )
}

export default Plans

const plans = [
    {
        name: "Arcade",
        price: 9,
        billing: "mo",
        img: "icon-arcade.svg"
    },
    {
        name: "Advanced",
        price: 12,
        billing: "mo",
        img: "icon-advanced.svg"
    },
    {
        name: "Pro",
        price: 15,
        billing: "mo",
        img: "icon-pro.svg"
    }
]