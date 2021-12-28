import Notifications from "react-notifications-menu"
import bell from '../../Assets/imgs/bell.png'
import user from '../../Assets/imgs/user.png'

const NotificationMenu = (props) => {
    const data = [
        {
            image: user,
            message: 'Kameshwaran S had shared a feedback with you.',
            // detailPage: '/',
        },
        {
            image: user,
            message: 'Kameshwaran S had shared',
            // detailPage: '/',
        }
    ];


    return (
        <Notifications
            data={data}
            icon={bell}
        />
    );
};

export default NotificationMenu;