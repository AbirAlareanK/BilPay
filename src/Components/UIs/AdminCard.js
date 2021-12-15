import Classes from './AdminCard.module.scss';
import CardNumber from './CardNumber';

const AdminCard = (props) => {
    const { color , cardNum , balance , validation } = props
   
    return(
        <>
            <div className={`${Classes.adminCard}  ${ props.className ? props.className : ''} ${color}`}>
                <span className={Classes.circles}><span></span></span>
                <div className={Classes.balanceSection}>
                    <h6>Balance</h6>
                    <h5>${balance}</h5>
                </div>
                <div className={Classes.validSection}>
                    <div>
                        <p>Valid Thru</p>
                        <h6>{validation}</h6>
                    </div>
                    <CardNumber str={cardNum}/>
                </div>
                
                {/* <span className={Classes.bgCircles}><span><span></span></span></span> */}
            </div>
        </>
    );
}

export default AdminCard;