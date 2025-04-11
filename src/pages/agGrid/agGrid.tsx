import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { themeBalham } from 'ag-grid-community';


interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  username: string;
}

const AuthAgGrid: React.FC = () => {
  const [rowData, setRowData] = useState<User[]>([]);

  const testrowData: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 25, email: 'john.doe@example.com', username: 'johndoe' },
    { id: 2, firstName: 'Maria', lastName: 'Smith', age: 30, email: 'maria.smith@example.com', username: 'mariasmith' },
    { id: 3, firstName: 'Lee', lastName: 'Kim', age: 22, email: 'lee.kim@example.com', username: 'leekim' },
  ];

  const columnDefs: ColDef[] = [
    { headerName: 'ID', field: 'id' },
    {
      headerName: 'Full Name',
      valueGetter: (params) => `${params.data.firstName} ${params.data.lastName}`,
    },
    { headerName: 'Age', field: 'age' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Username', field: 'username' },
  ];

//   useEffect(() => {
//     setRowData(testrowData);//gán data vào setRowData
//   }, []);




  // Highcharts
  const chartOptions: Highcharts.Options = {
    title: {
      text: 'U.S Solar Employment Growth',
      align: 'left',
    },
    subtitle: {
      text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
      align: 'left',
    },
    yAxis: {
      title: {
        text: 'Number of Employees',
      },
    },
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2022',
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },
    series: [
      {
        name: 'Installation & Developers',
        data: [
          43934, 48656, 65165, 81827, 112143, 142383,
          171533, 165174, 155157, 161454, 154610, 168960, 171558,
        ],
        type: 'line',
      },
      {
        name: 'Manufacturing',
        data: [
          24916, 37941, 29742, 29851, 32490, 30282,
          38121, 36885, 33726, 34243, 31050, 33099, 33473,
        ],
        type: 'line',
      },
      {
        name: 'Sales & Distribution',
        data: [
          11744, 30000, 16005, 19771, 20185, 24377,
          32147, 30912, 29243, 29213, 25663, 28978, 30618,
        ],
        type: 'line',
      },
      {
        name: 'Operations & Maintenance',
        data: [
          null, null, null, null, null, null, null,
          null, 11164, 11218, 10077, 12530, 16585,
        ],
        type: 'line',
      },
      {
        name: 'Other',
        data: [
          21908, 5548, 8105, 11248, 8989, 11816, 18274,
          17300, 13053, 11906, 10073, 11471, 11648,
        ],
        type: 'line',
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };

  return (
    <div style={{ padding: '20px' }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <div className="ag-theme-alpine" style={{ height: 500, width: '100%', marginTop: 30 }}>
        <AgGridReact<User> theme={themeBalham}
            rowData={testrowData}
          columnDefs={columnDefs}
          defaultColDef={{
            sortable: true,
            filter: true,
            resizable: true,
          }}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default AuthAgGrid;
