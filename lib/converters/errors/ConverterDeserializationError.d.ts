/**
 * @module common/converters
 */
/** */
import { InternalServerError } from "ts-httpexceptions";
import { Type } from "../../core/interfaces/Type";
/**
 * @private
 */
export declare class ConverterDeserializationError extends InternalServerError {
    name: string;
    stack: any;
    constructor(target: Type<any>, obj: any, err: Error);
    /**
     *
     * @returns {string}
     */
    static buildMessage(target: Type<any>, obj: any, err: Error): string;
}
