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
  ### `2.1 configureStore()`
    - Wrap `createStore` để cung cấp những tùy chọn cấu hình và mặc định đơn giản.
    - Nó có thể tự động kết hợp với `slice reducers`, thêm bất kỳ Redux middleware mà bạn cung cấp, bao gồm `redux-thunk` (mặc định)
    - Nó cũng cho phép sử dụng Redux DevTools Extension.

  ### `2.2 createSlice()`
    - Chấp nhận một đối tượng các hàm reducers, một slice name, một initial state value.
    - Nó tự động tạo một `slice reducer` với các action creators và action types tương ứng.

  ### `2.3 createReducer() -> chưa sử dụng`

  ### `2.4 createAction() -> chưa sử dụng`

  ### `2.5 createSelector() -> chưa sử dụng`
     
  ### `2.6 createAsyncThunk()`
    - Một hàm nhận đối số là một Redux action type string và một hàm callback mà sẽ trả về một promise.
    - Nó tạo promise lifecycle action types dựa trên action type prefix mà bạn đã chyền vào
    - Trả về một thunk action creator mà sẽ chạy promise callback và dispatch the lifecycle actions dựa trên the returned promise.

  ```typescript
    export const getTodos = createAsyncThunk('todos/todosFetched', async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      return response.data;
    })
  ```
    - This abstracts the standard recommended approach for handling async request lifecycles.
    - It does not generate any reducer functions, since it does not know what data you're fetching, how you want to track loading state, or how the data you return needs to be processed. You should write your own reducer logic that handles these actions, with whatever loading state and processing logic is appropriate for your own app.
    
  ### `2.7 createEntityAdapter() -> chưa thấy bao giờ`


[How to setup RTK](https://2kvn.com/react-gioi-thieu-tong-quat-ve-redux-toolkit-p5f313739)