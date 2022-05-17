function add(str_number){
let sum=0;
    if(str_number=="")
        return 0;
    
    sum  = str_number.split("").reduce((p,c)=>{ return parseInt(p)+parseInt(c);})
    console.log(str_number.split(""))
    console.log(sum)
    return sum;
    
} 
add("25");
