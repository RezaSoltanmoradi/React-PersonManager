import React, { useState, Fragment } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import Persons from "./components/Person/Persons";
import Header from "./components/common/Header";
import SimpleContext from "./context/SimpleContext";
import NewPerson from "./components/Person/NewPerson";

const App = props => {
    const [getPersons, setPersons] = useState([]);
    const [getSinglePerson, setSinglePerson] = useState("");
    const [getShowPersons, setShowPersons] = useState(true);

    const handleShowPerson = () => {
        setShowPersons(!getShowPersons);
    };

    const handleDeletePerson = id => {
        const persons = [...getPersons];
        const filteredPersons = persons.filter(p => p.id !== id); //! = =
        setPersons(filteredPersons);

        const personIndex = persons.findIndex(p => p.id === id);
        const person = persons[personIndex];

        toast.error(`${person.fullname} با موفقیت حذف شد`, {
            position: "top-right",
            closeOnClick: true
        });
    };

    const handleNameChange = (event, id) => {
        const allPersons = getPersons;

        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;

        const persons = [...allPersons];

        persons[personIndex] = person;
        setPersons(persons);
    };

    const handleNewPerson = () => {
        const persons = [...getPersons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullname: getSinglePerson
        };

        if (person.fullname !== "" && person.fullname !== " ") {
            persons.push(person);
            setPersons(persons);
            setSinglePerson("");

            toast.success("شخصی با موفقیت اضافه شد.", {
                position: "bottom-right",
                closeButton: true,
                closeOnClick: true
            });
        }
    };

    const setPerson = event => {
        setSinglePerson(event.target.value);
    };

    let person = null;

    if (getShowPersons) {
        person = <Persons />;
    }

    return (
        <SimpleContext.Provider
            value={{
                persons: getPersons,
                person: getSinglePerson,
                handleDeletePerson: handleDeletePerson,
                handleNameChange: handleNameChange,
                handleNewPerson: handleNewPerson,
                setPerson: setPerson
            }}
        >
            <div className="rtl text-center">
                <Header appTitle="مدیریت کننده اشخاص" />

                <NewPerson />

                <Button
                    onClick={handleShowPerson}
                    variant={getShowPersons ? "info" : "danger"}
                >
                    نمایش اشخاص
                </Button>

                {person}
                <ToastContainer />
            </div>
        </SimpleContext.Provider>
    );
};
export default App;
