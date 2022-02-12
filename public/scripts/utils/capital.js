export const updateCapital = () => {
  const capital = localStorage.getItem('capital')
  const capitalPrint = document.querySelector('[stely-capital]');

  capitalPrint.textContent = capital;
}