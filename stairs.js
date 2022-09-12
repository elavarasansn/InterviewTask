function stair(num){

    for(i=1;i<=num;i++){
        console.log("".padStart((num-i),' ').padEnd(num,'#'))
    }
}
stair(6)
