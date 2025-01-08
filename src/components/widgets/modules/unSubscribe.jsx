import { Typography, Button } from '@material-tailwind/react'
import React from 'react'

function UnSubscribe() {

    const handleUnSubscribe = () => {
        confirm("Are you sure you want to unsubscribe?")
    }

    return (
        <div className='mt-12 mb-4 px-4'>
            <Typography variant="h5" color="blue-gray">
                Unsubscribe your Premium plan
            </Typography>
            <p className="mt-2 mb-2 font-light text-xs px-1">
                Please note that unsubscribing will revoke your access to our premium features. We encourage you to carefully consider this decision before proceeding
            </p>
            <Button onClick={handleUnSubscribe} className="bg-[#e71818] tracking-widest mt-4">
                Unsubscribe
            </Button>
        </div>
    )
}

export default UnSubscribe