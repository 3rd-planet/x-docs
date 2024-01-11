"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [722],
    {
        9613: (e, t, n) => {
            n.d(t, { Zo: () => u, kt: () => f })
            var r = n(9496)
            function s(e, t, n) {
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
            function i(e, t) {
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
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? i(Object(n), !0).forEach(function (t) {
                              s(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : i(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                }
                return e
            }
            function a(e, t) {
                if (null == e) return {}
                var n,
                    r,
                    s = (function (e, t) {
                        if (null == e) return {}
                        var n,
                            r,
                            s = {},
                            i = Object.keys(e)
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (s[n] = e[n])
                        return s
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e)
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]))
                }
                return s
            }
            var l = r.createContext({}),
                p = function (e) {
                    var t = r.useContext(l),
                        n = t
                    return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n
                },
                u = function (e) {
                    var t = p(e.components)
                    return r.createElement(l.Provider, { value: t }, e.children)
                },
                c = "mdxType",
                d = {
                    inlineCode: "code",
                    wrapper: function (e) {
                        var t = e.children
                        return r.createElement(r.Fragment, {}, t)
                    }
                },
                m = r.forwardRef(function (e, t) {
                    var n = e.components,
                        s = e.mdxType,
                        i = e.originalType,
                        l = e.parentName,
                        u = a(e, ["components", "mdxType", "originalType", "parentName"]),
                        c = p(n),
                        m = s,
                        f = c["".concat(l, ".").concat(m)] || c[m] || d[m] || i
                    return n
                        ? r.createElement(f, o(o({ ref: t }, u), {}, { components: n }))
                        : r.createElement(f, o({ ref: t }, u))
                })
            function f(e, t) {
                var n = arguments,
                    s = t && t.mdxType
                if ("string" == typeof e || s) {
                    var i = n.length,
                        o = new Array(i)
                    o[0] = m
                    var a = {}
                    for (var l in t) hasOwnProperty.call(t, l) && (a[l] = t[l])
                    ;(a.originalType = e), (a[c] = "string" == typeof e ? e : s), (o[1] = a)
                    for (var p = 2; p < i; p++) o[p] = n[p]
                    return r.createElement.apply(null, o)
                }
                return r.createElement.apply(null, n)
            }
            m.displayName = "MDXCreateElement"
        },
        46: (e, t, n) => {
            n.d(t, { ZP: () => a })
            var r = n(8957),
                s = (n(9496), n(9613))
            const i = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                o = "wrapper"
            function a(e) {
                let { components: t, ...n } = e
                return (0, s.kt)(
                    o,
                    (0, r.Z)({}, i, n, { components: t, mdxType: "MDXLayout" }),
                    (0, s.kt)("h2", { id: "support-framework-x" }, "Support Framework X"),
                    (0, s.kt)(
                        "ul",
                        null,
                        (0, s.kt)(
                            "li",
                            { parentName: "ul" },
                            "You can also support the project by following the organization and Star \u2b50 the project on ",
                            (0, s.kt)(
                                "a",
                                { parentName: "li", href: "https://github.com/3rd-planet/framework-x" },
                                "GitHub"
                            )
                        ),
                        (0, s.kt)(
                            "li",
                            { parentName: "ul" },
                            "Contribute by submitting ",
                            (0, s.kt)(
                                "a",
                                {
                                    parentName: "li",
                                    href: "https://github.com/3rd-planet/framework-x/issues/new/choose"
                                },
                                "issues and pull requests"
                            )
                        ),
                        (0, s.kt)(
                            "li",
                            { parentName: "ul" },
                            "Share the project with your friends and colleagues, any and all support is appreciated \ud83d\ude4f"
                        )
                    )
                )
            }
            a.isMDXComponent = !0
        },
        9920: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => p,
                    contentTitle: () => a,
                    default: () => m,
                    frontMatter: () => o,
                    metadata: () => l,
                    toc: () => u
                })
            var r = n(8957),
                s = (n(9496), n(9613)),
                i = n(46)
            const o = { sidebar_position: 9, title: "Testing" },
                a = void 0,
                l = {
                    unversionedId: "overview/test",
                    id: "overview/test",
                    title: "Testing",
                    description:
                        "Unit testing and integration testing are vital in software development. Unit testing ensures individual components or functions work correctly in isolation, catching bugs early and improving code quality.",
                    source: "@site/docs/overview/test.mdx",
                    sourceDirName: "overview",
                    slug: "/overview/test",
                    permalink: "/docs/overview/test",
                    draft: !1,
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/docs/overview/test.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 9,
                    frontMatter: { sidebar_position: 9, title: "Testing" },
                    sidebar: "tutorialSidebar",
                    previous: { title: "Error Handling", permalink: "/docs/overview/error-handling" },
                    next: { title: "CLI", permalink: "/docs/cli" }
                },
                p = {},
                u = [
                    { value: "Example Tests", id: "example-tests", level: 2 },
                    { value: "index.get.test.js", id: "indexgettestjs", level: 3 },
                    { value: "index.post.test.js", id: "indexposttestjs", level: 3 },
                    { value: "index.fail.validation.test.js", id: "indexfailvalidationtestjs", level: 3 },
                    { value: "Running Tests", id: "running-tests", level: 2 }
                ],
                c = { toc: u },
                d = "wrapper"
            function m(e) {
                let { components: t, ...n } = e
                return (0, s.kt)(
                    d,
                    (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }),
                    (0, s.kt)(
                        "p",
                        null,
                        "Unit testing and integration testing are vital in software development. Unit testing ensures individual components or functions work correctly in isolation, catching bugs early and improving code quality."
                    ),
                    (0, s.kt)(
                        "p",
                        null,
                        "Integration testing verifies the interactions between these components, revealing issues that emerge when integrated."
                    ),
                    (0, s.kt)(
                        "p",
                        null,
                        "Both types identify problems early, enhance reliability, and reduce the cost of fixing issues in later development stages or production. Ultimately, they bolster software robustness, enabling smoother deployment and minimizing risks, which is crucial for delivering reliable and efficient applications."
                    ),
                    (0, s.kt)(
                        "p",
                        null,
                        "Framework X comes with a built-in testing framework that makes it easy to write unit and integration tests for your APIs. Framework X uses supertest with ",
                        (0, s.kt)("a", { parentName: "p", href: "https://jestjs.io/" }, "jest"),
                        " as its testing framework. ",
                        (0, s.kt)("strong", { parentName: "p" }, "Supertest"),
                        " is a library made specifically for testing Node.js HTTP servers. It provides a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent. you can read more about supertest ",
                        (0, s.kt)(
                            "a",
                            { parentName: "p", href: "https://www.npmjs.com/package/supertest" },
                            "here"
                        ),
                        "."
                    ),
                    (0, s.kt)("h2", { id: "example-tests" }, "Example Tests"),
                    (0, s.kt)("p", null, "Below are some example of a test for a simple API endpoints."),
                    (0, s.kt)("h3", { id: "indexgettestjs" }, "index.get.test.js"),
                    (0, s.kt)(
                        "pre",
                        null,
                        (0, s.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            'const app = require("./index.mdx")\nconst supertest = require("supertest")\n\ndescribe("Test the root path", () => {\n    test("It should response the GET method", async () => {\n        await supertest(app)\n            .get("/")\n            .expect(200)\n            .then((response) => {\n                expect(response.body.status).toBe(true)\n            })\n    })\n})\n'
                        )
                    ),
                    (0, s.kt)("h3", { id: "indexposttestjs" }, "index.post.test.js"),
                    (0, s.kt)(
                        "pre",
                        null,
                        (0, s.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            'const app = require("../index")\nconst supertest = require("supertest")\n\ndescribe("Test the root post path", () => {\n    test("It should response the POST method", async () => {\n        await supertest(app)\n            .post("/")\n            .send({\n                key: "value"\n            })\n            .expect(200)\n            .then((response) => {\n                expect(response.body.status).toBe(true)\n            })\n    })\n})\n'
                        )
                    ),
                    (0, s.kt)("h3", { id: "indexfailvalidationtestjs" }, "index.fail.validation.test.js"),
                    (0, s.kt)(
                        "pre",
                        null,
                        (0, s.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            'const app = require("../index")\nconst supertest = require("supertest")\n\ndescribe("Test the root post path with fail validation", () => {\n    test("It should response the POST method with failed validation", async () => {\n        await supertest(app)\n            .post("/")\n            .send({\n                ky: "value" //key is requited in validation...\n            })\n            .expect(406)\n            .then((response) => {\n                expect(response.body.status).toBe(false)\n            })\n    })\n})\n'
                        )
                    ),
                    (0, s.kt)("h2", { id: "running-tests" }, "Running Tests"),
                    (0, s.kt)("p", null, "To run your tests, you can use the following command:"),
                    (0, s.kt)(
                        "pre",
                        null,
                        (0, s.kt)("code", { parentName: "pre", className: "language-bash" }, "npm run test\n")
                    ),
                    (0, s.kt)(i.ZP, { mdxType: "Support" })
                )
            }
            m.isMDXComponent = !0
        }
    }
])
