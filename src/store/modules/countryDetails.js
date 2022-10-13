export const countryDetails = {
    state() {
        return {
            country: null,
            error: '',
            isLoading: false
        }
    },
    getters: {
        getCountry(state) {
            return state.country
        },
        getCountryError(state) {
            return state.error
        },
        getCountryLoading(state) {
            return state.isLoading
        }
    },
    mutations: {
        setCountryDetails(state, country) {
            state.country = country
        },
        setError(state, error) {
            state.error = error
        },
        setIsLoading(state, status) {
            state.isLoading = status
        },
    },
    actions: {
        async fetchCountryDetails({commit}, param) {
            commit('setIsLoading', true)
            try {
                let [data] = await fetch(`https://restcountries.com/v3.1/alpha/${param}`).then(data => data.json())
                commit('setCountryDetails', data)
            } catch (e) {
                commit('setError', e.message)
            } finally {
                commit('setIsLoading', false)
            }
        }
    }
}