import { Movie } from '../api/data/SearchResponse';
import { NominateActionType, NominateRemoveAction } from './reducer';

function nominate(movie: Movie): NominateRemoveAction {
    return {
        type: NominateActionType.NOMINATE,
        movie,
    };
}

function remove(movie: Movie): NominateRemoveAction {
    return {
        type: NominateActionType.NOMINATE,
        movie,
    };
}
