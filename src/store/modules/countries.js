export const allCountries = {
    state() {
        return {
            countries: [],
            error: '',
            filter: 'all',
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