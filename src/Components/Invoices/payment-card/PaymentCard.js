
import { useState } from "react";
import CardNumber from "../../UIs/CardNumber";
import Classes from './PaymmentCard.module.scss';

const PaymentCard = () => {

    const [ CardType ] = useState('main card')
    const [ CardNum ]  = useState('visa 1234 5678 7654 7892')

    return(
        <>
            <div>
                <h3>Payment Card Used</h3>
                <div>
                    <span className={Classes.CardImage}/>
                    <span>{CardType}</span>
                    <CardNumber str={CardNum}/>
                </div>
            </div>
            <div>
                <h4>Insurance Responsibility</h4>
                <div>
                    <p>Aetna - Open Access</p>
                    <p>OAP</p>
                </div>
            </div>
        </>
    );
}

export default PaymentCard;