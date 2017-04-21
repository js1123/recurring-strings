document.querySelector('#startButton').addEventListener('click', substitute);

function substitute() {
	
	var resultDiv = document.createElement('div');
	document.body.appendChild(resultDiv);
	
	var myValue = document.getElementById('myTextBox').value;
	
	findRecurringStrings(myValue);
	
	if (myValue.length == 0) {
		alert('Please enter a real value in the text box!');
		return;
	}
	var myTitle = document.getElementById('title');
	myTitle.innerHTML = myValue;
	//============	
	//var randStr = "cheag12345677 12345689123 cheag klk cheag owdadf cheag sfsdd dddddd cheag dddddd dddddd dddddd dddddd";
	var randStr = myValue;
	var lungStr = randStr.length;
	var lung = Math.floor(lungStr / 2);
	console.log(randStr + "\xa0\xa0\xa0\xa0" +" Lungime = ", lungStr, " / ", lung);
	do {	
		var randStr1 = randStr;
		for (i=0 ; i < lungStr - lung ; i++ ) {
			k = 1
			vil = randStr1.substr(i,lung);
				for (j = i+1 + lung; j < lungStr ; j++)
				{
					if (randStr1.substr(j,lung) === vil ){
						k = k + 1;
					}
				}
			if ( k > 1) { 
				console.log(lung + " : " + "\xa0\xa0\xa0\xa0"+ vil + "\xa0\xa0\xa0\xa0 repetari: " + k);
				var resultLine = document.createElement('div');
				resultLine.textContent = lung + " : " + "\xa0\xa0\xa0\xa0"+ vil + "\xa0\xa0\xa0\xa0 repetari: " + k;
				resultDiv.appendChild(resultLine);
				
				
			}
		}

		//if (lung = 7) { debugger; }
		lung = lung - 1;
	} while (lung > 4)
}