"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [216],
    {
        9613: (e, t, r) => {
            r.d(t, { Zo: () => u, kt: () => f })
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
            function o(e, t) {
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
            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? o(Object(r), !0).forEach(function (t) {
                              a(e, t, r[t])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : o(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                }
                return e
            }
            function p(e, t) {
                if (null == e) return {}
                var r,
                    n,
                    a = (function (e, t) {
                        if (null == e) return {}
                        var r,
                            n,
                            a = {},
                            o = Object.keys(e)
                        for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r])
                        return a
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e)
                    for (n = 0; n < o.length; n++)
                        (r = o[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]))
                }
                return a
            }
            var l = n.createContext({}),
                s = function (e) {
                    var t = n.useContext(l),
                        r = t
                    return e && (r = "function" == typeof e ? e(t) : i(i({}, t), e)), r
                },
                u = function (e) {
                    var t = s(e.components)
                    return n.createElement(l.Provider, { value: t }, e.children)
                },
                c = "mdxType",
                m = {
                    inlineCode: "code",
                    wrapper: function (e) {
                        var t = e.children
                        return n.createElement(n.Fragment, {}, t)
                    }
                },
                d = n.forwardRef(function (e, t) {
                    var r = e.components,
                        a = e.mdxType,
                        o = e.originalType,
                        l = e.parentName,
                        u = p(e, ["components", "mdxType", "originalType", "parentName"]),
                        c = s(r),
                        d = a,
                        f = c["".concat(l, ".").concat(d)] || c[d] || m[d] || o
                    return r
                        ? n.createElement(f, i(i({ ref: t }, u), {}, { components: r }))
                        : n.createElement(f, i({ ref: t }, u))
                })
            function f(e, t) {
                var r = arguments,
                    a = t && t.mdxType
                if ("string" == typeof e || a) {
                    var o = r.length,
                        i = new Array(o)
                    i[0] = d
                    var p = {}
                    for (var l in t) hasOwnProperty.call(t, l) && (p[l] = t[l])
                    ;(p.originalType = e), (p[c] = "string" == typeof e ? e : a), (i[1] = p)
                    for (var s = 2; s < o; s++) i[s] = r[s]
                    return n.createElement.apply(null, i)
                }
                return n.createElement.apply(null, r)
            }
            d.displayName = "MDXCreateElement"
        },
        46: (e, t, r) => {
            r.d(t, { ZP: () => p })
            var n = r(8957),
                a = (r(9496), r(9613))
            const o = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                i = "wrapper"
            function p(e) {
                let { components: t, ...r } = e
                return (0, a.kt)(
                    i,
                    (0, n.Z)({}, o, r, { components: t, mdxType: "MDXLayout" }),
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
            p.isMDXComponent = !0
        },
        4318: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    assets: () => s,
                    contentTitle: () => p,
                    default: () => d,
                    frontMatter: () => i,
                    metadata: () => l,
                    toc: () => u
                })
            var n = r(8957),
                a = (r(9496), r(9613)),
                o = r(46)
            const i = { sidebar_position: 4, title: "Features" },
                p = void 0,
                l = {
                    unversionedId: "overview/features",
                    id: "overview/features",
                    title: "Features",
                    description:
                        "Framework X comprises a number of features that are designed to make it easy to build and maintain complex web applications. These features include:",
                    source: "@site/docs/overview/features.mdx",
                    sourceDirName: "overview",
                    slug: "/overview/features",
                    permalink: "/docs/overview/features",
                    draft: !1,
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/docs/overview/features.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 4,
                    frontMatter: { sidebar_position: 4, title: "Features" },
                    sidebar: "tutorialSidebar",
                    previous: { title: "Application", permalink: "/docs/overview/application" },
                    next: { title: "Dependencies", permalink: "/docs/overview/dependencies" }
                },
                s = {},
                u = [],
                c = { toc: u },
                m = "wrapper"
            function d(e) {
                let { components: t, ...r } = e
                return (0, a.kt)(
                    m,
                    (0, n.Z)({}, c, r, { components: t, mdxType: "MDXLayout" }),
                    (0, a.kt)(
                        "p",
                        null,
                        "Framework X comprises a number of features that are designed to make it easy to build and maintain complex web applications. These features include:"
                    ),
                    (0, a.kt)(
                        "ul",
                        null,
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            "An ",
                            (0, a.kt)("strong", { parentName: "li" }, "MVC based architecture"),
                            " for building scalable applications"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            "A ",
                            (0, a.kt)("strong", { parentName: "li" }, "routing solution"),
                            " that lets you build single-page applications with ease"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("strong", { parentName: "li" }, "Inbuilt testing Architecture"),
                            " that lets you test your application's code with ease"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("strong", { parentName: "li" }, "TypeScript support"),
                            " "
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            "A ",
                            (0, a.kt)("strong", { parentName: "li" }, "CLI"),
                            " that lets you create, build, test, and run your application with ease"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("strong", { parentName: "li" }, "ORM support"),
                            " (sequelize, mongoose) "
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("strong", { parentName: "li" }, "Multiple Package Manager support"),
                            " (npm, yarn, pnpm, bun) "
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("strong", { parentName: "li" }, "Inbuilt support for multiple databases"),
                            " via ORM"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)(
                                "strong",
                                { parentName: "li" },
                                "Inbuilt support for multiple templating engines"
                            ),
                            " (ejs, pug, handlebars, mustache, nunjucks, twig, vash, and more) via Express"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("strong", { parentName: "li" }, "Docker support"),
                            " "
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("strong", { parentName: "li" }, "Inbuilt Repository Pattern"),
                            " for building scalable applications"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("strong", { parentName: "li" }, "Logging support"),
                            "  using Simple Node Logger"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)(
                                "strong",
                                { parentName: "li" },
                                "Inbuilt support for Super Charged Cache"
                            ),
                            " With Redis. See ",
                            (0, a.kt)(
                                "a",
                                { parentName: "li", href: "/docs/overview/cache" },
                                "Cache documentation"
                            ),
                            " for more details"
                        )
                    ),
                    (0, a.kt)(o.ZP, { mdxType: "Support" })
                )
            }
            d.isMDXComponent = !0
        }
    }
])
