export default function Ex1_ListCourse() {
    const courses: string[] = ["HTML", "CSS", "JavaScript", "ReactJS"]

    return (
        <>
            <h2>Danh sách khoá học</h2>
            <div>
                {courses.map((course, index) => (
                    <div key={index}>
                        {index + 1}. {course}
                    </div>
                ))}
            </div>
        </>
    )
}
