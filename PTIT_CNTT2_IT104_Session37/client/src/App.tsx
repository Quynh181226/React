import React, { useMemo, useEffect, useState } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';


import { useAppDispatch, useAppSelector } from './hooks/hook';

import { getAllStudents, addStudent, updateStudent, deleteStudent} from './apis/api';
// import { getStuUpdate, resetStuUpdate } from "./slices/studentSlice"
import type { Student } from './types/type';
import StudentForm from './students/StudentForm';
import StudentList from './students/StudentList';
import StudentSearchSortFilter from './students/StudentSearchSortFilter';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list: students, status, error } = useAppSelector((state) => state.student);
  const [openForm, setOpenForm] = useState(false);
  const [search, setSearch] = useState('');
  const [gradeFilter, setGradeFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'age'>('name');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');



  const [editingStudent, setEditingStudent] = useState<Student | undefined>(undefined); // State cục bộ





  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);


  const grades = useMemo(() => {
    return Array.from(new Set(students.map((s) => s.grade))).sort();
  }, [students]);




  const handleAddClick = () => {
    // dispatch(resetStuUpdate());

    setEditingStudent(undefined);
    setOpenForm(true);
  };

  const handleSubmit = async (data: { id?: string; name: string; age: number; grade: string }) => {
    if (data.id) {
      await dispatch(updateStudent({ id: data.id, name: data.name, age: data.age, grade: data.grade }));
    } else {
      await dispatch(addStudent({ id: Date.now().toString(), name: data.name, age: data.age, grade: data.grade }));
    }
    setOpenForm(false);



    setEditingStudent(undefined);


  };

  const handleEdit = (s: Student) => {
    // dispatch(getStuUpdate(s));
    setEditingStudent(s);
    setOpenForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Xác nhận xóa học sinh?')) return;
    await dispatch(deleteStudent(id));
  };

  const handleClearFilters = () => {
    setSearch('');
    setGradeFilter('all');
    setSortBy('name');
    setSortDir('asc');
  };

  const filteredSorted = useMemo(() => {
    let out = students.slice();
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      out = out.filter((s) => s.name.toLowerCase().includes(q));
    }
    if (gradeFilter !== 'all') {
      out = out.filter((s) => s.grade === gradeFilter);
    }
    out.sort((a, b) => {
      if (sortBy === 'name') {
        const r = a.name.localeCompare(b.name);
        return sortDir === 'asc' ? r : -r;
      } else {
        const r = a.age - b.age;
        return sortDir === 'asc' ? r : -r;
      }
    });
    return out;
  }, [students, search, gradeFilter, sortBy, sortDir]);

  return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">🎓 Quản lý học sinh</h1>




        {status === 'pending' && (
            // <div className="text-center my-4">
            //   <CircularProgress />
            // </div>
              <div className="flex justify-center items-center  z-20">
                <CircularProgress size={48} sx={{ color: "#a0b3cf" }} />
              </div>
        )}


        {status === 'failed' && (
            <Typography color="error" className="mb-4">
              Lỗi: {error}
            </Typography>
        )}

        <div className="flex gap-4 mb-4">
          <Button variant="contained" color="primary" onClick={handleAddClick}>
            Thêm học sinh
          </Button>
        </div>

        <StudentSearchSortFilter
            search={search}
            gradeFilter={gradeFilter}
            sortBy={sortBy}
            sortDir={sortDir}
            grades={grades}
            onSearchChange={setSearch}
            onGradeChange={setGradeFilter}
            onSortChange={(by, dir) => {
              setSortBy(by);
              setSortDir(dir);
            }}
            onClear={handleClearFilters}
        />

        <div className="mt-6">
          <StudentList
              students={filteredSorted}
              onEdit={handleEdit}
              onDelete={handleDelete}
          />
        </div>

        <StudentForm
            open={openForm}
            students={students}
            initial={editingStudent}
            onClose={() => setOpenForm(false)}
            onSubmit={handleSubmit}
        />
      </div>
  );
};

export default App;