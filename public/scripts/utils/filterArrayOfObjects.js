export const filterArrayOfObjects = (array, param, mode, value) => {
  const _equal = () => array.filter(item => {
    return item[param] === value;
  });
  const _greaterThan = () => array.filter(item => {
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
    "greaterThan": _greaterThan(),
    "lessThan": _lessThan(),
    "between": _between()
  }

  return filter[mode];
}