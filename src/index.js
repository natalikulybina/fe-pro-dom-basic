export const paintCards = () => {
  let elem = document.querySelectorAll('li');

  for (let index = 0; index < elem.length; index++) {
    if (index % 2 === 0) {
      elem[index].style.backgroundColor = 'red';
    }
  }

};

export const findElement = () => {
  let elem = document.querySelector('li');
  let elements = document.querySelectorAll('li');

  for (let index = 0; index < elements.length; index++) {
    if (elem.matches('.likedItem')) {
      elem.style.backgroundColor = 'blue';
    }
    else {
      elem = elem.nextElementSibling;
    }
  }
};
