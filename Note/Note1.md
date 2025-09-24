- useSelector dùng để đọc data từ store.
- useDispatch dùng để dispatch actions.


- createSlice cần params như sau:

+ name: là string, dùng để đặt tên cho slice.
+initialState: dùng để init value cho reducer.
+reducers: là các method để update value của state trong reducer.

**Chi tiết về các tính năng của Redux Toolkit:**

configureStore: Tạo store Redux với mặc định đã được cấu hình sẵn (như devtools, middleware,...).
createSlice: Tạo ra reducer và action cho một phần của state.
createAsyncThunk: xử lý bất đồng bộ (ví dụ: lấy dữ liệu từ API) dễ dàng.
Cung cấp sẵn những best practice trong cấu hình Redux.
1.2 Redux Saga là gì?
Redux Saga là một middleware của Redux, giúp quản lý các side effect phức tạp (như call API, tương tác với side effect) trong ứng dụng. Redux Saga sử dụng khái niệm "generator function" để quản lý logic bất đồng bộ dễ hiểu và có tổ chức.

Quản lý những luồng logic bất đồng bộ phức tạp (gọi API, điều phối nhiều action, concurrency, retry…).
Tách riêng logic side effect khỏi component và reducer, làm code dễ hiểu và dễ test hơn.
2. So sánh Redux Toolkit và Redux Saga
   Mặc dù Redux Toolkit và Redux Saga đều nhằm phục vụ ứng dụng Redux, chúng có những vai trò khác nhau:

2.1 Redux Toolkit
Redux Toolkit giúp bạn đơn giản hóa việc thiết lập và sử dụng Redux, giảm boilerplate và tự động cung cấp các best practice.

Lợi ích:

Tạo và quản lý store, state reducer dễ dàng.
createAsyncThunk giúp xử lý hành động async đơn giản (như gọi API).
Khi nào bạn nên dùng:

Khi bạn muốn thiết lập Redux nhanh chóng và chuẩn.
Khi ứng dụng chủ yếu yêu cầu logic bất đồng bộ đơn giản.
Khi bạn là người mới bắt đầu hoặc muốn code Redux gọn gàng, dễ bảo trì.
Ví dụ như nếu bạn đang build ứng dụng chỉ có logic bất đồng bộ đơn giản, cần fetch data và update state, createAsyncThunk là đủ.

2.2 Redux Saga
Redux Saga làm middleware cho Redux để quản lý side effect phức tạp và logic bất đồng bộ.

Lợi ích: sử dụng generator function để xử lý luồng side effect phức tạp:

nhiều API call đồng thời
retry, cancellation
quản lý logic phức tạp (like concurrency).
Khi nào bạn nên dùng:

Khi ứng dụng có logic bất đồng bộ phức tạp vượt quá khả năng của createAsyncThunk.
Khi cần kiểm soát luồng side effect chi tiết, sử dụng generator function để viết code rõ ràng hơn.
Khi cần các tính năng như debounce, throttle, retry, cancellation logic.
Ví dụ nếu ứng dụng có logic side effect phức tạp, cần concurrency, cancellation, retry thì bạn cần đến redux saga.


**B1:** Cấu hình store với Redux Toolkit
configureStore: tạo store với cấu hình sẵn, có thể thêm reducer.
RootState: lấy kiểu state root từ store.
AppDispatch: lấy kiểu cho dispatch.


**B2:** Cập nhật src/index.tsx để kết nối store với React:


**B3:** Tạo Slice và Reducer sử dụng Redux Toolkit

createSlice cho phép chúng ta tạo actions và reducers chỉ trong một nơi.
interface UserState: định nghĩa kiểu dữ liệu state user.
initialState: trạng thái ban đầu.
createSlice:

name: định danh slice (cần duy nhất trong root state).
reducers: nơi định nghĩa reducer. Ở đây có updateUser cập nhật state user.
userSlice.actions: tự động tạo action creators dựa trên reducer.
userSlice.reducer: reducer của slice, sẽ được thêm vào store.


**B4:** Thêm user: userReducer vào reducer.


**B5:** Tạo Async Thunk để xử lý logic bất đồng bộ. Ví dụ get user từ API
createAsyncThunk tạo action types (pending, fulfilled, rejected) tự động.
extraReducers: Sử dụng để xác định reducer tương ứng với action từ createAsyncThunk.
fetchUser: Logic bất đồng bộ fetch dữ liệu user từ API.


**B6:** Sử dụng state và dispatch action trong component React
useAppSelector((state) => state.user): trích xuất state user.
updateUser và fetchUser action được dispatch để cập nhật state.
useAppDispatch: Dispatch actions với kiểu chính xác (AppDispatch).
useAppSelector: Chọn state từ store với kiểu chính xác (RootState).

https://200lab.io/blog/huong-dan-su-dung-redux-trong-du-an-react

https://freetuts.net/xay-dung-ung-dung-crud-voi-redux-toolkit-5666.html

https://viblo.asia/p/react-cung-tim-hieu-ve-redux-toolkit-mot-phien-ban-moi-cua-redux-XL6lA6yg5ek