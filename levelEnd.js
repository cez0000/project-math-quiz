class levelEnd {
    constructor() {
        this.btnEnd = document.querySelector('button.levelBtn');
        this.btnEnd.addEventListener('click', this.levelFinish.bind(this));

    }
    levelFinish() {
        if (this.btnEnd.textContent === 'try again' || this.btnEnd.textContent === 'restart') {
            location.reload();
        } else if (this.btnEnd.textContent === 'next level') {
            game.sectionLevel.classList.remove('hide');
            game.sectionResults.classList.add('hide');
            document.body.removeChild(this.btnEnd);
            if (game.h1.textContent === "Poziom pierwszy") {
                game.h1.textContent = "Poziom drugi"
            } else if (game.h1.textContent === "Poziom drugi") {
                game.h1.textContent = "Poziom trzeci"
            }
        }
    }


}