# appium-with-mocha-framework

# Must have

1. Android Studio

2. Appium inspector

3. Appium server / run in terminal using `appium --address 127.0.0.1 --port 4723 `
   Install appium globally with command `npm i appium` before proceeding to use the terminal

# Installation

- `npm i` To install all the devDependencies

# Usage

This test runs actually on your localhost appium server.

1. Run tests
   `npm test`

2. Update the tests-data data, with your data.

# Repo Structure

## Data

Contains all the data needed by app eg. registration data, login details among others.
`/data/`

## Spec files

There are some other directories that contains tests:

- tests: only the test in this folder wild be listed when xeccuting the tests
- incubator: only tests that are failing or needs repairs are to be moved here
  Move the test from incubator directory in the `/test/specs/**/`
  if you want to run it manually
