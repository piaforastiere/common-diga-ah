import { Person } from '../types';

const FilteringList = (value: string, list: Person[] | null) => {
  const filteredStudents =
    list &&
    list.filter(student => {
      if (
        student.name.toLowerCase().includes(value.toLowerCase()) ||
        student.lastname.toLowerCase().includes(value.toLowerCase())
      ) {
        return student;
      }

      return false;
    });
  return filteredStudents;
};

export default FilteringList;
