# AngularJS Foody Application


## Overview

This application was built using using AngularJS.

### Installing Dependencies

The application relies upon various Node.js tools, such as [Bower][bower], [Karma][karma] and
[Protractor][protractor]. You can install these by running:

```
npm install
```

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application
- running.

### Unit Testing

This application uses [Jasmine][jasmine] and [Karma][karma] for unit tests/specs.

- Start Karma with `npm test`.
- A browser will start and connect to the Karma server. Chrome and Firefox are the default browsers,
  others can be captured by loading the same URL or by changing the `karma.conf.js` file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.

### End-to-End Testing

This application uses [Protractor][protractor] for end-to-end (e2e) testing.

It requires a webserver that serves the application. See the
_Running the Application during Development_ section, above.

- Serve the application with: `npm start`
- In a separate terminal/command line window run the e2e tests: `npm run protractor`.
- Protractor will execute the e2e test scripts against the web application itself. The project is
  set up to run the tests on Chrome directly. If you want to run against other browsers, you must
  modify the configuration at `e2e-tests/protractor-conf.js`.


## Application Directory Layout

[angular-seed]: https://github.com/angular/angular-seed
[bower]: http://bower.io/
[git-home]: https://git-scm.com
[git-setup]: https://help.github.com/articles/set-up-git/
[google-phone-gallery]: http://web.archive.org/web/20131215082038/http://www.android.com/devices/
[jasmine]: https://jasmine.github.io/
[karma]: https://karma-runner.github.io
[node-download]: https://nodejs.org/en/download/
[protractor]: http://www.protractortest.org/
