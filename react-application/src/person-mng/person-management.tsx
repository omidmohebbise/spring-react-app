import React, {useState, useEffect} from 'react';

import Person from "../model/PersonModel";
import {createPerson, deletePersonAPI, getAllPersons, updatePerson} from "../api-queries/person-queries-axios";

const PersonManagement: React.FC = () => {
    const [data, setData] = useState<Person[]>([]);
    const [newPerson, setNewPerson] = useState<Person>(getInitialPersonState());
    const [editMode, setEditMode] = useState<boolean>(false);

    function getInitialPersonState() {
        return new Person(-1, "", "", 0);
    }

    function findAll() {
        getAllPersons((fetchedData: Person[]) => {
            setData(fetchedData)
        }, (error: any) => {
            console.log(error);
        });
    }

    useEffect(() => {
        findAll();
    }, []);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setNewPerson({
            ...newPerson,
            [name]: value
        });
    };


    function savePerson(): void {
        if(editMode){
            updatePerson(newPerson, () => {
                findAll()
                setNewPerson(getInitialPersonState())
                setEditMode(false)
            })
        }else {
            createPerson(newPerson, () => {
                    findAll()
                    setNewPerson(getInitialPersonState())
                }
                , console.log(data))
        }

    }

    function deletePerson(id: number): void {
        deletePersonAPI(id,
            () => findAll())
    }

    function editPerson(person: Person): void {
        setNewPerson(person)
    }
    return (
        <div className="mt-4">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">First Name</label>
                    <input type="text"
                           name="firstName"
                           className="form-control"
                           value={newPerson.firstName}
                           id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="First Name" onChange={handleInputChange}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text"
                           name="lastName"
                           value={newPerson.lastName}
                           className="form-control"
                           onChange={handleInputChange}
                           id="exampleInputPassword3" placeholder="Last Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Age</label>
                    <input type="number"
                           name="age"
                           value={newPerson.age}
                           onChange={handleInputChange}
                           className="form-control" id="exampleInputPassword3" placeholder="Age"/>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={() => savePerson()}>
                    {editMode ? "Update" : "Save"}
                </button>
            </form>


            <div className="mt-4">
                <h1>Persons:</h1>
                <br/>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.age}</td>
                            <td>
                                <button type="button" className="btn btn-danger mx-1"
                                        onClick={() => deletePerson(user.id)}
                                >Delete
                                </button>
                                <button type="button" className="btn btn-warning"
                                        onClick={() => {
                                            setEditMode(true)
                                            editPerson(user)
                                        }}
                                >Edit
                                </button>
                            </td>
                        </tr>
                    ))}

                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default PersonManagement;
