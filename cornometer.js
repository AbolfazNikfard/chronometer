var _a;
var cornometer = /** @class */ (function () {
    function cornometer() {
        this._duration = 0;
        this._status = "stopped";
        this.render();
    }
    cornometer.prototype.start = function () {
        if (this._status == "started")
            throw new Error("The cornometer already started");
        else {
            this._currentTime = Date.now();
            this._status = "started";
        }
    };
    cornometer.prototype.stop = function () {
        if (this._status == "stopped")
            throw new Error("The cornometer already stopped");
        else {
            clearInterval(this._intervalID);
            this._duration = (Date.now() - this._currentTime) + this._duration;
            this._status = "stopped";
        }
    };
    cornometer.prototype.reset = function () {
        if (this._status == "started")
            this.stop();
        this._duration = 0;
    };
    cornometer.prototype.render = function () {
        var _this = this;
        var divAnyCornometer = document.createElement("div");
        divAnyCornometer.style.border = "2px solid black";
        divAnyCornometer.style.width = "300px";
        divAnyCornometer.style.height = "100px";
        //////////////////////////////////////////////////////////////////////
        var divShowTime = document.createElement("div");
        divShowTime.style.border = "1px solid black";
        divShowTime.style.width = "200px";
        divShowTime.style.height = "50px";
        divShowTime.style.margin = "10px";
        //divShowTime.setAttribute("id", `showTime${index}`);
        /////////////////////////////////////////////////////////////////////
        var startBtn = document.createElement("button");
        startBtn.innerText = "Start";
        startBtn.addEventListener("click", function () {
            _this.start();
            _this._intervalID = setInterval(function () {
                divShowTime.innerHTML = formatTime((Date.now() - _this._currentTime) + _this._duration);
            }, 10);
        });
        var stopBtn = document.createElement("button");
        stopBtn.innerText = "Stop";
        stopBtn.addEventListener("click", function () {
            _this.stop();
            //clearInterval(time);
            //time = 0;
        });
        var resetBtn = document.createElement("button");
        resetBtn.innerText = "Reset";
        resetBtn.addEventListener("click", function () {
            _this.reset();
            divShowTime.innerHTML = formatTime(_this._duration);
        });
        /////////////////////////////////////////////////////////////////////
        divAnyCornometer.appendChild(divShowTime);
        divAnyCornometer.appendChild(startBtn);
        divAnyCornometer.appendChild(stopBtn);
        divAnyCornometer.appendChild(resetBtn);
        document.body.appendChild(divAnyCornometer);
    };
    return cornometer;
}());
function formatTime(duration) {
    var minute, second, milisecond, tempDuration;
    tempDuration = duration;
    minute = Math.floor(tempDuration / 60000);
    tempDuration %= 60000;
    second = Math.floor(tempDuration / 1000);
    milisecond = tempDuration % 1000;
    var finalMinute, finalSecond, finalMilisecond;
    if (Math.floor(minute / 10) == 0) {
        finalMinute = "0";
        finalMinute += minute.toString();
    }
    else
        finalMinute = minute.toString();
    if (Math.floor(second / 10) == 0) {
        finalSecond = "0";
        finalSecond += second.toString();
    }
    else
        finalSecond = second.toString();
    finalMilisecond = milisecond.toString();
    var finalDuration = finalMinute + ":" + finalSecond + "." + finalMilisecond;
    return finalDuration;
}
var time;
(_a = document.getElementById("addBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    new cornometer();
});
// document.getElementById("addBtn")?.addEventListener("click", () => {
//     const c = new cornometer();
//     listofObjects.push(c);
//     creatCornometerDOM(listofObjects, objectNumber);
//     objectNumber++;
// })
// let objectNumber: number = 0;
// let listofObjects: Array<cornometer> = new Array<cornometer>;
