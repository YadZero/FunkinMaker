window.getExtension = (filename) => {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}

var idle_1 = "Assets/Sprites/Boyfriend/Idle/Idle_1.png";
var idle_2 = "Assets/Sprites/Boyfriend/Idle/Idle_2.png";
var idle_3 = "Assets/Sprites/Boyfriend/Idle/Idle_3.png";
var idle_4 = "Assets/Sprites/Boyfriend/Idle/Idle_4.png";
var idle_5 = "Assets/Sprites/Boyfriend/Idle/Idle_5.png";

var left_1 = "Assets/Sprites/Boyfriend/Left/Left_1.png";
var left_2 = "Assets/Sprites/Boyfriend/Left/Left_2.png";
var left_3 = "Assets/Sprites/Boyfriend/Left/Left_3.png";
var left_miss_1 = "Assets/Sprites/Boyfriend/Left/Miss_1.png";
var left_miss_2 = "Assets/Sprites/Boyfriend/Left/Miss_2.png";

var right_1 = "Assets/Sprites/Boyfriend/Right/Right_1.png";
var right_2 = "Assets/Sprites/Boyfriend/Right/Right_2.png";
var right_miss_1 = "Assets/Sprites/Boyfriend/Right/Miss_1.png";
var right_miss_2 = "Assets/Sprites/Boyfriend/Right/Miss_2.png";

var down_1 = "Assets/Sprites/Boyfriend/Down/Down_1.png";
var down_2 = "Assets/Sprites/Boyfriend/Down/Down_2.png";
var down_miss_1 = "Assets/Sprites/Boyfriend/Down/Miss_1.png";
var down_miss_2 = "Assets/Sprites/Boyfriend/Down/Miss_2.png";

var up_1 = "Assets/Sprites/Boyfriend/Up/Up_1.png";
var up_2 = "Assets/Sprites/Boyfriend/Up/Up_2.png";
var up_miss_1 = "Assets/Sprites/Boyfriend/Up/Miss_1.png";
var up_miss_2 = "Assets/Sprites/Boyfriend/Up/Miss_2.png";

let toastOn;

