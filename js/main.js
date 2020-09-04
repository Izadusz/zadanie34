let t1 = 'Uwielbiam JavaScript';
let t2 = 'Jestem świetnym programistą';


function displayResults (text1, text2) {
    

    if (text1.length > text2.length) {
        console.log(text1);
    } else {
        console.log(text2);
    }
}

displayResults(t1, t2);