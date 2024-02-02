package org.omidmohebbise.graphql.pringreactjsgraphql.controller;


import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.omidmohebbise.graphql.pringreactjsgraphql.model.Person;
import org.omidmohebbise.graphql.pringreactjsgraphql.service.PersonService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class PersonController {

    private final PersonService personService;

    @QueryMapping
    public List<Person> findAll() {
        return personService.findAll();
    }


    @MutationMapping
    public Person createPerson(@Argument String firstName, @Argument String lastName, @Argument int age
    ) {
        return personService.add(firstName, lastName, age);
    }

    @MutationMapping()
    public Boolean updatePerson(@Argument int id, @Argument String firstName, @Argument String lastName, @Argument int age
    ) {
        return personService.update(id, firstName, lastName, age);
    }

    @MutationMapping
    public Boolean deletePerson(@Argument int id) {
        return personService.delete(id);
    }


}
