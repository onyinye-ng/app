# APP

![MIT License][license-shield]

## Table of Contents

- [APP](#app)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Applications](#applications)
  - [Usage](#usage)
    - [Install dependencies](#install-dependencies)
    - [Build](#build)
    - [Start applications](#start-applications)
    - [Run Tests](#run-tests)
    - [Clean builds](#clean-builds)
    - [Format codes](#format-codes)

---

## About

Onyinye Applications. 🚀

## Applications

- [website][website-app]
- [accounts][accounts-app]
- [dashboard][dashboard-app]
- [admin][admin-app]
- [store][store-app]
- [docs][docs-app]

> All apps share a [common][common-package] library.

## Usage

### Install dependencies

To install dependencies for the applications, run:

```bash
$ npm i -ws
```

### Build

To compile and compress all application codes into builds, run:

```bash
$ npm run build:all
```

To compile a single application, run:

```bash
$ npm run build -w @onyinye-app/<application>
```

e.g

```bash
$ npm run build -w @onyinye-app/website
```

### Start applications

Because all applications are dependent on the common package, it has to be build and watched for changes before starting any other application.

To start the common packge, run:

```bash
$ npm run build -w @onyinye-app/common
```

To start all applications, run:

```bash
$ npm run start:all
```

> NOTE: not recommended if you don't have need for all applications running at the same time.

To start a single application, run:

```bash
$ npm run start:dev -w @onyinye-app/<application>
```

### Run Tests

To test all applications, run tests with:

```bash
$ npm run test:all
```

To test a single application, run:

```bash
$ npm run test -w @onyinye-app/<application>
```

### Clean builds

To remove all builds, clean with:

```bash
$ npm run clean:all
```

To remove the builds for a single application, run:

```bash
$ npm run clean -w @onyinye-app/<application>
```

### Format codes

To format your codes, run:

```bash
$ npm run lint
```

[website-app]: packages/website/
[accounts-app]: packages/accounts/
[dashboard-app]: packages/dashboard/
[admin-app]: packages/admin/
[store-app]: packages/store/
[docs-app]: packages/docs/
[common-package]: packages/common/
[license-shield]: https://img.shields.io/github/license/sophiabrandt/tdd-node-shows.svg?style=flat-square
