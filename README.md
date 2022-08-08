This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

# [React] Redux Toolkit (Một phiên bản mới của Redux)

## `1. Redux Toolkit (RTK)`
  - install
    ### Using Create React App
    ```
      # Redux + Plain JS template
      npx create-react-app my-app --template redux

      # Redux + TypeScript template
      npx create-react-app my-app --template redux-typescript
    ```

    ### An Existing App
    ```
      npm install @reduxjs/toolkit
    ```

  - RTK là một thư viện giúp mình viết Redux tốt hơn, dễ hơn và đơn giản hơn.
  - Ba vấn đề làm nền tảng ra đời RTK:

    ```
      - Configuring a Redux store is too complicated.
      - I have to add a lot of packages to get Redux to do anything useful.
      - Redux requires too much boilerplate code.
    ```

    ![markdown](https://images.viblo.asia/63913ebe-03db-408d-8957-378e4c2eac4b.png)

## `2. RTK bao gồm những gì?`
  ### 2.1 configureStore() 