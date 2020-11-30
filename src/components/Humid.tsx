import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store'
import {CardText} from 'reactstrap';

function Humid(){
    const data = useSelector((state: RootState) => state.dataReducer.data);

    return (
        <>
            {data !== null && (
                <>
                    <CardText tag="h3">
                        현재 습도 : {Math.ceil(data.data.last_h)}%
                    </CardText>
                </>
            )}
        </>
    );
}

export default Humid;