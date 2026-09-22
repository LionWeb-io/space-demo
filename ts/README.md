# TypeScript implementation of space DSL

Before running any of the commands below, run the following on a command-line:

```shell
$ ./make.sh
```


This subproject contains six packages:

* `build`: Takes care of generating required code into the `editor` package.

  Run the generator as follows, from inside the `build` package:

  ```shell
  $ npm run generate
  ```

* `daga-client`: An implementation of a model client (using Daga) with which to edit a model according to the space DSL.

  Start the Web app in development mode as follows, from inside the `daga-client` package:

  ```shell
  $ npm start
  ```

* `echo-ws-server`: A simple WebSocket server that just echoes everything it receives to the console.
This is predominantly for checking whether something is actually connecting (correctly) over WebSocket.

* `react-client`: An implementation of a model client (using React) with which to edit a model according to the space DSL.

  Start the Web app in development mode as follows, from inside the `react-client` package:

  ```shell
  $ npm start
  ```

> If this gives you an error message to the tune of
>
> `DOMException [DataCloneError]: function fn(...args) {`
>
> run `yarn` once to (hopefully) fix that problem.
> (Don’t commit the then-generated `yarn.lock` and `.parcel-cache`, though!)

Start the Web app in “production” mode as follows, from inside the `react-client` package:

  ```shell
  $ npm run prod
  ```

* `space-dsl`: An implementation of the Space DSL, in terms of generated TypeScript types.
This package is a dependency of the `daga-client` and `react-client` packages.


* `test`: The home for (unit) tests.

