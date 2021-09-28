var keyArray = ["~", "~", "~", "~", "~", "~", "~", "backspace", "tab", "~", "~", "~", "enter", "~", "~", "shift", "ctrl", "alt", "pause/break", "caps lock", "~", "~", "~", "~", "~", "~", "escape", "~", "~", "~", "~", "space", "~", "page down", "end", "home", "left", "up", "right", "down", "~", "~", "~", "print screen", "insert", "delete", "~", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "~", "~", "~", "~", "~", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "left window key", "right window key", "select key", "~", "~", "numpad 0", "numpad 1", "numpad 2", "numpad 3", "numpad 4", "numpad 5", "numpad 6", "numpad 7", "numpad 8", "numpad 9", "multiply", "add", "~", "subtract", "decimal point", "divide", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "num lock", "scroll lock", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "My Computer(multimedia keyboard)", "My Calculator(multimedia keyboard)", "~", "~", "semi-colon", "equal sign", "comma", "dash", "period", "forward slash", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "~", "open bracket", "back slash", "close bracket", "single qoute"];
var keyObject = {
  1: "~",
  2: "~",
  3: "~",
  4: "~",
  5: "~",
  6: "~",
  7: "~",
  8: "backspace",
  9: "tab",
  10: "~",
  11: "~",
  12: "~",
  13: "enter",
  14: "~",
  15: "~",
  16: "shift",
  17: "ctrl",
  18: "alt",
  19: "pause/break",
  20: "caps lock",
  21: "~",
  22: "~",
  23: "~",
  24: "~",
  25: "~",
  26: "~",
  27: "escape",
  28: "~",
  29: "~",
  30: "~",
  31: "~",
  32: "space",
  33: "~",
  34: "page down",
  35: "end",
  36: "home",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  41: "~",
  42: "~",
  43: "~",
  44: "print screen",
  45: "insert",
  46: "delete",
  47: "~",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  58: "~",
  59: "~",
  60: "~",
  61: "~",
  62: "~",
  63: "~",
  64: "~",
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z",
  91: "left window key",
  92: "right window key",
  93: "select key",
  94: "~",
  95: "~",
  96: "numpad 0",
  97: "numpad 1",
  98: "numpad 2",
  99: "numpad 3",
  100: "numpad 4",
  101: "numpad 5",
  102: "numpad 6",
  103: "numpad 7",
  104: "numpad 8",
  105: "numpad 9",
  106: "multiply",
  107: "add",
  108: "~",
  109: "subtract",
  110: "decimal point",
  111: "divide",
  112: "f1",
  113: "f2",
  114: "f3",
  115: "f4",
  116: "f5",
  117: "f6",
  118: "f7",
  119: "f8",
  120: "f9",
  121: "f10",
  122: "f11",
  123: "f12",
  124: "~",
  125: "~",
  126: "~",
  127: "~",
  128: "~",
  129: "~",
  130: "~",
  131: "~",
  132: "~",
  133: "~",
  134: "~",
  135: "~",
  136: "~",
  137: "~",
  138: "~",
  139: "~",
  140: "~",
  141: "~",
  142: "~",
  143: "~",
  144: "num lock",
  145: "scroll lock",
  146: "~",
  147: "~",
  148: "~",
  149: "~",
  150: "~",
  151: "~",
  152: "~",
  153: "~",
  154: "~",
  155: "~",
  156: "~",
  157: "~",
  158: "~",
  159: "~",
  160: "~",
  161: "~",
  162: "~",
  163: "~",
  164: "~",
  165: "~",
  166: "~",
  167: "~",
  168: "~",
  169: "~",
  170: "~",
  171: "~",
  172: "~",
  173: "~",
  174: "~",
  175: "~",
  176: "~",
  177: "~",
  178: "~",
  179: "~",
  180: "~",
  181: "~",
  182: "My Computer(multimedia keyboard)",
  183: "My Calculator(multimedia keyboard)",
  184: "~",
  185: "~",
  186: "semi-colon",
  187: "equal sign",
  188: "comma",
  189: "dash",
  190: "period",
  191: "forward slash",
  192: "~",
  193: "~",
  194: "~",
  195: "~",
  196: "~",
  197: "~",
  198: "~",
  199: "~",
  200: "~",
  201: "~",
  202: "~",
  203: "~",
  204: "~",
  205: "~",
  206: "~",
  207: "~",
  208: "~",
  209: "~",
  210: "~",
  211: "~",
  212: "~",
  213: "~",
  214: "~",
  215: "~",
  216: "~",
  217: "~",
  218: "~",
  219: "open bracket",
  220: "back slash",
  221: "close bracket",
  222: "single quote",
}
var keyStatus =
{
  "backspace": {
    "held": Boolean,
    "name": "backspace"
  },
  "tab": {
    "held": Boolean,
    "name": "tab"
  },
  "enter": {
    "held": Boolean,
    "name": "enter"
  },
  "shift": {
    "held": Boolean,
    "name": "shift"
  },
  "ctrl": {
    "held": Boolean,
    "name": "ctrl"
  },
  "alt": {
    "held": Boolean,
    "name": "alt"
  },
  "pause/break": {
    "held": Boolean,
    "name": "pause/break"
  },
  "caps lock": {
    "held": Boolean,
    "name": "caps lock"
  },
  "escape": {
    "held": Boolean,
    "name": "escape"
  },
  "space": {
    "held": Boolean,
    "name": "space"
  },
  "page down": {
    "held": Boolean,
    "name": "page down"
  },
  "end": {
    "held": Boolean,
    "name": "end"
  },
  "home": {
    "held": Boolean,
    "name": "home"
  },
  "left": {
    "held": Boolean,
    "name": "left"
  },
  "up": {
    "held": Boolean,
    "name": "up"
  },
  "right": {
    "held": Boolean,
    "name": "right"
  },
  "down": {
    "held": Boolean,
    "name": "down"
  },
  "print screen": {
    "held": Boolean,
    "name": "print screen"
  },
  "insert": {
    "held": Boolean,
    "name": "insert"
  },
  "delete": {
    "held": Boolean,
    "name": "delete"
  },
  "0": {
    "held": Boolean,
    "name": "0"
  },
  "1": {
    "held": Boolean,
    "name": "1"
  },
  "2": {
    "held": Boolean,
    "name": "2"
  },
  "3": {
    "held": Boolean,
    "name": "3"
  },
  "4": {
    "held": Boolean,
    "name": "4"
  },
  "5": {
    "held": Boolean,
    "name": "5"
  },
  "6": {
    "held": Boolean,
    "name": "6"
  },
  "7": {
    "held": Boolean,
    "name": "7"
  },
  "8": {
    "held": Boolean,
    "name": "8"
  },
  "9": {
    "held": Boolean,
    "name": "9"
  },
  "a": {
    "held": Boolean,
    "name": "a"
  },
  "b": {
    "held": Boolean,
    "name": "b"
  },
  "c": {
    "held": Boolean,
    "name": "c"
  },
  "d": {
    "held": Boolean,
    "name": "d"
  },
  "e": {
    "held": Boolean,
    "name": "e"
  },
  "f": {
    "held": Boolean,
    "name": "f"
  },
  "g": {
    "held": Boolean,
    "name": "g"
  },
  "h": {
    "held": Boolean,
    "name": "h"
  },
  "i": {
    "held": Boolean,
    "name": "i"
  },
  "j": {
    "held": Boolean,
    "name": "j"
  },
  "k": {
    "held": Boolean,
    "name": "k"
  },
  "l": {
    "held": Boolean,
    "name": "l"
  },
  "m": {
    "held": Boolean,
    "name": "m"
  },
  "n": {
    "held": Boolean,
    "name": "n"
  },
  "o": {
    "held": Boolean,
    "name": "o"
  },
  "p": {
    "held": Boolean,
    "name": "p"
  },
  "q": {
    "held": Boolean,
    "name": "q"
  },
  "r": {
    "held": Boolean,
    "name": "r"
  },
  "s": {
    "held": Boolean,
    "name": "s"
  },
  "t": {
    "held": Boolean,
    "name": "t"
  },
  "u": {
    "held": Boolean,
    "name": "u"
  },
  "v": {
    "held": Boolean,
    "name": "v"
  },
  "w": {
    "held": Boolean,
    "name": "w"
  },
  "x": {
    "held": Boolean,
    "name": "x"
  },
  "y": {
    "held": Boolean,
    "name": "y"
  },
  "z": {
    "held": Boolean,
    "name": "z"
  },
  "left window key": {
    "held": Boolean,
    "name": "left window key"
  },
  "right window key": {
    "held": Boolean,
    "name": "right window key"
  },
  "select key": {
    "held": Boolean,
    "name": "select key"
  },
  "numpad 0": {
    "held": Boolean,
    "name": "numpad 0"
  },
  "numpad 1": {
    "held": Boolean,
    "name": "numpad 1"
  },
  "numpad 2": {
    "held": Boolean,
    "name": "numpad 2"
  },
  "numpad 3": {
    "held": Boolean,
    "name": "numpad 3"
  },
  "numpad 4": {
    "held": Boolean,
    "name": "numpad 4"
  },
  "numpad 5": {
    "held": Boolean,
    "name": "numpad 5"
  },
  "numpad 6": {
    "held": Boolean,
    "name": "numpad 6"
  },
  "numpad 7": {
    "held": Boolean,
    "name": "numpad 7"
  },
  "numpad 8": {
    "held": Boolean,
    "name": "numpad 8"
  },
  "numpad 9": {
    "held": Boolean,
    "name": "numpad 9"
  },
  "multiply": {
    "held": Boolean,
    "name": "multiply"
  },
  "add": {
    "held": Boolean,
    "name": "add"
  },
  "subtract": {
    "held": Boolean,
    "name": "subtract"
  },
  "decimal point": {
    "held": Boolean,
    "name": "decimal point"
  },
  "divide": {
    "held": Boolean,
    "name": "divide"
  },
  "f1": {
    "held": Boolean,
    "name": "f1"
  },
  "f2": {
    "held": Boolean,
    "name": "f2"
  },
  "f3": {
    "held": Boolean,
    "name": "f3"
  },
  "f4": {
    "held": Boolean,
    "name": "f4"
  },
  "f5": {
    "held": Boolean,
    "name": "f5"
  },
  "f6": {
    "held": Boolean,
    "name": "f6"
  },
  "f7": {
    "held": Boolean,
    "name": "f7"
  },
  "f8": {
    "held": Boolean,
    "name": "f8"
  },
  "f9": {
    "held": Boolean,
    "name": "f9"
  },
  "f10": {
    "held": Boolean,
    "name": "f10"
  },
  "f11": {
    "held": Boolean,
    "name": "f11"
  },
  "f12": {
    "held": Boolean,
    "name": "f12"
  },
  "num lock": {
    "held": Boolean,
    "name": "num lock"
  },
  "scroll lock": {
    "held": Boolean,
    "name": "scroll lock"
  },
  "My Computer(multimedia keyboard)": {
    "held": Boolean,
    "name": "My Computer(multimedia keyboard)"
  },
  "My Calculator(multimedia keyboard)": {
    "held": Boolean,
    "name": "My Calculator(multimedia keyboard)"
  },
  "semi-colon": {
    "held": Boolean,
    "name": "semi-colon"
  },
  "equal sign": {
    "held": Boolean,
    "name": "equal sign"
  },
  "comma": {
    "held": Boolean,
    "name": "comma"
  },
  "dash": {
    "held": Boolean,
    "name": "dash"
  },
  "period": {
    "held": Boolean,
    "name": "period"
  },
  "forward slash": {
    "held": Boolean,
    "name": "forward slash"
  },
  "open bracket": {
    "held": Boolean,
    "name": "open bracket"
  },
  "back slash": {
    "held": Boolean,
    "name": "back slash"
  },
  "close bracket": {
    "held": Boolean,
    "name": "close bracket"
  },
  "single quote": {
    "held": Boolean,
    "name": "single quote"
  },
};