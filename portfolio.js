document.addEventListener("DOMContentLoaded", function () {
    let tileOne = document.getElementsByClassName("one")[0];
    let tileTwo = document.getElementsByClassName("two")[0];
    let tileThree = document.getElementsByClassName("three")[0];
    let tileFour = document.getElementsByClassName("four")[0];
    let tileFive = document.getElementsByClassName("five")[0];
    let prev = document.getElementsByClassName("first")[0];
    let next = document.getElementsByClassName("last")[0];
    let firstVisible = tileOne;
    tileFour.style.display = "none";
    tileFive.style.display = "none";
    function changeOrderPrev (toHide, toDisplay,forBef){
        if(toHide && toDisplay && forBef){
            toHide.style.display = "none";
            forBef.after(toDisplay);
            toDisplay.style.display = "inline-block";
        }
    }
    function changeOrderNext(toHide,toDisplay,forAft){
        if(toHide && toDisplay && forAft){
            toHide.style.display = "none";
            forAft.before(toDisplay);
            toDisplay.style.display = "inline-block";
        }
    }
    function changePrev() {
        switch (firstVisible){
            case tileOne:
                changeOrderPrev(tileOne,tileFour,tileThree);
                firstVisible = tileTwo;
                break;
            case tileTwo:
                changeOrderPrev(tileTwo,tileFive,tileFour);
                firstVisible = tileThree;
                break;
            case tileThree:
                changeOrderPrev(tileThree,tileOne,tileFive);
                firstVisible = tileFour;
                break;
            case tileFour:
                changeOrderPrev(tileFour,tileTwo,tileOne);
                firstVisible = tileFive;
                break;
            case tileFive:
                changeOrderPrev(tileFive,tileThree,tileTwo);
                firstVisible = tileOne;
                break
            }
        }
    function changeNext(){
        switch(firstVisible){
            case tileOne:
                changeOrderNext(tileThree, tileFive,tileOne);
                firstVisible = tileFive;
                break;
            case tileFive:
                changeOrderNext(tileTwo,tileFour,tileFive);
                firstVisible = tileFour;
                break;
            case tileFour:
                changeOrderNext(tileOne,tileThree,tileFour);
                firstVisible = tileThree;
                break;
            case tileThree:
                changeOrderNext(tileFive,tileTwo,tileThree);
                firstVisible = tileTwo;
                break;
            case tileTwo:
                changeOrderNext(tileFour,tileOne,tileTwo);
                firstVisible = tileOne;
                break;

        }
    }
        prev.addEventListener("click",changePrev);
        next.addEventListener("click", changeNext);
});
