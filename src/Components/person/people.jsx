import React, { useContext } from 'react';
import Person from './person';
import SimpleContext from '../../context/simpleContext';

const People = () => {
    const context = useContext(SimpleContext);
    const { people } = context.state;
    return (
        <div>
            {people.map((person) => (
                <Person
                    key={person.id}
                    fullName={person.fullName}
                    deleted={()=> {
                        context.handleDeletePerson(person.id);
                        } 
                    }
                    Changed={(event) =>
                        context.handleChangeName(event, person.id)
                    }
                />
            ))}
        </div>
    );
};
export default People;
