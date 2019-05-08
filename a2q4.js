function a2q4 (names){
    var nbrMatches = 0;

    for(var i = 0; i<names.length;i++){
        var match1 = names[i].search(/^(pa)[^u]+$/);

        var match2 = names[i].search(/^(po)[^u]+$/);

        if(match1 !== -1)
            nbrMatches++;

        if(match2 !== -1)
            nbrMatches++;
    }

    return nbrMatches;
}

console.log(a2q4(["party", "flight", "cave", "whole", "bubble", "pollution"]));

///^[^(pa)[^u]]+/

/*
<script>
    var title = document.createElement("h1");

    title.innerHTML = "Assignment 2 Question 4";

    var para = document.createElement("p");

    para.innerHTML = "The number of words starting with \"pa\" or \"po\" and not containing the letter \"u\" is: " + a2q4(["party", "flight", "cave", "whole", "bubble", "pollution"]);
</script>
 */