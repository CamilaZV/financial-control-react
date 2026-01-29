function FilterBar({ filters, availableCategories, onChangeFilters }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="mb-3">
          <i className="bi bi-search me-2"></i>Search transaction
        </h5>

        <div className="row g-2 align-items-end">
          <div className="col-md-6">
            <label className="form-label">Search</label>
            <input
              type="search"
              value={filters.search}
              placeholder="Search description..."
              className="form-control"
              onChange={(e) => onChangeFilters({ search: e.target.value })}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Type</label>
            <select
              className="form-select"
              value={filters.type}
              onChange={(e) => onChangeFilters({ type: e.target.value })}
            >
              <option value="all">All types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={filters.category}
              onChange={(e) => onChangeFilters({ category: e.target.value })}
              disabled={filters.type === 'all'}
            >
              <option value="all">All categories</option>
              {availableCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
