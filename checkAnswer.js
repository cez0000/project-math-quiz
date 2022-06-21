class checkAnswer {
    constructor(a, b) {
        this.firstNum = a;
        this.secNum = b;
    }
    checkAdd(result) {
        if (this.firstNum + this.secNum == result) return true
        else return false
    }
    checkSub(result) {
        if (this.firstNum - this.secNum == result) return true
        else return false
    }
    checkMultiply(result) {
        if (this.firstNum * this.secNum == result) return true
        else return false
    }
    checkDiv(result) {
        if (this.firstNum / this.secNum == result) return true
        else return false
    }
}
