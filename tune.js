function tune(arr) {
    // Your code goes here
    function res(dif){
        if (arr[i] === 0){
            new_arr.push("-");
        } else if (dif === 0){
                new_arr.push("OK");
        } else if (dif < 0){
            if (dif <= -0.03){
                new_arr.push(">>•");
            }
            else{
                new_arr.push(">•");
            }
        } else if (dif >= 0.03){
                new_arr.push("•<<");
        }else{
            new_arr.push("•<");
        }
    }
    let dif;
    const lst = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    let new_arr = [];
    for (i = 0; i < 6; i++){
        dif = (arr[i] - lst[i])/lst[i];
        res(dif);
    }
    return new_arr;
}
