
import { useState } from "react";
import CardNumber from "../../UIs/CardNumber";
import Classes from './PaymmentCard.module.scss';

const PaymentCard = () => {

    const [ CardType ] = useState('main card')
    const [ CardNum ]  = useState('1234 5678 7654 7892')

    return(
        <>
            <div>
                <h6>Payment Card Used</h6>
                <div className={Classes.firstSectionContent}>
                    <span className={Classes.CardImage}/>
                    <p>{CardType}</p>
                    <CardNumber str={CardNum}/>
                </div>
            </div>
            <div>
                <h7>Insurance Responsibility</h7>
                <div className={Classes.secondSectionContent}>
                    <p>Aetna - Open Access</p>
                    <p>OAP</p>
                </div>
            </div>
        </>
    );
}

export default PaymentCard;