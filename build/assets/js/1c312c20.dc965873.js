"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [105],
    {
        9613: (e, t, r) => {
            r.d(t, { Zo: () => d, kt: () => h })
            var n = r(9496)
            function a(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r),
                    e
                )
            }
            function s(e, t) {
                var r = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e)
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })),
                        r.push.apply(r, n)
                }
                return r
            }
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? s(Object(r), !0).forEach(function (t) {
                              a(e, t, r[t])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : s(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                }
                return e
            }
            function i(e, t) {
                if (null == e) return {}
                var r,
                    n,
                    a = (function (e, t) {
                        if (null == e) return {}
                        var r,
                            n,
                            a = {},
                            s = Object.keys(e)
                        for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (a[r] = e[r])
                        return a
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e)
                    for (n = 0; n < s.length; n++)
                        (r = s[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]))
                }
                return a
            }
            var l = n.createContext({}),
                p = function (e) {
                    var t = n.useContext(l),
                        r = t
                    return e && (r = "function" == typeof e ? e(t) : o(o({}, t), e)), r
                },
                d = function (e) {
                    var t = p(e.components)
                    return n.createElement(l.Provider, { value: t }, e.children)
                },
                u = "mdxType",
                m = {
                    inlineCode: "code",
                    wrapper: function (e) {
                        var t = e.children
                        return n.createElement(n.Fragment, {}, t)
                    }
                },
                c = n.forwardRef(function (e, t) {
                    var r = e.components,
                        a = e.mdxType,
                        s = e.originalType,
                        l = e.parentName,
                        d = i(e, ["components", "mdxType", "originalType", "parentName"]),
                        u = p(r),
                        c = a,
                        h = u["".concat(l, ".").concat(c)] || u[c] || m[c] || s
                    return r
                        ? n.createElement(h, o(o({ ref: t }, d), {}, { components: r }))
                        : n.createElement(h, o({ ref: t }, d))
                })
            function h(e, t) {
                var r = arguments,
                    a = t && t.mdxType
                if ("string" == typeof e || a) {
                    var s = r.length,
                        o = new Array(s)
                    o[0] = c
                    var i = {}
                    for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l])
                    ;(i.originalType = e), (i[u] = "string" == typeof e ? e : a), (o[1] = i)
                    for (var p = 2; p < s; p++) o[p] = r[p]
                    return n.createElement.apply(null, o)
                }
                return n.createElement.apply(null, r)
            }
            c.displayName = "MDXCreateElement"
        },
        46: (e, t, r) => {
            r.d(t, { ZP: () => i })
            var n = r(8957),
                a = (r(9496), r(9613))
            const s = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                o = "wrapper"
            function i(e) {
                let { components: t, ...r } = e
                return (0, a.kt)(
                    o,
                    (0, n.Z)({}, s, r, { components: t, mdxType: "MDXLayout" }),
                    (0, a.kt)("h2", { id: "support-framework-x" }, "Support Framework X"),
                    (0, a.kt)(
                        "ul",
                        null,
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            "You can also support the project by following the organization and Star \u2b50 the project on ",
                            (0, a.kt)(
                                "a",
                                { parentName: "li", href: "https://github.com/3rd-planet/framework-x" },
                                "GitHub"
                            )
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            "Contribute by submitting ",
                            (0, a.kt)(
                                "a",
                                {
                                    parentName: "li",
                                    href: "https://github.com/3rd-planet/framework-x/issues/new/choose"
                                },
                                "issues and pull requests"
                            )
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            "Share the project with your friends and colleagues, any and all support is appreciated \ud83d\ude4f"
                        )
                    )
                )
            }
            i.isMDXComponent = !0
        },
        3822: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    assets: () => p,
                    contentTitle: () => i,
                    default: () => c,
                    frontMatter: () => o,
                    metadata: () => l,
                    toc: () => d
                })
            var n = r(8957),
                a = (r(9496), r(9613)),
                s = r(46)
            const o = { sidebar_position: 2, title: "Project Template" },
                i = void 0,
                l = {
                    unversionedId: "overview/opinionated-project-template",
                    id: "overview/opinionated-project-template",
                    title: "Project Template",
                    description:
                        "Framework X is a meticulously designed solution to kickstart your project. With predefined best practices and structures. Embrace our expert recommendations or customize. Either way, you're set up for success, saving time and ensuring quality from the get-go",
                    source: "@site/docs/overview/opinionated-project-template.mdx",
                    sourceDirName: "overview",
                    slug: "/overview/opinionated-project-template",
                    permalink: "/docs/overview/opinionated-project-template",
                    draft: !1,
                    editUrl:
                        "https://github.com/3rd-planet/x-docs/blob/main/docs/overview/opinionated-project-template.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 2,
                    frontMatter: { sidebar_position: 2, title: "Project Template" },
                    sidebar: "tutorialSidebar",
                    previous: { title: "First Step", permalink: "/docs/overview/first-step" },
                    next: { title: "Application", permalink: "/docs/overview/application" }
                },
                p = {},
                d = [
                    { value: "helpers/methods.js", id: "helpersmethodsjs", level: 2 },
                    { value: "successResponse", id: "successresponse", level: 3 },
                    { value: "failResponse", id: "failresponse", level: 3 },
                    { value: "validate", id: "validate", level: 3 },
                    { value: "middlewares", id: "middlewares", level: 2 },
                    { value: "logger.middleware.js", id: "loggermiddlewarejs", level: 3 },
                    { value: "error.middleware.js", id: "errormiddlewarejs", level: 3 },
                    { value: "middlewares/validators", id: "middlewaresvalidators", level: 2 },
                    { value: "index.js", id: "indexjs", level: 2 },
                    { value: "server.js", id: "serverjs", level: 2 },
                    { value: "x", id: "x", level: 2 }
                ],
                u = { toc: d },
                m = "wrapper"
            function c(e) {
                let { components: t, ...r } = e
                return (0, a.kt)(
                    m,
                    (0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
                    (0, a.kt)(
                        "p",
                        null,
                        "Framework X is a meticulously designed solution to kickstart your project. With predefined best practices and structures. Embrace our expert recommendations or customize. Either way, you're set up for success, saving time and ensuring quality from the get-go"
                    ),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre" },
                            "/\n\u251c\u2500\u2500 app\n\u2502\xa0\xa0 \u251c\u2500\u2500 controllers\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.controller.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 helpers\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 methods.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 middlewares\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 error.middleware.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 logger.middleware.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 validators\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 index.validations.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 routes\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 api.route.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 server.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 tests\n\u2502\xa0\xa0     \u251c\u2500\u2500 index.fail.validation.test.js\n\u2502\xa0\xa0     \u251c\u2500\u2500 index.get.test.js\n\u2502\xa0\xa0     \u2514\u2500\u2500 index.post.test.js\n\u251c\u2500\u2500 http\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.http\n\u251c\u2500\u2500 log\n\u2502\xa0\xa0 \u251c\u2500\u2500 access\n\u2502\xa0\xa0 \u2514\u2500\u2500 error\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 x\n"
                        )
                    ),
                    (0, a.kt)(
                        "table",
                        null,
                        (0, a.kt)(
                            "thead",
                            { parentName: "table" },
                            (0, a.kt)(
                                "tr",
                                { parentName: "thead" },
                                (0, a.kt)("th", { parentName: "tr", align: null }, "File/Directory Name"),
                                (0, a.kt)("th", { parentName: "tr", align: null }, "Description")
                            )
                        ),
                        (0, a.kt)(
                            "tbody",
                            { parentName: "table" },
                            (0, a.kt)(
                                "tr",
                                { parentName: "tbody" },
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    (0, a.kt)("inlineCode", { parentName: "td" }, "app.controllers")
                                ),
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    "The controller directory. it contains all the controller files. Nested directories are also supported."
                                )
                            ),
                            (0, a.kt)(
                                "tr",
                                { parentName: "tbody" },
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    (0, a.kt)("inlineCode", { parentName: "td" }, "app.helpers")
                                ),
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    "Any sort of helpers required by the project are contained in this directory. By default, it comes with methods.js with some handy methods."
                                )
                            ),
                            (0, a.kt)(
                                "tr",
                                { parentName: "tbody" },
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    (0, a.kt)("inlineCode", { parentName: "td" }, "http")
                                ),
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    "This directory contains the ",
                                    (0, a.kt)("strong", { parentName: "td" }, ".http"),
                                    " files. You can find more details about .http files ",
                                    (0, a.kt)(
                                        "a",
                                        {
                                            parentName: "td",
                                            href: "https://learn.microsoft.com/en-us/aspnet/core/test/http-files?view=aspnetcore-8.0"
                                        },
                                        "here"
                                    )
                                )
                            ),
                            (0, a.kt)(
                                "tr",
                                { parentName: "tbody" },
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    (0, a.kt)("inlineCode", { parentName: "td" }, "log")
                                ),
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    "Stores access and error logs by date."
                                )
                            ),
                            (0, a.kt)(
                                "tr",
                                { parentName: "tbody" },
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    (0, a.kt)("inlineCode", { parentName: "td" }, "app.middlewares")
                                ),
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    "This directory contains all the middleware. Framework X comes with some default middleware which we will discuss in detail in further documentation."
                                )
                            ),
                            (0, a.kt)(
                                "tr",
                                { parentName: "tbody" },
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    (0, a.kt)("inlineCode", { parentName: "td" }, "app.middlewares.validators")
                                ),
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    "This directory contains request validators. Framework X uses ",
                                    (0, a.kt)(
                                        "a",
                                        { parentName: "td", href: "https://express-validator.github.io/docs/" },
                                        "express-validator"
                                    ),
                                    " under the hood."
                                )
                            ),
                            (0, a.kt)(
                                "tr",
                                { parentName: "tbody" },
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    (0, a.kt)("inlineCode", { parentName: "td" }, "app.routes")
                                ),
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    "This directory contains all the API routes. You can find more details about ",
                                    (0, a.kt)(
                                        "a",
                                        {
                                            parentName: "td",
                                            href: "https://expressjs.com/en/guide/routing.html"
                                        },
                                        "Express Routes here"
                                    ),
                                    "."
                                )
                            ),
                            (0, a.kt)(
                                "tr",
                                { parentName: "tbody" },
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    (0, a.kt)("inlineCode", { parentName: "td" }, "app.tests")
                                ),
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    'This is the "tests" directory'
                                )
                            ),
                            (0, a.kt)(
                                "tr",
                                { parentName: "tbody" },
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    (0, a.kt)("inlineCode", { parentName: "td" }, "app.index.js")
                                ),
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    "Creates the Application instance with ",
                                    (0, a.kt)(
                                        "a",
                                        { parentName: "td", href: "https://expressjs.com/" },
                                        "ExpressJS"
                                    )
                                )
                            ),
                            (0, a.kt)(
                                "tr",
                                { parentName: "tbody" },
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    (0, a.kt)("inlineCode", { parentName: "td" }, "app.server.js")
                                ),
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    'Created Server from the app instance provided by index.js. "server.js" is the entry point for Framework X'
                                )
                            ),
                            (0, a.kt)(
                                "tr",
                                { parentName: "tbody" },
                                (0, a.kt)(
                                    "td",
                                    { parentName: "tr", align: null },
                                    (0, a.kt)("inlineCode", { parentName: "td" }, "x")
                                ),
                                (0, a.kt)("td", { parentName: "tr", align: null }, "CLI access point.")
                            )
                        )
                    ),
                    (0, a.kt)("h2", { id: "helpersmethodsjs" }, "helpers/methods.js"),
                    (0, a.kt)(
                        "p",
                        null,
                        "This file contains some handy methods that can be used throughout the project. It is a good practice to keep all the helper methods in this file. You can add more methods as per your project requirements."
                    ),
                    (0, a.kt)("h3", { id: "successresponse" }, "successResponse"),
                    (0, a.kt)("p", null, "This method is used to send a success response to the client."),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            '/**\n *\n * @param message\n * @param payload\n * @param statusCode\n * @returns {\n *     {\n *     message: *,\n *     status: boolean,\n *     status_code: number,\n *     package: *\n *     }\n * }\n * @example\n *  const { successResponse } = require("../helpers/methods")\n *  res.status(200).json(successResponse("User created successfully", user, 200))\n */\nexports.successResponse = (message, payload, statusCode = 200) => {\n    return {\n        status: true,\n        status_code: statusCode,\n        message: message,\n        package: payload\n    }\n}\n'
                        )
                    ),
                    (0, a.kt)("h3", { id: "failresponse" }, "failResponse"),
                    (0, a.kt)("p", null, "This method is used to send an error response to the client."),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            '/**\n *\n * @param message\n * @param payload\n * @param statusCode\n * @returns {\n *     {\n *     message: *,\n *     status: boolean,\n *     status_code: number,\n *     package: *\n *     }\n * }\n * @example\n *  const { failResponse } = require("../helpers/methods")\n *  res.status(400).json(failResponse("Validation failed", errors.array(), 400))\n *\n * */\nexports.failResponse = (message, payload = null, statusCode = 400) => {\n    let response = {\n        status: false,\n        status_code: statusCode,\n        message: message\n    }\n\n    if (payload) {\n        response.payload = payload\n    }\n\n    return response\n}\n'
                        )
                    ),
                    (0, a.kt)("h3", { id: "validate" }, "validate"),
                    (0, a.kt)(
                        "p",
                        null,
                        "This method is used to validate the request. It uses ",
                        (0, a.kt)(
                            "a",
                            { parentName: "p", href: "https://express-validator.github.io/docs/" },
                            "express-validator"
                        ),
                        " under the hood."
                    ),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            '/**\n * sequential processing, stops running validations chain if the previous one have failed.\n * @param validations\n * @returns {function(*=, *=, *): Promise<*>}\n * @example\n *  const { validate } = require("../helpers/methods")\n *  const { indexValidator } = require("../middlewares/validators/index.validations")\n *  router.post("/", validate(indexValidator), IndexController.indexPost)\n */\nexports.validate = (validations) => {\n    return async (req, res, next) => {\n        for (let validation of validations) {\n            const result = await validation.run(req)\n            if (result.errors.length) break\n        }\n\n        const errors = validationResult(req)\n        if (errors.isEmpty()) {\n            return next()\n        }\n\n        res.status(parseInt(process.env.VALIDATION_FAIL_CODE)).json(\n            this.failResponse("Validation failed", errors.array())\n        )\n    }\n}\n'
                        )
                    ),
                    (0, a.kt)("h2", { id: "middlewares" }, "middlewares"),
                    (0, a.kt)(
                        "p",
                        null,
                        "This directory contains all the middleware. Framework X comes with 2 default middleware menthioned below."
                    ),
                    (0, a.kt)(
                        "ol",
                        null,
                        (0, a.kt)("li", { parentName: "ol" }, "logger.middleware.js"),
                        (0, a.kt)("li", { parentName: "ol" }, "error.middleware.js")
                    ),
                    (0, a.kt)("h3", { id: "loggermiddlewarejs" }, "logger.middleware.js"),
                    (0, a.kt)(
                        "p",
                        null,
                        "This middleware is used to log all the requests and responses. It uses ",
                        (0, a.kt)(
                            "a",
                            { parentName: "p", href: "https://www.npmjs.com/package/simple-node-logger" },
                            "simple-node-logger"
                        ),
                        " under the hood."
                    ),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            'const accessLog = require("simple-node-logger").createSimpleLogger({\n    logFilePath: "./log/access/" + new Date().toLocaleDateString().split("/").join("-") + ".log",\n    timestampFormat: "YYYY-MM-DD HH:mm:ss"\n})\n\n/**\n *\n * @param req\n * @param res\n * @param next\n * @returns {*}\n */\nmodule.exports = (req, res, next) => {\n    let reqObject = {\n        method: req.method,\n        path: req.path,\n        param: req.params,\n        body: req.body\n    }\n\n    let resObject = {\n        statusCode: res.statusCode\n    }\n\n    accessLog.info(\n        JSON.stringify({\n            reqObject,\n            resObject\n        })\n    )\n\n    next()\n}\n'
                        )
                    ),
                    (0, a.kt)("h3", { id: "errormiddlewarejs" }, "error.middleware.js"),
                    (0, a.kt)(
                        "p",
                        null,
                        "This middleware is used to handle all the errors. It uses ",
                        (0, a.kt)(
                            "a",
                            { parentName: "p", href: "https://www.npmjs.com/package/simple-node-logger" },
                            "simple-node-logger"
                        ),
                        " under the hood. Also, Framework X use ",
                        (0, a.kt)(
                            "a",
                            { parentName: "p", href: "https://www.npmjs.com/package/express-async-errors" },
                            "express-async-errors"
                        ),
                        " to handle async errors. Any exception thrown will be handled by this middleware and a fail response will be sent to the client."
                    ),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            'const methods = require("../helpers/methods")\nconst errorLog = require("simple-node-logger").createSimpleLogger({\n    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",\n    timestampFormat: "YYYY-MM-DD HH:mm:ss"\n})\n/**\n *\n * @param error\n * @param req\n * @param res\n * @param next\n * @returns {*}\n */\n// eslint-disable-next-line no-unused-vars\nmodule.exports = (error, req, res, next) => {\n    errorLog.error(error.message)\n    return res.status(process.env.EXCEPTION_CODE).send(methods.failResponse(error.message))\n}\n'
                        )
                    ),
                    (0, a.kt)("h2", { id: "middlewaresvalidators" }, "middlewares/validators"),
                    (0, a.kt)(
                        "p",
                        null,
                        "This directory contains request validators. Framework X uses ",
                        (0, a.kt)(
                            "a",
                            { parentName: "p", href: "https://express-validator.github.io/docs/" },
                            "express-validator"
                        ),
                        " under the hood."
                    ),
                    (0, a.kt)("h2", { id: "indexjs" }, "index.js"),
                    (0, a.kt)(
                        "p",
                        null,
                        "This file creates the Application instance with ",
                        (0, a.kt)("a", { parentName: "p", href: "https://expressjs.com/" }, "ExpressJS"),
                        ". It also loads all the middlewares, routes and everything else required to run the application. index.js exports the app instance which is used by server.js to create the server."
                    ),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            'require("dotenv").config()\nrequire("express-async-errors")\n\nconst accessLogMiddleware = require("./middlewares/logger.middleware")\nconst routes = require("./routes/api")\n\nconst express = require("express")\nconst app = express()\nconst cors = require("cors")\n\napp.use(cors())\n\napp.use(express.json())\n\n// Req and Res logger.\napp.use(accessLogMiddleware)\n\napp.use("/", routes)\n\nmodule.exports = app\n'
                        )
                    ),
                    (0, a.kt)("h2", { id: "serverjs" }, "server.js"),
                    (0, a.kt)(
                        "p",
                        null,
                        'This file creates the server from the app instance provided by index.js. "server.js" is the entry point for Framework X.'
                    ),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            'const app = require("./index")\nconst port = process.env.PORT\nconst errorMiddleware = require("./middlewares/error.middleware")\n\nconsole.log(`Node environment: ${process.env.NODE_ENV}`)\napp.listen(port, () => {\n    console.log(`Example app listening at port http://localhost:${port}`)\n})\n\n// Error Handler Middleware\napp.use(errorMiddleware)\n'
                        )
                    ),
                    (0, a.kt)("h2", { id: "x" }, "x"),
                    (0, a.kt)(
                        "p",
                        null,
                        "This is the CLI access point. It is used to control the CLI utilities of Framework X. You can find more details about CLI ",
                        (0, a.kt)("a", { parentName: "p", href: "/" }, "here")
                    ),
                    (0, a.kt)(s.ZP, { mdxType: "Support" })
                )
            }
            c.isMDXComponent = !0
        }
    }
])
