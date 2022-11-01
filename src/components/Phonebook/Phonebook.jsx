import ContactAddForm from "../ContactAddForm/ContactAddForm";
import { ContactItemList } from "../ContactItemList/ContactItemList";
import { Filter } from "../Filter/Filter";
import { PhonebookStyled } from "./Phonebook.Styled";
// import { fetchContacts } from "redux/contactsOperations";
import { useDispatch,useSelector  } from "react-redux";
// import { useEffect } from "react";
import { getError, getIsLoading } from "../../redux/selectors";
import { BiRun } from 'react-icons/bi';

export default function Phonebook() {
    // const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    
    // useEffect(() => {
    //     dispatch(fetchContacts());
    // }, [dispatch]);


    return <PhonebookStyled>
        <h1>Phonebook</h1>
        <ContactAddForm />

        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...<BiRun /></b>}
        <ContactItemList />
    </PhonebookStyled>
}
