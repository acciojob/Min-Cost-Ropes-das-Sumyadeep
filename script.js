function mincost(arr)
{ 
//write your code here
// return the min cost

	arr.sort(function(a,b){return a-b;});

	let res = 0;
	
	while(arr.length > 1){

		let first = arr.shift();
		let second = arr.shift();

		res += first + second;

		arr.push(first + second);

		arr.sort(function(a,b){return a-b;});

	}

	return res;
  
}

module.exports=mincost;
