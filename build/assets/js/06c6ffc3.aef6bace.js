"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [7],
    {
        9613: (e, t, r) => {
            r.d(t, { Zo: () => c, kt: () => f })
            var n = r(9496)
            function o(e, t, r) {
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
            function a(e, t) {
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
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? a(Object(r), !0).forEach(function (t) {
                              o(e, t, r[t])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : a(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                }
                return e
            }
            function i(e, t) {
                if (null == e) return {}
                var r,
                    n,
                    o = (function (e, t) {
                        if (null == e) return {}
                        var r,
                            n,
                            o = {},
                            a = Object.keys(e)
                        for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
                        return o
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e)
                    for (n = 0; n < a.length; n++)
                        (r = a[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]))
                }
                return o
            }
            var l = n.createContext({}),
                s = function (e) {
                    var t = n.useContext(l),
                        r = t
                    return e && (r = "function" == typeof e ? e(t) : p(p({}, t), e)), r
                },
                c = function (e) {
                    var t = s(e.components)
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
                d = n.forwardRef(function (e, t) {
                    var r = e.components,
                        o = e.mdxType,
                        a = e.originalType,
                        l = e.parentName,
                        c = i(e, ["components", "mdxType", "originalType", "parentName"]),
                        u = s(r),
                        d = o,
                        f = u["".concat(l, ".").concat(d)] || u[d] || m[d] || a
                    return r
                        ? n.createElement(f, p(p({ ref: t }, c), {}, { components: r }))
                        : n.createElement(f, p({ ref: t }, c))
                })
            function f(e, t) {
                var r = arguments,
                    o = t && t.mdxType
                if ("string" == typeof e || o) {
                    var a = r.length,
                        p = new Array(a)
                    p[0] = d
                    var i = {}
                    for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l])
                    ;(i.originalType = e), (i[u] = "string" == typeof e ? e : o), (p[1] = i)
                    for (var s = 2; s < a; s++) p[s] = r[s]
                    return n.createElement.apply(null, p)
                }
                return n.createElement.apply(null, r)
            }
            d.displayName = "MDXCreateElement"
        },
        46: (e, t, r) => {
            r.d(t, { ZP: () => i })
            var n = r(8957),
                o = (r(9496), r(9613))
            const a = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                p = "wrapper"
            function i(e) {
                let { components: t, ...r } = e
                return (0, o.kt)(
                    p,
                    (0, n.Z)({}, a, r, { components: t, mdxType: "MDXLayout" }),
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
        3024: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    assets: () => s,
                    contentTitle: () => i,
                    default: () => d,
                    frontMatter: () => p,
                    metadata: () => l,
                    toc: () => c
                })
            var n = r(8957),
                o = (r(9496), r(9613)),
                a = r(46)
            const p = { sidebar_position: 4, title: "Deployment" },
                i = void 0,
                l = {
                    unversionedId: "deployment",
                    id: "deployment",
                    title: "Deployment",
                    description: "you can use the following services to deploy your application:",
                    source: "@site/docs/deployment.mdx",
                    sourceDirName: ".",
                    slug: "/deployment",
                    permalink: "/docs/deployment",
                    draft: !1,
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/docs/deployment.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 4,
                    frontMatter: { sidebar_position: 4, title: "Deployment" },
                    sidebar: "tutorialSidebar",
                    previous: { title: "CLI", permalink: "/docs/cli" },
                    next: { title: "Roadmap", permalink: "/docs/roadmap" }
                },
                s = {},
                c = [],
                u = { toc: c },
                m = "wrapper"
            function d(e) {
                let { components: t, ...r } = e
                return (0, o.kt)(
                    m,
                    (0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
                    (0, o.kt)("p", null, "you can use the following services to deploy your application:"),
                    (0, o.kt)(
                        "ul",
                        null,
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/forever" },
                                "forever"
                            ),
                            " - a simple CLI tool for ensuring that a given script runs continuously (i.e. forever)"
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/pm2" },
                                "pm2"
                            ),
                            " - a production process manager for Node.js applications with a built-in load balancer"
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/nodemon" },
                                "nodemon"
                            ),
                            " - a utility that will monitor for any changes in your source and automatically restart your server"
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)(
                                "a",
                                { parentName: "li", href: "https://www.npmjs.com/package/supervisor" },
                                "supervisor"
                            ),
                            " - a supervisor program for running nodejs programs"
                        )
                    ),
                    (0, o.kt)(
                        "blockquote",
                        null,
                        (0, o.kt)(
                            "p",
                            { parentName: "blockquote" },
                            (0, o.kt)("strong", { parentName: "p" }, "Note:"),
                            " The entry point of your application is ",
                            (0, o.kt)("inlineCode", { parentName: "p" }, "server.js"),
                            " file ",
                            (0, o.kt)(
                                "strong",
                                { parentName: "p" },
                                "NOT ",
                                (0, o.kt)("inlineCode", { parentName: "strong" }, "index.js"),
                                " file."
                            )
                        )
                    ),
                    (0, o.kt)(a.ZP, { mdxType: "Support" })
                )
            }
            d.isMDXComponent = !0
        }
    }
])
