// export const state = () => ({
//     user: null,
//     counter: 0
// })

// export const mutations = {
//     SET_USER(state, user) {
//         state.user = user || null
//     },
//     increment(state) {
//         state.counter++
//     }
// }

// export const getters = {
//     isAuthenticated(state) {
//         return !!state.user
//     },
//     loggedUser(state) {
//         return state.user
//     }
// }

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}