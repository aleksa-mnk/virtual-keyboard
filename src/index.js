/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-param-reassign: "error" */
/* eslint spaced-comment: ["error", "always"] */
/* eslint linebreak-style: ["error", "unix"] */
/* eslint indent: ["error", 4, { "ignoredNodes": ["ConditionalExpression"] }] */

const i18Obj = {
    en: {
        backquote: '`',
        q: 'q',
        w: 'w',
        e: 'e',
        r: 'r',
        t: 't',
        y: 'y',
        u: 'u',
        i: 'i',
        o: 'o',
        p: 'p',
        '[': '[',
        ']': ']',
        a: 'a',
        s: 's',
        d: 'd',
        f: 'f',
        g: 'g',
        h: 'h',
        j: 'j',
        k: 'k',
        l: 'l',
        ';': ';',
        quotes: "'",
        z: 'z',
        x: 'x',
        c: 'c',
        v: 'v',
        b: 'b',
        n: 'n',
        m: 'm',
        comma: ',',
        period: '.',
        slash: '/',
        slashL: ',',
        system: 'Windows 💪',
        changing: 'For changing language: ctrl + alt',
    },
    ru: {
        backquote: 'ё',
        q: 'й',
        w: 'ц',
        e: 'у',
        r: 'к',
        t: 'е',
        y: 'н',
        u: 'г',
        i: 'ш',
        o: 'щ',
        p: 'з',
        '[': 'х',
        ']': 'ъ',
        a: 'ф',
        s: 'ы',
        d: 'в',
        f: 'а',
        g: 'п',
        h: 'р',
        j: 'о',
        k: 'л',
        l: 'д',
        ';': 'ж',
        quotes: 'э',
        z: 'я',
        x: 'ч',
        c: 'с',
        v: 'м',
        b: 'и',
        n: 'т',
        m: 'ь',
        comma: 'б',
        period: 'ю',
        slash: '.',
        slashL: '\\',
        system: 'Виндовс 💪',
        changing: 'Для переключения языка: ctrl + alt',
    },
};

const DEFAULT_LANG = 'en';

let language = localStorage.getItem('language') || DEFAULT_LANG;
let isCapsLocked = false;
let cursorPosition = 0;
let textareaText = '';

const body = document.querySelector('body');

