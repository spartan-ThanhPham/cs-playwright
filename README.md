# README

# **Introduction**

This README file will guide you through collaborating with our team using Bitbucket. Bitbucket is a Git-based platform that facilitates version control and collaboration among team members.

Other than that, it provides you with some common used command lines to work with Playwright.

## Team collaboration with Bitbucket

### 1. Getting Started

- Have Node.js installed (”version”: “20.11.4”)
- Have a Bitbucket account
- Git installed

### 2. Cloning the Repository

```bash
git clone <repository_url>
```

Replace <repository-url> with the actual URL of the repository.

### 3. Branching

The branch name should include a branch type and its name

- Type (prefix): feature, hotfix, bugfix, release, other
- Name: use hyphens for word separation, be descriptive, include issue or ticket numbers, keep it short, etc. (i.e. feature/add-readme)

```bash
git checkout -b feature/branch-name
```

### 4. Making changes

Make your code changes on the branch you created. Ensure that your changes are clear, concise, and follow our coding standards.

### 5. Staging and committing changes

```bash
git add .
```

```bash
git commit -m "your commit message"
```

### 6. Pushing changes

Once your changes are ready, push your branch to the remote repository:

```bash
git push origin feature/branch
```

### 7. Creating a pull request

Create a pull request (PR) on the Bitbucket web interface to merge your changes into the branch “develop” (could be updated). Provide a detailed description of your changes and any relevant information.

### 8. Resolving Conflicts

If there are conflicts during the PR merge, resolve them locally on your branch. After resolving conflicts, push the changes again.

### 9. Reviewing and merging

All code changes must go through a code review process. Assign the PR to a team member for review, and make necessary adjustments based on the feedback.

**Note**

If others have made changes to the repository, pull those changes to your local machine:

```bash
git pull origin main
```

## Playwright

Current version: 1.41.0

**Run all the tests**

```bash
npx playwright test
```

**Run a single test file**

```bash
npx playwright test tests/todo-page.spec.ts
```

**Run tests in interactive UI mode**

```bash
npx playwright test --ui
```

**HTML Test Reports**

By default, the HTML report is opened automatically if some of the tests failed.

```bash
npx playwright show-report
```