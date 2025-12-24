import React from 'react'

const InfoCard = ({icon, label, value, color}) => {
  return (
    <div className="flex items-center gap-3">
        <div className={`w-2 md:w-2 h-3 md:h-5 ${color} rounded-full`}>
            <p className="flex whitespace-nowrap">
                <span className="text-sm md:text-[15px] text-black font-semibold px-5">{value}</span>
                <span className="text-sm md:text-[15px] text-gray-500 font-medium">{label}</span>
            </p>
        </div>
    </div>
  )
}

export default InfoCard