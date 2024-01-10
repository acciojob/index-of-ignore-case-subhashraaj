function indexOfIgnoreCase(s1, s2) {
	let isFound = false;
	let str1 = s1.toLowerCase();
	let str2 = s2.toLowerCase();
	let firstLetter=str2[0];
	let secondLetter=str2[1];
	for (let i=0;i<=str1.length;i++){
		if((str1[i]===firstLetter) && (str1[i+1]===secondLetter)){
			isFound = true;
			return i;
		}
	}
	if(isFound==false) return -1;
}

// Please do not change the code below
//const s1 = prompt("Enter s1:");
//const s2 = prompt("Enter s2:");
//alert(indexOfIgnoreCase(s1, s2));
