export const allCountries = {
    state() {
        return {
            countries: [],
            error: '',
            filter: 'All',
            search: '',
            isLoading: false
        }
    },
    getters: {
        getAllCountries(state) {
            return state.countries
        },
        getAllCountriesError(state) {
            return state.error
        },
        getAllCountriesLoading(state) {
            return state.isLoading
        },
        getFilteredCountries(state) {
            if(state.filter === 'All') return state.countries
            return state.countries.filter(country => country.region === state.filter)
        },
        getSearchedCountries(state, getters) {
            return getters.getFilteredCountries.filter(country => country.name.official.includes(state.search))
        }
    },
    mutations: {
        setCountries(state, countries) {
            state.countries = countries
        },
        setError(state, error) {
            state.error = error
        },
        setIsLoading(state, status) {
            state.isLoading = status
        },
        setFilter(state, filter) {
            state.filter = filter
        },
        setSearch(state, search) {
            state.search = search
        }
     },
    actions: {
        async fetchCountries({commit}) {
            commit('setIsLoading', true)
            try {
                let data = await fetch('https://restcountries.com/v3.1/all').then(data => data.json())
                commit('setCountries', data)
            } catch (e) {
                commit('setError', e.message)
            } finally {
                commit('setIsLoading', false)
            }
        }
    }
}