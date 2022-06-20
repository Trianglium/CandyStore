var buttons = document.querySelectorAll('.candy-button, .candy-fab');
for (var i = 0, button; button = buttons[i]; i++) {
  candy.ripple.candyRipple.attachTo(button);
}

var nodes = document.querySelectorAll('.candy-icon-toggle');
for (var i = 0, node; node = nodes[i]; i++) {
  candy.iconToggle.candyIconToggle.attachTo(node);
}

var checkboxes = document.querySelectorAll('.candy-checkbox');
for (var i = 0, checkbox; checkbox = checkboxes[i]; i++) {
  new candy.checkbox.candyCheckbox(checkbox);
}

var radios = document.querySelectorAll('.candy-radio');
for (var i = 0, radio; radio = radios[i]; i++) {
  new candy.radio.candyRadio(radio);
}

var interactiveListItems = document.querySelectorAll('.candy-list-item');
for (var i = 0, li; li = interactiveListItems[i]; i++) {
  candy.ripple.candyRipple.attachTo(li);
  // Prevent link clicks from jumping demo to the top of the page
  li.addEventListener('click', function(evt) {
    evt.preventDefault();
  });
}
