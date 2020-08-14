export const state = () => ({
  filters: [
    { name: 'эффективный', active: false },
    { name: 'дорогой', active: false },
    { name: 'дешевый', active: false },
  ],
  selectedFilter: '',
  search: '',
})

export const mutations = {
  SET_FILTER(state, filter) {
    state.selectedFilter = filter
    for (let i = 0; i < state.filters.length; i++) {
      state.filters[i].active = false
    }
    filter.active = true
  },
  SET_SEARCH(state, searchText) {
    state.search = searchText
  },
}

export const actions = {}
