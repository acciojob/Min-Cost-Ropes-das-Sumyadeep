function mincost(arr)
{ 
//write your code here
// return the min cost
	let pq = [];

	for(let x of arr){
		pq.push(x);
	}
	
	pq.sort();

	let res = 0;
	
	while(pq.length > 1){

		let first = pq.shift();
		let second = pq.shift();

		res += first + second;

		pq.push(first + second);

		pq.sort();

	}

	return res;
  
}

module.exports=mincost;
