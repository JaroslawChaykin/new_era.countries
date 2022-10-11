export const themes = {
    state() {
        return {
            theme: 'dark'
        }
    },
    getters: {
        currentTheme(store) {
            return store.theme
        }
    },
    mutations: {
        toggleTheme(store) {
            store.theme = store.theme === 'dark' ? 'light' : 'dark'
        }
    }
}