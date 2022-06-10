function armstrong(numStr){

tot=0;
numStr.toString().split("").forEach(function(v,i,arr){
     tot+=Math.pow(parseInt(v),arr.length);
});


return tot;

}
