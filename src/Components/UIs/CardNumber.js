import { useEffect, useState } from "react";

const CardNumber = (props) => {

    const [CradNum , setCardNum] = useState('');
    
    useEffect(() => {
        const hided = props.str.replace(
            /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm ,
            '#### #### #### '
        )
        setCardNum(hided)
    },[props.str])
    
    
    return (
        <>
            <span>{CradNum}</span>
        </>
    );
}

export default CardNumber;