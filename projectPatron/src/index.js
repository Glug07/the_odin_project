import _ from 'lodash'
import otherFunction from './otherFunction';

function component() {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = otherFunction('Cody');
  return element;
}

document.body.appendChild(component());