import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store'
import {Link} from 'react-router-dom';
import {CardText} from 'reactstrap';

function Image(){
    const data = useSelector((state: RootState) => state.dataReducer.data);
    return (
        <>
            {data !== null && (
                <>
                    <img src="https://ltp2.khunet.net/uploads/c44085bc-d0d8-4511-90f4-05501f01bc6c.jpg"
                        style={{width: "100%",height: "30vh"}}
                    />
                </>
            )}
        </>
    );
}

export default Image;