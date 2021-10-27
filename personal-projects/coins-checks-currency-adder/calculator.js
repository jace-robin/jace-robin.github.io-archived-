$(document).ready(runProgram);
function runProgram() {
    var checkArray = [], hundreds, fifties, twenties, tens, fives, ones, halfdollars, quarters, dimes, nickels, pennies, withdraw;
    $("#BtnCalc").click(function () {
        check = findCheckTotal();
        hundreds = $("#hundreds").text;
        fifties = $("#fifties").text;
        twenties = $("#twenties").text;
        tens = $("#tens").text;
        fives = $("#fives").text;
        ones = $("#ones").text;
        halfdollars = $("#halfdollars").text;
        quarters = $("#quarters").text;
        dimes = $("#dimes").text;
        nickels = $("#nickels").text;
        pennies = $("#pennies").text;
        withdraw = $("#withdraw").text;
        calculateTotal();
    });

    $("#addCheck").click(addCheckDiv)
    $("#removeCheck").click(removeCheckDiv)
    function addCheckDiv() {
        var num = checkArray.length;
        var id = '#check' + num;
        alert(id);
        var div = '<div>  <input type="number" id=' + id + ' value="number"> <p>^ Check ' + (id) + '^</p>  </div>';
        $("#checkboxdiv").append(div);
        var object = {
            id: id,
            num: num,
        }
        checkArray.push(object);
        alert($("#check1").val());
    };
    function removeCheckDiv() {
        var i = (checkArray[checkArray.length].id);
        alert(i);
        var value = ($(i).val());
        alert(value);
        /*var num = checkArray.length;
        var id = checkArray[num - 2].id;
        alert(checkArray[num].id);
        $(id).remove();*/
    };
    function findCheckTotal() {
        for (var i = 1; i >= checkArray.length; i++) {
            total += $(checkArray[i].id).text;
            
        }
    }
};