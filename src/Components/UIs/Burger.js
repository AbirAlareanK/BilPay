import Classes from './Burger.module.scss';


const Burger = (props) => {

  const {open} = props;
  
    return (
      <div className={ open ? `${Classes.open} ${Classes.burgerIcon}` :  Classes.burgerIcon}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
export default Burger;