export const TableHead = () => {
  return (
     <thead>
            <tr style={{ background: "#f4f4f4" }}>
              <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <input type="checkbox" />
              </th>
              <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Tên sinh viên
              </th>
              <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Email
              </th>
              <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Địa chỉ
              </th>
              <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Số điện thoại
              </th>
              <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Lựa chọn
              </th>
            </tr>
          </thead>
  )
}
