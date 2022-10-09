import { createStore } from 'vuex';

const stateThemes = {
    state() {
        return {
            theme: 'dark'
        }
    },
    mutations: {
        toggleTheme(store) {
            store.theme = store.theme === 'dark' ? 'light' : 'dark'
        }
    }
}

export const store = createStore({
    modules: {
        stateThemes
    }
})