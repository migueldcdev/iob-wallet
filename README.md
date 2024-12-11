# ioBuilders Wallet

## Description

This is a web application developed with React, Typescript, and Redux (state management, simulating backend functionality). It also uses Chakra UI v3 in the user interface. The application allows users to manage their wallet with the following key features:

- User Registration
- Login to access the account
- Account (wallet) view with details of balance and transactions
- Deposit money into the wallet
- Money transfer from User A to User B

![example-img]([https://github.com/migueldcdev/repo-images/blob/main/idea-board/idea-board.png](https://raw.githubusercontent.com/migueldcdev/repo-images/refs/heads/main/iob-wallet/1000040475.jpg))
## Useful commands

To install the app

```bash
npm install
```

To run the server

```bash
npm run dev
```

To run the tests

```bash
npm run test
```

## Approach

To implement Redux, I chose the modern approach recommended by the official documentation, which suggests organizing the logic into three distinct areas: store, hooks, and features. This setup requires a bit of initial configuration but makes straightforward to add new features and to read and update the state.

To test the app core functionalities instead of testing the reducers separated from the components I decided to make a wrapper including the Redux and the Chakra UI providers, getting closer to a real use-case scenario and enabling more thorough tests that cover the entire process.

## Stack

- TypeScript
- React
- Redux
- Chakra UI v3
- Vitest + React Testing Library
- Prettier

## Considered improvements

- Add E2E testing with Playwright
- App palette selection
