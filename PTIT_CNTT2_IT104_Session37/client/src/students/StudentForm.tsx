import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import type { Student } from '../types/type';

interface Props {
  open: boolean;
  //Student | undef
  initial?: Student;

  students: Student[];


  onClose: () => void;
  onSubmit: (data: { id?: string; name: string; age: number; grade: string }) => void;
}

const StudentForm: React.FC<Props> = ({open, initial, students, onClose, onSubmit}) => {
  const [name, setName] = useState(initial?.name ?? '');


  const [age, setAge] = useState(initial?.age ?? 0);




  const [grade, setGrade] = useState(initial?.grade ?? '');

  const [error, setError] = useState<string>('');

  useEffect(() => {
    setName(initial?.name ?? '');
    setAge(initial?.age ?? 0);
    setGrade(initial?.grade ?? '');


    setError('');


  }, [initial, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (!name.trim()) return;


    const validationError = validateInput(name, Number(age), grade);
    if (validationError) {
      setError(validationError);
      return;
    }



    onSubmit({
      id: initial?.id,
      name: name.trim(),
      age: Number(age),
      grade: grade.trim(),
    });


    setError('');

  };

  const validateInput = (name: string, age: number, grade: string) => {
    if (!name.trim()) {
      return 'Tên học sinh không được để trống';
    }
    if (
        students.some(
            (student) => student.name === name.trim() && student.id !== (initial?.id || ''),
        )
    ) {
      return 'Tên học sinh đã tồn tại';
    }
    if (!Number.isInteger(age) || age <= 0 || age > 100) {
      return 'Tuổi không được nhỏ hơn 1';
    }
    if (!grade.trim()) {
      return 'Lớp không được để trống';
    }
    return '';
  };

  return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <DialogTitle>{initial?.id ? 'Chỉnh sửa học sinh' : 'Thêm học sinh'}</DialogTitle>
          <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">

            {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
            )}



            <TextField
                label="Tên"
                value={name}



                onChange={(e) => {
                  setName(e.target.value)
                  setError('');
                }}




                fullWidth
                required
                autoFocus
            />
            <TextField
                label="Tuổi"
                type="number"
                value={age}

                onChange={(e) => {
                  setAge(Number(e.target.value));
                  setError('');
                }}

                error={!!error && error.includes('Tuổi')}




                inputProps={{ min: 1 }}


                fullWidth

            />
            <TextField
                label="Lớp"
                value={grade}
                onChange={(e) =>{
                  setGrade(e.target.value)
                  setError('');
                }}

                error={!!error && error.includes('Lớp')}


                fullWidth
                // placeholder="VD: 10A1"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Hủy</Button>
            <Button type="submit" variant="contained" color="primary">
              {initial?.id ? 'Lưu' : 'Thêm'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
  );
};

export default StudentForm;