import { IFilter } from "../interfaces";
/**
 * @private
 * @filter
 */
export declare class HeaderParamsFilter implements IFilter {
    constructor();
    transform(expression: string, request: any, response: any): any;
}
