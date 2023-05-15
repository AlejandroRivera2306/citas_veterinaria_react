import React from 'react'

const Error = ({children}) => {
return (
    (<div className='bg-red-600 text-white mb-3 p-3 text-center rounded-md font-bold uppercase'> 
        {children}
        </div>)
)
}

export default Error