import { GoSearch } from 'react-icons/go';
import Classes from './SearchBar.module.scss';

const SearchBar = () => (
    <div className={Classes.searchBar}>
        <form>
            <input
                type="text"
                placeholder="Search.."
                name="s" 
            />
            <span className={Classes.searchIcon} type="submit"><GoSearch size={18} /></span>
        </form>
    </div>
);

export default SearchBar;