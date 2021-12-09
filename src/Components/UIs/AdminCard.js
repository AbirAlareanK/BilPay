import Classes from './AdminCard.module.scss';


const AdminCard = (props) => {
    return(
        <div className={`${Classes.adminCard} ${props.className ? props.className : ''}`}>
            {props.Children}
            <span><span><span></span></span></span>
        </div>
    );
}

export default AdminCard;