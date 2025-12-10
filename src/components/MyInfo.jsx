import React, { useState } from 'react'

const MyInfo = ({ setCurrentStep, form, setForm }) => {
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            })
        }
        console.log(form)
    }

    const validateForm = () => {
        const newErrors = {};

        // Validate name
        if (!form.name || form.name.trim() === "") {
            newErrors.name = "Name is required";
        }

        // Validate email
        if (!form.email || form.email.trim() === "") {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Validate phone
        if (!form.phone || form.phone.trim() === "") {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[\d\s-]{10,}$/.test(form.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleNext = () => {
        if (validateForm()) {
            setCurrentStep((currentStep) => currentStep + 1);
        }
    }

    return (
        <div className='p-10'>
            <h1 className='text-4xl font-bold pb-3'>Personal Info</h1>
            <p className='text-gray-400 pb-8'>Please provide your name, email address, and phone number.</p>
            <div className='flex flex-col gap-5'>
                {
                    credentials.map((cred, i) => {
                        return (
                            <div key={i} className='flex flex-col'>
                                <div className='flex justify-between items-center'>
                                    <label htmlFor={cred.name}>{cred.label}</label>
                                    {errors[cred.name] && (
                                        <span className='text-red-500 text-sm font-medium'>{errors[cred.name]}</span>
                                    )}
                                </div>
                                <input 
                                    id={cred.name}
                                    value={form[cred.name] || ""} 
                                    name={cred.name} 
                                    onChange={handleChange} 
                                    className={`rounded-lg p-2.5 px-3.5 mt-1 border focus:outline-1 ${errors[cred.name] ? 'border-red-500 focus:outline-red-500' : 'border-gray-400 focus:outline-[#413DFF]'}`}
                                    type={cred.type} 
                                    placeholder={cred.placeholder} 
                                />
                            </div>
                        )
                    })
                }
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

export default MyInfo

const credentials = [
    {
        label: "Name",
        type: "text",
        name: "name",
        placeholder: "e.g. Stephen King",
        required: true
    },
    {
        label: "Email Address",
        type: "email",
        name: "email",
        placeholder: "e.g. stephenking@lorem.com",
        required: true
    },
    {
        label: "Phone Number",
        type: "tel",
        name: "phone",
        placeholder: "e.g. +1 234 567890",
        required: true
    }
]