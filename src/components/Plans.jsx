import React, { useState } from 'react'

const Plans = ({ setCurrentStep, form, setForm, yearly, setYearly }) => {
    const [showError, setShowError] = useState(false);

    const handleChange = (plan) => {
        setForm({
            ...form,
            ["plan"]: {
                name: plan.name,
                price: yearly ? plan.price * 10 : plan.price,
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
        <div className='p-4 md:p-10 h-full flex flex-col justify-between'>
            <div>
                <h1 className='text-4xl font-bold pb-3'>Select your plan</h1>
                <p className='text-gray-400 pb-8'>You have the option of monthly or yearly billing.</p>
                <div className='flex flex-col sm:flex-row gap-4'>
                    {
                        plans.map((plan, i) => {
                            return (
                                <div key={i} onClick={() => handleChange(plan)} style={form.plan?.name == plan.name ? { borderColor: "#413DFF", backgroundColor: "#F7F9FF" } : {}} className='border hover:border-[#413DFF] border-gray-400 basis-1/3 p-4 flex gap-4 items-center sm:block rounded-lg cursor-pointer'>
                                    <img className='size-9 sm:mb-13' src={plan.img} alt="" />
                                    <div>
                                        <h2 className='font-semibold'>{plan.name}</h2>
                                        <p className='text-gray-400'>${yearly ? plan.price * 10 : plan.price}/<span>{yearly ? "yr" : "mo"}</span></p>
                                        {yearly && <p>2 months free</p>}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='bg-[#F7F9FF] p-4 my-5' >
                    <div className='w-50 flex justify-between items-center mx-auto'>
                    <span>Monthly</span>
                    <label className="inline-flex items-center cursor-pointer">
                        <input onChange={() => setYearly(!yearly)} type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-9 h-5 bg-black peer-focus:outline-none dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                    </label>
                    <span>Yearly</span>
                    </div>
                </div>
                {showError && (
                    <p className='text-red-500 text-sm mt-4 font-medium'>Please select a plan to continue</p>
                )}
            </div>
            <div className='flex bg-white justify-between p-4 fixed bottom-0 right-0 w-full sm:static font-semibold'>
                <button
                    onClick={() => setCurrentStep((currentStep) => currentStep - 1)}
                    className='text-gray-400 hover:text-[#164A8B] cursor-pointer rounded-lg'
                >
                    Go Back
                </button>
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
        img: "icon-arcade.svg"
    },
    {
        name: "Advanced",
        price: 12,
        img: "icon-advanced.svg"
    },
    {
        name: "Pro",
        price: 15,
        img: "icon-pro.svg"
    }
]