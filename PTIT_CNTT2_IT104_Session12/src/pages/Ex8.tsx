import "../style/Ex8.scss";

const dataUser = [
    { id: 1, name: "Malcolm Lockyer", dob: "01/01/1900", gender: "Female", address: "New york" },
    { id: 2, name: "Maria", dob: "01/01/1901", gender: "Male", address: "London" },
];

const Ex8 = () => {
    return (
        <main>
            <table className="tableEx8">
                <thead className="theadEx8">
                <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody className="tbodyEx8">
                {dataUser.map((user, i) => (
                    <tr key={user.id}>
                        <td>{i + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.dob}</td>
                        <td>{user.gender}</td>
                        <td>{user.address}</td>
                        <td className="activeBtn">
                            <button className="edit">Sửa</button>
                            <button className="delete">Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>
                <tfoot className="footerEx8">
                <tr>
                    <td colSpan={6}></td>
                </tr>
                </tfoot>
            </table>
        </main>
    );
};

export default Ex8;
