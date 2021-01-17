import { Movie } from '../api/data/SearchResponse';

export type State = {
    nominations: Movie[];
};

export enum NominateActionType {
    NOMINATE = 'NOMINATE',
    REMOVE = 'REMOVE',
}

export type NominateRemoveAction = {
    type: NominateActionType;
    movie: Movie;
};

const initialState: State = {
    nominations: [],
};

export default function reducer(
    state = initialState,
    action: NominateRemoveAction
) {
    switch (action.type) {
        case NominateActionType.NOMINATE:
            break;
        case NominateActionType.REMOVE:
            break;
        default:
            break;
    }
}
