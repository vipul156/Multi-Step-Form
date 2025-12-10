import React from 'react'

const AddOns = ({ setCurrentStep, form, setForm, yearly }) => {
    const handleChange = (addon) => {
        setForm({
            ...form,
            addons: form.addons?.some(a => a.name === addon.name)
                ? form.addons.filter(a => a.name !== addon.name)
                : [...(form.addons || []), { ...addon, price: yearly ? addon.price * 10 : addon.price }]
        })
        console.log(form)
    }

    return (
        <div className='p-4 sm:p-10 h-full flex flex-col justify-between'>
            <div>
                <h1 className='text-4xl font-bold pb-3'>Pick add-ons</h1>
                <p className='text-gray-400 pb-8'>Add-ons help enhance your gaming experience.</p>
                <div className='flex gap-4 flex-col'>
                    {
                        addons.map((addon, i) => {
                            const isSelected = form.addons?.some(a => a.name === addon.name);
                            return (
                                <div
                                    key={i}
                                    style={isSelected ? { borderColor: "#413DFF", backgroundColor: "#F7F9FF" } : {}}
                                    className='border flex py-4 hover:border-[#413DFF] border-gray-400 p-2 rounded-lg cursor-pointer'
                                    onClick={() => handleChange(addon)}
                                >
                                    <div className='w-1/12 flex justify-center items-center'>
                                        <input
                                            checked={isSelected || false}
                                            className='rounded size-5 accent-[#413DFF] cursor-pointer'
                                            type="checkbox"
                                        />
                                    </div>
                                    <div className='w-8/12 flex flex-col pl-3'>
                                        <h2 className='font-semibold text-[#164A8B]'>{addon.name}</h2>
                                        <p className='text-gray-400 text-sm'>{addon.des}</p>
                                    </div>
                                    <div className='w-3/12 flex justify-center items-center'>
                                        <p className='text-[#413DFF]'>+${yearly ? addon.price * 10 : addon.price}/{yearly ? "yr" : "mo"}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between bg-white p-4 fixed bottom-0 right-0 w-full sm:static font-semibold'>
                <button
                    onClick={() => setCurrentStep((currentStep) => currentStep - 1)}
                    className='text-gray-400 hover:text-[#164A8B] cursor-pointer rounded-lg'
                >
                    Go Back
                </button>
                <button
                    onClick={() => setCurrentStep((currentStep) => currentStep + 1)}
                    className='bg-[#164A8B] hover:bg-[#164A8B]/90 cursor-pointer text-white p-3 px-7 rounded-lg'
                >
                    Next Step
                </button>
            </div>
        </div>
    )
}

export default AddOns

const addons = [
    {
        name: "Online service",
        des: "Access to multiplayer games",
        price: 1,
    },
    {
        name: "Larger storage",
        des: "Extra 1TB of cloud save",
        price: 2,
    },
    {
        name: "Customizable profile",
        des: "Custom theme on your profile",
        price: 2,
    }
]