$(document).ready(runProgram);

function runProgram() {
    $("#btnRndm").click(getRndmTest);
    function sentenceFormat(firstChoice, nouns, adjectives, pronouns, perspective, subject) {

    }
    function getRndmTest() {
        var pronoun = randomIndex(pronouns);
        var verb = randomIndex(verbs);
        var adjective = randomIndex(adjectives);
        var noun = randomIndex(nouns);
        var adverb = randomIndex(adverbs);
        var sentence = pronoun + " " + verb + " " + adverb +  " " + adjective + " " + noun;
        $("#result").text(sentence);
    };
    function getRandom(min, max) {
        var n = min;
        var x = max;
        var rn = rand(n, x);
        return (rn);
        function rand(min, max) {
            var i = Math.round(min + (Math.random() * (max - min)));
            return (i);
        }
    }
    function randomIndex (array) {
        return array[getRandom(0, array.length - 1)];
    };
}