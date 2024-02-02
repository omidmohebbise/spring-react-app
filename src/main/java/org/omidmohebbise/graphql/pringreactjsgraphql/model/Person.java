package org.omidmohebbise.graphql.pringreactjsgraphql.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Person {
    private Integer id;
    private String firstName;
    private String lastName;
    private Integer age;
}
