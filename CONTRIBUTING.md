
### Allowed commit prefix:

- feat: A new feature.

- fix: A bug fix.

- docs: Documentation only changes.

- style: Changes that do not affect the meaning of the code (white-space, formatting).

- refactor: A code change that neither fixes a bug nor adds a feature.

- perf: A code change that improves performance.

- test: Adding missing tests or correcting existing tests.

- chore: Changes to the build process or auxiliary tools and libraries.

### Allowed comments types:

- todo: Notes an action item to be addressed later.

- issue: Highlights a bug, security flaw, or functional problem.

- suggestion: Proposes an improvement or alternative approach.

- nitpick: Points out minor stylistic or formatting concerns.

- design: Explain the reasoning behind your approach.

- question: Ask about things you don't understand yet.

## Tests

Test should be organized, when talking in category of HTTP Error, in the following, decreasing order:
- 500 Status Code (599 to 500)
- 400 Status Code (499 to 400)
- 300 Status Code (399 to 300)
- 200 Status Code (299 to 200)
- 100 Status Code (199 to 100)

All test follow: "should [verb] [result] when [condition]".

Services should return data, not success message.