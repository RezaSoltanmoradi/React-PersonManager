import { createContext } from 'react';

const SimpleContext = createContext({
    state: {},
    handleDeletePerson: () => {},
    handleChangeName: () => {},
    handlenewPerson: () => {},
    setPerson: () => {},
});
export default SimpleContext;
