import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store'
import {CardText} from 'reactstrap';
import tsToTime from '../util/tsToTime';

function Temperature(){
    const data = useSelector((state: RootState) => state.dataReducer.data);
    return (
        <>
            {data !== null && (
                <>
                    <CardText tag="h3">
                        현재 온도 : {Math.ceil(data.data.last_t)}℃
                    </CardText>
                    <CardText tag="p" style={{textAlign: "right"}}>
                        최종 수신 시각 : {tsToTime(data.data.last_ts)}
                    </CardText>
                </>
            )}
        </>
    );
}

export default Temperature;