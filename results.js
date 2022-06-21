class Results {
    constructor(valueOne, valueSec, valueThird) {
        this.actions = [];
        this.result =  this.showResult.bind(this)
            
        
    }
    showResult(i) {
        
            return `${this.actions[i][0]} ${this.actions[i][1]} ${this.actions[i][2]} = ${game.pushAns.answers[i]}`
        
    }
    addAction(action) {
        this.actions.push(action)

    }
}