function showContent() {
    const content = `<div class="wrapper">
    <h1>Virtual Keyboard</h1><br>
    <a href="http://github.com/aleksa-mnk/virtual-keyboard/tree/gh-pages">Мой код здесь</a><br>
    <a href="https://github.com/aleksa-mnk/virtual-keyboard/pull/1">PR</a><br><br>
    <textarea name="textarea" class="textarea" autofocus></textarea>
    <div class="addition">
        <p data-i18="system">keyboard created in windows system</p>
        <p data-i18="changing">for changing language: ctrl + alt</p>
    </div>
    <div class="keyboard">
        <div class="first row">
            <div class="key letter symbol" data-i18="backquote" id='Backquote'>\`</div>
            <div class="key digit" id="Digit1">1</div>
            <div class="key digit" id="Digit2">2</div>
            <div class="key digit" id="Digit3">3</div>
            <div class="key digit" id="Digit4">4</div>
            <div class="key digit" id="Digit5">5</div>
            <div class="key digit" id="Digit6">6</div>
            <div class="key digit" id="Digit7">7</div>
            <div class="key digit" id="Digit8">8</div>
            <div class="key digit" id="Digit9">9</div>
            <div class="key digit" id="Digit0">0</div>
            <div class="key symbol" id="Minus">-</div>
            <div class="key symbol" id="Equal">=</div>
            <div class="key control-key middle backspace" id="Backspace">Backspace</div>
        </div>
        <div class="second row">
            <div class="key control-key tab" id="Tab">tab</div>
            <div class="key letter" data-i18="q" id="KeyQ">q</div>
            <div class="key letter" data-i18="w" id="KeyW">w</div>
            <div class="key letter" data-i18="e" id="KeyE">e</div>
            <div class="key letter" data-i18="r" id="KeyR">r</div>
            <div class="key letter" data-i18="t" id="KeyT">t</div>
            <div class="key letter" data-i18="y" id="KeyY">y</div>
            <div class="key letter" data-i18="u" id="KeyU">u</div>
            <div class="key letter" data-i18="i" id="KeyI">i</div>
            <div class="key letter" data-i18="o" id="KeyO">o</div>
            <div class="key letter" data-i18="p" id="KeyP">p</div>
            <div class="key letter symbol" data-i18="[" id="BracketLeft">[</div>
            <div class="key letter symbol" data-i18="]" id="BracketRight">]</div>
            <div class="key symbol" id="Backslash">\\</div>
            <div class="key control-key del" id="Delete">DEL</div>
        </div>
        <div class="third row">
            <div class="key control-key middle capslock" id="CapsLock">Caps Lock</div>
            <div class="key letter" data-i18="a" id="KeyA">a</div>
            <div class="key letter" data-i18="s" id="KeyS">s</div>
            <div class="key letter" data-i18="d" id="KeyD">d</div>
            <div class="key letter" data-i18="f" id="KeyF">f</div>
            <div class="key letter" data-i18="g" id="KeyG">g</div>
            <div class="key letter" data-i18="h" id="KeyH">h</div>
            <div class="key letter" data-i18="j" id="KeyJ">j</div>
            <div class="key letter" data-i18="k" id="KeyK">k</div>
            <div class="key letter" data-i18="l" id="KeyL">l</div>
            <div class="key letter symbol" data-i18=";" id="Semicolon">;</div>
            <div class="key letter symbol" data-i18="quotes" id="Quote">'</div>
            <div class="key control-key middle enter" id="Enter">ENTER</div>
        </div>
        <div class="fourth row">
            <div class="key control-key middle shift" id="ShiftLeft">Shift</div>
            <div class="key symbol" data-i18="slashL" id="SlashL">\\</div>
            <div class="key letter" data-i18="z" id="KeyZ">z</div>
            <div class="key letter" data-i18="x" id="KeyX">x</div>
            <div class="key letter" data-i18="c" id="KeyC">c</div>
            <div class="key letter" data-i18="v" id="KeyV">v</div>
            <div class="key letter" data-i18="b" id="KeyB">b</div>
            <div class="key letter" data-i18="n" id="KeyN">n</div>
            <div class="key letter" data-i18="m" id="KeyM">m</div>
            <div class="key letter symbol" data-i18="comma" id="Comma">,</div>
            <div class="key letter symbol" data-i18="period" id="Period">.</div>
            <div class="key symbol" data-i18="slash" id="Slash">/</div>
  
            <div class="key control-key arrow-up arrow" id="ArrowUp">▲</div>
            <div class="key control-key middle shift" id="ShiftRight">Shift</div>
        </div>
        <div class="fifth row">
            <div class="key control-key" id="ControlLeft">Ctrl</div>
            <div class="key control-key" id="MetaLeft">Win</div>
            <div class="key control-key" id="AltLeft">Alt</div>
            <div class="key big" id="Space"> </div>
            <div class="key control-key" id="ControlRight">Ctrl</div>
            <div class="key control-key" id="AltRight">Alt</div>
            <div class="key control-key arrow" id="ArrowLeft">◄</div>
            <div class="key control-key arrow" id="ArrowDown">▼</div>
            <div class="key control-key arrow" id="ArrowRight">►</div>
        </div>
    </div>
  </div>`;

    body.insertAdjacentHTML('afterbegin', content);
}

showContent();

const data = document.querySelectorAll('[data-i18]');
const letters = document.querySelectorAll('.letter');
const digits = document.querySelectorAll('.digit');
const symbols = document.querySelectorAll('.symbol');
const shifts = document.querySelectorAll('.shift');

