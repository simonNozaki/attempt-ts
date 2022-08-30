declare type When<T> = {
    is: <R>(prediction: (v: T) => boolean, producer: () => R) => Chain<T, R>;
};
declare type Chain<T, R> = {
    is: (prediction: (v: T) => boolean, producer: () => R) => Chain<T, R>;
    default: (producer: () => R) => R;
};
export declare const when: <T>(value: T) => When<T>;
export declare const then: <T>(value: T) => () => T;
export declare const eq: <T>(value1: T) => (value2: T) => boolean;
export {};
