import React from 'react';
import ReusableTableComponent from './ReusableTableComponent';

const Screen2 = () => {
  const columns = ['ID', 'Name', 'Position', 'Department'];
  const data = [
    { id: 1, name: 'John Doe', position: 'Manager', department: 'Sales', salary: 50000, status: 'Active' },
    { id: 2, name: 'Jane Smith', position: 'Developer', department: 'Engineering', salary: 60000, status: 'Active' },
    { id: 3, name: 'Mike sinh', position: 'Accountant', department: 'Finance', salary: 45000, status: 'Inactive' },
    { id: 4, name: 'Jerry jack', position: 'Manager', department: 'Sales', salary: 50000, status: 'Active' },
    { id: 5, name: 'Carol Dsilva', position: 'Developer', department: 'Engineering', salary: 60000, status: 'Active' },
    { id: 6, name: 'Neha Naik', position: 'Accountant', department: 'Finance', salary: 45000, status: 'Inactive' },
    { id: 7, name: 'Zuly Kumari', position: 'Manager', department: 'Sales', salary: 50000, status: 'Active' },
    { id: 8, name: 'Ujvala Pawaskar', position: 'Developer', department: 'Engineering', salary: 60000, status: 'Active' },
    { id: 9, name: 'Reshma Hubbali', position: 'Accountant', department: 'Finance', salary: 45000, status: 'Inactive' },
    { id: 10, name: 'Dhiraj Rajput', position: 'Manager', department: 'Sales', salary: 50000, status: 'Active' },
    { id:11, name: 'Ahmad Shah', position: 'Developer', department: 'Engineering', salary: 60000, status: 'Active' },
    { id: 12, name: 'Sana Moody', position: 'Accountant', department: 'Finance', salary: 45000, status: 'Inactive' },
    // Add more employee data as needed
  ];

  return (
    <div>
      <h1>Screen 2</h1>
      <ReusableTableComponent columns={columns} data={data} />
    </div>
  );
};

export default Screen2;
