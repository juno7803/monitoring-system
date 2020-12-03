import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store'

function Image(){
    const data = useSelector((state: RootState) => state.dataReducer.data);
    return (
        <>
            {data !== null && (
                <>
                    <img src={data.data.last_image}
                        style={{width: "100%",height: "100%"}}
                    />
                </>
            )}
        </>
    );
}

export default Image;