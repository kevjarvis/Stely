export const filterArrayOfObjects = (array, mode, param, value) => {
  const _equal = () => array.filter(item => {
    return item[param] === value;
  });
  const _graterThan = () => array.filter(item => {
    return item[param] >= value;
  });
  const _lessThan = () => array.filter(item => {
    return item[param] <= value;
  });
  const _between = () => array.filter(item => {
    return item[param] >= value[0] && item[param] <= value[1];
  });

  const filter = {
    "equal": _equal(),
    "graterThan": _graterThan(),
    "lessThan": _lessThan(),
    "between": _between()
  }

  return filter[mode];
}