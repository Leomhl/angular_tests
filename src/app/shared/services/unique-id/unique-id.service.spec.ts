// The test consists basically to use the describe method passing two parameters

import { UniqueIdService } from "../unique-id.service";

// A description of the test and an function that contain the tests
describe(UniqueIdService.name, () => {
    // Here, inside the function we can create a lot of "its" functions
    // each it function can test something, for example: conditions.

    let service: UniqueIdService = null;

    // Before execute each test, this function will recreate a new instance of UniqueIdService
    // then, the tests will not be affected by other tests and its values
    beforeEach(() => {
      service = new UniqueIdService();
    });

    // We use the template string to update automatically the name of method // if it's change
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
      should generate id when called with prefix`, () => {

        const id = service.generateUniqueIdWithPrefix('app');

      expect(id.startsWith('app-')).toBeTruthy();

      // expect(true).toBeTrue(); -> Expects if the type will be a literal true or false. Cannot be an instance of Boolean class
      // expect(true).toBe(true); -> Expects if the type will be a literal true or false. Cannot be an instance of Boolean class
      // expect(true).toBeTruthy(); -> The best :), understand true/false and instances of Boolean class. It's the most generic

    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
      should not generate duplicate IDs when called multiple times`, () => {
      const ids = new Set();

      for (let i = 0; i < 50; i++) {
        ids.add(service.generateUniqueIdWithPrefix('app'));
      }

      expect(ids.size).toBe(50);
   });

   it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
      should return the number of generated ids when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
   });


   it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
      should throw when called with empty prefix value`, () => {

      const emptyValues = [null, undefined, ''];
      // When we need a throw test, is necessary pass the function inside a other function
      emptyValues.forEach(emptyValue => expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        // Pass the element of list that we have a problem to generate a contextualization of the error
        .withContext(`Empty value: ${emptyValue}`) 
        .toThrow()
      );
  });
});
