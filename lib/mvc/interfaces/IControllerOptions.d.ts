/**
 * @module common/mvc
 */
/** */
import { Type } from "../../core/interfaces";
import { IControllerMiddlewares } from "./IControllerMiddlewares";
import { IRouterOptions } from "./IRouterOptions";
import { PathParamsType } from "./PathParamsType";
/**
 *
 */
export interface IControllerOptions {
    path?: PathParamsType;
    dependencies?: Type<any>[];
    scope?: boolean | "request";
    routerOptions?: IRouterOptions;
    middlewares?: IControllerMiddlewares;
}
