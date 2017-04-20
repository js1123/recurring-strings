http://jsbin.com/taqigenofe/1/edit?js,console

//var bigstring = "cherryfdsdfsdfsdcavemanXfdsdfsdXXXXXXXfsdcherrycavemanfdscherrydfsdfsdcaXXXXXXXvemanfdsdfsdfsdcavemXXXXXXXanopfdsdfsdfsdcavemanfdsdfsdfsdcavemanfdsdfsdfsdcavemanfXXXXXXXdsdfsdfscherrycherrycherrydcavemancaveXXXXXXXmanocherrypcherry";

var bigstring = "abcabcabc123457 fsdfsjfnskdfnsdfs abcabc 23457abcabckdkjfhghye abcabc12345";
console.log('starting length: ', bigstring.length);

var length = Math.floor(bigstring.length / 2), i = 0;
var currentChunk = bigstring.substring(0, length);
var currentRest = bigstring.substring(length + 1, bigstring.length);

var results = {};

while (length > 4) {
  
  for (i = 0; i < bigstring.length - length; i++) {    
    //console.log(i);
    currentChunk = bigstring.substring(i, length + i);
    
    if (currentChunk.length < length) {
      console.log('break 1, ' + currentChunk.length + ' vs ' + length, currentChunk);
      break;
    }
    currentRest = bigstring/*.substring(length + 1, bigstring.length)*/;
    //currentRest = bigstring.replace(currentChunk, '');
  
    var occurrences = 0;
    while (currentRest.length >= length) {
      occurrenceIndex = currentRest.indexOf(currentChunk);
      if (occurrenceIndex !== -1) {
        occurrences++;
        currentRest = currentRest.substring(occurrenceIndex + length, currentRest.length);
      } else {
        currentRest = '';
      }
      //currentRest = bigstring.substring(length + 1, bigstring.length);
    }
    if (occurrences > 1) {
      //console.log(currentChunk + ' - ' + (occurrences + 1));
      if (results.hasOwnProperty(currentChunk)) {
        /*console.log('already found, old ' + currentChunk + '_' + results[currentChunk] + 
                    ', new ' + occurrences);*/
      } else {
        results[currentChunk] = occurrences;
      }
    }
  }
  
  length--;
  console.log('--------- length ' + length + '-------');
}

console.log(results, results.length)