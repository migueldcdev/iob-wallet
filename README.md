# ioBuilders Wallet

## Description

This is a web application developed with React, Typescript, and Redux (state management, simulating backend functionality). It also uses Chakra UI v3 in the user interface. The application allows users to manage their wallet with the following key features:

- **User registration**
- **Login** to access the account
- Account(wallet) view with details of **balance** and **transactions**
- **Deposit funds** into the wallet
- **Transfer funds** from User A to User B

![example-img](https://raw.githubusercontent.com/migueldcdev/repo-images/refs/heads/main/iob-wallet/1000040473.jpg) | ![example-img](https://raw.githubusercontent.com/migueldcdev/repo-images/refs/heads/main/iob-wallet/1000040474.jpg) | ![example-img](https://raw.githubusercontent.com/migueldcdev/repo-images/refs/heads/main/iob-wallet/1000040475.jpg)
| --- | --- | --- |

## Useful commands

- Install dependencies

```bash
npm install
```

- Start the development server

```bash
npm run dev
```

- Run the tests

```bash
npm run test
```

## Approach

I chose Vite as the build tool because it has established itself as a top choice for modern web development, known for its exceptional build performance and instant server start.

To implement Redux, I chose the approach recommended by the official documentation, which suggests organizing the logic into three distinct areas:

- **Store**, to hold the state.
- **Hooks**, to simplify interaction with the state.
- **Features**, to organize the logic. 
  
This setup requires a bit of initial configuration but makes straightforward to add new features and to read and update the state.

To test the app core functionalities instead of testing the reducers separated from the components I decided to make a wrapper including the Redux and the Chakra UI providers, getting closer to a real use-case scenario and enabling more thorough tests that cover the entire process.

## Stack

- **TypeScript**: For type safety and improved developer experience.
- **React**: For building the UI.
- **Redux**: For state management simulating the backend.
- **Chakra UI v3**: For creating a responsive and accessible UI.
- **Vitest** + **React Testing Library**: For unit and integration testing.
- **Prettier**: For consistent code formatting.

## Considered improvements

- Add E2E tests with Playwright.
- App theme improvements: curently only in light mode.
