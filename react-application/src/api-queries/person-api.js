const BASE_URL = 'http://localhost/persons';

// Get all persons
export const getAllPersons = () =>
    fetch(BASE_URL)
        .then(res => res.json());

// Create a person
export const createPerson = (person) =>
    fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(person)
    }).then(res => res.json());

// Update a person
export const updatePerson = (id, person) =>
    fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(person)
    }).then(res => res.json());

// Delete a person
export const deletePerson = (id) =>
    fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
        .then(res => res.json());