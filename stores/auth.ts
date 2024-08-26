export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: null
    }),
    actions: {
        login(user: any) {
            this.user = user
        },
        logout() {
            this.user = null
        }
    }
});