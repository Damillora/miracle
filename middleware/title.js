export default ({ route, store }) => {
  // Take the last value (latest route child)
  console.log(route.meta);
  const title = route.meta.reduce((title, meta) => meta.title || title, 'Damillora')
  store.commit('SET_TITLE', title)
}
