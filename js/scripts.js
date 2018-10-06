var $ = jQuery;
const PROGRESS_BAR_STEP = 10; 
const MAX_NUMBER_LENGTH = 3;

$(document).ready(function() {
  setHandlers();
});

function setHandlers() {
  setIncreaseClickHandler();
  setReduceClickHandler();
  setNumberClickHandler();
  setClearClickHandler();
}

function setIncreaseClickHandler() {
  $('.plus').on('click', function () {
    var input = $(this).closest('.grid-element').find('input');
    if (input.val() < 100) {
      var newValue = parseInt(input.val()) + PROGRESS_BAR_STEP;
      input.val(newValue);
      var line = $(this).closest('.grid-element').find('.progress-line');
      line.css('width', newValue + '%');
    }
  });
}

function setReduceClickHandler() {
  $('.minus').on('click', function () {
    var input = $(this).closest('.grid-element').find('input');
    if (input.val() > 0) {
      var newValue = parseInt(input.val()) - PROGRESS_BAR_STEP;
      input.val(newValue);
      var line = $(this).closest('.grid-element').find('.progress-line');
      line.css('width', newValue + '%');
    }
  });
}

function setNumberClickHandler() {
  $('.number').on('click', function () {
    var number = this.innerText;
    var currentValue = $('.number-input').val();

    var isFirstZero = currentValue === '' && number === '0';
    var exceedsMax = currentValue.length >= MAX_NUMBER_LENGTH;
    if (exceedsMax || isFirstZero) { return; }

    $('.number-input').val(currentValue + number);
  });
}

function setClearClickHandler() {
  $('.clear').on('click', function () {
    $('.number-input').val('');
  });
}