"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const superagent = require("superagent");
const starIcon = `svg:
<svg enable-background="new 0 0 510 510" version="1.1" viewBox="0 0 510 510" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<polygon points="255 402.21 412.59 497.25 370.9 318.01 510 197.47 326.63 181.74 255 12.75 183.37 181.74 0 197.47 139.1 318.01 97.41 497.25"/>
</svg>
`;
defineExtension({
    icon: starIcon,
    name: {
        en: 'Test the JS plz',
        fr: 'Test SVP',
        pt: 'test pt',
        'pt-BR': 'test BRAZIL',
        'en-GB': 'alright guvna',
        'zh-Hans': '你好'
    },
    // options: [
    //   {
    //     identifier: 'test',
    //     type: 'boolean',
    //     label: 'useless'
    //   }
    // ],
    actions: [
        {
            title: 'Show Success',
            icon: 'symbol:checkmark',
            code(selection) {
                popclip.showSuccess();
            }
        }, {
            title: 'Show Success Async',
            icon: 'symbol:checkmark.circle',
            code(selection) {
                setTimeout(() => {
                    popclip.showSuccess();
                }, 1000);
            }
        }, {
            title: 'Timer 5s',
            icon: 'text:(5s)',
            code(selection) {
                setTimeout(() => {
                    print('5s timer fired');
                    return 'my string 456';
                }, 5000);
            },
            after: 'show-result'
        }, {
            title: 'HTTP',
            icon: 'symbol:hand.raised',
            code(selection) {
                return __awaiter(this, void 0, void 0, function* () {
                    print((yield axios_1.default.get('http://sabnzbd.org/tests/internetspeed/10MB.bin')).statusText);
                });
            }
        }, {
            title: 'Large File',
            icon: 'symbol:bus.fill',
            code(selection) {
                return __awaiter(this, void 0, void 0, function* () {
                    popclip.showText((yield axios_1.default.get('https://sabnzbd.org/tests/internetspeed/10MB.bin')).statusText);
                });
            }
        }, {
            title: 'Large File with timeout',
            icon: 'symbol:clock',
            code(selection) {
                return __awaiter(this, void 0, void 0, function* () {
                    // https://stackoverflow.com/questions/100841/artificially-create-a-connection-timeout-error
                    popclip.showText((yield axios_1.default.get('https://10.255.255.1/')).statusText);
                });
            }
        }, {
            title: 'Example.com',
            icon: 'symbol:seal',
            code(selection) {
                return __awaiter(this, void 0, void 0, function* () {
                    print((yield axios_1.default.get('https://example.com/')).statusText);
                });
            }
        }, {
            title: 'Example.com 404',
            icon: 'symbol:nosign',
            code(selection) {
                return __awaiter(this, void 0, void 0, function* () {
                    print((yield axios_1.default.get('https://example.com/sdkfjhdkjf')).statusText);
                });
            }
        }, {
            title: '301 Redirect',
            icon: 'symbol:arrowshape.bounce.right',
            code(selection) {
                return __awaiter(this, void 0, void 0, function* () {
                    print((yield axios_1.default.get('https://pilotmoon.com/link/popclip')).statusText);
                });
            }
        }, {
            title: 'JSON',
            icon: 'symbol:number',
            code(selection) {
                return __awaiter(this, void 0, void 0, function* () {
                    print((yield axios_1.default.get('https://dog.ceo/api/breeds/image/random')).statusText);
                });
            }
        }, {
            title: 'Settings',
            icon: 'symbol:gear',
            code(selection) {
                popclip.showSettings();
            }
        }, {
            title: 'POST JSON',
            icon: 'symbol:signpost.right',
            code(selection) {
                return __awaiter(this, void 0, void 0, function* () {
                    const info = {
                        name: 'zzzzz',
                        job: 'ZZ66'
                    };
                    print((yield axios_1.default.post('https://reqres.in/api/users', info)).statusText);
                });
            }
        }, {
            title: 'POST superagent',
            icon: 'symbol:signpost.left',
            code(selection) {
                return __awaiter(this, void 0, void 0, function* () {
                    const info = {
                        name: 'yyyyy',
                        job: 'QY77'
                    };
                    const res = yield superagent.post('https://reqres.in/api/users').send(info);
                    print(res);
                    print({ myFunc: () => { } });
                });
            }
        }
    ]
});
// var xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function handleLoad () {
//   if (!this.xhr || this.xhr.readyState !== 4) {
//     return
//   }
//   print(this.xhr.responseText)
//   //xhr = null
// }
// xhr.open('GET', 'https://www.example.org/example.txt')
// xhr.send()
// superagent
//   .get('https://xkcd.com/')
//   .end((err, res) => {
//     if (err) {
//       print('errrorrrr')
//     } else {
//       //print(res.text)
//       print('gotit')
//     }
//   })
// promise with async/await
// (async () => {
//   try {
//     const res = await superagent.get('https://xkcd.com/')
//     print(res)
//   } catch (err) {
//     print(err)
//   }
// })().catch(error => {
//   print('onrs', error)
// })c
// (async () => {
//   try {
//     const response = await axios.get('https://sabnzbd.org/tests/internetspeed/50MB.bin')
//     print(response.request.status)
//   } catch (err) {
//     print(err)
//   }
// })().catch(error => {
//   print('onra', error)
// })
// http().then(value => {
//   print('ok', value)
// }, error => {
//   print('error', error)
// })
// let hello = require('hello');
// let cj = require('./Config.json');
// let turndown = require('turndown');
// const to = 5000
// print('setting timeout', to)
// const id = setTimeout(() => {
//   print('second')
// }, to)
// setTimeout(() => {
//   print('first')
// }, 2000)
// }