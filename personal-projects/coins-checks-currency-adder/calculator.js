$(document).ready(runProgram);
function runProgram() {
    var checkArray = [], check, hundreds, fifties, twenties, tens, fives, ones, halfdollars, quarters, dimes, nickels, pennies, withdraw, total, final;
    $("#BtnCalc").click(function () {
        check = findCheckTotal();
        hundreds = getVal("#hundreds") * 100;
        fifties = getVal("#fifties") * 50;
        twenties = getVal("#twenties") * 20;
        tens = getVal("#tens") * 10;
        fives = getVal("#fives") * 5;
        ones = getVal("#ones") * 1;
        halfdollars = getVal("#halfdollars") * .50;
        quarters = getVal("#quarters") * .25;
        dimes = getVal("#dimes") * .10;
        nickels = getVal("#nickels") * .05;
        pennies = getVal("#pennies") * .01;
        withdraw = getVal("#withdraw");
        calculateTotal();
    });

    $("#addCheck").click(addCheckDiv)
    $("#removeCheck").click(removeCheckDiv)
    $("#checkTotal").click(findCheckTotal)
    function calculateTotal() {
        total = (check + hundreds + fifties + twenties + tens + fives + ones + halfdollars + quarters + dimes + nickels + pennies).toFixed(2);
        alert(total);
        final = (withdraw >= 0) ? (total - withdraw).toFixed(2) : total.toFixed(2);
        setText("#totalDeposit", "Total Deposit: " + total);
        setText("#finalDeposit", "Final Deposit: " + final);
    }
    function addCheckDiv() {
        var num = checkArray.length;
        var id = 'check' + num;
        var div = '<div id="div' + id + '">  <input type="number" id="' + id + '" value="' + (Math.random() * 10000).toFixed(2) + '"> <p id="' + id + '">^ Check ' + num + '^</p>  </div>';
        $("#checkboxdiv").append(div);
        id = createDivId(id);
        checkArray.push(id);
    };
    function removeCheckDiv() {
        var newDivId = createDivId("divcheck" + (checkArray.length > 0 ? checkArray.length - 1 : 0));
        checkArray.pop();
        $(newDivId).remove();
    };
    function createDivId(divId) {
        var newId = '#' + divId;
        return newId;
    }
    function findCheckTotal() {
        var totalAmount = 0;
        if (checkArray.length > 0) {
            for (var i = 0; i < checkArray.length; i++) {
                var x = (checkArray[i]);
                //alert(x);
                var val = parseFloat(getVal(x))
                //alert ("val of id " + x + " is " + val + ", and the type is " + typeof val);
                totalAmount += val;
            };
        };
        return (totalAmount);
    }
    function getVal(id) {
        return $(id).val() === undefined || $(id).val() === false || $(id).val() === NaN ? 0 : $(id).val();
    };
    function setText(id, desired) {
        $(id).text(desired);
    }
};
//Velkhana