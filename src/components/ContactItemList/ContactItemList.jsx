// import PropTypes from "prop-types";
import {ContactList} from "./ContactItemList.Styled"
import { BsFillPersonFill } from 'react-icons/bs';
import { useSelector , useDispatch } from 'react-redux';
import { getFilter } from "redux/selectors";
import { removeContact } from '../../redux/contactsSlice';
import { getContacts } from "redux/selectors";

export const ContactItemList = ({ name, number, id }) => {
    const filter = useSelector(getFilter);
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const getFilteredContacts = () => {
        if (!filter) {
            return contacts;
        }
        const normalFilter = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({ name }) => {
            const normalName = name.toLocaleLowerCase().includes(normalFilter);
            return normalName;
        })
        return filteredContacts;
    }

    const contactsToRender = getFilteredContacts()

    const elements = contactsToRender?.map(({ name, number, id }) => {
        return <li key={id} >
            <BsFillPersonFill />
            <p>{name}: {number}</p>
            <button type="button" onClick={() => dispatch(removeContact(id))}>Delete</button>
        </li>
    })
    return (
        <>
            <ContactList>{elements}</ContactList>
        </>
    )
};

// ContactItemList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })),
//     onClick: PropTypes.func.isRequired,
// }