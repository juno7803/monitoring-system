import React from 'react';
import { Table } from 'reactstrap';

interface IDataList {
  ts_list: number[];
  h_list: number[];
  t_list: number[];
}

function DataList({ ts_list, t_list, h_list }: IDataList) {

  return (
    <div className="d-flex">
      <Table>
        <thead className="text-primary">
          <tr>
            <th>시간</th>
          </tr>
        </thead>
        <tbody>
          {ts_list.map((ts) => (
            <tr>
              <th>{new Date(ts * 1000).toDateString()}</th>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table className="tablesorter">
        <thead className="text-primary">
          <tr>
            <th>온도</th>
          </tr>
        </thead>
        <tbody>
          {t_list.map((temp) => (
            <tr>
              <th>{Math.ceil(temp)}°C</th>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table className="tablesorter">
        <thead className="text-primary">
          <tr>
            <th>습도</th>
          </tr>
        </thead>
        <tbody>
          {h_list.map((humid) => (
            <tr>
              <th>{Math.ceil(humid)}%</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DataList;
