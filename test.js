var arr = [1, 2, 3, 4, 5];
var newArr = [];

function getProduct(indexPos) {
	var number = 1;
	for(var i = 0; i < arr.length; i++){
		if(i === indexPos){
			continue;
		} else {
			number = number * arr[i];
		}
	}
	return number;
}

for(var i = 0; i < arr.length; i++){
	newArr[i] = getProduct(i);
}

console.log(newArr);
