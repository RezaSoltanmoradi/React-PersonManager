import React, { useContext, useEffect, useRef } from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import SimpleContext from '../../context/simpleContext';

const NewPerson = () => {

    const FocusInput = useRef(null);
    useEffect(() => {
        FocusInput.current.focus();
    });

    const context = useContext(SimpleContext);
    const { handlenewPerson, setPerson } = context;
    const { person } = context.state;
    return (
        <div className="m-2 p-2 ">
            <form
                className="d-flex justify-content-center"
                onSubmit={handlenewPerson}
            >
                <div className="input-group w-25">
                    <input
                        ref={FocusInput}
                        className="form-control text-center"
                        type="text"
                        placeholder=" اسم وارد کنید"
                        onChange={setPerson}
                        value={person}
                    />
                    <Button type="submit" variant="success" size="sm">
                        <BsFillPersonPlusFill
                            style={{ width: '2em', height: '2em' }}
                        />
                    </Button>
                </div>
            </form>
        </div>
    );
};
export default NewPerson;
