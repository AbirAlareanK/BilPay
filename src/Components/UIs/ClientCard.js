import profileImage from '../../Assets/imgs/user.png'
import { BsEnvelope , BsCalendar4Range , BsTelephone} from 'react-icons/bs'
import Classes from './ClientCard.module.scss';

const ClientCard = ({client}) => {
    return (
        <div className={`${Classes.clientCard} card-wrapper`}>
            <div className={Classes.profileInfo}>
                <div>
                    <img src={profileImage} alt="card" />
                    <h6>{client['client-name']}</h6>
                    <p>{client['company']}</p>
                </div>
                <p className={Classes.details}>...</p>
            </div>
            <div className={Classes.contactInfo}>
                <div>
                    <p>contact</p>
                    <span>
                        <BsTelephone strokeWidth={0.2} color='#9babc5' size={18} style={{paddingRight:'6px'}}/>
                        {client['contact-number']}
                    </span>
                    <span>
                        <BsEnvelope strokeWidth={0.2} color='#9babc5' size={18} style={{paddingRight:'6px'}}/>
                        {client['email-address']}
                    </span>
                </div>
                <div>
                    <p>payment due</p>
                    <span>
                        <BsCalendar4Range strokeWidth={0.2} color='#9babc5' size={18} style={{paddingRight:'6px'}}/>
                        {client['date']}
                    </span>
                </div>
            </div>
            <div className={Classes.footer}>
                <span>Local time 23:00 am</span>
            </div>
        </div>
    );
};

export default ClientCard;