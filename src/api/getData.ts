import axios from "axios";

export const getData = async () => {
    return await axios.get("https://ltp2.khunet.net/info");
}

export interface IData{
    success: boolean;
    data: IDatalist;
}

interface IDatalist{
    last_t: number;
    last_h: number;
    last_image: string;
    last_ts: number;
    t_list: number[];
    h_list: number[];
    ts_list: number[];
}