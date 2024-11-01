{
    
    // union type
    /*
    type FrontendDev = 'FakibazDev' | 'JuniorDev';
    type FullStackDev = 'FakibazDev' | 'ExpertDev' | 'FrontEndDev'

    type Developer = FrontendDev | FullStackDev;

    const newDeveloper: FrontendDev = 'JuniorDev';


    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: 'O+' | 'A+' | 'AB+';
    }

    const user1: User = {
        name: 'barik',
        email: 'mdabarik19@gmail.com',
        gender: 'male',
        bloodGroup: 'O+'
    }
    */
    
    // intersection type

    type FrontEndDev = {
        skills: string[];
        designation1: 'Frontend developer';
    }

    type BackEndDev = {
        skills: string[];
        designation2: 'Backend developer'
    }

    type FullStackDev = FrontEndDev & BackEndDev;

    const fullStackDev: FullStackDev = {
        skills: ['HTML', 'CSS', 'EXPRESS'],
        designation1: 'Frontend developer',
        designation2: 'Backend developer'
    }




}