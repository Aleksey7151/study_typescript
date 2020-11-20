function padding(value: string, padding: string | number) : string
{
    if (typeof padding === 'string')
    {
        return value + padding;
    }
    
    if (typeof padding === 'number')
    {
        return padding.toString() + " " + value;
    }

    throw new Error("Type error")
}

interface IBird {
    fly();
    layEggs();
}

interface IFish {
    swim();
    layEggs();
}

declare function getSmallPet() : IFish | IBird;

let pet = getSmallPet();
pet.layEggs();
//pet.swim() - error swim does not exist in type IBird | IFish

type NetworkLoadingState = {
    state: 'loading';
}

type NetworkFailedState = {
    state: 'failed';
    code: number;
}

type NetworkSuccessState = {
    state: 'success',
    response: {
        title: string;
        duration: number;
        content: string;
    }
}

type NetworkCacheState = {
    state: 'cache',
    id: string
}

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState = NetworkFailedState | NetworkLoadingState | NetworkSuccessState | NetworkCacheState;

function logState(state: NetworkState) : string {
    //state.code - error
    switch (state.state)
    {
        case "loading":
            return "Loading...";
        case "failed":
            return 'Error ${state.code} loading';
        case "success":
            return "Downloaded. Title:" + state.response.title + " Content:" + state.response.content;
        default:
            assertNever();
    }
}

function assertNever() : never {
    throw new Error("Unexpected object");
}
