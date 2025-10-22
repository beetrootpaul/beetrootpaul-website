export function multiplier(initial: number, k: number) {
    let count = $state(initial);

    return {
        get value() {
            return count * k;
        },

        set: (c: number) => {
            count = c;
        }
    };
}

export function multiplier2(getCount: () => number, k: number) {
    return {
        get value() {
            return getCount() * k;
        }
    };
}

export function logger(getValue: () => any) {
    let log: any[] = [];

    $effect(() => {
        log.push(getValue());
    });

    return log;
}
