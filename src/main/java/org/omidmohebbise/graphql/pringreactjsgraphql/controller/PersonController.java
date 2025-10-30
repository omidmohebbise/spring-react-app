package org.omidmohebbise.graphql.pringreactjsgraphql.controller;


import lombok.RequiredArgsConstructor;
import org.omidmohebbise.graphql.pringreactjsgraphql.model.Person;
import org.omidmohebbise.graphql.pringreactjsgraphql.service.PersonService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/persons")
public class PersonController {

    private final PersonService personService;

    @GetMapping
    public List<Person> findAll() {
        return personService.findAll();
    }

    @PostMapping
    public Person createPerson(@RequestBody PersonDto personDto) {
        return personService.add(personDto.firstName(), personDto.lastName(), personDto.age());
    }

    @PutMapping("/{id}")
    public Boolean updatePerson(@PathVariable Integer id, @RequestBody PersonDto personDto) {
        return personService.update(id, personDto.firstName(), personDto.lastName(), personDto.age());
    }

    @DeleteMapping("/{id}")
    public Boolean deletePerson(@PathVariable Integer id) {
        return personService.delete(id);
    }

}
