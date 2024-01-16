# Crypto Wallet App

This repository contains the source code for a simple Crypto Wallet App developed as a semester project for Mobile App Development. The app is built using React Native and Firebase for user authentication on login and signup screens. The primary functionality revolves around utilizing the Coin Gecko API to display the latest prices and percentage changes of top cryptocurrencies.

## Features

- **Login and Signup Screens:** User authentication is handled through Firebase on dedicated login and signup screens.
- **Home Screen:** Displays the user's balance information and data for top cryptocurrencies.
- **Trade Screen:** Features a modal over the bottom tab bar, allowing users to interact with trade-related functionalities.
- **Market Screen:** Presents the latest market data for cryptocurrencies.

## Technologies Used

- **React Native:** The framework used for developing the mobile application.
- **Firebase:** Utilized for user authentication on login and signup screens.

## Usage

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Abdullah152535/CryptoWallet
    cd CryptoWallet
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npx expo start
    ```

## Note

The Portfolio screen has been temporarily removed from this version. The app efficiently utilizes the Coin Gecko API, fetching cryptocurrency data only once inside the provider component of the Context API. This optimization ensures data fetching across screens without redundant API calls.
