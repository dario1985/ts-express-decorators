"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Store_1 = require("../../../core/class/Store");
var ResponseViewMiddleware_1 = require("../../components/ResponseViewMiddleware");
/**
 * @module common/mvc
 */
/** */
var useAfter_1 = require("./useAfter");
/**
 * Renders a view and sends the rendered HTML string to the client. Optional parameter:
 *
 * * viewOptions, an object whose properties define local variables for the view.
 *
 * The view argument is a string that is the file path of the view file to render.
 * This can be an absolute path, or a path relative to the views setting.
 * If the path does not contain a file extension, then the view engine setting determines the file extension.
 * If the path does contain a file extension, then Express will load the module for the specified template engine (via require())
 * and render it using the loaded module’s __express function.
 *
 * For more information, see [Using template engines with Express](http://expressjs.com/guide/using-template-engines.html).
 *
 * > NOTE: The view argument performs file system operations like reading a file from disk and evaluating Node.js modules,
 * and as so for security reasons should not contain input from the end-user.
 *
 * @param viewPath
 * @param viewOptions
 * @returns {Function}
 * @decorator
 */
function ResponseView(viewPath, viewOptions) {
    return Store_1.Store.decorate(function (store) {
        store.set(ResponseViewMiddleware_1.ResponseViewMiddleware, { viewPath: viewPath, viewOptions: viewOptions });
        return useAfter_1.UseAfter(ResponseViewMiddleware_1.ResponseViewMiddleware);
    });
}
exports.ResponseView = ResponseView;
/**
 * Renders a view and sends the rendered HTML string to the client. Optional parameter:
 *
 * * viewOptions, an object whose properties define local variables for the view.
 *
 * The view argument is a string that is the file path of the view file to render.
 * This can be an absolute path, or a path relative to the views setting.
 * If the path does not contain a file extension, then the view engine setting determines the file extension.
 * If the path does contain a file extension, then Express will load the module for the specified template engine (via require())
 * and render it using the loaded module’s __express function.
 *
 * For more information, see [Using template engines with Express](http://expressjs.com/guide/using-template-engines.html).
 *
 * > NOTE: The view argument performs file system operations like reading a file from disk and evaluating Node.js modules,
 * and as so for security reasons should not contain input from the end-user.
 *
 * @param viewPath
 * @param viewOptions
 * @returns {Function}
 * @decorator
 * @alias ResponseView
 */
function Render(viewPath, viewOptions) {
    return ResponseView(viewPath, viewOptions);
}
exports.Render = Render;
//# sourceMappingURL=responseView.js.map