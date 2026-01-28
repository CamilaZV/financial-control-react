import { formatCurrency } from '../../utils/formatCurrency';

function BalanceSummary({ totalIncome, totalExpenses, balance }) {
  const balanceClass = balance >= 0 ? 'text-success' : 'text-danger';

  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Income</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {formatCurrency(totalIncome)}
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Expenses</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {formatCurrency(totalExpenses)}
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Balance</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary balanceClass">
                  {formatCurrency(balance)}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BalanceSummary;
