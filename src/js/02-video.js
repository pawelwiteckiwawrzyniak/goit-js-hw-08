import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');

function checkStorage() {
  if (currentTime == null) {
    return;
  }
  player.setCurrentTime(currentTime);
}

checkStorage();

player.on(
  'timeupdate',
  throttle(({ duration, percent, seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);
