/**
 * Add minutes to time
 *
 * time format: hh:mm
 * minutes can be positive or negative.
 * time goes 00:00 through 23:59
 */
function addMinute(time, minute) {
  let [h, m] = time.split(':');

  h = parseInt(h);

  m = parseInt(m);

  let val = m + minute;

  m = mod(val, 60);

  h = mod(h + quotient(val, 60, m), 24);

  return `${twoPlaces(h)}:${twoPlaces(m)}`;
}

/**
 * Print time with leading 0
 */
function twoPlaces(n) {
  return n > 9 ? n.toString() : "0" + n 
}

/**
 * Get the quotient.
 * 
 * Math formula: divisor | dividend
 *              remainder ----------- 
 *                         quotient
 *
 *   divisor = dividend * quotient + remainder =>
 *   quotient = (divisor - remainder) / dividend 
 */
function quotient(divisor, dividend, remainder) {
  return (divisor - remainder) / dividend;
}

/**
 * Mathematical accurate mod.
 * JS's mod is buggy.
 */
function mod(n, m) {
  return ((n%m)+m)%m;
}
