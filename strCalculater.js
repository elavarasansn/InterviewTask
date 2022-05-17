function add(str_number){
let sum=0;
    if(str_number=="")
        return 0;
		
		
		
    str_number = str_number.replace(/[//]/g,"").replace(/\n/g,",").replace(/^;/, '').replace(";",",")
    
	let num_arr  = str_number.match(/-?\d+/g).map(Number);
	
	
		
	let negative = num_arr.filter(function (a) { return a < 0; })
	
	
	
	
	if(negative.length > 0)
	   throw new Error(`negatives not allowed ${negative.toString()}`)
	
	sum = num_arr.reduce((p,c)=>{ return parseInt(p)+parseInt(c);})
    
    
    return sum;
    
}
add("");
add("1");
add("1\n2,3");
add("2,5");
add("//;\n1;2");
add("//;\n1;-2");
