export default (req, res) => {
  const { query: { id } } = req

  res.json({ user: { id, name: 'Test User' } })
}