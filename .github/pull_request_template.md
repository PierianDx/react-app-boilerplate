_type_(_optional scope_): _description_

_optional body_

_optional footer_

#### Pull Request Guidelines (remove this before submitting PR)
---
The first line is a single line of max. 50 characters that contains a succinct description of the change. It contains a type, an optional scope, and a subject

- *_type_* describes the kind of change that this commit is providing. Allowed types are:
  - *build*: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
  - *ci*: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
  - *docs*: Documentation only changes
  - *feat*: A new feature
  - *fix*: A bug fix
  - *perf*: A code change that improves performance
  - *refactor*: A code change that neither fixes a bug nor adds a feature
  - *style*: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  - *test*: Adding missing tests or correcting existing tests
- *_scope_* \(optional) can be anything specifying the place of the commit change
- *_subject_* is a very short description of the change, in the following format:
  - imperative, present tense: “change” not “changed”/“changes”
  - no capitalised first letter
  - no dot (.) at the end

If the commit reverts a previous commit, it should begin with "revert:", followed by the header of the reverted commit. In the body it should say: 

`This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

The BODY should include the motivation for the change and contrast this with previous behavior and must be phrased in   imperative present tense 

The FOOTER should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit closes. Breaking Changes should start with the word "BREAKING CHANGE:" with a space or two newlines. The rest of the commit message is then used for this.

##### Examples
```
docs(changelog): update changelog to beta.5
```
```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```
