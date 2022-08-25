###
* scripts:
- jasmine => for running tests of the unit test with jasmine
- lint => for using the eslint to check errors over index.ts
- prettier => using prettier library for cleaning code in all files of typescript
- start => starting nodemon server (developing purposes)
- build => compiling the typescript code into javascript codes
- test => run script build and then script jasmine

* endpoints:
-- all end points in this project are accessed using get HTTP method
- '/' => root endpoint for welcome into the project
-  '/api/images/:picName/:h/:w' => is the endpoint for running the app functionality
    - picName: represents a string containing the name of the photo without the extension
    - h: represents the required height of the picture
    - w: represents the require width of the picture

* functionalities
- any other endpoint that is not mentioned above are being handled by missingRoutes.middleware
- if the name of the picture is not found or the prams of height and width have been entered incorrectly and not a number this is also handled using the paramsValidate.middleware
- all the tests are written in the tests/indexSpec.ts
