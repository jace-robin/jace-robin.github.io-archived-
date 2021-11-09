$(document).ready(runProgram);

function runProgram() {
    var game = {
        players: {
            playerArray: [1, ],
            playerObjects: {
                placeholder: NaN,
            },
            types: ["stone", "paper", "scissor"],
            rock: {
                //movement: movementTick(game.movement(rock)),
                sprite: "img/stone.png",
                hitbox: {
                    collision: {
                        width: 50,
                        height: 50,
                    },
                    ai: {
                        width: 100,
                        height: 100,
                    }
                },
            },
            paper: {
                //movement: movementTick(game.movement(paper)),
                sprite: "img/paper.png",
            },
        },
        movement: {
            patterns: {
                running: function () {

                },
                seeking: function () {

                },
            }
        },
        factory: {
            newPlayer: function (type, x, y) {
                var i = new game.playerConstructor(type, x, y);
                game.players.playerObjects[i.gameInfo.id] = x;
                game.players.playerArray.push(i.gameInfo.id);
                game.factory.appendPlayer(i.html.div);
            },
            appendPlayer: function (div) {
                $("#playboxdiv").append(div);
            },
        },
        helper: {
            setText: function (id, desired) {
                $(id).text(desired);
            },
            setPosCSS: function (id, x, y) {
                $(id).css('left', x);
                $(id).css('top', y);
            },
            setPosObject: function (dir1, id) {
                game.players.playerObjects
            }
        },
        playerConstructor: function (type, x, y) {
            var num = game.players.playerArray.length;
            alert(num);
            this.gameId = 'player' + num;
            this.htmlId = '#player' + num;
            this.htmlDiv = '<div class="sprite" id="' + this.htmlId + '"><img class="' + type + '" src = "img/' + type + '.png" ></div > "> <p id="' + type + '">^</p>  </div>';
            this.cssX = x;
            this.cssY = y;
            this.cssImg = type;
            this.help = function (info) {
                return this[info];
            };
            return this;
        },
        testConstruct: function(type, x, y) {
            var i = new game.playerConstructor(type, x, y);
            alert(i.gameId);
            alert(i.hmtlDiv);
        },
    };
    $(document).on('click', click);
    function click() {
        alert("click");
    };
    alert("a");
    game.testConstruct('stone', 56, 87);
    alert("b");
}