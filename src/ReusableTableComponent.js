import React, { useState } from 'react';
import './ReusableTable.css'; 
import { Link } from 'react-router-dom';

const ReusableTableComponent = ({ columns, data }) => {
  const [searchText, setSearchText] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
 
  const handleSearch = e => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };


  const [filters, setFilters] = useState({});

  const handleFilterChange = (column, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [column]: value.toLowerCase()
    }));
  };
  


  const handleSort = column => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column.toLowerCase());
      setSortDirection('asc');
    }
  };
  

  const handleRefresh = () => {
    // Perform refresh logic
    window.location.reload();

  
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  // Apply filters, sorting, and pagination to the data
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedData = sortColumn
    ? [...filteredData].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      })
    : filteredData;

  const pageSize = 10;
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className='table-container'>
       <button className='screen1'><Link className="link" to ="/screen1">screen1</Link></button>
    <button className='screen1'><Link className="link" to="/screen2">screen2</Link></button>
      {/* Global Filter */}
      <input type="text" value={searchText} onChange={handleSearch} placeholder="Search" />

      {/* Table */}
      <table>
        <thead>
          <tr>
           
              
                {columns.map(column => (
        <th key={column}>
          {column}
          {column !== 'Status' && (
            <input
              type="text"
              placeholder="Filter"
              onChange={e => handleFilterChange(column, e.target.value)}
                  />
                )}
                {column !== 'Status' && (
                  <button onClick={() => handleSort(column)}>Sort</button>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          
          {paginatedData.map(item => (
            <tr key={item.id}>
              {columns.map(column => (
                <td key={`${item.id}-${column}`}>{item[column.toLowerCase()]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>

      {/* Refresh Button (Only available in Screen 2) */}
      {columns.length === 4 && (
        <button className="refresh-button" onClick={handleRefresh}>
          Refresh
        </button>
      )}
    </div>
  );
};

export default ReusableTableComponent;

