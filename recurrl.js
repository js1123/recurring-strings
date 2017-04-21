document.querySelector('#startButton').addEventListener('click', substitute);

function substitute() {
	
	var resultDiv = document.createElement('div');
	document.body.appendChild(resultDiv);
	
	var myValue = document.querySelector('#myTextBox').value;
	findRecurringStrings(myValue);
	
	if (myValue.length == 0) {
		alert('Please enter a real value in the text box!');
		return;
	}
	var myTitle = document.querySelector('#title');
	myTitle.textContent = myValue;
	
	var randStr = myValue;
	var lungStr = randStr.length;
	var lung = Math.floor(lungStr / 2);
	console.log(randStr + "\xa0\xa0\xa0\xa0" + " Lungime = ", lungStr, " / ", lung);
	do {	
		var randStr1 = randStr;
		for (i=0 ; i < lungStr - lung ; i++) {
			k = 1
			vil = randStr1.substr(i,lung);
				for (j = i + 1 + lung; j < lungStr; j++)
				{
					if (randStr1.substr(j,lung) === vil) {
						k = k + 1;
					}
				}
			if (k > 1) { 
				console.log(lung + " : " + "\xa0\xa0\xa0\xa0" + vil + "\xa0\xa0\xa0\xa0 repetari: " + k);
				
				var resultLine = document.createElement('div');
				resultLine.textContent = lung + " : " + "\xa0\xa0\xa0\xa0" + vil + "\xa0\xa0\xa0\xa0 repetari: " + k;
				resultDiv.appendChild(resultLine);
			}
		}
		lung = lung - 1;
	} while (lung > 4)
}