$(document).ready(runProgram);
var in1, in2, out1, out2,payRate, overtimeLimit, overtimeRate;
function runProgram() {
    $("#BtnIn1").click(function(){
        in1 = $("#in1").val();
        alert(in1);
    });
    $("#BtnOut1").click(function(){
        out1 = $("#out1").val();
        alert(out1);
    });
    $("#BtnIn2").click(function(){
        in2 = $("#in2").val();
        alert(in2);
    });
    $("#BtnOut2").click(function(){
        out2 = $("#out2").val();
        alert(out2);
    });
    $("#BtnNormalRate").click(function(){
        payRate = $("#normalRate").val();
        alert(payRate);
    });
    $("#BtnOvertimeLimit").click(function(){
        overtimeLimit = $("#overtimeLimit").val();
        alert(overtimeLimit);
    });
    $("#BtnOvertimeRate").click(function(){
        overtimeRate = $("#overtimeRate").val();
        alert(overtimeRate);
    });
    $("#BtnCalc").click(function(){
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
    $("#totalHours").text = ("$" + hours + " total hours worked");
    $("#totalPay").text = ("$" + pay + " gross pay earned");
    alert(hours + " total hours worked.");
    alert(pay + " total pay.");
}
function calculateHours() {
    return (((out1 - in1) + (out2 - in2)) / 100);
}
function idek() {
    var hours = calculateHours(in1, out1, in2, out2);
    var pay = calculatePay(hours, payRate, overtimeLimit, overtimeRate);
    return pay;
    }