document.body.onload = function(){
    let mobileArrows_S = document.getElementById('mobileArrows');
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        console.log('This Is The Mobile Version!')
        mobileArrows_S.style.display = "";
        let button=document.getElementById('charEdit')
        let cSChanger=document.getElementById('closeSpritesChanger')
            cSChanger.style.top = "18%"
            button.style.left = "20%"
            button.style.top = "82%"
            button.style.borderRadius = "10px"
            button.style.transform = "translate(-50%, -50%) scale(2)"
            button.addEventListener('click', (e) => {
                button.style.left = ""
                button.style.top = ""
                button.style.borderRadius = ""
                button.style.transform = ""
            })
            cSChanger.addEventListener('click', (e) => {
                button.style.left = "20%"
                button.style.top = "82%"
                button.style.borderRadius = "10px"
                button.style.transform = "translate(-50%, -50%) scale(2)"
            })
        // Arrows
        let mobileArrows = {
            up: document.getElementById('mobileAU'),
            down: document.getElementById('mobileAD'),
            right: document.getElementById('mobileAR'),
            left: document.getElementById('mobileAL')
        }
        mobileArrows.up.onmousedown = (e) => {
            if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return;
            document.dispatchEvent(window.arrows.success.up.down)
        }
        mobileArrows.up.onmouseup = (e) => {
            if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return;
            setTimeout(() => {
                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                setTimeout(() => {
                    if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                    setTimeout(() => {
                        if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                        document.dispatchEvent(window.arrows.success.up.up)
                    }, 10);
                }, 10);
            }, 10);
        }
        mobileArrows.down.onmousedown = (e) => {
            if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return;
            document.dispatchEvent(window.arrows.success.down.down)
        }
        mobileArrows.down.onmouseup = (e) => {
            if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return;
            setTimeout(() => {
                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                setTimeout(() => {
                    if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                    setTimeout(() => {
                        if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                        document.dispatchEvent(window.arrows.success.down.up)
                    }, 10);
                }, 10);
            }, 10);
        }
        mobileArrows.right.onmousedown = (e) => {
            if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return;
            document.dispatchEvent(window.arrows.success.right.down)
        }
        mobileArrows.right.onmouseup = (e) => {
            if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return;
            setTimeout(() => {
                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                setTimeout(() => {
                    if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                    setTimeout(() => {
                        if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                        document.dispatchEvent(window.arrows.success.right.up)
                    }, 10);
                }, 10);
            }, 10);
        }
        mobileArrows.left.onmousedown = (e) => {
            if(isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return;
            document.dispatchEvent(window.arrows.success.left.down)
        }
        mobileArrows.left.onmouseup = (e) => {
            if(isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return;
            setTimeout(() => {
                if(isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                setTimeout(() => {
                    if(isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                    setTimeout(() => {
                        if(isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                        document.dispatchEvent(window.arrows.success.left.up)
                    }, 10);
                }, 10);
            }, 10);
        }
    }
    setInterval(() => {
        toastOn = document.getElementById('toastBackground').classList == "background visible"
    }, 100);
    let jsonButton = document.getElementById('downloadJSONs')
    jsonButton.addEventListener('click', (e) => {
        e.preventDefault()
        let jsonTemplate = {
            "idle": {
                "1": idle_1,
                "2": idle_2,
                "3": idle_3,
                "4": idle_4,
                "5": idle_5
            },
            "left": {
                "1": left_1,
                "2": left_2,
                "3": left_3,
                "4": left_miss_1,
                "5": left_miss_2
            },
            "right": {
                "1": right_1,
                "2": right_2,
                "3": right_miss_1,
                "4": right_miss_2
            },
            "up": {
                "1": up_1,
                "2": up_2,
                "3": up_miss_1,
                "4": up_miss_2
            },
            "down": {
                "1": down_1,
                "2": down_2,
                "3": down_miss_1,
                "4": down_miss_2
            }
        }
        let jsonContent = JSON.stringify(jsonTemplate)
        window.downloadFile('character.json', jsonContent)
    })
    let charEditButton = document.getElementById('charEdit')
    let spritesChanger = document.getElementById('spritesChanger')
    charEditButton.addEventListener('click', (e) => {
        e.preventDefault()
        charEditButton.classList.remove('visible');
        spritesChanger.classList.add('visible')
    })
    let closeSpritesChanger = document.getElementById('closeSpritesChanger')
    closeSpritesChanger.addEventListener('click', (e) => {
        e.preventDefault()
        charEditButton.classList.add('visible');
        spritesChanger.classList.remove('visible')
    })
    document.getElementById('jsonSprites').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "json") {
            return window.TOASTS.create(
                'advice',
                'The File must be a <code class="marked">JSON</code> file.',
                `The file you bringed ain't a .json formated file`,
                2.3
            )
        }
        const reader = new FileReader()
        reader.addEventListener('load', (event) => {
            let res = JSON.parse(String(event.target.result))
            // ref check
            function badCategory(name) {
                window.TOASTS.create(
                    'warning',
                    'Invalid Category',
                    `Invalid Category <code class="marked">${name}</code>`,
                    3.2
                )
            }
            if(typeof res['idle']  === "undefined" || !res['idle'] ) return badCategory('Idle');
            if(typeof res['left']  === "undefined" || !res['left'] ) return badCategory('Left');
            if(typeof res['right'] === "undefined" || !res['right']) return badCategory('Right');
            if(typeof res['down']  === "undefined" || !res['down'] ) return badCategory('Down');
            if(typeof res['up']    === "undefined" || !res['up']   ) return badCategory('Up');
            // define res's
            let resIdle = res['idle'];
            let resLeft = res['left'];
            let rsRight = res['right'];
            let resUp = res['up'];
            let resDown = res['down'];
        // sprites check
            function badSprite(name) {
                window.TOASTS.create(
                    'warning',
                    'Invalid Sprite',
                    `Invalid Sprite <code class="marked">${name}</code>`,
                    3.2
                )
            }
            // idle
            if(typeof resIdle[1]=== "undefined" || !resIdle[1]) return badSprite('Idle_1');
            if(typeof resIdle[2]=== "undefined" || !resIdle[2]) return badSprite('Idle_2');
            if(typeof resIdle[3]=== "undefined" || !resIdle[3]) return badSprite('Idle_3');
            if(typeof resIdle[4]=== "undefined" || !resIdle[4]) return badSprite('Idle_4');
            if(typeof resIdle[5]=== "undefined" || !resIdle[5]) return badSprite('Idle_5');
            // left
            if(typeof resLeft[1]=== "undefined" || !resLeft[1]) return badSprite('Left_1');
            if(typeof resLeft[2]=== "undefined" || !resLeft[2]) return badSprite('Left_2');
            if(typeof resLeft[3]=== "undefined" || !resLeft[3]) return badSprite('Left_3');
            if(typeof resLeft[4]=== "undefined" || !resLeft[4]) return badSprite('Left_Miss_1');
            if(typeof resLeft[5]=== "undefined" || !resLeft[5]) return badSprite('Left_Miss_2');
            // right
            if(typeof rsRight[1]=== "undefined" || !rsRight[1]) return badSprite('Right_1');
            if(typeof rsRight[2]=== "undefined" || !rsRight[2]) return badSprite('Right_"');
            if(typeof rsRight[3]=== "undefined" || !rsRight[3]) return badSprite('Right_Miss_1');
            if(typeof rsRight[4]=== "undefined" || !rsRight[4]) return badSprite('Right_Miss_2');
            // up
            if(typeof resUp[1]  === "undefined" || !resUp[1]  ) return badSprite('Up_1');
            if(typeof resUp[2]  === "undefined" || !resUp[2]  ) return badSprite('Up_2');
            if(typeof resUp[3]  === "undefined" || !resUp[3]  ) return badSprite('Up_Miss_1');
            if(typeof resUp[4]  === "undefined" || !resUp[4]  ) return badSprite('Up_Miss_2');
            // down
            if(typeof resDown[1]=== "undefined" || !resDown[1]) return badSprite('Down_1');
            if(typeof resDown[2]=== "undefined" || !resDown[2]) return badSprite('Down_2');
            if(typeof resDown[3]=== "undefined" || !resDown[3]) return badSprite('Down_Miss_1');
            if(typeof resDown[4]=== "undefined" || !resDown[4]) return badSprite('Down_Miss_2');

           // sprites set
            idle_1       = resIdle[1];
            idle_2       = resIdle[2];
            idle_3       = resIdle[3];
            idle_4       = resIdle[4];
            idle_5       = resIdle[5];

            left_1       = resLeft[1];
            left_2       = resLeft[2];
            left_3       = resLeft[3];
            left_miss_1  = resLeft[4];
            left_miss_2  = resLeft[5];

            right_1      = rsRight[1];
            right_2      = rsRight[2];
            right_miss_1 = rsRight[3];
            right_miss_2 = rsRight[4];

            up_1         = resUp[1];
            up_2         = resUp[2];
            up_miss_1    = resUp[3];
            up_miss_2    = resUp[4];

            down_1       = resDown[1];
            down_2       = resDown[2];
            down_miss_1  = resDown[3];
            down_miss_2  = resDown[4]
        })
        reader.readAsText(file)
    })
    document.getElementById('character_idle_one').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            idle_1 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_idle_two').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            idle_2 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_idle_three').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            idle_3 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_idle_four').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            idle_4 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_idle_five').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            idle_5 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    // LEFT
    document.getElementById('character_left_one').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            left_1 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_left_two').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            left_2 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_left_three').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            left_3 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_left_miss_one').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            left_miss_1 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_left_miss_two').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            left_miss_2 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    // Right
    document.getElementById('character_right_one').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            right_1 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_right_two').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            right_2 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_right_miss_one').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            right_miss_1 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_right_miss_two').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            right_miss_2 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    // Down
    document.getElementById('character_down_one').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            down_1 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_down_two').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            down_2 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_down_miss_one').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            down_miss_1 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_down_miss_two').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            down_miss_2 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    // Up
    document.getElementById('character_up_one').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            up_1 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_up_two').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            up_2 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_up_miss_one').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            up_miss_1 = event.target.result
        });
        reader.readAsDataURL(file)
    })
    document.getElementById('character_up_miss_two').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(window.getExtension(file.name) !== "png") {
            return window.TOASTS.create(
                'advice',
                'Only <code class="marked">PNG</code> images admitted!',
                `The file you bringed isn't a .png formated file`,
                2.3
            )
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            up_miss_2 = event.target.result
        });
        reader.readAsDataURL(file)
    })
}

