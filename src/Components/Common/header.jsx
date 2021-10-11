import React, { useContext } from 'react';
import SimpleContext from '../../context/simpleContext';
import { Alert, Badge } from 'react-bootstrap';

const Haeder = () => {
    const context = useContext(SimpleContext);
    const { people, apptitle } = context.state;

    let badgeStyle = '';
    if (people.length >= 3) badgeStyle = 'bg-success';
    if (people.length <= 2) badgeStyle = 'bg-warning';
    if (people.length <= 1) badgeStyle = 'bg-danger';
    return (
        <div>
            <Alert variant="info">
                <h2> {apptitle}</h2>
            </Alert>
            <h5>
                <Alert variant="light">
                    <p className="d-inline mx-1">تعداد اشخاص </p>
                    <Badge pill className={badgeStyle}>
                        {people.length}
                    </Badge>
                    <p className="d-inline mx-1"> نفر میباشد</p>
                </Alert>
            </h5>
        </div>
    );
};
export default Haeder;
