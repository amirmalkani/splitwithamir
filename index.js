let noOfPeopl = document.getElementById('noOfPeople');
console.log(noOfPeopl);
let splitContainer = document.getElementById('splitContainer');
let splitContainerMain = document.getElementById('splitContainerMain');
let valueForPeople = document.getElementById('valueForPeople');
let headerSplit = document.getElementById('headerSplit');
let btn = document.getElementById('btn');
let result = document.getElementById('result');
function func(len, a, b) {
    console.log(len);
    for (i = 0; i < a.length; i++) {
        // console.log(document.getElementById(`id${i + 1}`).value);
        let x = document.getElementById(`id${i + 1}`);
        console.log(x.value);
        a[i] = x.value;
    }

    for (i = 0; i < b.length; i++) {
        // console.log(document.getElementById(`id${i + 1}`).value);
        let x = document.getElementById(`i${i + 1}`); //here wheni am using the current id giving error
        // console.log(parseInt(x.value));
        let d = parseInt(x.value);
        // console.log(b.length);
        // debugger;
        b[i] = d;
    }
    // console.log(b);
}

function sum1(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];

    }
    return sum;
}

function higher(a) {
    greater = a[0];
    for (i = 0; i < a.length; i++) {
        if (a[i] > greater) {
            greater = a[i];
        }
    }
    return greater;
}

function higherIndex(a) {
    let greaterIndex = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] == greater) {
            greaterIndex = i;
            // break;
        }
    }
    return greaterIndex;
}

function makeZero(howMuch, greaterIndex) {
    howMuch[greaterIndex] = 0;
}

function calculateLogic(a, b) {
    let total = sum1(a);
    let perPerson = total / a.length;

    //calculating for the less and extra
    let extra = [];
    let less = [];
    let howMuch = [];

    for (i = 0; i < a.length; i++) {
        if (a[i] - perPerson > 0) {
            extra[i] = a[i];
            less[i] = 0;
            // howMuch[i] =a[i]-perPerson; 
            howMuch[i] = a[i] / a.length;
        }
        else {
            less[i] = a[i];
            extra[i] = 0;
            // howMuch[i] =a[i]-perPerson; 
            howMuch[i] = a[i] / a.length;
        }
    }
    console.log(extra);
    console.log(less);
    console.log(howMuch);
    let greater = higher(howMuch);
    let greaterIndex = higherIndex(howMuch);
    // let greaterIndex = 0;
    // for (i = 0; i < a.length; i++) {
    //     if (a[i] == greater) {
    //         greaterIndex = i;
    //         // break;
    //     }
    // }
    console.log(greaterIndex);


    let rem = [];
    let count = 0;



    //1
    //Kaun kitna dega
    // for (i = 0; i < a.length; i++) {
    //     rem[i] = howMuch[greaterIndex] - howMuch[i];
    //     if (rem[i] != 0) {
    //         console.log('Give ', howMuch[greaterIndex] - howMuch[i])
    //     }
    // }
    // console.log('rem', rem);
    let html = '';
    while (count < a.length - 1) {
        if (count == 0) {
            for (i = 0; i < a.length; i++) {
                rem[i] = howMuch[greaterIndex] - howMuch[i];
                if (rem[i] != 0) {
                    // console.log(b[i] ,' will Give ', howMuch[greaterIndex] - howMuch[i], ' to ',b[greaterIndex]);
                    html += `<div>${b[i]} will Give  ${howMuch[greaterIndex] - howMuch[i]} to ${b[greaterIndex]}</div>`;

                }
            }
            console.log('rem', rem);
        }
        makeZero(howMuch, greaterIndex);
        count++;
        console.log(howMuch);
        greater = higher(howMuch);
        greaterIndex = higherIndex(howMuch);
        console.log(greater);
        console.log(greaterIndex);
        for (i = 0; i < a.length; i++) {
            if (rem[i] != 0) {
                rem[i] = howMuch[greaterIndex] - howMuch[i];
            }
            if (rem[i] != 0) {
                // console.log(b[i], ' will Give ', howMuch[greaterIndex] - howMuch[i], ' to ', b[greaterIndex]);
                html += `<div>${b[i]} will Give  ${howMuch[greaterIndex] - howMuch[i]} to ${b[greaterIndex]}</div>`;
            }
        }
        console.log('rem', rem);
        console.log('howMuch', howMuch);
    }
    console.log(html);
    result.innerHTML = html;

    /*{  

        makeZero(howMuch, greaterIndex);
        count++;
        console.log(howMuch);
    
        greater = higher(howMuch);
    
        greaterIndex = higherIndex(howMuch);
    
        console.log(greater);
        console.log(greaterIndex);
    
    //2
        // rem = [];
        for (i = 0; i < a.length; i++) {
            if (rem[i] != 0) {
                rem[i] = howMuch[greaterIndex] - howMuch[i];
            }
            if (rem[i] != 0) {
                console.log('Give ', howMuch[greaterIndex] - howMuch[i])
            }
        }
        console.log('rem', rem);
        makeZero(howMuch, greaterIndex);
        count++;
        console.log(howMuch);
        greater = higher(howMuch);
        greaterIndex = higherIndex(howMuch);
    
    //3
        for (i = 0; i < a.length; i++) {
            if (rem[i] != 0) {
                rem[i] = howMuch[greaterIndex] - howMuch[i];
            }
            if (rem[i] != 0) {
                console.log('Give ', howMuch[greaterIndex] - howMuch[i])
            }
        }
        console.log('rem', rem);
        makeZero(howMuch, greaterIndex);
        count++;
        console.log(howMuch);
        greater = higher(howMuch);
        greaterIndex = higherIndex(howMuch);
        console.log(count);

    }*/





    // console.log(perPerson)
    // let sum = 0;
    // for(let i=0; i<a.length; i++){
    //     sum+=a[i];

    // }
    // console.log(sum/3.0);
    // greater = a[0];
    // for (i = 0; i < a.length; i++) {
    //     if (a[i] > greater) {
    //         greater = a[i];
    //     }
    // }
    // let greaterIndex;
    // for (greaterIndex = 0; greaterIndex < a.length; i++) {
    //     if (a[greaterIndex] == greater) {
    //         break;
    //     }
    // }
    // console.log(greaterIndex);

    // // for (let i = 0; i < a.length; i++) { //to give all the amount to the greater index
    // //     if (i != greaterIndex) {
    // //         a[greaterIndex] += a[i]
    // //         a[i] = 0;
    // //     }
    // // }
    // // a.forEach(element => {
    // //     console.log(element);
    // // });
    // var i = 0, j;

    // while (i < a.length) {
    //     j = i + 1;
    //     while (j < a.length) {

    //         if (a[j] < a[i]) {
    //             var temp = a[i];
    //             a[i] = a[j];
    //             a[j] = temp;
    //         }
    //         j++;
    //     }
    //     i++;
    // }
    // a.reverse();
    // console.log(a);
}

