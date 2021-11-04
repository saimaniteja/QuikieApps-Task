import React from "react";
import MaterialTable from 'material-table';

const Table = ({ columnData, tableData }) => {
  return (
    <div style={{margin: '70px', border: '1px solid #D5DBDB', borderRadius: '5px'}}>
      <MaterialTable
        title="Stock Details Table"
        columns={columnData}
        data={tableData}
        options={{
          search: true,
          
        }}
      />
    </div>
  );
};

export default Table;