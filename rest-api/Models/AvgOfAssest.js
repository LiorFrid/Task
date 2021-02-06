class AvgOfAssest {
    valuesOverTime = [];

    constructor(data, nameOfAssest) {
        this.valuesOverTime = Object.keys(data).map(el => {
            const avg = (data[el][nameOfAssest]['ask'] + data[el][nameOfAssest]['bid']) / 2;
            return [+el, avg];
        });

    }

    getValues(start, end) {
        return this.valuesOverTime.slice(start, end);
    }

    getNumberOfValues = () => {
        return this.valuesOverTime.length;
    }
}

module.exports = AvgOfAssest;