import calibrationDocument from "./calibrationDocument"

const adventDayOne = (array) => {
    let sumOfCalibration = 0

    for (let i = 0; i < array.length; i++) {
        let line = array[i]

        for (let j = 0; j < line.length; j++) {
            let onlyNumbers = line.match(/\d+/g)
            let firstNumber = onlyNumbers[0]
            let lastNumber = onlyNumbers[onlyNumbers.length - 1]

            let twoDigitNumber = parseInt(firstNumber + lastNumber)
            sumOfCalibration += twoDigitNumber
        }

    }
    return  sumOfCalibration
}

console.log(adventDayOne(calibrationDocument))