import React, { Component, createRef } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import People from './Components/person/people';
import Haeder from './Components/Common/header';
import SimpleContext from './context/simpleContext';
import NewPerson from './Components/person/newPerson';

class App extends Component {
    
    toggleShowHeader = createRef();
    // toggleShowPeople = createRef();
    state = {
        people: [],
        person: '',
        showpeople: true,
        showHeader: true,
        apptitle: 'مدیریت کننده اعضا',
    };
    static contextType = SimpleContext;

    componentDidMount() {
        this.toggleShowHeader.current.click();
        // this.toggleShowPeople.current.click();
    }
    handleShowPeople = () => {
        this.setState({ showpeople: !this.state.showpeople });
    };
    handleShowHeader = () => {
        this.setState({ showHeader: !this.state.showHeader });
    };
    handleDeletePerson = (id) => {
        const people = [...this.state.people];
        const filterpeople = people.filter((del) => del.id !== id);
        this.setState({ people: filterpeople });

    };
    handleChangeName = (event, id) => {
        const newPeople = [...this.state.people];
        const personIndex = newPeople.findIndex((user) => user.id === id);
        newPeople[personIndex].fullName = event.target.value;
        this.setState({ people: newPeople });
    };
    handlenewPerson = (e) => {
        e.preventDefault();
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullName: this.state.person,
        };
        if (this.state.person) {
            this.setState({
                people: [...this.state.people, person],
                person: '',
            });
         
        }
    };
    setPerson = (event) => {
        this.setState({ person: event.target.value });
    };
    render() {
        const { showpeople, showHeader } = this.state;

        // const btnStyle = {
        //     color: 'black',
        //     backgroundColor: 'skyblue',
        //     ':hover': {
        //         color: 'red',
        //         backgroundColor: 'gold',
        //     },
        // };
        return (
            <SimpleContext.Provider
                value={{
                    state: this.state,
                    handleDeletePerson: this.handleDeletePerson,
                    handleChangeName: this.handleChangeName,
                    handlenewPerson: this.handlenewPerson,
                    setPerson: this.setPerson,
                }}
            >
                <div className="rtl text-center">
                    {!showHeader && (
                        <Alert variant="success">
                            <h4>برای نمایش هدر لطفا روی دکمه زیر کلیک کنید</h4>
                        </Alert>
                    )}
                    {showHeader && <Haeder />}
                    <Button
                        onClick={this.handleShowHeader}
                        variant={showHeader ? 'primary' : 'danger'}
                        ref={this.toggleShowHeader}
                    >
                        {showHeader ? 'بستن هدر' : 'نمایش هدر'}
                    </Button>
                    <NewPerson />
                    <Button
                        onClick={this.handleShowPeople}
                        variant={showpeople ? 'info' : 'danger'}
                        ref={this.toggleShowPeople}
                    >
                        {showpeople ? 'بستن اعضا' : 'نمایش اعضا'}
                    </Button>
                    {/* <button onClick={this.handleShowPeople} style={btnStyle}> */}
                    {/* نمایش بده
                    </button> */}
                    <ToastContainer />
                    {showpeople && <People />}
                </div>
            </SimpleContext.Provider>
        );
    }
}
export default App;
