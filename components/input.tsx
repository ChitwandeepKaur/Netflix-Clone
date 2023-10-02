import React from 'react'

interface InputProps {
    id       : string
    onChange : any
    value    : string
    label    : string
    type     : string
}

const Input: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type
}) => {
    return (
        <div className="relative">
            <input type={type} className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white 
                                          bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" " id={id} value={value} onChange={onChange} />
            <label htmlFor={id} className="absolute text-md text-zinc-400 duration-150 transform 
                                             -trandlate-y-3 scale-75 top-4 z-10 origin-[0] left-6 
                                             peer-placement-shown:scale-100
                                             peer-placeholder:-shown:transalate-y-0
                                             peer-focus:scale-75
                                             peer-focus:-translate-y-3">{label}</label>
                                             {/* Phone number add krne ki functionality daalo */}
            
        </div>
    )
}

export default Input