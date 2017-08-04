$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#psm-on').text('on');
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#psm-off').text('off');
    updateTemperature();
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=21cf3a7f132c00aeea649a37346983c5&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  })
// the code below is rather limiting fot the user as it gives only several options.
  // $('#current-city').change(function() {
  //   var city = $('#current-city').val();
  //   $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=21cf3a7f132c00aeea649a37346983c5&units=metric', function(data) {
  //     $('#current-temperature').text(data.main.temp);
  //   })
  // })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});
