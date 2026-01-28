export const createTransaction = ({
  type,
  amount,
  category,
  description,
  date,
}) => {
  return {
    id: crypto.randomUUID(),
    type,
    amount: Number(amount),
    category,
    description,
    date,
  };
};

// export function randomID() {
//   return Math.random().toString(36).substring(2, 7).toUpperCase();
// }
