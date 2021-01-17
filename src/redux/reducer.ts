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
            // Don't add more nominations after 5
            if (state.nominations.length === 5) {
                return state;
            }

            return {
                ...state,
                nominations: [...state.nominations, action.movie],
            };
        case NominateActionType.REMOVE:
            return {
                ...state,
                nominations: state.nominations.filter(
                    (nominee) => nominee.imdbID !== action.movie.imdbID
                ),
            };
        default:
            return state;
    }
}
