"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [937],
    {
        9613: (e, t, r) => {
            r.d(t, { Zo: () => u, kt: () => h })
            var o = r(9496)
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
            function i(e, t) {
                var r = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e)
                    t &&
                        (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })),
                        r.push.apply(r, o)
                }
                return r
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? i(Object(r), !0).forEach(function (t) {
                              n(e, t, r[t])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : i(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                }
                return e
            }
            function s(e, t) {
                if (null == e) return {}
                var r,
                    o,
                    n = (function (e, t) {
                        if (null == e) return {}
                        var r,
                            o,
                            n = {},
                            i = Object.keys(e)
                        for (o = 0; o < i.length; o++) (r = i[o]), t.indexOf(r) >= 0 || (n[r] = e[r])
                        return n
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e)
                    for (o = 0; o < i.length; o++)
                        (r = i[o]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]))
                }
                return n
            }
            var l = o.createContext({}),
                c = function (e) {
                    var t = o.useContext(l),
                        r = t
                    return e && (r = "function" == typeof e ? e(t) : a(a({}, t), e)), r
                },
                u = function (e) {
                    var t = c(e.components)
                    return o.createElement(l.Provider, { value: t }, e.children)
                },
                p = "mdxType",
                d = {
                    inlineCode: "code",
                    wrapper: function (e) {
                        var t = e.children
                        return o.createElement(o.Fragment, {}, t)
                    }
                },
                m = o.forwardRef(function (e, t) {
                    var r = e.components,
                        n = e.mdxType,
                        i = e.originalType,
                        l = e.parentName,
                        u = s(e, ["components", "mdxType", "originalType", "parentName"]),
                        p = c(r),
                        m = n,
                        h = p["".concat(l, ".").concat(m)] || p[m] || d[m] || i
                    return r
                        ? o.createElement(h, a(a({ ref: t }, u), {}, { components: r }))
                        : o.createElement(h, a({ ref: t }, u))
                })
            function h(e, t) {
                var r = arguments,
                    n = t && t.mdxType
                if ("string" == typeof e || n) {
                    var i = r.length,
                        a = new Array(i)
                    a[0] = m
                    var s = {}
                    for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l])
                    ;(s.originalType = e), (s[p] = "string" == typeof e ? e : n), (a[1] = s)
                    for (var c = 2; c < i; c++) a[c] = r[c]
                    return o.createElement.apply(null, a)
                }
                return o.createElement.apply(null, r)
            }
            m.displayName = "MDXCreateElement"
        },
        46: (e, t, r) => {
            r.d(t, { ZP: () => s })
            var o = r(8957),
                n = (r(9496), r(9613))
            const i = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                a = "wrapper"
            function s(e) {
                let { components: t, ...r } = e
                return (0, n.kt)(
                    a,
                    (0, o.Z)({}, i, r, { components: t, mdxType: "MDXLayout" }),
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
            s.isMDXComponent = !0
        },
        2504: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    assets: () => c,
                    contentTitle: () => s,
                    default: () => m,
                    frontMatter: () => a,
                    metadata: () => l,
                    toc: () => u
                })
            var o = r(8957),
                n = (r(9496), r(9613)),
                i = r(46)
            const a = { sidebar_position: 1 },
                s = "Introduction",
                l = {
                    unversionedId: "introduction",
                    id: "introduction",
                    title: "Introduction",
                    description: "Your Accelerated Path to API Creation",
                    source: "@site/docs/introduction.mdx",
                    sourceDirName: ".",
                    slug: "/introduction",
                    permalink: "/docs/introduction",
                    draft: !1,
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/docs/introduction.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 1,
                    frontMatter: { sidebar_position: 1 },
                    sidebar: "tutorialSidebar",
                    next: { title: "Overview", permalink: "/docs/category/overview" }
                },
                c = {},
                u = [
                    { value: "What is Framework X?", id: "what-is-framework-x", level: 2 },
                    { value: "Vision", id: "vision", level: 2 },
                    { value: "Motivation", id: "motivation", level: 2 }
                ],
                p = { toc: u },
                d = "wrapper"
            function m(e) {
                let { components: t, ...r } = e
                return (0, n.kt)(
                    d,
                    (0, o.Z)({}, p, r, { components: t, mdxType: "MDXLayout" }),
                    (0, n.kt)("h1", { id: "introduction" }, "Introduction"),
                    (0, n.kt)(
                        "blockquote",
                        null,
                        (0, n.kt)("p", { parentName: "blockquote" }, "Your Accelerated Path to API Creation")
                    ),
                    (0, n.kt)("h2", { id: "what-is-framework-x" }, "What is Framework X?"),
                    (0, n.kt)(
                        "p",
                        null,
                        "In the dynamic realm of web development, efficiency and structure are paramount. Enter Framework X, a game-changing solution designed to revolutionize the process of crafting APIs. With a focus on speed and simplicity, Framework X is the perfect tool for developers of all skill levels."
                    ),
                    (0, n.kt)(
                        "p",
                        null,
                        "Framework X emerges as a beacon for developers seeking to streamline their API creation journey. Crafted with ingenuity, it offers an ingenious approach to expediting development while upholding a rigid architectural foundation."
                    ),
                    (0, n.kt)(
                        "p",
                        null,
                        "The framework's core strength lies in its seamless integration with Sequelize, a powerful Object-Relational Mapping (ORM) tool. This integration empowers developers to effortlessly define models, establish relationships, and interact with their database, all while adhering to the coveted model and controller paradigm."
                    ),
                    (0, n.kt)(
                        "p",
                        null,
                        "Though, Framework X's utility extends far beyond its integration with Sequelize. The framework also offers a robust routing system, allowing developers to easily define their API endpoints, And with the help of the framework's built-in middleware, developers can easily implement authentication, logging, and more."
                    ),
                    (0, n.kt)(
                        "p",
                        null,
                        "What truly sets Framework X apart is its meticulously structured architecture. It provides developers with a clear and standardized layout for models, controllers, and routes, eliminating the hassle of conceptualizing the organization from scratch. This rigid structure not only saves time but also cultivates a consistent and maintainable codebase."
                    ),
                    (0, n.kt)(
                        "p",
                        null,
                        "In this fast-paced digital landscape, Framework X stands as a testament to innovation and practicality. Whether you're a seasoned developer or just embarking on your coding journey, Framework X equips you with the tools to propel your API development to unprecedented heights. Say goodbye to ambiguity and welcome the dawn of swift, structured, and successful API creation with Framework X."
                    ),
                    (0, n.kt)("h2", { id: "vision" }, "Vision"),
                    (0, n.kt)(
                        "p",
                        null,
                        "The vision of Framework X is to provide developers with a simple, yet powerful, tool to create APIs. The framework is designed to be easy to use, while still providing the flexibility to create complex APIs. The framework is also designed to be extensible, allowing developers to easily add new features and functionality."
                    ),
                    (0, n.kt)("h2", { id: "motivation" }, "Motivation"),
                    (0, n.kt)(
                        "p",
                        null,
                        "The motivation behind Framework X is the pain every developer goes through ones in their life. The pain of creating a new API setup from scratch. In the era of microservices, APIs are the backbone of every application, and the framework is designed to make the process of creating APIs easier and faster to strengthen that backbone."
                    ),
                    (0, n.kt)(i.ZP, { mdxType: "Support" })
                )
            }
            m.isMDXComponent = !0
        }
    }
])
