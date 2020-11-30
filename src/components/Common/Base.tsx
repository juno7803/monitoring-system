import React, { useEffect } from 'react';
import * as H from 'history';

interface Ihistory{
    history: H.History;
}

function Base({history}:Ihistory){
    const checkUser = () => {
        const token = JSON.parse(localStorage.getItem('userInfo')||'{}').token;
        if(!token){
            // token이 없으면, 다시 로그인 창
            history.push('/Signin');
        }else{
            history.push('/');
        }
    }

    useEffect(()=>{
        checkUser();
    },[]);

    return(
        <></>
    );
}

export default Base;