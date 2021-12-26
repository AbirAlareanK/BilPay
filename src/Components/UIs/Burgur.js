import { Navbar } from '../../Containers/Navbar/Navbar';

const Burger = () => {
    const [open, setOpen] = useState(false)
  
    return (
      <>
        <div open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </div>
        <Navbar open={open} />
      </>
    )
  }
export default Burger;