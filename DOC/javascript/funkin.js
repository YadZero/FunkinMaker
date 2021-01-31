function getExtension(filename) {
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
    setInterval(() => {
        toastOn = document.getElementById('toastBackground').classList == "background visible"
    }, 100);
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
    document.getElementById('character_idle_one').addEventListener('change', (e) => {
        const file = e.target.files[0]
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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
        if(getExtension(file.name) !== "png") {
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