{

    // promise

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getToDo = async () : Promise<Todo> => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        // console.log(data);
        return data;
    }

    getToDo();

    type Something = { something: string };

    // simulate
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data : Something = {something:"something"};
            if (data) {
                resolve(data);
            } else {
                reject('failed to load data');
            }
        });
    }

    // calling create promise function
    const showData = async(): Promise<Something> => {
        const data : Something = await createPromise();
        return data;
        console.log(data);
    }

    showData()




}