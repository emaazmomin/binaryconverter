let convert = document.getElementById('convert');
//converting from binary to decimal & vice versa
convert.addEventListener('click', e => {
    // console.log('convert')
    let from = document.getElementById('from');
    let to = document.getElementById('to');
    //Condition for converting binary to decimal
    if (from.value == 'binary' && to.value == 'decimal') {
        let input = document.getElementById('inp');
        // creating blank array
        let arr = [];
        let ans = 0;
        // Inserting values in array
        for (let i = input.value.length - 1; i >= 0; i--) {
            arr.push(Number(input.value.charAt(i)));
        }
        //Logic for converting Binary to decimal
        for (let j = 0; j < arr.length; j++) {
            let into = Math.pow(2, j);
            let elem = arr[j];
            ans = ans + elem * into;
        }
        //Displaying value in DOM
        document.getElementById('answer').innerHTML = ans;
    }
    // Condition for decimal to binary
    else if (from.value == 'decimal' && to.value == 'binary') {
        let input = document.getElementById('inp');
        let arr = [];
        let a = Number(input.value);
        // console.log(a);
        //Inserting values in array in 0s and 1s
        //Math floor will round the floating point to the lesser value
        for (let i = a; i >= a; i--) {
            //dividng the given input by 2
            let ans = Math.floor(a / 2);
            // getting the remainder of the given input
            let elem = a % 2;
            //pushing the remainder in array
            arr.push(elem);
            //updating the value of a as ans
            a = a + ans - a;
        }
        //making new array for taking length
        newArr = [];
        //Below reverse loop will break after 1 is found in an array and the remaining array will be pushed into new array
        //Suppose if the answer is 000000101 the the loop will run till 1 is found
        //The new array will be 000000 and the remaing elements 101 will be breaked
        for (let b = arr.length - 1; b >= 0; b--) {
            if (arr[b] == 1) {
                break;
            }
            newArr.push(arr[b]);
        }
        //Calculating the length for iterating the first array from the new length,This process will remove the xtra 0s from the array
        //As the given eg above, the length of array containing 000000 is 6
        //The old array length containing element 000000101 is 9
        //The total length = 9 - 6 = 3 
        let length = Number(arr.length) - Number(newArr.length);
        let answer = '';
        //The loop will be reverse i.e from 2 to 0 (length-1)
        // according to the loop the first array that contain elements : 000000101 will be iterated from the end because the loop is reversed
        //The answer will be 101
        for(let c= length-1;c>=0;c--){
            answer = answer + String(arr[c]);
        }
        document.getElementById('answer').innerHTML = answer;
    }
});

//swapping the input parameter
let swap = document.getElementById('swap');
swap.addEventListener('click', e => {
    let from = document.getElementById('from');
    let to = document.getElementById('to');
    // console.log(from.value);
    if (from.value == 'binary' && to.value == 'decimal') {
        from.value = 'decimal';
        to.value = 'binary';
        document.getElementById('basic-addon2').innerHTML = 10;
        document.getElementById('ans-span').innerHTML = 2;
    }
    else {
        from.value = 'binary';
        to.value = 'decimal';
        document.getElementById('basic-addon2').innerHTML = 2;
        document.getElementById('ans-span').innerHTML = 10;
    }
})
//reseting all the values
let reset = document.getElementById('reset');
reset.addEventListener('click', e => {
    let inp = document.getElementById('inp');
    let answer = document.getElementById('answer');
    inp.value = '';
    answer.innerHTML = '';
})