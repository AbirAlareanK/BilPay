import { useEffect, useState } from "react";
import Classes from './CardNumber.module.scss'

const CardNumber = (props) => {

    const [CradNum , setCardNum] = useState('');
    
    useEffect(() => {
        const hided = props.str.replace(
            /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm ,
            '.... .... .... '
        )
        setCardNum(hided)
    },[props.str])
    
    
    return (
        <div>
            <span className={Classes.hiddenNumber}>{CradNum.slice(0,14)}</span>
            <span className={Classes.cardNumber}>{CradNum.slice(14)}</span>
        </div>
    );
}

export default CardNumber;