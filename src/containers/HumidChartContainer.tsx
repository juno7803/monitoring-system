import React from 'react';
import {useSelector} from 'react-redux';
import HumidChart from '../components/HumidChart';
import { RootState } from '../store';

function TempChartContainer(){
    const data = useSelector((state:RootState) => state.dataReducer.data);
    return (
        <>
            {data !==null && (
                <HumidChart
                    h_list={data.data.h_list}
                    ts_list={data.data.ts_list}
                />
            )}
        </>
    );
}

export default TempChartContainer;