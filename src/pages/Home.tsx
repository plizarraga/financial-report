import React, { useState } from 'react';
import Spreadsheet from 'react-spreadsheet';
import { read, utils } from 'xlsx';

const Home: React.FC = () => {
  const [tableData, setTableData] = useState<[][] | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
        setTableData(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {tableData && <Spreadsheet data={tableData} />}
    </div>
  );
};

export default Home;
