export const SEARCH_BY_TERM = '[TS_COURSE] SEARCH_BY_TERM';

export function searchByTerm(payload: string) {
    return {
        type: SEARCH_BY_TERM,
        payload
    };
}