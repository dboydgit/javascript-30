console.log('Hold Shift!')

const boxes = document.querySelectorAll('input');
let lastChecked = null;

boxes.forEach((box, ind) => {
  box.addEventListener('click', (e) => {
    if (e.shiftKey && box.checked) {
      // top to bottom
      if (lastChecked < ind) {
        for (let i = lastChecked; i <= ind; i++) {
          boxes[i].checked = true;
        }
      }
      // bottom to top
      if (lastChecked > ind) {
        for (let i = ind; i <= lastChecked; i++) {
          boxes[i].checked = true;
        }
      }
      
    }
    if (box.checked) lastChecked = ind;
  })
})

