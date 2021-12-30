import Classes from './AdminCard.module.scss';
import CardNumber from './CardNumber';
import {CgAddR} from 'react-icons/cg'

const AdminCard = (props) => {
    const { color , cardNum, balance , validation } = props;
    const walletCard = () => {
        if(props.className){
            if(props.className.slice(0,6) === 'Wallet'){
                return true;
            }else{
                return false
            }
        }else{
            return false;
        }
    } 

    return(
        <div className={`${Classes.adminCard} unselectable ${ props.className ? props.className : ''} ${color}`}>
            <span className={ walletCard() ? `${Classes.circles} ${Classes.walletCircles}` : `${Classes.circles}` }><span></span></span>
            <div className={ walletCard() ? `${Classes.balanceSection} ${Classes.walletBalanceSection}` : `${Classes.balanceSection}` }>
                <div>
                    <h6>Balance</h6>
                    <h5>${balance}</h5>
                </div>
                {walletCard() && <p>Top up balance <CgAddR className={Classes.balanceIcon} size={16} /></p>}
            </div>
            <div className={Classes.validSection}>
                <div>
                    <p>Valid Thru</p>
                    <h6>{validation}</h6>
                </div>
                {walletCard() &&
                    <div className={Classes.holder}>
                        <p>Card Holder</p>
                        <h6>Tony Soap</h6>
                    </div>
                }
                <CardNumber str={cardNum}/>
            </div>
        </div>
    );
}

export default AdminCard;