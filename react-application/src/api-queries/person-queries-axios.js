import axios from 'axios';

export const getAllPersons = (successCallback, errorCallback) => {
    var data = JSON.stringify({
        query: `query {
            findAll {
                id
                firstName
                lastName
                age
            }
        }`
    });

    var config = {
        method: 'post',
        url: 'http://localhost:8180/graphql',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            successCallback(response.data.data.findAll);
        })
        .catch(function (error) {
            console.log(error);
            errorCallback && errorCallback(error);
        });
};

// Function to create a new person
export const createPerson = (person, successCallback, errorCallback) => {
    console.log(person);
    var data = JSON.stringify({
        query: `mutation {
            createPerson(firstName: "${person.firstName}", lastName: "${person.lastName}", age: ${person.age}) {
                id
                firstName
                lastName
                age
            }
        }`
    });

    var config = {
        method: 'post',
        url: 'http://localhost:8180/graphql',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(response.data.data.createPerson);
            successCallback && successCallback();
        })
        .catch(function (error) {
            console.log(error);
            errorCallback && errorCallback(error);
        });
};

// Function to update an existing person
export const updatePerson = (person, successCallback, errorCallback) => {
    console.log(person);

    var data = JSON.stringify({
        query: `
        mutation MyMutation {
            updatePerson(age: ${person.age}, firstName: "${person.firstName}", id: ${person.id}, lastName: "${person.lastName}")
        }`
    });

    var config = {
        method: 'post',
        url: 'http://localhost:8180/graphql',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            successCallback(response.data.data.updatePerson);
        })
        .catch(function (error) {
            console.log(error);
            errorCallback && errorCallback(error);
        });
};

export const deletePersonAPI = (id, successCallback, errorCallback) => {
    var data = JSON.stringify({
        query: `mutation {
            deletePerson(id: ${id})
        }`
    });

    var config = {
        method: 'post',
        url: 'http://localhost:8180/graphql',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            successCallback && successCallback(response.data.data.deletePerson);
        })
        .catch(function (error) {
            errorCallback && errorCallback(error);
        });
};
