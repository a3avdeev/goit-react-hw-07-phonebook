import ContactAddForm from "../ContactAddForm/ContactAddForm";
import { ContactItemList } from "../ContactItemList/ContactItemList";
import { Filter } from "../Filter/Filter";
import { PhonebookStyled } from "./Phonebook.Styled";

export default function Phonebook() {

    return <PhonebookStyled>
        <h1>Phonebook</h1>
        <ContactAddForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactItemList />
    </PhonebookStyled>
}
