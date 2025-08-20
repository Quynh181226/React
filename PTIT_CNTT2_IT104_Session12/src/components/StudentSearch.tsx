export const StudentSearch = () => {
    return (
        <div className="header-left">
            <div className="add-student">
                <button>Thêm mới sinh viên</button>
                <input type="text" placeholder="Search Here" />
            </div>
            <div className="searchStudent">
                <button>Tìm kiếm</button>
                <input type="text" placeholder="Sắp xếp" />
            </div>
        </div>
    );
};
