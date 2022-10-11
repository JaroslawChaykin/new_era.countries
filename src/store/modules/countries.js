export const allCountries = {
    state() {
        return {
            countries: [],
            error: '',
            filter: 'all'
        }
    },
    getters: {
        getAllCountries(state) {
            return state.countries
        }
    },
    mutations: {
        setCountries(state, countries) {
            state.countries = countries
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        async fetchCountries({commit}) {
            try {
                let data = await fetch('https://restcountries.com/v3.1/all').then(data => data.json())
                commit('setCountries', data)
            } catch (e) {
                commit('setError', e.message)
            }
        }
    }
}