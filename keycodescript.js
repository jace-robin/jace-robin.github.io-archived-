$document.on('keydown', handleKeyDown);
function handleKeyDown(event) {
    var key = '"' + keyObject[event.which] + '"';
    keyStatus[key] = true;
    };
function handleKeyUp(event) {
    var key = '"' + keyObject[event.which] + '"';
      keyStatus[key] = false;
    };
var keyArray =
[
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~",
"backspace", 
"tab",
"~", 
"~", 
"~", 
"enter", 
"~", 
"~", 
"shift", 
"ctrl", 
"alt", 
"pause/break", 
"caps lock", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"escape", 
"~", 
"~", 
"~", 
"~", 
"space",
"~", 
"page down", 
"end", 
"home",
"left", 
"up", 
"right", 
"down", 
"~", 
"~", 
"~", 
"print screen", 
"insert", 
"delete", 
"~", 
"0", 
"1", 
"2", 
"3", 
"4", 
"5", 
"6", 
"7", 
"8", 
"9", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"a", 
"b", 
"c", 
"d", 
"e", 
"f", 
"g", 
"h", 
"i",
"j",
"k", 
"l", 
"m", 
"n", 
"o", 
"p", 
"q", 
"r", 
"s", 
"t", 
"u", 
"v", 
"w",
"x", 
"y", 
"z", 
"left window key", 
"right window key", 
"select key", 
"~", 
"~", 
"numpad 0", 
"numpad 1", 
"numpad 2", 
"numpad 3", 
"numpad 4", 
"numpad 5", 
"numpad 6", 
"numpad 7", 
"numpad 8", 
"numpad 9", 
"multiply", 
"add", 
"~", 
"subtract", 
"decimal point", 
"divide", 
"f1", 
"f2", 
"f3", 
"f4", 
"f5", 
"f6", 
"f7", 
"f8", 
"f9", 
"f10", 
"f11", 
"f12", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"num lock",
"scroll lock", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"My Computer(multimedia keyboard)", 
"My Calculator(multimedia keyboard)", 
"~", 
"~", 
"semi-colon", 
"equal sign", 
"comma", 
"dash",
"period", 
"forward slash", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"~", 
"open bracket", 
"back slash", 
"close bracket", 
"single qoute", 
];
var keyObject =
{
"~": 1, 
"~": 2, 
"~": 3, 
"~": 4, 
"~": 5, 
"~": 6, 
"~": 7,
"backspace": 8, 
"tab": 9,
"~": 10, 
"~": 11, 
"~": 12, 
"enter": 13,
"~": 14, 
"~": 15, 
"shift": 16, 
"ctrl": 17, 
"alt": 18, 
"pause/break": 19, 
"caps lock": 20, 
"~": 21, 
"~": 22, 
"~": 23, 
"~": 24, 
"~": 25, 
"~": 26, 
"escape": 27, 
"~": 28, 
"~": 29, 
"~": 30, 
"~": 31, 
"space": 32,
"~": 33, 
"page down": 34, 
"end": 35, 
"home": 36,
"left": 37, 
"up": 38, 
"right": 39, 
"down": 40, 
"~": 41, 
"~": 42, 
"~": 43, 
"print screen": 44, 
"insert": 45, 
"delete": 46, 
"~": 47, 
"0": 48, 
"1": 49, 
"2": 50, 
"3": 51, 
"4": 52, 
"5": 53, 
"6": 54, 
"7": 55, 
"8": 56, 
"9": 57, 
"~": 58, 
"~": 59, 
"~": 60, 
"~": 61, 
"~": 62, 
"~": 63, 
"~": 64, 
"a": 65, 
"b": 66, 
"c": 67, 
"d": 68, 
"e": 69, 
"f": 70, 
"g": 71, 
"h": 72, 
"i": 73,
"j": 74,
"k": 75, 
"l": 76, 
"m": 77, 
"n": 78, 
"o": 79, 
"p": 80, 
"q": 81, 
"r": 82, 
"s": 83, 
"t": 84, 
"u": 85, 
"v": 86, 
"w": 87,
"x": 88, 
"y": 89, 
"z": 90, 
"left window key": 91, 
"right window key": 92, 
"select key": 93, 
"~": 94, 
"~": 95, 
"numpad 0": 96, 
"numpad 1": 97, 
"numpad 2": 98, 
"numpad 3": 99, 
"numpad 4": 100, 
"numpad 5": 101, 
"numpad 6": 102, 
"numpad 7": 103, 
"numpad 8": 104, 
"numpad 9": 105, 
"multiply": 106, 
"add": 107, 
"~": 108, 
"subtract": 109, 
"decimal point": 110, 
"divide": 111, 
"f1": 112, 
"f2": 113, 
"f3": 114, 
"f4": 115, 
"f5": 116, 
"f6": 117, 
"f7": 118, 
"f8": 119, 
"f9": 120, 
"f10": 121, 
"f11": 122, 
"f12": 123, 
"~": 124, 
"~": 125, 
"~": 126, 
"~": 127, 
"~": 128, 
"~": 129, 
"~": 130, 
"~": 131, 
"~": 132, 
"~": 133, 
"~": 134, 
"~": 135, 
"~": 136, 
"~": 137, 
"~": 138, 
"~": 139, 
"~": 140, 
"~": 141, 
"~": 142, 
"~": 143, 
"num lock": 144,
"scroll lock": 145, 
"~": 146, 
"~": 147, 
"~": 148, 
"~": 149, 
"~": 150, 
"~": 151, 
"~": 152, 
"~": 153, 
"~": 154, 
"~": 155, 
"~":156 , 
"~": 157, 
"~": 158, 
"~": 159, 
"~": 160, 
"~": 161, 
"~": 162, 
"~": 163, 
"~": 164, 
"~": 165, 
"~": 166, 
"~": 167, 
"~": 168, 
"~": 169, 
"~": 170, 
"~": 171, 
"~": 172, 
"~": 173, 
"~": 174, 
"~": 175, 
"~": 176, 
"~": 177, 
"~": 178, 
"~": 179, 
"~": 180, 
"~": 181, 
"My Computer(multimedia keyboard)": 182, 
"My Calculator(multimedia keyboard)": 183, 
"~": 184, 
"~": 185, 
"semi-colon": 186, 
"equal sign": 187, 
"comma":188 , 
"dash": 189,
"period": 190, 
"forward slash": 191, 
"~": 192, 
"~": 193, 
"~": 194, 
"~": 195, 
"~": 196, 
"~": 197, 
"~": 198, 
"~": 199, 
"~": 200, 
"~": 201, 
"~": 202, 
"~": 203, 
"~": 204, 
"~": 205, 
"~": 206, 
"~": 207, 
"~": 208, 
"~": 209, 
"~": 210, 
"~": 211, 
"~": 212, 
"~": 213, 
"~": 214, 
"~": 215, 
"~": 216, 
"~": 217, 
"~": 218, 
"open bracket": 219, 
"back slash": 220, 
"close bracket": 221, 
"single quote": 222, 
};
var keyStatus =
{
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"backspace": Boolean, 
"tab": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"enter": Boolean, 
"~": Boolean, 
"~": Boolean, 
"shift": Boolean, 
"ctrl": Boolean, 
"alt": Boolean, 
"pause/break": Boolean, 
"caps lock": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"escape": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"space": Boolean, 
"~": Boolean, 
"page down": Boolean, 
"end": Boolean, 
"home": Boolean, 
"left": Boolean, 
"up": Boolean, 
"right": Boolean, 
"down": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"print screen": Boolean, 
"insert": Boolean, 
"delete": Boolean, 
"~": Boolean, 
"0": Boolean, 
"1": Boolean, 
"2": Boolean, 
"3": Boolean, 
"4": Boolean, 
"5": Boolean, 
"6": Boolean, 
"7": Boolean, 
"8": Boolean, 
"9": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"a": Boolean, 
"b": Boolean, 
"c": Boolean, 
"d": Boolean, 
"e": Boolean, 
"f": Boolean, 
"g": Boolean, 
"h": Boolean, 
"i": Boolean, 
"j": Boolean, 
"k": Boolean, 
"l": Boolean, 
"m": Boolean, 
"n": Boolean, 
"o": Boolean, 
"p": Boolean, 
"q": Boolean, 
"r": Boolean, 
"s": Boolean, 
"t": Boolean, 
"u": Boolean, 
"v": Boolean, 
"w": Boolean, 
"x": Boolean, 
"y": Boolean, 
"z": Boolean, 
"left window key": Boolean, 
"right window key": Boolean, 
"select key": Boolean, 
"~": Boolean, 
"~": Boolean, 
"numpad 0": Boolean, 
"numpad 1": Boolean, 
"numpad 2": Boolean, 
"numpad 3": Boolean, 
"numpad 4": Boolean, 
"numpad 5": Boolean, 
"numpad 6": Boolean, 
"numpad 7": Boolean, 
"numpad 8": Boolean, 
"numpad 9": Boolean, 
"multiply": Boolean, 
"add": Boolean, 
"~": Boolean, 
"subtract": Boolean, 
"decimal point": Boolean, 
"divide": Boolean, 
"f1": Boolean, 
"f2": Boolean, 
"f3": Boolean, 
"f4": Boolean, 
"f5": Boolean, 
"f6": Boolean, 
"f7": Boolean, 
"f8": Boolean, 
"f9": Boolean, 
"f10":Boolean, 
"f11":Boolean, 
"f12": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"num lock": Boolean, 
"scroll lock": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"My Computer(multimedia keyboard)": Boolean, 
"My Calculator(multimedia keyboard)": Boolean, 
"~": Boolean, 
"~": Boolean, 
"semi-colon": Boolean, 
"equal sign": Boolean, 
"comma": Boolean, 
"dash": Boolean, 
"period": Boolean, 
"forward slash": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"~": Boolean, 
"open bracket": Boolean, 
"back slash": Boolean, 
"close bracket": Boolean, 
"single quote": Boolean, 
};