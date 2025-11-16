export function getMonthMatrix(date) {
  const year = date.getFullYear();
  const month = date.getMonth(); 

  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);

  const start = first.getDay();
  const daysInMonth = last.getDate();

  const weeks = [];
  let row = [];

  for (let i = 0; i < start; i++) row.push(null);

  for (let d = 1; d <= daysInMonth; d++) {
    row.push(d);
    if (row.length === 7) {
      weeks.push(row);
      row = [];
    }
  }

  if (row.length > 0) {
    while (row.length < 7) row.push(null);
    weeks.push(row);
  }

  return weeks;
}
