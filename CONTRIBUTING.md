# Contribute to Onyinye

Onyinye app is a project administered by the core Onyinye team. We appreciate your interest and efforts to contribute to Onyinye.

All efforts to contribute are highly appreciated, we recommend you talk to a maintainer prior to spending a lot of time making a pull request that may not align with the project roadmap. You may do this by opening a discussion on [our discussions forum](https://github.com/onyinye-ng/app/discussions).

## Open Development & Community Driven

Onyinye Projects are **NOT** open-sourced project. See the [LICENSE](https://github.com/onyinye-ng/app/blob/main/LICENSE) file for licensing information. All the work done is available on GitHub.

The core team and the contributors send pull requests which go through the same validation process.

## Feature Requests

Feature Requests by team members are highly encouraged. Please feel free to submit a [feature request](https://github.com/onyinye-ng/app/discussions) by opening a discussion in the discussions forum.

## Documentation

Pull requests relating to fixing documentation for the latest release should be directed towards the [documentation repo](https://github.com/onyinye-ng/docs).

## Bugs

We are using [GitHub Issues](https://github.com/onyinye-ng/app/issues) to manage our public bugs. We keep a close eye on this so before filing a new issue, try to make sure the problem does not already exist.

---

## Before Submitting a Pull Request

The core team will review your pull request and will either merge it, request changes to it, or close it.

**Before submitting your pull request** make sure the following requirements are fulfilled:

Setup:

- Clone the repository to your local machine.
- Create a `dev` branch and pull the latest from the dev branch with `git pull origin dev`.
- Run `npm intall` to install all dependencies.
- Setup your `.env` file with credentials gotten from the `envault` dashboard.

Working on a task:

- Copy the git branch name from the [Linear](https://linear.app/onyinye-ng/) task page, it should look something like this: `dev-10-example-task`.
- If you’ve fixed a bug or added code that should be tested, add the tests and ensure the test suites are passing: `npm test`
- Make sure your code is formatted correctly (`npm run prettier`).
- To commit your codes, follow the [commitlint conventional standard](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)

## Contribution Prerequisites

- You have [Node](https://nodejs.org/en/) at >= v12+ and [NPM](https://nodejs.org/en/) at v8.19+.
- You are familiar with Git.

## Development Workflow

Please follow the instructions below:

### Setup

---

#### 1. Clone the [repository](https://github.com/onyinye-ng/app)

[Go to the repository](https://github.com/onyinye-ng/app) and clone the repository to your local machine.

#### 2. Create local dev branch

Create a dev branch and pull the latest from the origin dev branch.

```bash
git checkout -b dev
git pull origin dev
```

#### 3. Install the dependencies

Go to the root of the repository and install the package dependencies.

```bash
npm install
```

#### 4. Setup `.env` file

Setup your `.env` file with credentials gotten from the envault dashboard.

```bash
npx envault envault-onyinye.herokuapp.com <app-id> <unique-code>
```

replace `<app-id>` and `<unique-code>` with the actual code from the envault dashboard

### Working on a Task

---

#### 1. Pull the latest

Before starting work on any task, checkout to the `dev` branch and pull the latest:

```bash
npm pull origin dev
```

#### 2. Copy git branch name

Copy the git branch name from the [Linear](https://linear.app/onyinye-ng/) task page, it should look something like this: `dev-10-example-task`.

#### 3. Create branch

Create the task branch with the git branch name you copied:

```bash
git checkout -b dev-10-example-task
```

#### 4. Start application in development mode

In your root directory, run

```bash
npm run start:dev
```

#### 5. Test your code

If you’ve fixed a bug or added code that should be tested, add the tests and ensure the test suites are passing:

```bash
npm test
```

#### 6. Cleanup code

Make sure your code is formatted correctly with prettier.

```bash
npm run prettier
```

#### 7. Commit

To commit your codes, follow the [commitlint conventional standard](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)

Acceptable commit headers:

```
build
chore
ci
docs
feat
fix
perf
refactor
revert
style
test
```

#### 8. Raise PR!

When raising a PR, always set the base branch to `dev`. This is very important because the `main` branch is the production branch.

#### 9. Reviews

After pushing your PR, wait for the review checks to complete before contacting a reviewer. In the case where the checks keeps failing, you can contact a reviewer

#### 10. Happy Coding! 👏

---

## Miscellaneous

We do our best to keep the main branch as clean as possible, with tests passing at all times.
