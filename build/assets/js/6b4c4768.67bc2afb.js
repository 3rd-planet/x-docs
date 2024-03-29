"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [93],
    {
        9613: (e, t, r) => {
            r.d(t, { Zo: () => c, kt: () => d })
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
            function i(e) {
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
            function l(e, t) {
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
            var p = n.createContext({}),
                s = function (e) {
                    var t = n.useContext(p),
                        r = t
                    return e && (r = "function" == typeof e ? e(t) : i(i({}, t), e)), r
                },
                c = function (e) {
                    var t = s(e.components)
                    return n.createElement(p.Provider, { value: t }, e.children)
                },
                u = "mdxType",
                m = {
                    inlineCode: "code",
                    wrapper: function (e) {
                        var t = e.children
                        return n.createElement(n.Fragment, {}, t)
                    }
                },
                f = n.forwardRef(function (e, t) {
                    var r = e.components,
                        o = e.mdxType,
                        a = e.originalType,
                        p = e.parentName,
                        c = l(e, ["components", "mdxType", "originalType", "parentName"]),
                        u = s(r),
                        f = o,
                        d = u["".concat(p, ".").concat(f)] || u[f] || m[f] || a
                    return r
                        ? n.createElement(d, i(i({ ref: t }, c), {}, { components: r }))
                        : n.createElement(d, i({ ref: t }, c))
                })
            function d(e, t) {
                var r = arguments,
                    o = t && t.mdxType
                if ("string" == typeof e || o) {
                    var a = r.length,
                        i = new Array(a)
                    i[0] = f
                    var l = {}
                    for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p])
                    ;(l.originalType = e), (l[u] = "string" == typeof e ? e : o), (i[1] = l)
                    for (var s = 2; s < a; s++) i[s] = r[s]
                    return n.createElement.apply(null, i)
                }
                return n.createElement.apply(null, r)
            }
            f.displayName = "MDXCreateElement"
        },
        5613: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    contentTitle: () => l,
                    default: () => m,
                    frontMatter: () => i,
                    metadata: () => p,
                    toc: () => s
                })
            var n = r(8957),
                o = (r(9496), r(9613)),
                a = r(46)
            const i = { title: "Contributors" },
                l = void 0,
                p = {
                    type: "mdx",
                    permalink: "/contributors",
                    source: "@site/src/pages/contributors.mdx",
                    title: "Contributors",
                    description:
                        "Framework X relies on a collaborative community of developers and enthusiasts who actively contribute to its development, improvement, and maintenance. This collective effort fosters innovation, ensures continuous updates, and creates a robust ecosystem around the framework, making it a dynamic and thriving platform for various applications and solutions.",
                    frontMatter: { title: "Contributors" }
                },
                s = [
                    { value: "Core Team", id: "core-team", level: 2 },
                    { value: "Want to help?", id: "want-to-help", level: 2 }
                ],
                c = { toc: s },
                u = "wrapper"
            function m(e) {
                let { components: t, ...r } = e
                return (0, o.kt)(
                    u,
                    (0, n.Z)({}, c, r, { components: t, mdxType: "MDXLayout" }),
                    (0, o.kt)(
                        "p",
                        null,
                        "Framework X relies on a collaborative community of developers and enthusiasts who actively contribute to its development, improvement, and maintenance. This collective effort fosters innovation, ensures continuous updates, and creates a robust ecosystem around the framework, making it a dynamic and thriving platform for various applications and solutions."
                    ),
                    (0, o.kt)("h2", { id: "core-team" }, "Core Team"),
                    (0, o.kt)(
                        "p",
                        null,
                        "The core team is responsible for the overall development and maintenance of the framework. It is composed of the following members:"
                    ),
                    (0, o.kt)(
                        "ul",
                        null,
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)(
                                "a",
                                { parentName: "li", href: "https://github.com/msamgan/" },
                                (0, o.kt)("strong", { parentName: "a" }, "@msamgan")
                            )
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)(
                                "a",
                                { parentName: "li", href: "https://github.com/hudaQeshta/" },
                                (0, o.kt)("strong", { parentName: "a" }, "@hudaQeshta")
                            )
                        )
                    ),
                    (0, o.kt)("h2", { id: "want-to-help" }, "Want to help?"),
                    (0, o.kt)(
                        "p",
                        null,
                        "We welcome contributions from the community. Please review the ",
                        (0, o.kt)(
                            "a",
                            {
                                parentName: "p",
                                href: "https://github.com/3rd-planet/framework-x/blob/main/CONTRIBUTING.md"
                            },
                            "Contribution Guidelines"
                        ),
                        " for more information."
                    ),
                    (0, o.kt)(a.ZP, { mdxType: "Support" })
                )
            }
            m.isMDXComponent = !0
        },
        46: (e, t, r) => {
            r.d(t, { ZP: () => l })
            var n = r(8957),
                o = (r(9496), r(9613))
            const a = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                i = "wrapper"
            function l(e) {
                let { components: t, ...r } = e
                return (0, o.kt)(
                    i,
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
            l.isMDXComponent = !0
        }
    }
])
