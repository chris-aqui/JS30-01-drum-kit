console.log('conected');
//
function playSound(event) {
  console.log(event.keyCode); // log to see the keycode
  //Ln6, selecting audio by the keycode of the button
  const audio = this.document.querySelector(`audio[data-key="${event.keyCode}"]`);
  console.log(audio);
  //if no matching data-key for the keyCode then stop function
  if (!audio) return;
  // rewind the audio for when the same button is pressed more than once
  audio.currentTime = 0;
  audio.play();
  //
  const key = this.document.querySelector(`.key[data-key="${event.keyCode}"]`);
  // add a class of playing to key
  key.classList.add('playing');

}
//
function removeTransition(event) {
  // console.log(event);
  if (event.propertyName !== 'transform') return; //skip if it is not a transform
  console.log(event);
  this.classList.remove('playing');

}
// listen to end of transistion on all buttons
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// when buton is pressed play sound
window.addEventListener('keydown', playSound);