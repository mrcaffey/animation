const move = () => {
  let elem = document.getElementById('animation')
  let pos = 0
  const id = setInterval(frame, 10)
  function frame() {
    if (pos === 350) {
      clearInterval(id)
    } else {
      pos++
      elem.style.top = `${pos}px`;
      elem.style.left = `${pos}px`;
    }
  }
}

const btn = document.getElementById('start')
btn.addEventListener('click', move)