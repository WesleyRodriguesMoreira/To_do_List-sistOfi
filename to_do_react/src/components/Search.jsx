const Search = ({ search, setSearch}) => {
  return (
    <div className="search">
        <h2>Pesquisa</h2>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisa"/>
    </div>
  )
}

export default Search