getTranslate();

const controlLeft = document.querySelector('#ControlLeft');
const altLeft = document.querySelector('#AltLeft');
const controlRight = document.querySelector('#ControlRight');
const altRight = document.querySelector('#AltRight');

const textarea = document.querySelector('.textarea');
const keyboard = document.querySelector('.keyboard');

document.addEventListener('keydown', pressKey);
document.addEventListener('keyup', releaseKey);

function pressKey(e) {
    const key = document.querySelector(`#${e.code}`);
    if (key) {
        if (key.classList.contains('key')) {
            e.preventDefault();
        }
        // if (key.classList.contains("control-key")) {
        //     key.classList.add("active-background");
        // }
        key.classList.add('active');
        if (key.classList.contains('shift')) {
            shiftSymbols();
            changeLetters();
        }
        determinePressedKey(key);
    }

    if ((controlLeft.classList.contains('active') || controlRight.classList.contains('active'))
        && (altLeft.classList.contains('active') || altRight.classList.contains('active'))) changeLanguage();
}

function releaseKey(e) {
    const key = document.querySelector(`#${e.code}`);
    if (key) {
        if (key.classList.contains('control-key') && !key.classList.contains('capslock')) {
            key.classList.remove('active-background');
        }
        if (!key.classList.contains('capslock')) {
            key.classList.remove('active');
        }
        determineUpKey(key);
    }
}

function changeLanguage() {
    if (language === 'ru') {
        language = 'en';
    } else if (language === 'en') {
        language = 'ru';
    }
    saveToLocalStorage();
    if (isCapsLocked) {
        data.forEach(
            (elem) => (elem.textContent = i18Obj[language][elem.dataset.i18].toUpperCase()),
        );
    } else if (!isCapsLocked) {
        data.forEach(
            (elem) => (elem.textContent = i18Obj[language][elem.dataset.i18].toLowerCase()),
        );
    }
}

function saveToLocalStorage() {
    localStorage.setItem('language', language);
}

function getTranslate() {
    data.forEach(
        (elem) => (elem.textContent = i18Obj[language][elem.dataset.i18]),
    );
}

keyboard.addEventListener('click', identifyKey);

shifts.forEach((shift) => shift.addEventListener('mousedown', () => {
    shiftSymbols();
    changeLetters();
}));

shifts.forEach((shift) => shift.addEventListener('mouseup', (e) => {
    const key = e.target;
    determineUpKey(key);
}));

function identifyKey(e) {
    const key = e.target;
    determinePressedKey(key);
}

function determinePressedKey(key) {
    if (key.classList.contains('key') && !key.classList.contains('control-key')) {
        enterText(key.textContent);
    }
    if (key.classList.contains('arrow')) {
        enterText(key.textContent);
    }
    if (key.classList.contains('capslock')) {
        toUpperAndLowerCase(key);
    }
    if (key.classList.contains('enter')) {
        enterText('\n');
    }
    if (key.classList.contains('tab')) {
        enterText('\t');
    }
    if (key.classList.contains('backspace')) {
        deleteFromTextarea();
    }
    if (key.classList.contains('del')) {
        deleteFromTextareaByDel();
    }
    updateTextarea();
}

function determineUpKey(key) {
    if (key.classList.contains('shift')) {
        if (!isCapsLocked) {
            letters.forEach(
                (letter) => (letter.textContent = letter.textContent.toLowerCase()),
            );
        } else if (isCapsLocked) {
            letters.forEach(
                (letter) => (letter.textContent = letter.textContent.toUpperCase()),
            );
        }
        unshiftSymbols();
    }
}

textarea.addEventListener('click', () => {
    cursorPosition = textarea.selectionStart;
});

function enterText(text) {
    textareaText = textareaText.substring(0, cursorPosition)
        + text
        + textareaText.substring(cursorPosition);
    cursorPosition += text.length;
}

