function add(str_number){
let sum=0;
    if(str_number=="")
        return 0;
		
		
		
    str_number = str_number.replace(/[//]/g,"").replace(/\n/g,",").replace(/^;/, '').replace(";",",")
    sum  = str_number.match(/\d+/g).map(Number).reduce((p,c)=>{ return parseInt(p)+parseInt(c);})
    
    
    return sum;
    
}  
add("");
add("1");
add("1\n2,3");
add("2,5");
add("//;\n1;2");
