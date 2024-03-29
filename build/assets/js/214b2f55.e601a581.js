"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [645],
    {
        9613: (e, r, t) => {
            t.d(r, { Zo: () => c, kt: () => h })
            var n = t(9496)
            function o(e, r, t) {
                return (
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[r] = t),
                    e
                )
            }
            function a(e, r) {
                var t = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e)
                    r &&
                        (n = n.filter(function (r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })),
                        t.push.apply(t, n)
                }
                return t
            }
            function s(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {}
                    r % 2
                        ? a(Object(t), !0).forEach(function (r) {
                              o(e, r, t[r])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                          : a(Object(t)).forEach(function (r) {
                                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                            })
                }
                return e
            }
            function i(e, r) {
                if (null == e) return {}
                var t,
                    n,
                    o = (function (e, r) {
                        if (null == e) return {}
                        var t,
                            n,
                            o = {},
                            a = Object.keys(e)
                        for (n = 0; n < a.length; n++) (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t])
                        return o
                    })(e, r)
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e)
                    for (n = 0; n < a.length; n++)
                        (t = a[n]),
                            r.indexOf(t) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]))
                }
                return o
            }
            var l = n.createContext({}),
                p = function (e) {
                    var r = n.useContext(l),
                        t = r
                    return e && (t = "function" == typeof e ? e(r) : s(s({}, r), e)), t
                },
                c = function (e) {
                    var r = p(e.components)
                    return n.createElement(l.Provider, { value: r }, e.children)
                },
                d = "mdxType",
                u = {
                    inlineCode: "code",
                    wrapper: function (e) {
                        var r = e.children
                        return n.createElement(n.Fragment, {}, r)
                    }
                },
                m = n.forwardRef(function (e, r) {
                    var t = e.components,
                        o = e.mdxType,
                        a = e.originalType,
                        l = e.parentName,
                        c = i(e, ["components", "mdxType", "originalType", "parentName"]),
                        d = p(t),
                        m = o,
                        h = d["".concat(l, ".").concat(m)] || d[m] || u[m] || a
                    return t
                        ? n.createElement(h, s(s({ ref: r }, c), {}, { components: t }))
                        : n.createElement(h, s({ ref: r }, c))
                })
            function h(e, r) {
                var t = arguments,
                    o = r && r.mdxType
                if ("string" == typeof e || o) {
                    var a = t.length,
                        s = new Array(a)
                    s[0] = m
                    var i = {}
                    for (var l in r) hasOwnProperty.call(r, l) && (i[l] = r[l])
                    ;(i.originalType = e), (i[d] = "string" == typeof e ? e : o), (s[1] = i)
                    for (var p = 2; p < a; p++) s[p] = t[p]
                    return n.createElement.apply(null, s)
                }
                return n.createElement.apply(null, t)
            }
            m.displayName = "MDXCreateElement"
        },
        46: (e, r, t) => {
            t.d(r, { ZP: () => i })
            var n = t(8957),
                o = (t(9496), t(9613))
            const a = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                s = "wrapper"
            function i(e) {
                let { components: r, ...t } = e
                return (0, o.kt)(
                    s,
                    (0, n.Z)({}, a, t, { components: r, mdxType: "MDXLayout" }),
                    (0, o.kt)("h2", { id: "support-framework-x" }, "Support Framework X"),
                    (0, o.kt)(
                        "ul",
                        null,
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            "You can also support the project by following the organization and Star \u2b50 the project on ",
                            (0, o.kt)(
                                "a",
                                { parentName: "li", href: "https://github.com/3rd-planet/framework-x" },
                                "GitHub"
                            )
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            "Contribute by submitting ",
                            (0, o.kt)(
                                "a",
                                {
                                    parentName: "li",
                                    href: "https://github.com/3rd-planet/framework-x/issues/new/choose"
                                },
                                "issues and pull requests"
                            )
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            "Share the project with your friends and colleagues, any and all support is appreciated \ud83d\ude4f"
                        )
                    )
                )
            }
            i.isMDXComponent = !0
        },
        1655: (e, r, t) => {
            t.r(r),
                t.d(r, {
                    assets: () => p,
                    contentTitle: () => i,
                    default: () => m,
                    frontMatter: () => s,
                    metadata: () => l,
                    toc: () => c
                })
            var n = t(8957),
                o = (t(9496), t(9613)),
                a = t(46)
            const s = { sidebar_position: 8, title: "Error Handling" },
                i = void 0,
                l = {
                    unversionedId: "overview/error-handling",
                    id: "overview/error-handling",
                    title: "Error Handling",
                    description:
                        "Error Handling is a very important part of any application. It is important to handle errors gracefully and present them to the user in a way that is understandable. This is especially true for applications that are used by non-technical users. We use [express-async-errors",
                    source: "@site/docs/overview/error-handling.mdx",
                    sourceDirName: "overview",
                    slug: "/overview/error-handling",
                    permalink: "/docs/overview/error-handling",
                    draft: !1,
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/docs/overview/error-handling.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 8,
                    frontMatter: { sidebar_position: 8, title: "Error Handling" },
                    sidebar: "tutorialSidebar",
                    previous: { title: "Super Charged Cache", permalink: "/docs/overview/cache" },
                    next: { title: "Testing", permalink: "/docs/overview/test" }
                },
                p = {},
                c = [
                    { value: "Error Middleware", id: "error-middleware", level: 2 },
                    { value: "Error Logging", id: "error-logging", level: 3 },
                    { value: "Error Response", id: "error-response", level: 3 }
                ],
                d = { toc: c },
                u = "wrapper"
            function m(e) {
                let { components: r, ...t } = e
                return (0, o.kt)(
                    u,
                    (0, n.Z)({}, d, t, { components: r, mdxType: "MDXLayout" }),
                    (0, o.kt)(
                        "p",
                        null,
                        "Error Handling is a very important part of any application. It is important to handle errors gracefully and present them to the user in a way that is understandable. This is especially true for applications that are used by non-technical users. We use ",
                        (0, o.kt)(
                            "a",
                            { parentName: "p", href: "https://www.npmjs.com/package/express-async-errors" },
                            "express-async-errors\n"
                        ),
                        " to handle errors in our application. This package allows us to use async/await syntax in our express routes and automatically catch any errors that occur."
                    ),
                    (0, o.kt)("h2", { id: "error-middleware" }, "Error Middleware"),
                    (0, o.kt)(
                        "p",
                        null,
                        "We have a middleware function that is responsible for catching errors and sending them to the user. This middleware function is called after all other middleware functions and routes have been called. This allows us to catch any errors that occur in our application."
                    ),
                    (0, o.kt)(
                        "pre",
                        null,
                        (0, o.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            '// middlewares/error.middleware.js\n\nconst methods = require("../helpers/methods")\nconst errorLog = require("simple-node-logger").createSimpleLogger({\n    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",\n    timestampFormat: "YYYY-MM-DD HH:mm:ss"\n})\n/**\n *\n * @param error\n * @param req\n * @param res\n * @param next\n * @returns {*}\n */\n// eslint-disable-next-line no-unused-vars\nmodule.exports = (error, req, res, next) => {\n    errorLog.error(error.message)\n    return res.status(process.env.EXCEPTION_CODE).send(methods.failResponse(error.message))\n}\n'
                        )
                    ),
                    (0, o.kt)("h3", { id: "error-logging" }, "Error Logging"),
                    (0, o.kt)(
                        "p",
                        null,
                        "We use ",
                        (0, o.kt)(
                            "a",
                            { parentName: "p", href: "https://www.npmjs.com/package/simple-node-logger" },
                            "simple-node-logger"
                        ),
                        " to log errors to a file. This allows us to keep track of errors that occur in our application. We log the error message and the stack trace to the file. We also log the date and time that the error occurred. log file names are formatted as ",
                        (0, o.kt)("inlineCode", { parentName: "p" }, "YYYY-MM-DD.log"),
                        ". This allows us to easily find the log file for a specific date. We also use the ",
                        (0, o.kt)("inlineCode", { parentName: "p" }, "timestampFormat"),
                        " option to format the date and time that the error occurred. This makes it easier to read the log file. Log files are stored in the ",
                        (0, o.kt)("inlineCode", { parentName: "p" }, "log/error"),
                        " directory."
                    ),
                    (0, o.kt)("h3", { id: "error-response" }, "Error Response"),
                    (0, o.kt)(
                        "p",
                        null,
                        "The ",
                        (0, o.kt)(
                            "a",
                            {
                                parentName: "p",
                                href: "/docs/overview/opinionated-project-template#failresponse"
                            },
                            "failResponse"
                        ),
                        " method is used to format the error message and send it to the user. This method is defined in the method helper file. The failResponse method takes a message as a parameter and returns an object with the message and a status code. You can change the status code to whatever you want in ",
                        (0, o.kt)("inlineCode", { parentName: "p" }, ".env"),
                        ". We use 400 because it is the standard status code for a bad request."
                    ),
                    (0, o.kt)(a.ZP, { mdxType: "Support" })
                )
            }
            m.isMDXComponent = !0
        }
    }
])
