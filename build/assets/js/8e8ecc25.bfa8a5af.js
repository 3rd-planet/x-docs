"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [712],
    {
        9613: (e, t, r) => {
            r.d(t, { Zo: () => c, kt: () => k })
            var a = r(9496)
            function n(e, t, r) {
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
            function p(e, t) {
                var r = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e)
                    t &&
                        (a = a.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })),
                        r.push.apply(r, a)
                }
                return r
            }
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? p(Object(r), !0).forEach(function (t) {
                              n(e, t, r[t])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : p(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                }
                return e
            }
            function i(e, t) {
                if (null == e) return {}
                var r,
                    a,
                    n = (function (e, t) {
                        if (null == e) return {}
                        var r,
                            a,
                            n = {},
                            p = Object.keys(e)
                        for (a = 0; a < p.length; a++) (r = p[a]), t.indexOf(r) >= 0 || (n[r] = e[r])
                        return n
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var p = Object.getOwnPropertySymbols(e)
                    for (a = 0; a < p.length; a++)
                        (r = p[a]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]))
                }
                return n
            }
            var s = a.createContext({}),
                l = function (e) {
                    var t = a.useContext(s),
                        r = t
                    return e && (r = "function" == typeof e ? e(t) : o(o({}, t), e)), r
                },
                c = function (e) {
                    var t = l(e.components)
                    return a.createElement(s.Provider, { value: t }, e.children)
                },
                m = "mdxType",
                u = {
                    inlineCode: "code",
                    wrapper: function (e) {
                        var t = e.children
                        return a.createElement(a.Fragment, {}, t)
                    }
                },
                d = a.forwardRef(function (e, t) {
                    var r = e.components,
                        n = e.mdxType,
                        p = e.originalType,
                        s = e.parentName,
                        c = i(e, ["components", "mdxType", "originalType", "parentName"]),
                        m = l(r),
                        d = n,
                        k = m["".concat(s, ".").concat(d)] || m[d] || u[d] || p
                    return r
                        ? a.createElement(k, o(o({ ref: t }, c), {}, { components: r }))
                        : a.createElement(k, o({ ref: t }, c))
                })
            function k(e, t) {
                var r = arguments,
                    n = t && t.mdxType
                if ("string" == typeof e || n) {
                    var p = r.length,
                        o = new Array(p)
                    o[0] = d
                    var i = {}
                    for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s])
                    ;(i.originalType = e), (i[m] = "string" == typeof e ? e : n), (o[1] = i)
                    for (var l = 2; l < p; l++) o[l] = r[l]
                    return a.createElement.apply(null, o)
                }
                return a.createElement.apply(null, r)
            }
            d.displayName = "MDXCreateElement"
        },
        46: (e, t, r) => {
            r.d(t, { ZP: () => i })
            var a = r(8957),
                n = (r(9496), r(9613))
            const p = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                o = "wrapper"
            function i(e) {
                let { components: t, ...r } = e
                return (0, n.kt)(
                    o,
                    (0, a.Z)({}, p, r, { components: t, mdxType: "MDXLayout" }),
                    (0, n.kt)("h2", { id: "support-framework-x" }, "Support Framework X"),
                    (0, n.kt)(
                        "ul",
                        null,
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            "You can also support the project by following the organization and Star \u2b50 the project on ",
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://github.com/3rd-planet/framework-x" },
                                "GitHub"
                            )
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            "Contribute by submitting ",
                            (0, n.kt)(
                                "a",
                                {
                                    parentName: "li",
                                    href: "https://github.com/3rd-planet/framework-x/issues/new/choose"
                                },
                                "issues and pull requests"
                            )
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            "Share the project with your friends and colleagues, any and all support is appreciated \ud83d\ude4f"
                        )
                    )
                )
            }
            i.isMDXComponent = !0
        },
        546: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    assets: () => l,
                    contentTitle: () => i,
                    default: () => d,
                    frontMatter: () => o,
                    metadata: () => s,
                    toc: () => c
                })
            var a = r(8957),
                n = (r(9496), r(9613)),
                p = r(46)
            const o = { sidebar_position: 5, title: "Dependencies" },
                i = void 0,
                s = {
                    unversionedId: "overview/dependencies",
                    id: "overview/dependencies",
                    title: "Dependencies",
                    description:
                        "You are free to use any Node Package Manager available to you, however, we recommend using npm as it is the package manager we use internally. Some other popular package managers are yarn and pnpm.",
                    source: "@site/docs/overview/dependencies.mdx",
                    sourceDirName: "overview",
                    slug: "/overview/dependencies",
                    permalink: "/docs/overview/dependencies",
                    draft: !1,
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/docs/overview/dependencies.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 5,
                    frontMatter: { sidebar_position: 5, title: "Dependencies" },
                    sidebar: "tutorialSidebar",
                    previous: { title: "Features", permalink: "/docs/overview/features" },
                    next: { title: "Repository Pattern", permalink: "/docs/overview/repositories" }
                },
                l = {},
                c = [
                    { value: "Utilities", id: "utilities", level: 2 },
                    { value: "TS Utilities", id: "ts-utilities", level: 2 },
                    { value: "Core packages", id: "core-packages", level: 2 },
                    { value: "Testing", id: "testing", level: 2 }
                ],
                m = { toc: c },
                u = "wrapper"
            function d(e) {
                let { components: t, ...r } = e
                return (0, n.kt)(
                    u,
                    (0, a.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
                    (0, n.kt)(
                        "p",
                        null,
                        "You are free to use any Node Package Manager available to you, however, we recommend using ",
                        (0, n.kt)("a", { parentName: "p", href: "https://www.npmjs.com/" }, "npm"),
                        " as it is the package manager we use internally. Some other popular package managers are ",
                        (0, n.kt)("a", { parentName: "p", href: "https://yarnpkg.com/" }, "yarn"),
                        " and ",
                        (0, n.kt)("a", { parentName: "p", href: "https://pnpm.js.org/" }, "pnpm"),
                        "."
                    ),
                    (0, n.kt)("h2", { id: "utilities" }, "Utilities"),
                    (0, n.kt)(
                        "p",
                        null,
                        "Framework X uses a number of utility packages to provide common functionality, these are listed below."
                    ),
                    (0, n.kt)(
                        "ul",
                        null,
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/husky" },
                                "husky"
                            ),
                            " - Git hooks made easy"
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/nodemon" },
                                "nodemon"
                            ),
                            " - Simple monitor script for use during development of a node.js app."
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/prettier" },
                                "prettier"
                            ),
                            " - Prettier is an opinionated code formatter."
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/eslint" },
                                "eslint"
                            ),
                            " - Find and fix problems in your JavaScript code."
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/dotenv" },
                                "dotenv"
                            ),
                            " - Loads environment variables from .env file."
                        )
                    ),
                    (0, n.kt)("h2", { id: "ts-utilities" }, "TS Utilities"),
                    (0, n.kt)(
                        "ul",
                        null,
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/ts-node" },
                                "ts-node"
                            ),
                            " - TypeScript execution and REPL for node.js, with source map support."
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/typescript" },
                                "typescript"
                            ),
                            " - TypeScript is a language for application-scale JavaScript."
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/ts-node-dev" },
                                "ts-node-dev"
                            ),
                            " - Tweaked version of node-dev that uses ts-node under the hood."
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/@types/supertest" },
                                "@types/supertest"
                            ),
                            " - TypeScript definitions for supertest."
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/@types/cors" },
                                "@types/cors"
                            ),
                            " - TypeScript definitions for cors."
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/@types/express" },
                                "@types/express"
                            ),
                            " - TypeScript definitions for express."
                        )
                    ),
                    (0, n.kt)("h2", { id: "core-packages" }, "Core packages"),
                    (0, n.kt)(
                        "p",
                        null,
                        "Framework X uses a number of core packages to provide common functionality, these are listed below."
                    ),
                    (0, n.kt)(
                        "ul",
                        null,
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://github.com/3rd-planet/x-core" },
                                "@3rdplanet/x-core"
                            ),
                            " - Core package for Framework X"
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/express" },
                                "express"
                            ),
                            " - Fast, unopinionated, minimalist web framework for node."
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/express-validator" },
                                "express-validator"
                            ),
                            " - An express.js middleware for validator."
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/commander" },
                                "commander"
                            ),
                            " - The complete solution for node.js command-line interfaces, inspired by Ruby's commander."
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/cors" },
                                "cors"
                            ),
                            " - Node.js CORS middleware"
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                {
                                    parentName: "li",
                                    href: "https://www.npmjs.com/package/express-async-errors"
                                },
                                "express-async-errors"
                            ),
                            " - A dead simple ES6 async/await support hack for ExpressJS"
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/simple-node-logger" },
                                "simple-node-logger"
                            ),
                            " - A simple lightweight logging library for Node.js"
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/loading-cli" },
                                "loading-cli"
                            ),
                            " - A simple loading spinner for cli programs."
                        )
                    ),
                    (0, n.kt)("h2", { id: "testing" }, "Testing"),
                    (0, n.kt)(
                        "p",
                        null,
                        "Framework X uses a number of testing packages to provide common functionality, these are listed below."
                    ),
                    (0, n.kt)(
                        "ul",
                        null,
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/supertest" },
                                "supertest"
                            ),
                            " - HTTP assertions made easy via superagent"
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/jest" },
                                "jest"
                            ),
                            " - Delightful JavaScript Testing."
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/ts-jest" },
                                "ts-jest"
                            ),
                            " - TypeScript preprocessor with sourcemap support for Jest that lets you use Jest to test projects written in TypeScript. ",
                            (0, n.kt)("strong", { parentName: "li" }, "[Typescript]")
                        ),
                        (0, n.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, n.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/@types/jest" },
                                "@types/jest"
                            ),
                            " - TypeScript definitions for jest. ",
                            (0, n.kt)("strong", { parentName: "li" }, "[Typescript]")
                        )
                    ),
                    (0, n.kt)(p.ZP, { mdxType: "Support" })
                )
            }
            d.isMDXComponent = !0
        }
    }
])
