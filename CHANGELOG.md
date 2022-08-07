# Changelog
### This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html):

Given a version number MAJOR.MINOR.PATCH, *increment* the:

- MAJOR version when you make **incompatible API** changes,
- MINOR version when you add **functionality in a backwards compatible** manner, and
- PATCH version when you make **backwards compatible bug fixes**.

[ A Git *changelog generating alias/function* can be found at the bottom of this file. ]<br><br><br>




<br><br><br><br><br>
#### *Changelog generated with this git alias:*<br>
`git for-each-ref --sort=-*committerdate --format='<BR><BR>## %(refname:short)<BR>  **%(*objectname:short)**, %(*committerdate:iso8601-strict), released by: *%(taggername)*<BR>  - %(subject)<br><br>%(body)' refs/tags | awk '/## [0-9]/{print}' | sed -E -e $'s/<BR>/\\\n/g'`
