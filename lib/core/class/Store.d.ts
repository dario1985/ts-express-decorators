import { DecoratorParameters } from "../interfaces";
export declare const CLASS_STORE = "tsed:class:store";
export declare const METHOD_STORE = "tsed:method:store";
export declare const PROPERTY_STORE = "tsed:property:store";
export declare const PARAM_STORE = "tsed:param:store";
export declare type StoreMap = Map<string, any>;
/**
 *
 */
export declare class Store {
    private _map;
    constructor(args: any[]);
    /**
     * Return the size of the collection.
     * @returns {number}
     */
    readonly size: number;
    /**
     * Create or get a Store from args {target + methodName + descriptor}
     * @param args
     * @returns {Store}
     */
    static from(...args: any[]): Store;
    /**
     * Create store on the method.
     * @param target
     * @param {string} propertyKey
     * @returns {Store}
     */
    static fromMethod(target: any, propertyKey: string): Store;
    /**
     * Create a store correctly configured from the parameters given by the decorator.
     * The `fn` can return a decorator that will be initialized with the parameters (target, propertyKey, descriptor).
     * @param {(store: Store, parameters: DecoratorParameters) => void} fn
     * @returns {Function}
     */
    static decorate(fn: (store: Store, parameters: DecoratorParameters) => void): Function;
    /**
     * The get() method returns a specified element from a Map object.
     * @param key Required. The key of the element to return from the Map object.
     * @returns {T} Returns the element associated with the specified key or undefined if the key can't be found in the Map object.
     */
    get<T>(key: any): any;
    /**
     * The has() method returns a boolean indicating whether an element with the specified key exists or not.
     * @param key
     * @returns {boolean}
     */
    has(key: any): boolean;
    /**
     * The set() method adds or updates an element with a specified key and value to a Map object.
     * @param key Required. The key of the element to add to the Map object.
     * @param metadata Required. The value of the element to add to the Map object.
     * @returns {Registry}
     */
    set(key: any, metadata: any): Store;
    /**
     * The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order.
     * @returns {IterableIterator} A new Map iterator object.
     */
    entries(): IterableIterator<[string, any]>;
    /**
     * The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
     * @returns {IterableIterator} A new Map iterator object.
     */
    keys(): IterableIterator<string>;
    /**
     * The clear() method removes all elements from a Map object.
     */
    clear(): void;
    /**
     * The delete() method removes the specified element from a Map object.
     * @param key Required. The key of the element to remove from the Map object.
     * @returns {boolean} Returns true if an element in the Map object existed and has been removed, or false if the element does not exist.
     */
    delete(key: string): boolean;
    /**
     * The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.
     *
     * @param callbackfn Function to execute for each element.
     * @param thisArg Value to use as this when executing callback.
     * @description
     * The forEach method executes the provided callback once for each key of the map which actually exist. It is not invoked for keys which have been deleted. However, it is executed for values which are present but have the value undefined.
     * callback is invoked with three arguments:
     *
     * * the element value
     * * the element key
     * * the Map object being traversed
     *
     * If a thisArg parameter is provided to forEach, it will be passed to callback when invoked, for use as its this value.  Otherwise, the value undefined will be passed for use as its this value.  The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.
     *
     * Each value is visited once, except in the case when it was deleted and re-added before forEach has finished. callback is not invoked for values deleted before being visited. New values added before forEach has finished will be visited.
     * forEach executes the callback function once for each element in the Map object; it does not return a value.
     *
     */
    forEach(callbackfn: (value: any, key: string, map: Map<string, any>) => void, thisArg?: any): void;
    /**
     * The values() method returns a new Iterator object that contains the values for each element in the Map object in insertion order.
     * @returns {IterableIterator} A new Map iterator object.
     */
    values(): IterableIterator<any>;
    /**
     *
     * @param key
     * @param value
     * @returns {Store}
     */
    merge(key: any, value: any): Store;
    /**
     * Store all keys contains in the options object.
     * @param options
     * @param args
     */
    storeValues(options: {
        [key: string]: any;
    }): void;
    /**
     *
     * @param key
     * @param args
     * @private
     */
    private _storeGet(key, ...args);
}
