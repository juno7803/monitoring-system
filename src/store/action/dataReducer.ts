import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import {IData,getData} from '../../api/getData';

// action
const FETCH_DATA = 'FETCH_DATA' as const; // 요청 시작 시 dispatch 되는 액션 loading
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS' as const; // 요청 성공 시 dispatch 되는 액션
const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR' as const; // 요청 실패 시 dispatch 되는 액션

// action creators
export const fetchData = () => ({type:FETCH_DATA});
const fetchDataSuccess = (data:IData) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});


export const fetchDataError = (error:any) => ({
  type:FETCH_DATA_ERROR,
  payload: error
});

type DataAction =
  | ReturnType<typeof fetchDataSuccess>
  | ReturnType<typeof fetchData>
  | ReturnType<typeof fetchDataError>

type initialStateType={
  loading: boolean;
  data: IData | null;
  error: string | null;
};

const initialState = {
    loading: true,
    data: null,
    error: null
};

export function getDataThunk(): ThunkAction<
  void,
  RootState,
  null,
  DataAction
> {
  return async (dispatch) => {
    // loading
    dispatch(fetchData());
    try {
      // success
      const {data} = await getData();
      // 여기서 데이터 가공하여 table을 위한 list 가공해주기
      // let tmpData = [];
      // for(var i = 0; i<data.data.t_list.length; i++){
      //   let tmp = {
      //     temp: data.data.t_list[i],
      //     humid: data.data.h_list[i],
      //     ts: data.data.ts_list[i]
      //   }
      //   tmpData.push(tmp);
      // }
      dispatch(fetchDataSuccess(data));
    } catch (err) {
      // failure
      dispatch(fetchDataError(err));
    }
  };
}

function dataReducer(
    state: initialStateType=initialState,
    action: DataAction
){
    switch(action.type){
        case FETCH_DATA:{
            return {
                loading: true,
                data: state.data,
                error: null
            };
        }
        case FETCH_DATA_SUCCESS:{
            return {
                loading: false,
                data: action.payload,
                error: null
            };
        }
        case FETCH_DATA_ERROR:{
            return {
                loading: false,
                data: null,
                error: action.payload
            };
        }
        default: 
            return state;
    }
}

export default dataReducer;