{
    // mapped types

    const arrayOfNums: number[] = [1, 4, 5];
    // const arrayOfString : string[] = ['1', '4', '5'];

    const arrOfString : string[] = arrayOfNums.map(num => num.toString());
    console.log(arrOfString);

    type AreaNum = {
        height: number;
        width: number;
    }

    type height = AreaNum['height']; // look up type

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    type AreaString<T> = {
        [key in keyof T] : T[key]
    }

    const area1 : AreaString<({height: string; width: number})> = {
        height: '100',
        width: 50
    }




    //

}