type Reservation = {
    from: Date;
    toOrDestination: Date | string;
    status: string;
}

// Полный вариант объявления функции.
type Reserve = {
    (from: Date, to: Date, destinations: string) : Reservation;
    (from: Date, destination: string) : Reservation;
}

let reserve: Reserve = (from, toOrDestination: Date | string) => {
    
    let result: Reservation = {
        from: from,
        toOrDestination: toOrDestination,
        status: "approved"
    }

    return result;
}

type CreateElement = {
    (tag: string) : HTMLElement;
}

let createElement: CreateElement = (tag: string): HTMLElement => {
    return new HTMLElement();
}