function updateTextarea() {
    textarea.textContent = textareaText;
    textarea.selectionStart = cursorPosition;
    textarea.focus();
}

function deleteFromTextarea() {
    if (cursorPosition > 0) {
        textareaText = textareaText.substring(0, textarea.selectionStart - 1) + textareaText.substring(textarea.selectionEnd);
        cursorPosition--;
    }
}

function deleteFromTextareaByDel() {
    textareaText = textareaText.substring(0, textarea.selectionStart) + textareaText.substring(textarea.selectionEnd + 1);
}

function toUpperAndLowerCase(key) {
    if (isCapsLocked) {
        key.classList.remove('capslock-active');
        key.classList.remove('active');
        letters.forEach(
            (letter) => (letter.textContent = letter.textContent.toLowerCase()),
        );
        isCapsLocked = false;
    } else if (!isCapsLocked) {
        letters.forEach(
            (letter) => (letter.textContent = letter.textContent.toUpperCase()),
        );
        key.classList.add('capslock-active');
        key.classList.add('active');
        isCapsLocked = true;
    }
}

function shiftSymbols() {
    const [one, two, three, four, five, six, seven, eight, nine, zero] = digits;
    const [
        backquote,
        minus,
        equal,
        bracketleft,
        bracketright,
        backslash,
        semicolon,
        quote,
        comma,
        period,
        slash,
    ] = symbols;
    if (language === 'en') {
        one.textContent = '!';
        two.textContent = '@';
        three.textContent = '#';
        four.textContent = '$';
        five.textContent = '%';
        six.textContent = '^';
        seven.textContent = '&';
        eight.textContent = '*';
        nine.textContent = '(';
        zero.textContent = ')';
        backquote.textContent = '~';
        minus.textContent = '_';
        equal.textContent = '+';
        bracketleft.textContent = '{';
        bracketright.textContent = '}';
        backslash.textContent = '|';
        semicolon.textContent = ':';
        quote.textContent = '"';
        comma.textContent = '<';
        period.textContent = '>';
        slash.textContent = '?';
    } else if (language === 'ru') {
        one.textContent = '!';
        two.textContent = '"';
        three.textContent = '№';
        four.textContent = ';';
        five.textContent = '%';
        six.textContent = ':';
        seven.textContent = '?';
        eight.textContent = '*';
        nine.textContent = '(';
        zero.textContent = ')';
        minus.textContent = '_';
        equal.textContent = '+';
        backslash.textContent = '/';
        slash.textContent = ',';
    }
}

function unshiftSymbols() {
    const [one, two, three, four, five, six, seven, eight, nine, zero] = digits;
    const [
        backquote,
        minus,
        equal,
        bracketleft,
        bracketright,
        backslash,
        semicolon,
        quote,
        comma,
        period,
        slash,
    ] = symbols;
    one.textContent = '1';
    two.textContent = '2';
    three.textContent = '3';
    four.textContent = '4';
    five.textContent = '5';
    six.textContent = '6';
    seven.textContent = '7';
    eight.textContent = '8';
    nine.textContent = '9';
    zero.textContent = '0';
    minus.textContent = '-';
    equal.textContent = '=';
    if (language === 'en') {
        backquote.textContent = '`';
        bracketleft.textContent = '[';
        bracketright.textContent = ']';
        backslash.textContent = '\\';
        semicolon.textContent = ';';
        quote.textContent = "'";
        comma.textContent = ',';
        period.textContent = '.';
        slash.textContent = '/';
    } else if (language === 'ru') {
        backslash.textContent = '\\';
        slash.textContent = '.';
    }
}

function changeLetters() {
    letters.forEach((letter) => {
        letter.textContent = (isCapsLocked) ? letter.textContent.toLowerCase() : letter.textContent.toUpperCase();
    });
}
