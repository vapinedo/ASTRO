import { Curriculum } from "./Curriculum";

export type StoreInitialState = {
    loading: boolean,
    curriculums: Curriculum[],
    error: string
};