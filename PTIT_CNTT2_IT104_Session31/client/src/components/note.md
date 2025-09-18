- MD return undefined when empty

**=>** Need check

- Table yêu cầu dataSource là một mảng các object với các trường cụ thể(key, v.v.) khớp với dataIndex của các Column. 
- Nếu posts (dữ liệu từ API) không có cấu trúc khớp trực tiếp với DataType (interface của TableFrom)

**=>** Cần map để chuyển đổi.