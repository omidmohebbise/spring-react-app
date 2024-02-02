package org.omidmohebbise.graphql.pringreactjsgraphql.service;


import org.omidmohebbise.graphql.pringreactjsgraphql.model.Person;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonService {
    private final List<Person> persons = new ArrayList<>();


    public Person add(String name, String family, int age) {
        var newPerson = new Person(persons.size() + 1, name, family, age);
        persons.add(newPerson);
        return newPerson;
    }

    public boolean update(Integer id, String name, String family, int age) {
        persons.stream().filter(person -> person.getId().equals(id)).findFirst().ifPresentOrElse(person -> {
            person.setFirstName(name);
            person.setLastName(family);
            person.setAge(age);
        }, () -> {
            throw new RuntimeException("Person not found");
        });
        return true;
    }
    public boolean delete(Integer id) {
        persons.remove(persons.stream().filter(person -> person.getId().equals(id)).findFirst()
                .orElseThrow(() -> new RuntimeException("Person not found")));
        return true;
    }

    public List<Person> findAll(){
        return persons;
    }
}
