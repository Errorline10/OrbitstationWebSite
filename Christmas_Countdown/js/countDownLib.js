// Example usage.
//
//  HTML: 
//    <div id="CounterDiv1"></div>
//
//  JS:
//    const counter1 = CountDownLib();
//    counter1.init({
//      domTarget: "CounterDiv1",
//      title: "Days till Christmas 2024",
//      endDate: "2024-12-25T00:00:00",
//    });
//
//
// Note: This code will support multiple instances on screen
//       simultaneously. [ counter1, counter2, etc... ]



// Library Function          _________________
// _________________________/ CountDownLib.js \_________
//
// This library uses the revealing module pattern.
// - Michael Boston (March 28 2024)

function CountDownLib() {

  // Private Variables
  const _inMilliseconds = {year: 31536000000, day: 86400000, hour: 3600000, minute: 60000, second: 1000};
  let _domTarget        = 'defaultCounterId';
  let _title            = 'Default Countdown Title';
  let _endDate          = new Date('Jan 01, 2024, 23:59:99');
  let _timeDisplay      = {year: 0, days: 0, hours: 0, minutes: 0, seconds: 0}
  let _timeHistory      = null;

  // Private Function           _____________
  // __________________________/ _escapement \_______
  // Infinite chain that calls itself once a second.
  // accounts for processing time, syncs on full second.

  function _escapement() {
    _calc();
    _renderDOM();
    let nextSecond = (_inMilliseconds.second - new Date(Date.now()).getTime()%_inMilliseconds.second);
    setTimeout(() => _escapement(), nextSecond);
  }

  // Private Function           _______
  // __________________________/ _calc \_____________
  // Used to recalculate all values and store them in
  // the local json display variable "_timeDisplay".

  function _calc() {

    // Snapshot old values.
    _timeHistory = JSON.parse(JSON.stringify(_timeDisplay));
    
    // Get the span of time in milliseconds from "now" until "endDate"
    const timeSpan = (new Date().setTime(_endDate.getTime()) - new Date(Date.now()))

    // Do the math & set the display variables.
    // todo: _timeDisplay.years
    _timeDisplay.days    = Math.floor(timeSpan / _inMilliseconds.day);
    _timeDisplay.hours   = Math.floor(timeSpan / _inMilliseconds.hour)   - (_timeDisplay.days * 24);
    _timeDisplay.minutes = Math.floor(timeSpan / _inMilliseconds.minute) - (_timeDisplay.days * 24 * 60)      - (_timeDisplay.hours * 60);
    _timeDisplay.seconds = Math.floor(timeSpan / _inMilliseconds.second) - (_timeDisplay.days * 24 * 60 * 60) - (_timeDisplay.hours * 60 * 60) - (_timeDisplay.minutes * 60);
  }

  // Private Function           _____________
  // __________________________/ _createCard \_______
  // Generates a DOM node for a single display card.

  const _createCard = (name, value, oldValue) => {

    let card   = document.createElement('div');
    let strong = document.createElement('strong');
    let p      = document.createElement('p');

    card.className = 'card';
    strong.textContent += name;
    if (oldValue !== value) {p.className = 'changed';}
    p.textContent += value;

    card.appendChild(strong).appendChild(p)

    return card
  }

  // Private Function            _____________
  // __________________________/ _renderDOM() \_______
  // Takes the values from "_timeDisplay" and stacks 
  // the DOM cards to render the time to the screen.

  function _renderDOM() {

    var countBox   = document.createElement('div');
    let h5         = document.createElement('h5');
    var cardHolder = document.createElement('div');

    countBox.className = 'count-box';
    cardHolder.className = 'card-holder';
    h5.textContent += _title;

    if (_title.length > 0) { countBox.appendChild(h5); }
    cardHolder.appendChild(_createCard('Days',    _timeDisplay.days,    _timeHistory.days   ));
    cardHolder.appendChild(_createCard('Hours',   _timeDisplay.hours,   _timeHistory.hours  ));
    cardHolder.appendChild(_createCard('Minutes', _timeDisplay.minutes, _timeHistory.minutes));
    cardHolder.appendChild(_createCard('Seconds', _timeDisplay.seconds, _timeHistory.seconds));
    countBox.appendChild(cardHolder);
    
    try { // Only replace DOM segment if the container div is present.
      let outPut = document.getElementById(_domTarget);
      outPut.querySelectorAll('*').forEach(n => n.remove());
      outPut.appendChild(countBox);
    } catch (e) {
      // console.log('Error: Dom ID = \"' + _domTarget + '\" not found !');
    }
  }

  // Public Function            ______
  // __________________________/ Init \______________
  // input = {
  //   domTarget: [string],
  //   title:     [string || Null],
  //   endDate:   [string|JS-timeStamp],
  // }
  //
  // Note: JS-timestamp example "2024-12-25T00:00:00"

  function Init(input) {
    _endDate   = new Date(input.endDate);
    _domTarget = input.domTarget;
    _title     = input.title || "";
    _calc();
    _renderDOM();
    _escapement();
  }

  // Function Return            ________
  // __________________________/ return \____________
  // Exposes public functions.
  return {
    init: Init
  }

};