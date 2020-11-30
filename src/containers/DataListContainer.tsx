import React, { useState } from 'react'
import DataList from '../components/DataList';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function DataListContainer(){
    const data = useSelector((state: RootState) => state.dataReducer.data);

    return(
        <>
            {data !==null && (
                <DataList 
                    ts_list = {data.data.ts_list}
                    t_list = {data.data.t_list}
                    h_list = {data.data.h_list}
                />
            )}
        </>
    );
}

export default DataListContainer;