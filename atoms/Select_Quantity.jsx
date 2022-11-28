import {useEffect, useState} from 'react'

export default function Select_Quantity({available_quantity}) {
    
    const [quantities, setQuantities] = useState([])
    
    useEffect(() => {
        const arr = [...Array(available_quantity).keys()].map(_=>_ + 1)
        setQuantities(arr)
    }, [available_quantity])
    

    return(
        <select>
            {quantities.map((item, index) => 
                <option key = {index} value={item}>{item}</option>
        )}
        </select>
    )
}