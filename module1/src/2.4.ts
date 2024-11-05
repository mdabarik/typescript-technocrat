{
    // generic interface

    interface Developer<T,X=null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        };
        smartWatch: T;
        bike?: X
    }

    type AppleWAtch = {
        brand: string;
        model: string;
        heartTrack: boolean;
        display: string;
        sleepTrack: boolean
    }

    type SamsungWAtch = {
        brand: string;
        model: string;
        display: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }

    const poorDeveloper : Developer<AppleWAtch> = {
        name: 'Barik',
        computer: {
            brand: 'Apple',
            model: 'MacBook Air M1',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'Samsung',
            model: 'Lite',
            display: 'Amoled',
            heartTrack: true,
            sleepTrack: true
        }
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string
    }
    
    const richDeveloper : Developer<AppleWAtch, YamahaBike> = {
        name: 'Monir',
        computer: {
            brand: 'Apple',
            model: 'MacBook Air M1',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'Apple WAtch',
            model: 'Late 2020',
            display: 'Retina',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'Yamaha',
            engineCapacity: '150cc'
        }
    }


}