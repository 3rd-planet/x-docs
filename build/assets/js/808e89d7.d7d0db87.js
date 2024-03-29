"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [366],
    {
        9613: (e, t, a) => {
            a.d(t, { Zo: () => c, kt: () => f })
            var r = a(9496)
            function o(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                )
            }
            function n(e, t) {
                var a = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e)
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })),
                        a.push.apply(a, r)
                }
                return a
            }
            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? n(Object(a), !0).forEach(function (t) {
                              o(e, t, a[t])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                          : n(Object(a)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            })
                }
                return e
            }
            function s(e, t) {
                if (null == e) return {}
                var a,
                    r,
                    o = (function (e, t) {
                        if (null == e) return {}
                        var a,
                            r,
                            o = {},
                            n = Object.keys(e)
                        for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (o[a] = e[a])
                        return o
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e)
                    for (r = 0; r < n.length; r++)
                        (a = n[r]),
                            t.indexOf(a) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(e, a) && (o[a] = e[a]))
                }
                return o
            }
            var l = r.createContext({}),
                p = function (e) {
                    var t = r.useContext(l),
                        a = t
                    return e && (a = "function" == typeof e ? e(t) : i(i({}, t), e)), a
                },
                c = function (e) {
                    var t = p(e.components)
                    return r.createElement(l.Provider, { value: t }, e.children)
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
                    var a = e.components,
                        o = e.mdxType,
                        n = e.originalType,
                        l = e.parentName,
                        c = s(e, ["components", "mdxType", "originalType", "parentName"]),
                        u = p(a),
                        m = o,
                        f = u["".concat(l, ".").concat(m)] || u[m] || d[m] || n
                    return a
                        ? r.createElement(f, i(i({ ref: t }, c), {}, { components: a }))
                        : r.createElement(f, i({ ref: t }, c))
                })
            function f(e, t) {
                var a = arguments,
                    o = t && t.mdxType
                if ("string" == typeof e || o) {
                    var n = a.length,
                        i = new Array(n)
                    i[0] = m
                    var s = {}
                    for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l])
                    ;(s.originalType = e), (s[u] = "string" == typeof e ? e : o), (i[1] = s)
                    for (var p = 2; p < n; p++) i[p] = a[p]
                    return r.createElement.apply(null, i)
                }
                return r.createElement.apply(null, a)
            }
            m.displayName = "MDXCreateElement"
        },
        46: (e, t, a) => {
            a.d(t, { ZP: () => s })
            var r = a(8957),
                o = (a(9496), a(9613))
            const n = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                i = "wrapper"
            function s(e) {
                let { components: t, ...a } = e
                return (0, o.kt)(
                    i,
                    (0, r.Z)({}, n, a, { components: t, mdxType: "MDXLayout" }),
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
            s.isMDXComponent = !0
        },
        9935: (e, t, a) => {
            a.r(t),
                a.d(t, {
                    assets: () => p,
                    contentTitle: () => s,
                    default: () => m,
                    frontMatter: () => i,
                    metadata: () => l,
                    toc: () => c
                })
            var r = a(8957),
                o = (a(9496), a(9613)),
                n = a(46)
            const i = { sidebar_position: 6, title: "Repository Pattern" },
                s = void 0,
                l = {
                    unversionedId: "overview/repositories",
                    id: "overview/repositories",
                    title: "Repository Pattern",
                    description:
                        "The Repository Pattern is a design pattern commonly used in software development to separate the logic that retrieves data from a data store (such as a database) from the rest of the application's code. It provides a way to abstract and encapsulate the data access layer, making it easier to manage and maintain the codebase, improve testability, and promote a more structured and modular architecture.",
                    source: "@site/docs/overview/repositories.mdx",
                    sourceDirName: "overview",
                    slug: "/overview/repositories",
                    permalink: "/docs/overview/repositories",
                    draft: !1,
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/docs/overview/repositories.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 6,
                    frontMatter: { sidebar_position: 6, title: "Repository Pattern" },
                    sidebar: "tutorialSidebar",
                    previous: { title: "Dependencies", permalink: "/docs/overview/dependencies" },
                    next: { title: "Super Charged Cache", permalink: "/docs/overview/cache" }
                },
                p = {},
                c = [
                    { value: "Goal of a repository pattern", id: "goal-of-a-repository-pattern", level: 2 },
                    {
                        value: "Benefit of a repository pattern",
                        id: "benefit-of-a-repository-pattern",
                        level: 2
                    },
                    { value: "Create repository", id: "create-repository", level: 2 },
                    { value: "Example", id: "example", level: 3 }
                ],
                u = { toc: c },
                d = "wrapper"
            function m(e) {
                let { components: t, ...a } = e
                return (0, o.kt)(
                    d,
                    (0, r.Z)({}, u, a, { components: t, mdxType: "MDXLayout" }),
                    (0, o.kt)(
                        "p",
                        null,
                        "The Repository Pattern is a design pattern commonly used in software development to separate the logic that retrieves data from a data store (such as a database) from the rest of the application's code. It provides a way to abstract and encapsulate the data access layer, making it easier to manage and maintain the codebase, improve testability, and promote a more structured and modular architecture."
                    ),
                    (0, o.kt)("h2", { id: "goal-of-a-repository-pattern" }, "Goal of a repository pattern"),
                    (0, o.kt)(
                        "p",
                        null,
                        "The goal of the repository pattern is to abstract and centralize data access logic in software applications. By providing a consistent interface for accessing data, it promotes separation of concerns, making it easier to manage and maintain code. This pattern enhances testability, scalability, and flexibility by decoupling the application's business logic from the underlying data storage mechanisms, allowing developers to switch between different data sources (e.g., databases, APIs) without affecting the core application logic."
                    ),
                    (0, o.kt)(
                        "h2",
                        { id: "benefit-of-a-repository-pattern" },
                        "Benefit of a repository pattern"
                    ),
                    (0, o.kt)(
                        "ul",
                        null,
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)("strong", { parentName: "li" }, "Separation of Concerns"),
                            ": It separates the data access logic from the business logic, promoting a clean and maintainable codebase."
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)("strong", { parentName: "li" }, "Testability"),
                            ": It simplifies unit testing because you can easily mock or substitute the repository with fake implementations for testing purposes."
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)("strong", { parentName: "li" }, "Flexibility"),
                            ": It allows you to switch between different data storage technologies or even replace the entire data access layer without affecting the application's core logic."
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)("strong", { parentName: "li" }, "Centralized Data Access"),
                            ": It provides a centralized location for managing data access concerns, making it easier to implement caching, logging, and other cross-cutting concerns."
                        )
                    ),
                    (0, o.kt)(
                        "p",
                        null,
                        "Overall, the Repository Pattern is a valuable tool for designing software applications that need to interact with data stores while maintaining a high level of flexibility, maintainability, and testability."
                    ),
                    (0, o.kt)("h2", { id: "create-repository" }, "Create repository"),
                    (0, o.kt)("p", null, "You can create a repository by using the following CLI command:"),
                    (0, o.kt)(
                        "pre",
                        null,
                        (0, o.kt)(
                            "code",
                            { parentName: "pre", className: "language-bash" },
                            "node x build:repository <repository-name>\n"
                        )
                    ),
                    (0, o.kt)("h3", { id: "example" }, "Example"),
                    (0, o.kt)(
                        "pre",
                        null,
                        (0, o.kt)(
                            "code",
                            { parentName: "pre", className: "language-bash" },
                            "node x build:repository user\n"
                        )
                    ),
                    (0, o.kt)(
                        "p",
                        null,
                        "and this will create a file in ",
                        (0, o.kt)("inlineCode", { parentName: "p" }, "repositories/user.repository.js")
                    ),
                    (0, o.kt)(n.ZP, { mdxType: "Support" })
                )
            }
            m.isMDXComponent = !0
        }
    }
])
