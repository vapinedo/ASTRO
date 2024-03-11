import { Curriculum } from "./Curriculum";

export type StoreInitialState = {
    loading: boolean,
    data: Curriculum[],
    error: string
};