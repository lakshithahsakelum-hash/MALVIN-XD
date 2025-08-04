module.exports = {
  SESSION_ID: " ",  // add your Session Id make sure it starts with malvin~
  OWNER_NUMBER: "263714757857", // PUT OWNER NUMBER HERE
  PREFIX: "." // prefix (e.g., ., /, !, *)
};
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
