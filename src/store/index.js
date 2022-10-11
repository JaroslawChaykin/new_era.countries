import { createStore } from 'vuex';
import { themes } from './modules/themes';
import { allCountries } from './modules/countries';

export const store = createStore({
    modules: {
        themes,
        allCountries
    }
})