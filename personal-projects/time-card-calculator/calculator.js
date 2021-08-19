$(document).ready(runProgram);
var in1, in2, out1, out2,payRate, overtimeLimit, overtimeRate;
function runProgram() {
    $("#BtnCalc").click(function(){
        {in1 = $("#in1").val();
        in2 = $("#in2").val();
        out1 = $("#out1").val();
        out2 = $("#out2").val();
        payRate = $("#normalRate").val();
        overtimeLimit = $("#overtimeLimit").val();
        overtimeRate = $("#overtimeRate").val();}
        calculateTotal();
    });
}
function calculateTotal() {
    result(calculateHours(), calculatePay(calculateHours()));
}
function calculatePay(hours) {
    if (hours > overtimeLimit) {
        var totalOvertime = hours - overtimeLimit;
        }
    else {
        totalOvertime = 0;
    };
    return (Math.round((hours * payRate) + ((totalOvertime * payRate) * (payRate * overtimeRate))));
}
function result (hours, pay) {
    $("#totalHours").text(hours + " total hours worked");
    $("#totalPay").text("$" + pay + " gross pay earned");
}
//I need to get my order of operations working
//Not sure if its eaier to convert it to rounded before subtracting or if i should even round at all, and let the user do it instead.
//If i do then i would have to find out how many hours seperate from minutes and divide by 60
//might have to do that since its subtracting 60's not 100's, might be messing up the time increments
//new system might be needed, arrays to hold individual digits before moving on.
function calculateHours() {
    var time = ((out1 - in1) + (out2 - in2)) / 100
    return ((Math.round(time * 4) / 4).toFixed(2));
}
function idek() {
    var hours = calculateHours(in1, out1, in2, out2);
    var pay = calculatePay(hours, payRate, overtimeLimit, overtimeRate);
    return pay;
    }
