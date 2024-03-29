"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [41],
    {
        9613: (e, t, n) => {
            n.d(t, { Zo: () => c, kt: () => f })
            var r = n(9496)
            function a(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n),
                    e
                )
            }
            function o(e, t) {
                var n = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e)
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })),
                        n.push.apply(n, r)
                }
                return n
            }
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? o(Object(n), !0).forEach(function (t) {
                              a(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : o(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                }
                return e
            }
            function i(e, t) {
                if (null == e) return {}
                var n,
                    r,
                    a = (function (e, t) {
                        if (null == e) return {}
                        var n,
                            r,
                            a = {},
                            o = Object.keys(e)
                        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
                        return a
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e)
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]))
                }
                return a
            }
            var s = r.createContext({}),
                p = function (e) {
                    var t = r.useContext(s),
                        n = t
                    return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n
                },
                c = function (e) {
                    var t = p(e.components)
                    return r.createElement(s.Provider, { value: t }, e.children)
                },
                u = "mdxType",
                d = {
                    inlineCode: "code",
                    wrapper: function (e) {
                        var t = e.children
                        return r.createElement(r.Fragment, {}, t)
                    }
                },
                m = r.forwardRef(function (e, t) {
                    var n = e.components,
                        a = e.mdxType,
                        o = e.originalType,
                        s = e.parentName,
                        c = i(e, ["components", "mdxType", "originalType", "parentName"]),
                        u = p(n),
                        m = a,
                        f = u["".concat(s, ".").concat(m)] || u[m] || d[m] || o
                    return n
                        ? r.createElement(f, l(l({ ref: t }, c), {}, { components: n }))
                        : r.createElement(f, l({ ref: t }, c))
                })
            function f(e, t) {
                var n = arguments,
                    a = t && t.mdxType
                if ("string" == typeof e || a) {
                    var o = n.length,
                        l = new Array(o)
                    l[0] = m
                    var i = {}
                    for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s])
                    ;(i.originalType = e), (i[u] = "string" == typeof e ? e : a), (l[1] = i)
                    for (var p = 2; p < o; p++) l[p] = n[p]
                    return r.createElement.apply(null, l)
                }
                return r.createElement.apply(null, n)
            }
            m.displayName = "MDXCreateElement"
        },
        46: (e, t, n) => {
            n.d(t, { ZP: () => i })
            var r = n(8957),
                a = (n(9496), n(9613))
            const o = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                l = "wrapper"
            function i(e) {
                let { components: t, ...n } = e
                return (0, a.kt)(
                    l,
                    (0, r.Z)({}, o, n, { components: t, mdxType: "MDXLayout" }),
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
        9966: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => p,
                    contentTitle: () => i,
                    default: () => m,
                    frontMatter: () => l,
                    metadata: () => s,
                    toc: () => c
                })
            var r = n(8957),
                a = (n(9496), n(9613)),
                o = n(46)
            const l = { sidebar_position: 3, title: "CLI" },
                i = void 0,
                s = {
                    unversionedId: "cli",
                    id: "cli",
                    title: "CLI",
                    description:
                        "A CLI (Command-Line Interface) tool is vital in any project because it offers efficient, scriptable, and automation-friendly access to an application's functionality. It simplifies tasks for developers, enhancing productivity, ease of use, and scalability while providing a standardized interface for interacting with the project.",
                    source: "@site/docs/cli.mdx",
                    sourceDirName: ".",
                    slug: "/cli",
                    permalink: "/docs/cli",
                    draft: !1,
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/docs/cli.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 3,
                    frontMatter: { sidebar_position: 3, title: "CLI" },
                    sidebar: "tutorialSidebar",
                    previous: { title: "Testing", permalink: "/docs/overview/test" },
                    next: { title: "Deployment", permalink: "/docs/deployment" }
                },
                p = {},
                c = [
                    { value: "Usage", id: "usage", level: 2 },
                    { value: "Commands", id: "commands", level: 2 },
                    { value: "Help", id: "help", level: 2 },
                    { value: "Examples", id: "examples", level: 2 },
                    { value: "Build a new controller", id: "build-a-new-controller", level: 3 },
                    { value: "Build a new repository", id: "build-a-new-repository", level: 3 }
                ],
                u = { toc: c },
                d = "wrapper"
            function m(e) {
                let { components: t, ...n } = e
                return (0, a.kt)(
                    d,
                    (0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
                    (0, a.kt)(
                        "p",
                        null,
                        "A CLI (Command-Line Interface) tool is vital in any project because it offers efficient, scriptable, and automation-friendly access to an application's functionality. It simplifies tasks for developers, enhancing productivity, ease of use, and scalability while providing a standardized interface for interacting with the project."
                    ),
                    (0, a.kt)(
                        "p",
                        null,
                        "Framework X provides a CLI tool that can be used to build components to fasten you work flow. It is based on the ",
                        (0, a.kt)(
                            "a",
                            { parentName: "p", href: "https://www.npmjs.com/package/commander" },
                            "Commander"
                        ),
                        " package."
                    ),
                    (0, a.kt)("h2", { id: "usage" }, "Usage"),
                    (0, a.kt)(
                        "p",
                        null,
                        "The CLI tool can be used by running the following command in the terminal:"
                    ),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre", className: "language-bash" },
                            "node x <command> [options]\n"
                        )
                    ),
                    (0, a.kt)("h2", { id: "commands" }, "Commands"),
                    (0, a.kt)("p", null, "The following commands are available:"),
                    (0, a.kt)(
                        "ul",
                        null,
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("inlineCode", { parentName: "li" }, "build:command"),
                            " - Build a new command"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("inlineCode", { parentName: "li" }, "build:controller"),
                            " - Build a new controller"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("inlineCode", { parentName: "li" }, "build:middleware"),
                            " - Build a new middleware"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("inlineCode", { parentName: "li" }, "build:repository"),
                            " - Build a new repository"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("inlineCode", { parentName: "li" }, "build:validator"),
                            " - Build a new validator, based on ",
                            (0, a.kt)(
                                "a",
                                { parentName: "li", href: "https://express-validator.github.io/docs/" },
                                "express-validator"
                            )
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("inlineCode", { parentName: "li" }, "publish:stubs"),
                            " - Publish the stubs to the ",
                            (0, a.kt)("inlineCode", { parentName: "li" }, "stubs"),
                            " folder. This is useful when you want to customize the stubs for the CLI tool."
                        )
                    ),
                    (0, a.kt)("h2", { id: "help" }, "Help"),
                    (0, a.kt)("p", null, "To get help on the CLI tool, run the following command:"),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)("code", { parentName: "pre", className: "language-bash" }, "node x --help\n")
                    ),
                    (0, a.kt)("h2", { id: "examples" }, "Examples"),
                    (0, a.kt)("h3", { id: "build-a-new-controller" }, "Build a new controller"),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre", className: "language-bash" },
                            "node x build:controller user\n"
                        )
                    ),
                    (0, a.kt)(
                        "p",
                        null,
                        "The above command will create a new controller file ",
                        (0, a.kt)("inlineCode", { parentName: "p" }, "controllers/user.controller.js"),
                        " with the following content:"
                    ),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            'const { successResponse } = require("../helpers/methods")\n\n/**\n *\n * @param req\n * @param res\n * @returns {Promise<void>}\n */\nexports.index = async (req, res) => {\n    res.send(\n        successResponse("controller index", {\n            data: "here comes you payload..."\n        })\n    )\n}\n'
                        )
                    ),
                    (0, a.kt)("h3", { id: "build-a-new-repository" }, "Build a new repository"),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre", className: "language-bash" },
                            "node x build:repository user\n"
                        )
                    ),
                    (0, a.kt)(
                        "p",
                        null,
                        "The above command will create an empty repository file ",
                        (0, a.kt)("inlineCode", { parentName: "p" }, "repositories/user.repository.js"),
                        "."
                    ),
                    (0, a.kt)(o.ZP, { mdxType: "Support" })
                )
            }
            m.isMDXComponent = !0
        }
    }
])
