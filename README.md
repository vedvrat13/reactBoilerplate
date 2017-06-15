[![Build Status](https://travis-ci.org/vedvrat13/reactBoilerplate.svg?branch=master)](https://travis-ci.org/vedvrat13/reactBoilerplate)

# REACT BOILER PLATE

### What Does It Contain    
1) ESLint // Code Linting
    - eslint-plugin-import: This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
    - PARSER: babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint.

2) Webpack // Bundling
    - entry: The entry point from where the Webpack will start bundling.
    - output: After packaging the resources, it will have the output as specified.
    - resolve: The preference given in order to find the MODULES and the extensions to be applied
    - module: How/which-one to load/exclude a module with a particular extension and which loader to be used

3) Testing // TDD
    - mocha: test framework to run test suites
        // You DESCRIBE a test Suite
        // Behaviour is described in the IT block
    - chai: test assertion library that lets us test the section
        // should
        // expect
        // assert
    - enzyme: to test React components by loading the component via Shallow, Mount, Render methods

4) Redux // State Management
    - Provider from 'react-redux' package is a higher order component which takes the *store* and passes it to Child Component.
    - *ActionCreators* are responsible to create actions with a type & payload.
    - This passes through a *Middleware* where the Data is parsed and sent to the store.
        // Typical Middleware are logger, thunk, promise
    - Store is the place where the Data is acted upon based on the action's type.
        The payload is used to manipulate the data tree
