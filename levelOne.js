class LevelOne {
    constructor() {
        this.firstNum = document.querySelector('span.firstNum');
        this.secondNum = document.querySelector('span.secondNum');
        this.sign = document.querySelector('span.sign');
        this.buttonNext = document.querySelector('button.nextOne');
        this.answer = document.querySelector('input.one');
        this.h1 = document.querySelector('h1')

        this.pushAns = new UserAnswers()
        this.buttonNext.addEventListener('click', this.addNext.bind(this));
        this.buttonNext.addEventListener('click', this.verdict.bind(this));
        this.firstResult = document.querySelector('li.fir');
        this.secResult = document.querySelector('li.sec');
        this.thirdResult = document.querySelector('li.third');
        this.sectionLevel = document.querySelector('section.level');
        this.sectionResults = document.querySelector('section.results');
        this.a = "";
        this.b = "";
        this.check = new checkAnswer(this.a, this.b);
        this.btn = "";
        this.h2 = document.createElement('h2')






        this.action = new Results();





    }

    addNext() {
        if (this.answer.value === "") {
            alert("wpisz rozwiązanie!");
            return
        }
        this.pushAns.addAnswer(this.answer.value);
        this.action.addAction([this.firstNum.textContent, this.sign.textContent, this.secondNum.textContent]);

        if (this.firstNum.textContent === '2' && this.secondNum.textContent === '2') {
            this.firstNum.textContent = '3';
            this.secondNum.textContent = '7';


        } else if (this.firstNum.textContent === '3' && this.secondNum.textContent === '7') {
            this.firstNum.textContent = '10';
            this.secondNum.textContent = '3';
            this.sign.textContent = '-'

        } else if (this.firstNum.textContent === '10' && this.secondNum.textContent === '3') {
            this.firstNum.textContent = '15';
            this.secondNum.textContent = '16';
            this.sign.textContent = '*'
        } else if (this.firstNum.textContent === '15' && this.secondNum.textContent === '16') {
            this.firstNum.textContent = '246';
            this.secondNum.textContent = '4';
            this.sign.textContent = '/'
        } else if (this.firstNum.textContent === '246' && this.secondNum.textContent === '4') {
            this.firstNum.textContent = '34';
            this.secondNum.textContent = '12';
            this.sign.textContent = '*'
        } else if (this.firstNum.textContent === '34' && this.secondNum.textContent === '12') {
            this.firstNum.textContent = '19.5';
            this.secondNum.textContent = '15';
            this.sign.textContent = '*'
        } else if (this.firstNum.textContent === '19.5' && this.secondNum.textContent === '15') {
            this.firstNum.textContent = '2034.5';
            this.secondNum.textContent = '4';
            this.sign.textContent = '/'
        } else if (this.firstNum.textContent === '2034.5' && this.secondNum.textContent === '4') {
            this.answer.style.width = "100" + "px"
            this.firstNum.textContent = '3568';
            this.secondNum.textContent = '1239';
            this.sign.textContent = '+'
        }
        this.answer.value = "";
        if (this.pushAns.answers.length === 3) {
            this.sectionLevel.classList.add('hide');
            this.sectionResults.classList.remove('hide');
            this.firstResult.textContent = this.action.result(0);
            this.secResult.textContent = this.action.result(1);
            this.thirdResult.textContent = this.action.result(2);


        }
        if (this.pushAns.answers.length === 6) {

            this.sectionLevel.classList.add('hide');
            this.sectionResults.classList.remove('hide');
            this.firstResult.textContent = this.action.result(3);
            this.secResult.textContent = this.action.result(4);
            this.thirdResult.textContent = this.action.result(5);


        }
        if (this.pushAns.answers.length === 9) {

            this.sectionLevel.classList.add('hide');
            this.sectionResults.classList.remove('hide');
            this.firstResult.textContent = this.action.result(6);
            this.secResult.textContent = this.action.result(7);
            this.thirdResult.textContent = this.action.result(8);


        }



    }
    verdict() {
        const btn = document.createElement("button");
        if (this.action.actions.length === 1) {
            this.a = this.action.actions[0][0];
            this.b = this.action.actions[0][2];
            this.check = new checkAnswer(Number(this.a), Number(this.b))
            if (this.check.checkAdd(this.pushAns.answers[0])) {
                this.firstResult.style.color = "green"
            } else {
                this.firstResult.style.color = "red"
            }
        }
        if (this.action.actions.length === 2) {
            this.a = this.action.actions[1][0];
            this.b = this.action.actions[1][2];
            this.check = new checkAnswer(Number(this.a), Number(this.b))
            if (this.check.checkAdd(this.pushAns.answers[1])) {
                this.secResult.style.color = "green"
            } else {
                this.secResult.style.color = "red"
            }
        }
        if (this.action.actions.length === 3) {
            document.body.appendChild(btn);
            btn.classList.add('levelBtn');
            const levelDone = new levelEnd();


            this.a = this.action.actions[2][0];
            this.b = this.action.actions[2][2];
            this.check = new checkAnswer(Number(this.a), Number(this.b))
            if (this.check.checkSub(this.pushAns.answers[2])) {
                this.thirdResult.style.color = "green"
            } else {
                this.thirdResult.style.color = "red"
            }

        }
        if (this.action.actions.length === 4) {
            this.a = this.action.actions[3][0];
            this.b = this.action.actions[3][2];
            this.check = new checkAnswer(Number(this.a), Number(this.b))
            if (this.check.checkMultiply(this.pushAns.answers[3])) {
                this.firstResult.style.color = "green"
            } else {
                this.firstResult.style.color = "red"
            }
        }
        if (this.action.actions.length === 5) {




            this.a = this.action.actions[4][0];
            this.b = this.action.actions[4][2];
            this.check = new checkAnswer(Number(this.a), Number(this.b))
            if (this.check.checkDiv(this.pushAns.answers[4])) {
                this.secResult.style.color = "green"
            } else {
                this.secResult.style.color = "red"
            }

        }
        if (this.action.actions.length === 6) {
            document.body.appendChild(btn);
            btn.classList.add('levelBtn');
            const levelDone = new levelEnd();


            this.a = this.action.actions[5][0];
            this.b = this.action.actions[5][2];
            this.check = new checkAnswer(Number(this.a), Number(this.b))
            if (this.check.checkMultiply(this.pushAns.answers[5])) {
                this.thirdResult.style.color = "green"
            } else {
                this.thirdResult.style.color = "red"
            }

        }
        if (this.action.actions.length === 7) {
            this.a = this.action.actions[6][0];
            this.b = this.action.actions[6][2];
            this.check = new checkAnswer(Number(this.a), Number(this.b))
            if (this.check.checkMultiply(this.pushAns.answers[6])) {
                this.firstResult.style.color = "green"
            } else {
                this.firstResult.style.color = "red"
            }
        }
        if (this.action.actions.length === 8) {




            this.a = this.action.actions[7][0];
            this.b = this.action.actions[7][2];
            this.check = new checkAnswer(Number(this.a), Number(this.b))
            if (this.check.checkDiv(this.pushAns.answers[7])) {
                this.secResult.style.color = "green"
            } else {
                this.secResult.style.color = "red"
            }

        }
        if (this.action.actions.length === 9) {
            document.body.appendChild(btn);
            btn.classList.add('levelBtn');
            const levelDone = new levelEnd();
            this.a = this.action.actions[8][0];
            this.b = this.action.actions[8][2];
            this.check = new checkAnswer(Number(this.a), Number(this.b))
            if (this.check.checkAdd(this.pushAns.answers[8])) {
                this.thirdResult.style.color = "green"
            } else {
                this.thirdResult.style.color = "red"
            }

        }
        if (this.firstResult.style.color === "green" && this.secResult.style.color === "green" &&
            this.thirdResult.style.color === "green" && this.action.actions.length < 9) {

            btn.textContent = "next level"
        } else if (this.firstResult.style.color === "green" && this.secResult.style.color === "green" &&
        this.thirdResult.style.color === "green" && this.action.actions.length === 9) {
           
            
         
          document.body.appendChild(this.h2);
          this.h2.classList.add('grats');
          this.h2.textContent = "Gratulacje!";
          btn.textContent = "restart";
        }
        
        
        else {
            btn.textContent = "try again"
        }

    }






}