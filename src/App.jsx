import React from 'react'
import MyInfo from './components/MyInfo'
import Plans from './components/Plans'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import ThankYou from './components/ThankYou'
const App = () => {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [form, setForm] = React.useState({})
  const [yearly, setYearly] = React.useState(false)
  return (
    <div className='bg-[#EEF5FF] min-h-screen flex py-30 sm:py-0 justify-center sm:items-center'>
      <img className='block sm:hidden fixed w-full top-0 left-0' src="bg-sidebar-mobile.svg" alt="" />
      <div className='bg-white p-4 flex relative rounded-2xl min-w-[90vw] sm:min-w-[66vw]'>
        <img className='sm:block hidden' src="bg-sidebar-desktop.svg" alt="" />
        <div className='sm:absolute justify-center gap-5 w-full sm:w-auto top-0 left-0 px-10 py-5 flex fixed sm:block'>
          {
            list.map((l, i) => {
              return (
                <div key={i} className='flex gap-4 pt-5 items-center text-white'>
                  <div style={currentStep == i ? { backgroundColor: "#C0E5FF", color: "black", border: "none" } : {}} className='size-9 border-white border rounded-full flex justify-center items-center'>
                    <h3 className='font-semibold text-center'>{i + 1}</h3>
                  </div>
                  <div className='hidden sm:block'>
                    <h2 className='text-gray-400'>STEP {i + 1}</h2>
                    <h2 className='font-semibold'>{l.toUpperCase()}</h2>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='lg:px-15 w-full'>
          {currentStep === 0 && <MyInfo setCurrentStep={setCurrentStep} form={form} setForm={setForm} />}
          {currentStep === 1 && <Plans setCurrentStep={setCurrentStep} form={form} setForm={setForm} yearly={yearly} setYearly={setYearly} />}
          {currentStep === 2 && <AddOns setCurrentStep={setCurrentStep} form={form} setForm={setForm} yearly={yearly} />}
          {currentStep === 3 && <Summary setCurrentStep={setCurrentStep} form={form} setForm={setForm} yearly={yearly} />}
          {currentStep === 4 && <ThankYou />}
        </div>
      </div>
    </div>
  )
}

export default App

const list = [
  "Your Info",
  "Select Plan",
  "Add-ons",
  "Summary"
]