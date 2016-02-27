var bulbSwitch = function(n) {
    var bulb = [];
    // for (var i = 0; i < n; i++) {
    //     bulb.push(false);
    // };
    //first round
    for (var i = 0; i < n; i++) {
        bulb[i] = true;
    };
    //from second round to n-th round

    for (var i = 1; i < n; i+= 1 ){
    	for(var j = i; j<n; j += i+1 ){
    		bulb[j] = !bulb[j];
    	}

    }
    	console.log(bulb)
    var result = 0;
    for(var i=0; i<n;i++){
    	if(bulb[i] === true){
    		result ++;
    	}
    }

    return result;

};

console.log(bulbSwitch(9))
