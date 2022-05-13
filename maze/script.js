function draw() {
    const canv = document.querySelector('#mz');

    arr = [0,  200, 190, 80, 200, 150, 90, 160, 280, 0, 100, 230, 60, 0];
    ar2 = [15,  50,  100, 130,  100,  90,  60, 10,  30,  70, 100, 80,  80, 70];
    ar1 = [15, 130,  55, 130, 5,   30,  60, 110, 30,  50, 90, 80, 5, 88];

    if (!canv.getContext) {
        return;
    }
    const ctx = canv.getContext('2d');

    // set line stroke and line width
    ctx.lineWidth = 10;

    // draw a red line
    ctx.beginPath();

    for (let i = 0; i < 15; i++) {
        ctx.moveTo(arr[i], ar1[i]);
        ctx.lineTo(arr[i] + ar2[i], ar1[i]);
    }
    ctx.stroke();
}
function move(event) {
    var k = event.keyCode;
    var chrId = document.getElementById('character');
    var chr = {
        updown: function () {
            var y = parseInt(getComputedStyle(chrId).top);
            if (k == 38) {
                y-= 10;
            }else if (k == 40) {
                y+= 10;
            }
            return y;
        },
        leftright: function () {
            var x = parseInt(getComputedStyle(chrId).left);
            if (k == 37) {
                x -= 10;
            } else if (k == 39) {
                x += 10;
            }
            return x;
        }
    };
    chrId.style.top = (chr.updown()) + "px";
    chrId.style.left = (chr.leftright()) + "px";
}
document.addEventListener('keydown', move);

draw();