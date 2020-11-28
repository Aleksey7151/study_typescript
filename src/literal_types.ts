
// String literals
type Easing = "easy-in" | "easy-out" | "easy-in-out";

function animate(direction: number, easing: Easing) : 1 | 2 | 45 {
    if (easing === 'easy-in'){
        return 1;
    }
    if (easing === 'easy-out'){
        return 2;
    }
    if (easing === 'easy-in-out'){
        return 45;
    }

    throw new Error("Easing has invalid value" + easing);
}

animate(7, "easy-in");

// Numeric literals
interface MapConfig{
    lat: number;
    lon: number;
    tileSize: 4 | 8 | 16;
}

function setupMap(config: MapConfig){
    console.log(config);
}

setupMap({lat: 44, lon:55, tileSize: 8});

const mapConfig: MapConfig = {
    lat: 7,
    lon: 9,
    tileSize: 16
};

setupMap(mapConfig);

// Boolean literal types
interface ValidationSuccess{
    isValid: true;
    reason: null;
}

interface ValidationFailure{
    isValid: false;
    reason: string;
}

type ValidationResult = ValidationSuccess | ValidationFailure;
