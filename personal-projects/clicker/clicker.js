$(document).ready(runProgram);


function runProgram() {

    //objects
    var Game = {
        money: 0,
        clickValue: 1,
        upgrades: 0,
        buildings: {
            1: {
                amount: 0,
                moneyGiven: 1,
                baseCost: 10,
            },
            2: {
                amount: 0,
                moneyGiven: 5,
                baseCost: 100,
            },
            3: {
                amount: 0,
                moneyGiven: 10,
                baseCost: 1000,
            },
        },
    };
    var clickValue = 1;
    //functions
    $("#click").on('click', function () {
        Game.money += clickValue;
        $("#moneycount").text(Game.money + " Dollars Earned");
    });

    function tEdit(id, text) {
        $(id).text(text);
    }

    function addMoney(amount) {
        Game.money += amount;
    }

    function takeMoney(amount) {
        Game.money -= amount;
    }

    function addBuilding(building, amount) {
        Game.buildings[building] += amount;
    }

    function buildingCost(building) {
        return Math.round(Game.buildings[building].amount * 1.25) + Game.buildings[building].baseCost;
    }

    function click(id) {
        Game.objects.click.response();
    }
}