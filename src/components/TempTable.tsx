import React from 'react';

import {Table} from 'reactstrap';

function TempTable() {
  return (
    <>
      <Table className="tablesorter text-right">
        <thead className="text-primary">
            <tr>
              <th>시간</th>
              <th>온도</th>
              <th>습도</th>
              <th>가스 누출 여부</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>10:00</td>
              <td>26°C</td>
              <td>20%</td>
              <td>High</td>
            </tr>
        </tbody>
      </Table>
    </>
  );
}

export default TempTable;
