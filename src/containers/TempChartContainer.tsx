import React from 'react';
import {useSelector} from 'react-redux';
import TempChart from '../components/TempChart';
import { RootState } from '../store';

function TempChartContainer(){
    const data = useSelector((state:RootState) => state.dataReducer.data);
    return (
        <>
            {data !==null && (
                <TempChart
                    t_list={data.data.t_list}
                    ts_list={data.data.ts_list}
                />
            )}
        </>
    );
}

export default TempChartContainer;