//Get modal element
const modal = document.getElementById('sign-up_Modal');
//Get open modal button
const modalBtn = document.getElementById('modalBtn');
//Get close button
const close= document.getElementById('closeBtn');


// Listen for open click
modalBtn.addEventListener('click', openModal);
//listen for close click
close.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}