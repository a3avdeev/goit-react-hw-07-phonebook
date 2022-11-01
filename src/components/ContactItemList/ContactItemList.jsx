import { ContactList } from "./ContactItemList.Styled";
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter  } from "redux/selectors";
import { Contact } from "./ContactItem";

import { fetchContacts } from "redux/contactsOperations";
import { useEffect } from "react";

export const ContactItemList = () => {
    const filter = useSelector(getFilter);
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    console.log(contacts)

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    // const getFilteredContacts = () => {
    //     if (!filter) {
    //         return contacts;
    //     }
    //     const normalFilter = filter.toLocaleLowerCase();
    //     const filteredContacts = contacts.filter(({ name }) => {
    //         const normalName = name.toLocaleLowerCase().includes(normalFilter);
    //         return normalName;
    //     })
    //     return filteredContacts;
    // }

    // const contactsToRender = getFilteredContacts();

return (
    <>
        <ContactList>
            {contacts?.map(contact => (
                <div key={contact.id}>
                    <Contact contact={contact}/>
                </div>
            ))}
        </ContactList>
    </>
);
};
