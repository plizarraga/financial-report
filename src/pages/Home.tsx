import { ChangeEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as XLSX from 'xlsx';
interface ExcelData {
  [key: string]: string | number | boolean;
}

const Home = () => {
  const [data, setData] = useState<ExcelData[]>([]);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const excelFile = e.target.files && e.target.files[0];

    if (!excelFile) {
      return;
    }

    reader.readAsBinaryString(excelFile);
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet) as ExcelData[];
      setData(parsedData);
    };
  };
  return (
    <>
      <div className="container">
        <h1>Home</h1>
        <NavLink to="/about">About</NavLink>
        <br />
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
        {data.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Home;
