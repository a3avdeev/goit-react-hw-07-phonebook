import { BsFillPersonFill } from 'react-icons/bs';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contactsOperations";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));

return (
    <li key={contact.id} >
        <BsFillPersonFill />
        <p>{contact.name}: {contact.phone}</p>
        <button type="button" onClick={handleDelete}>Delete</button>
    </li>
);

}


