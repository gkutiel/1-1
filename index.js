function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

document.addEventListener('DOMContentLoaded', () => {
    var i;
    const view = document.getElementById('view')
    const answer = document.getElementById('answer')
    const count = document.getElementById('count')

    function updateCounter() {
        count.textContent = (i + 1) + '/' + 100
    }

    function randInt() {
        return Math.ceil(Math.random() * 100)
    }

    function newProblem() {
        const ops = [{
            sign: '-',
            val: (a, b) => a - b
        }, {
            sign: 'x',
            val:
                (a, b) => a * b
        }, {
            sign: '+',
            val: (a, b) =>
                a + b
        }]

        const op = ops[Math.floor(Math.random() * ops.length)]
        const a = randInt()
        const b = randInt()

        return {
            txt: `${a} ${op.sign} ${b}`,
            answer: op.val(a, b)
        }
    }

    var p = newProblem()

    function start() {
        i = 0;
        view.textContent = p.txt
        answer.focus()
        updateCounter()
    }

    answer.addEventListener('keyup', () => {
        const val = parseInt(answer.value)
        if (val !== p.answer) return
        answer.value = ''
        if (++i >= 100) {
            view.textContent = 'Well Done !!!'
            return
        }

        p = newProblem()
        view.textContent = p.txt
        updateCounter()
    })

    start()
})