"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [952],
    {
        9613: (A, e, t) => {
            t.d(e, { Zo: () => g, kt: () => d })
            var r = t(9496)
            function n(A, e, t) {
                return (
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[e] = t),
                    A
                )
            }
            function i(A, e) {
                var t = Object.keys(A)
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(A)
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(A, e).enumerable
                        })),
                        t.push.apply(t, r)
                }
                return t
            }
            function o(A) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {}
                    e % 2
                        ? i(Object(t), !0).forEach(function (e) {
                              n(A, e, t[e])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t))
                          : i(Object(t)).forEach(function (e) {
                                Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e))
                            })
                }
                return A
            }
            function a(A, e) {
                if (null == A) return {}
                var t,
                    r,
                    n = (function (A, e) {
                        if (null == A) return {}
                        var t,
                            r,
                            n = {},
                            i = Object.keys(A)
                        for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = A[t])
                        return n
                    })(A, e)
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(A)
                    for (r = 0; r < i.length; r++)
                        (t = i[r]),
                            e.indexOf(t) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(A, t) && (n[t] = A[t]))
                }
                return n
            }
            var s = r.createContext({}),
                p = function (A) {
                    var e = r.useContext(s),
                        t = e
                    return A && (t = "function" == typeof A ? A(e) : o(o({}, e), A)), t
                },
                g = function (A) {
                    var e = p(A.components)
                    return r.createElement(s.Provider, { value: e }, A.children)
                },
                l = "mdxType",
                c = {
                    inlineCode: "code",
                    wrapper: function (A) {
                        var e = A.children
                        return r.createElement(r.Fragment, {}, e)
                    }
                },
                u = r.forwardRef(function (A, e) {
                    var t = A.components,
                        n = A.mdxType,
                        i = A.originalType,
                        s = A.parentName,
                        g = a(A, ["components", "mdxType", "originalType", "parentName"]),
                        l = p(t),
                        u = n,
                        d = l["".concat(s, ".").concat(u)] || l[u] || c[u] || i
                    return t
                        ? r.createElement(d, o(o({ ref: e }, g), {}, { components: t }))
                        : r.createElement(d, o({ ref: e }, g))
                })
            function d(A, e) {
                var t = arguments,
                    n = e && e.mdxType
                if ("string" == typeof A || n) {
                    var i = t.length,
                        o = new Array(i)
                    o[0] = u
                    var a = {}
                    for (var s in e) hasOwnProperty.call(e, s) && (a[s] = e[s])
                    ;(a.originalType = A), (a[l] = "string" == typeof A ? A : n), (o[1] = a)
                    for (var p = 2; p < i; p++) o[p] = t[p]
                    return r.createElement.apply(null, o)
                }
                return r.createElement.apply(null, t)
            }
            u.displayName = "MDXCreateElement"
        },
        46: (A, e, t) => {
            t.d(e, { ZP: () => a })
            var r = t(8957),
                n = (t(9496), t(9613))
            const i = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                o = "wrapper"
            function a(A) {
                let { components: e, ...t } = A
                return (0, n.kt)(
                    o,
                    (0, r.Z)({}, i, t, { components: e, mdxType: "MDXLayout" }),
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
            a.isMDXComponent = !0
        },
        9851: (A, e, t) => {
            t.r(e),
                t.d(e, {
                    assets: () => p,
                    contentTitle: () => a,
                    default: () => u,
                    frontMatter: () => o,
                    metadata: () => s,
                    toc: () => g
                })
            var r = t(8957),
                n = (t(9496), t(9613)),
                i = t(46)
            const o = { sidebar_position: 3, title: "Application" },
                a = void 0,
                s = {
                    unversionedId: "overview/application",
                    id: "overview/application",
                    title: "Application",
                    description:
                        "Framework X promotes modularity, as each component has a specific role and can be developed, tested, and maintained independently. This separation also enhances collaboration among developers working on different parts of the application. Additionally, Framework X is build on MVC, MVC supports flexibility, as changes in one component do not necessarily impact the others. This architecture is widely used in web development, desktop applications, and mobile apps due to its clear separation of responsibilities and its ability to accommodate evolving requirements and user interfaces.",
                    source: "@site/docs/overview/application.mdx",
                    sourceDirName: "overview",
                    slug: "/overview/application",
                    permalink: "/docs/overview/application",
                    draft: !1,
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/docs/overview/application.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 3,
                    frontMatter: { sidebar_position: 3, title: "Application" },
                    sidebar: "tutorialSidebar",
                    previous: {
                        title: "Project Template",
                        permalink: "/docs/overview/opinionated-project-template"
                    },
                    next: { title: "Features", permalink: "/docs/overview/features" }
                },
                p = {},
                g = [],
                l = { toc: g },
                c = "wrapper"
            function u(A) {
                let { components: e, ...o } = A
                return (0, n.kt)(
                    c,
                    (0, r.Z)({}, l, o, { components: e, mdxType: "MDXLayout" }),
                    (0, n.kt)(
                        "p",
                        null,
                        "Framework X promotes modularity, as each component has a specific role and can be developed, tested, and maintained independently. This separation also enhances collaboration among developers working on different parts of the application. Additionally, Framework X is build on MVC, MVC supports flexibility, as changes in one component do not necessarily impact the others. This architecture is widely used in web development, desktop applications, and mobile apps due to its clear separation of responsibilities and its ability to accommodate evolving requirements and user interfaces."
                    ),
                    (0, n.kt)(
                        "blockquote",
                        null,
                        (0, n.kt)(
                            "p",
                            { parentName: "blockquote" },
                            (0, n.kt)("strong", { parentName: "p" }, "Note:"),
                            " Framework X does not support View Layer of MVC by default as it is an API framework. However, you can use any view layer of your choice with Framework X."
                        )
                    ),
                    (0, n.kt)(
                        "p",
                        null,
                        (0, n.kt)("img", { alt: "mvc", src: t(7966).Z, width: "800", height: "460" })
                    ),
                    (0, n.kt)(i.ZP, { mdxType: "Support" })
                )
            }
            u.isMDXComponent = !0
        },
        7966: (A, e, t) => {
            t.d(e, { Z: () => r })
            const r =
                "data:image/png;base64,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"
        }
    }
])
