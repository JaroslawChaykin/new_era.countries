import { createStore } from 'vuex';
import { themes } from './modules/themes';
import { allCountries } from './modules/countries';
import { countryDetails } from './modules/countryDetails';

export const store = createStore({
    modules: {
        themes,
        allCountries,
        countryDetails
    }
});