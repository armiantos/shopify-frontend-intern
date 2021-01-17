import { Movie } from '../api/data/SearchResponse';
import { NominateActionType, NominateRemoveAction } from './reducer';

export function nominate(movie: Movie): NominateRemoveAction {
    return {
        type: NominateActionType.NOMINATE,
        movie,
    };
}

export function remove(movie: Movie): NominateRemoveAction {
    return {
        type: NominateActionType.REMOVE,
        movie,
    };
}