function setSource(id, newSource) {
    let image = document.getElementById(id)
    image.src = newSource
}

var keyEnum = { LA_Key:37, RA_Key:39, DA_Key:40, UA_Key:38, W_Key: 87, A_Key: 65, S_Key: 83, D_Key: 68 };
var keyArray = new Array(4);

var idle_time = 2;
setInterval(() => {
    if(idle_time == 1) return;
    if(idle_time == 2) {
        setSource('character', idle_1)
    }
    if(idle_time == 3) {
        setSource('character', idle_2)
    }
    if(idle_time == 4) {
        setSource('character', idle_3)
    }
    if(idle_time == 5) {
        setSource('character', idle_4)
    }
    if(idle_time == 9) {
        setSource('character', idle_5)
        idle_time = 1;
    }
    idle_time++;
}, 90);

function onKeyDown(e)
{
    if(toastOn) return;
    // Detect which key was pressed
    if( e.keyCode == keyEnum.LA_Key ) {
        if(isKeyDown(e.keyCode)) return;
        keyArray[keyEnum.LA_Key] = true;
            if(document.getElementById('character').src === "Assets/Sprites/Boyfriend/Left/Left_1.png") return;
            idle_time = 0;
            setSource('character', left_1)
            setTimeout(() => {
                if(isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                setSource('character', left_2)
                setTimeout(() => {
                    if(isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                    setSource('character', left_3)
                }, 50);
            }, 80);
    }
    if( e.keyCode == keyEnum.RA_Key ) {
        if(isKeyDown(e.keyCode)) return;
        keyArray[keyEnum.RA_Key] = true;
            if(document.getElementById('character').src === "Assets/Sprites/Boyfriend/Right/Right_1.png") return;
            idle_time = 0;
            setSource('character', right_1)
            setTimeout(() => {
                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                setSource('character', right_2)
            }, 80);
    }
    if( e.keyCode == keyEnum.DA_Key ) {
        if(isKeyDown(e.keyCode)) return;
        keyArray[keyEnum.DA_Key] = true;
            
            if(document.getElementById('character').src === "Assets/Sprites/Boyfriend/Down/Down_1.png") return;
            idle_time = 0;
            setSource('character', down_1)
            setTimeout(() => {
                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                setSource('character', down_2)
            }, 80);
    }
    if( e.keyCode == keyEnum.UA_Key ) {
        if(isKeyDown(e.keyCode)) return;
        keyArray[keyEnum.UA_Key] = true;
            
            if(document.getElementById('character').src === "Assets/Sprites/Boyfriend/Up/Up_1.png") return;
            idle_time = 0;
            setSource('character', up_1)
            setTimeout(() => {
                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                setSource('character', up_2)
            }, 80);
    }
    if( e.keyCode == keyEnum.W_Key ) {
        if(isKeyDown(e.keyCode)) return;
        keyArray[keyEnum.W_Key] = true;
            
            if(document.getElementById('character').src === "Assets/Sprites/Boyfriend/Up/Miss_1.png") return;
            idle_time = 0;
            setSource('character', up_miss_1)
            setTimeout(() => {
                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                setSource('character', up_miss_2)
            }, 80);
    }
    if( e.keyCode == keyEnum.A_Key ) {
        if(isKeyDown(e.keyCode)) return;
        keyArray[keyEnum.A_Key] = true;
            
            if(document.getElementById('character').src === "Assets/Sprites/Boyfriend/Left/Miss_1.png") return;
            idle_time = 0;
            setSource('character', left_miss_1)
            setTimeout(() => {
                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                setSource('character', left_miss_2)
            }, 80);
    }
    if( e.keyCode == keyEnum.S_Key ) {
        if(isKeyDown(e.keyCode)) return;
        keyArray[keyEnum.S_Key] = true;
            
            if(document.getElementById('character').src === "Assets/Sprites/Boyfriend/Down/Miss_1.png") return;
            idle_time = 0;
            setSource('character', down_miss_1)
            setTimeout(() => {
                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                setSource('character', down_miss_2)
            }, 80);
    }
    if( e.keyCode == keyEnum.D_Key ) {
        if(isKeyDown(e.keyCode)) return;
        keyArray[keyEnum.D_Key] = true;
            
            if(document.getElementById('character').src === "Assets/Sprites/Boyfriend/Right/Miss_1.png") return;
            idle_time = 0;
            setSource('character', right_miss_1)
            setTimeout(() => {
                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key)) return clearTimeout(this);
                setSource('character', right_miss_2)
            }, 80);
    }
}

