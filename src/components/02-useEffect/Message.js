import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        
       

        return () => {
            console.log("desmontado");
        }
    }, [])

    return (
        <div>
            <h3>eres genial</h3>
        </div>
    )
}