btn.addEventListener('click', () => {
    // debugger;
    if ((valueForPeople.value >= 'a' && valueForPeople.value <= 'z') || (valueForPeople.value < 0 || valueForPeople.value > 10) || valueForPeople.value == '') {
        alert('Please Think and enter the Member between 1 and 3');
        valueForPeople.value = '';
        return;
    }
    for (i = 0; i < valueForPeople.value; i++) {
        console.log(i);
    }
    noOfPeople.style.display = 'none';
    splitContainerMain.style.display = 'block';
    let html = '';
    for (let i = 0; i < valueForPeople.value; i++) {
        html += `<h1>Enter name ${i + 1} Enter the amount</h1> <input type="text" name="" id="id${i + 1}"> <input type="number" name="" id="i${i + 1}"><br>`;
    }
    html += `<br><Button id="btn1">Enter</Button>`
    splitContainer.innerHTML = html;

    console.log(splitContainer);
    let btn1 = document.getElementById('btn1');
    let a = [];
    a.length = valueForPeople.value;
    let b = [];
    b.length = valueForPeople.value;
    btn1.addEventListener('click', () => {

        func(valueForPeople.value, a, b);
        // for (i = 0; i < valueForPeople.value; i++) {
        //     // console.log(document.getElementById(`id${i + 1}`).value);
        //     let x = document.getElementById(`id${i + 1}`);
        //     console.log(x.value);
        //     a[i] = i;
        // }
        // for (i = 0; i < valueForPeople.value; i++) {
        //     // console.log(document.getElementById(`id${i + 1}`).value);
        //     let x = document.getElementById(`i${i + 1}`); //here wheni am using the current id giving error
        //     console.log(parseInt(x.value));
        //     let d = parseInt(x.value);
        //     console.log(b.length);
        //     // b[i] = d;
        // }
        // debugger;
        // console.log(a);
        // console.log(b);
        splitContainerMain.style.display = 'none';
        calculateLogic(b, a);
    })
})