function onKeyUp(e)
{
    if(toastOn) return;
    if(e.keyCode == keyEnum.LA_Key ) {
        keyArray[keyEnum.LA_Key] = false;
    }
    if(e.keyCode == keyEnum.RA_Key ) {
        keyArray[keyEnum.RA_Key] = false;
    }
    if(e.keyCode == keyEnum.DA_Key ) {
        keyArray[keyEnum.DA_Key] = false;
    }
    if(e.keyCode == keyEnum.UA_Key ) {
        keyArray[keyEnum.UA_Key] = false;
    }
    if(e.keyCode == keyEnum.W_Key ) {
        keyArray[keyEnum.W_Key] = false;
    }
    if(e.keyCode == keyEnum.A_Key ) {
        keyArray[keyEnum.A_Key] = false;
    }
    if(e.keyCode == keyEnum.S_Key ) {
        keyArray[keyEnum.S_Key] = false;
    }
    if(e.keyCode == keyEnum.D_Key ) {
        keyArray[keyEnum.D_Key] = false;
    }

        setTimeout(() => {
            if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
            setTimeout(() => {
                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                setTimeout(() => {
                    if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                    setTimeout(() => {
                        if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                        setTimeout(() => {
                            if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                            setTimeout(() => {
                                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                                setTimeout(() => {
                                    if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                                    setTimeout(() => {
                                        if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                                        setTimeout(() => {
                                            if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                                            setTimeout(() => {
                                                if(isKeyDown(keyEnum.LA_Key) || isKeyDown(keyEnum.RA_Key) || isKeyDown(keyEnum.DA_Key) || isKeyDown(keyEnum.UA_Key) || isKeyDown(keyEnum.W_Key) || isKeyDown(keyEnum.A_Key) || isKeyDown(keyEnum.S_Key) || isKeyDown(keyEnum.D_Key)) return clearTimeout(this);
                                                setIdleChar()
                                            }, 50);
                                        }, 50);
                                    }, 50);
                                }, 50);
                            }, 50);
                        }, 50);
                    }, 50);
                }, 50);
            }, 50);
        }, 50);
}

function isKeyDown(key)
{
    return keyArray[key];
}

function setIdleChar() {
    idle_time = 2
}

document.onkeydown = onKeyDown
document.onkeyup = onKeyUp