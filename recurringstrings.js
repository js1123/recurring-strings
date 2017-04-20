var findRecurringStrings = function (bigstring) {
  console.log('starting length: ', bigstring.length);

  var i = 0;
  var length = Math.floor(bigstring.length / 2);
  var currentChunk = bigstring.substring(0, length);
  var currentRest = bigstring.substring(length + 1, bigstring.length);

  var results = {};
  while (length > 4) {

    for (i = 0; i < bigstring.length - length; i++) {

      currentChunk = bigstring.substring(i, length + i);
      currentRest = bigstring;

      var occurrences = 0;
      while (currentRest.length >= length) {
        occurrenceIndex = currentRest.indexOf(currentChunk);
        if (occurrenceIndex !== -1) {
          occurrences++;
          currentRest = currentRest.substring(occurrenceIndex + length, currentRest.length);
        } else {
          currentRest = '';
        }
      }
      // TODO: improve occurrences filtering
      if (occurrences > 1) {
        if (results.hasOwnProperty(currentChunk)) {
          console.log('already found, old ' + currentChunk + ' ' + results[currentChunk] + ', new ' + occurrences);
        } else {
          results[currentChunk] = occurrences;
        }
      }
    }
    length--;
  }
}
