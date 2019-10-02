module.exports = function zeros(expression) {
    let calc = {
        index: 1,
        multiplier: function (number, type) {
            let k = 0;
            let b = 0;

            if (type > 1) {
                this.index = 2;
            }

            while (number > 0) {
                if (!(number % 25)) {
                    k += 2;
                } else if (!(number % 5)) {
                    k += 1;
                }
                if (!(number % 2)) {
                    b += 1;
                }
                number -= this.index;
            }

            this.index = 1;

            return [k, b];
        }
    }

    function calcElement(element) {
        let number = element.split('').filter(item => item !== "!").join('');

        return calc.multiplier(+number, element.length - number.length);
    }

    return expression.split('*').map(element => calcElement(element)).reduce((a, b) => [a[0] + b[0], a[1] + b[1]]).reduce((a, b) => Math.min(a, b));
}