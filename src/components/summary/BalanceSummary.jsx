import { formatCurrency } from '../../utils/formatCurrency';

function BalanceSummary({ totalIncome, totalExpenses, balance }) {
  const balanceClass = balance >= 0 ? 'text-success' : 'text-danger';

  return (
    <div className="row mb-5 text-center">
      <div className="col-md-4">
        <div className="card shadow-sm border-0">
          <div className="card-body py-3">
            <h6 className="text-muted text-uppercase small mb-1">
              <i className="bi bi-arrow-up-circle me-1 text-success"></i>Income
            </h6>
            <h3 className="fw-bold text-success">
              {formatCurrency(totalIncome)}
            </h3>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm border-0">
          <div className="card-body py-3">
            <h6 className="text-muted text-uppercase small mb-1">
              <i className="bi bi-arrow-down-circle me-1 text-danger"></i>
              Expenses
            </h6>
            <h3 className="fw-bold text-danger">
              {formatCurrency(totalExpenses)}
            </h3>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm border-0">
          <div className="card-body py-3">
            <h6 className="text-muted text-uppercase small mb-1">
              <i className="bi bi-wallet2 me-1"></i>Balance
            </h6>
            <h3 className={`fw-bold ${balanceClass}`}>
              {formatCurrency(balance)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceSummary;
