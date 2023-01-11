import { selector } from 'recoil';
import { todo, filter } from './atom';

export const stateFilter = selector({
    key: 'stateFilter',
    get: ({ get }) => {
        const state = get(filter).state;
        const list = get(todo);
        if (state === 'all') {return list};
        return list.filter((item) => item.state === state);
    }
});
