let count = 0
const countText = document.getElementById('js-count')
const btnPlus = document.getElementById('js-btn-plus')
const btnMinus = document.getElementById('js-btn-minus')
const btnReset = document.getElementById('js-btn-reset')

const setCount = num => {
  if (num < 0) return
  count = num
  countText.innerHTML = count
}
setCount(0)

btnPlus.addEventListener('click', () => setCount(count + 1))
btnMinus.addEventListener('click', () => setCount(count - 1))
btnReset.addEventListener('click', () => setCount(0))