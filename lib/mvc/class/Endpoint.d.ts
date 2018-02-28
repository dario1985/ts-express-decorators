import { Type } from "../../core/interfaces/Type";
import { EndpointRegistry } from "../registries/EndpointRegistry";
/**
 * @module common/mvc
 */
/** */
import { EndpointMetadata } from "./EndpointMetadata";
/**
 * Endpoint is proxy of EndpointMetadata and EndpointRegistry.
 * @deprecated
 */
export declare class Endpoint extends EndpointMetadata {
    /**
     *
     * @param target
     * @param method
     */
    static get(target: Type<any>, method: string): EndpointMetadata;
    /**
     *
     * @param target
     * @param method
     */
    static has: (target: Type<any>, method: string) => boolean;
    /**
     * Append mvc in the pool (before).
     * @param target
     * @param method
     * @param args
     */
    static useBefore: (target: Type<any>, method: string, args: any[]) => typeof EndpointRegistry;
    /**
     * Add middleware and configuration for the endpoint.
     * @param target
     * @param method
     * @param args
     * @returns {Endpoint}
     */
    static use: (target: Type<any>, method: string, args: any[]) => typeof EndpointRegistry;
    /**
     * Append mvc in the pool (after).
     * @param target
     * @param method
     * @param args
     */
    static useAfter: (target: Type<any>, method: string, args: any[]) => typeof EndpointRegistry;
    /**
     * Store value for an endpoint method.
     * @param key
     * @param value
     * @param targetClass
     * @param methodClassName
     */
    static setMetadata: (key: any, value: any, targetClass: any, methodClassName: any) => typeof EndpointRegistry;
    /**
     * Return the stored value for an endpoint method.
     * @param key
     * @param targetClass
     * @param methodClassName
     */
    static getMetadata: (key: any, targetClass: any, methodClassName: any) => any;
}
