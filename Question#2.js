
function init(){


    var ans = prompt("Please enter a number:");


    var total = 0;
    var odd = 0;
    var even = 0;

//console.log(prompt("Please enter a number:"));

    while(ans !== ""){
        if(ans === null)
            break;

        else{
            ans = Number(ans);
            if(typeof ans === "number"){
                if(ans>=0){
                    if(ans%1 === 0){
                        total++;
                        console.log(ans);
                        if(ans%2 === 0)
                            even++;
                        else
                            odd++;
                    }
                }
            }
        }

        ans = prompt("Please enter a number:");
    }

    if(ans === null){
        document.write("<h1>Assignment 2 Question 2</h1>\n" +
            "<p>Written by Razvan Ivan (ID: 40096278)</p>");
        document.write("<ul><li>You entered a total of 0 numbers.</li><li>You entered 0 odd numbers.</li><li>You entered 0 even numbers.</li></ul>");

    }



    else{
        document.write("<h1>Assignment 2 Question 2</h1>\n" +
            "<p>Written by Razvan Ivan (ID: 40096278)</p>");

        document.write("<ul><li>You entered a total of " + total + " numbers.</li><li>You entered " + odd + " odd numbers.</li><li>You entered " + even + " even numbers.</li></ul>");
    }
        
/*


//<h1>Assignment 2 Question 2</h1>
// <p>Written by Razvan Ivan (ID: 40096278)</p>
    var ans = prompt("Please enter a number:");

    console.log(ans);

    console.log(typeof ans);

    console.log(Number(ans))
*/
}

