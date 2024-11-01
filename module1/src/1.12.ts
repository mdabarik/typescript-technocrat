{

    // nullable types / unknown type
    const searchName = (value: string | null) => {
        if (value) {
            console.log('Searching...');
        } else {
            console.log('Threre is nothing to search');
        }
    }
    searchName(null)


    // unknown typeof
    const getSpeedMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000)/3600;
            console.log(`The speed is ${convertedSpeed}`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000)/3600;
            console.log(`The speed is ${convertedSpeed}`);
            console.log(result);
        }
        else {
            console.log('wrong input');
        }
    }

    getSpeedMeterPerSecond(null);


    const throwError = (msg: string): never => {
        throw new Error(msg);
    }

    throwError('Muskil se ...');


}