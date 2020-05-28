export const handleSearch = (searchTerm) => {
    return { type: 'SET_SEARCH_TERM', searchTerm }
}

export const handleSortByName = () => {
    return { type: 'SORT_BY_NAME' }
}
