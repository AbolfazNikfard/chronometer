var _a;
var cornometer = /** @class */ (function () {
    function cornometer() {
        this._duration = 0;
        this._status = "stopped";
    }
    cornometer.prototype.start = function () {
        if (this._status == "started")
            throw new Error("The cornometer already started");
        this._currentTime = Date.now();
        this._status = "started";
    };
    cornometer.prototype.stop = function () {
        if (this._status == "stopped")
            throw new Error("The cornometer already stopped");
        //this._duration+=1;
        this._duration = this._currentTime + this._duration;
        this.show;
        this._status = "stopped";
    };
    // public checkStatus() : string {
    //     if (this._status == "started")
    //     {
    //         this._duration +=1; //= this._duration + this._currentTime;
    //         //this._currentTime = Date.now();
    //     }
    //     return this.show();
    // }
    cornometer.prototype.show = function () {
        var minute, second, milisecond, tempDuration;
        tempDuration = this._duration;
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
        console.log(finalDuration);
        //return finalDuration;
    };
    cornometer.prototype.reset = function () {
        if (this._status == "started")
            this.stop();
        this._duration = 0;
    };
    return cornometer;
}());
function creatCornometerDOM(list, index) {
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
    divShowTime.setAttribute("id", "showTime".concat(index));
    /////////////////////////////////////////////////////////////////////
    var startBtn = document.createElement("button");
    startBtn.innerText = "Start";
    startBtn.setAttribute("id", "startBtn".concat(index));
    startBtn.addEventListener("click", list[index].start);
    var stopBtn = document.createElement("button");
    stopBtn.innerText = "Stop";
    stopBtn.setAttribute("id", "stopBtn".concat(index));
    stopBtn.addEventListener("click", list[index].stop);
    var resetBtn = document.createElement("button");
    resetBtn.innerText = "Reset";
    resetBtn.setAttribute("id", "resetBtn".concat(index));
    resetBtn.addEventListener("click", list[index].reset);
    /////////////////////////////////////////////////////////////////////
    divAnyCornometer.appendChild(divShowTime);
    divAnyCornometer.appendChild(startBtn);
    divAnyCornometer.appendChild(stopBtn);
    divAnyCornometer.appendChild(resetBtn);
    document.body.appendChild(divAnyCornometer);
}
(_a = document.getElementById("addBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var c = new cornometer();
    listofObjects.push(c);
    creatCornometerDOM(listofObjects, objectNumber);
    objectNumber++;
});
var objectNumber = 0;
var listofObjects = new Array;
// const c1 = new cornometer();
// listofObjects.push(c1);
// creatCornometerDOM(c1, objectNumber);
// objectNumber++;
// //creatCornometerDOM(c1, objectNumber);
// const c2 = new cornometer();
// listofObjects.push(c2);
// creatCornometerDOM(c1, objectNumber);
// objectNumber++;
//creatCornometerDOM(c2, objectNumber);
// while (true) {
//     for (let i = 0; i < objectNumber; i++) {
//         const showElement = document.getElementById(`showTime${i}`);
//         const value :string = `${listofObjects[i].checkStatus()}`;
//         showElement?.innerText === value;
//     }
//     //l++;
// }
