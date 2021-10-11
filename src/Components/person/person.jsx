import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
// import styles from'./person.css';
class Perosn extends Component {
    componentWillUnmount() {
        console.log('person.jsx componentWillUnmount()');
    }
    render() {
        const { fullName, deleted, Changed } = this.props;
        return (
            <div className="card text-black bg-info mt-3 col-5 d-lg-inline-block mr-2 mx-lg-2 mx-auto">
                <div className="card-body text-center ">
                    <h4 className="d-black ">{`${fullName}`}</h4>
                    <div className="input-group justify-content-center">
                        <button
                            onClick={deleted}
                            className="btn btn-sm btn-danger"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <div className="input-group-appand">
                            <input
                                type="text"
                                onChange={Changed}
                                className="form-control text-center "
                                placeholder={fullName}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Perosn.propTypes = {
    fullName: propTypes.string,
    deleted: propTypes.func,
    Changed: propTypes.func,
};
export default Perosn;
