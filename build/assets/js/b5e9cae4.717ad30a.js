"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [317],
    {
        9613: (e, t, a) => {
            a.d(t, { Zo: () => p, kt: () => f })
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
            function l(e, t) {
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
            var s = r.createContext({}),
                u = function (e) {
                    var t = r.useContext(s),
                        a = t
                    return e && (a = "function" == typeof e ? e(t) : i(i({}, t), e)), a
                },
                p = function (e) {
                    var t = u(e.components)
                    return r.createElement(s.Provider, { value: t }, e.children)
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
                    var a = e.components,
                        o = e.mdxType,
                        n = e.originalType,
                        s = e.parentName,
                        p = l(e, ["components", "mdxType", "originalType", "parentName"]),
                        c = u(a),
                        m = o,
                        f = c["".concat(s, ".").concat(m)] || c[m] || d[m] || n
                    return a
                        ? r.createElement(f, i(i({ ref: t }, p), {}, { components: a }))
                        : r.createElement(f, i({ ref: t }, p))
                })
            function f(e, t) {
                var a = arguments,
                    o = t && t.mdxType
                if ("string" == typeof e || o) {
                    var n = a.length,
                        i = new Array(n)
                    i[0] = m
                    var l = {}
                    for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s])
                    ;(l.originalType = e), (l[c] = "string" == typeof e ? e : o), (i[1] = l)
                    for (var u = 2; u < n; u++) i[u] = a[u]
                    return r.createElement.apply(null, i)
                }
                return r.createElement.apply(null, a)
            }
            m.displayName = "MDXCreateElement"
        },
        46: (e, t, a) => {
            a.d(t, { ZP: () => l })
            var r = a(8957),
                o = (a(9496), a(9613))
            const n = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                i = "wrapper"
            function l(e) {
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
            l.isMDXComponent = !0
        },
        8777: (e, t, a) => {
            a.r(t),
                a.d(t, {
                    assets: () => u,
                    contentTitle: () => l,
                    default: () => m,
                    frontMatter: () => i,
                    metadata: () => s,
                    toc: () => p
                })
            var r = a(8957),
                o = (a(9496), a(9613)),
                n = a(46)
            const i = { sidebar_position: 5, title: "Roadmap" },
                l = void 0,
                s = {
                    unversionedId: "roadmap",
                    id: "roadmap",
                    title: "Roadmap",
                    description:
                        "Exciting plans ahead! We're diligently crafting a roadmap to enhance your experience. Our focus is on innovations that will elevate our services, driven by your valuable feedback. Stay tuned for a journey of improvements designed to meet your needs and exceed expectations. Your satisfaction fuels our framework's success.",
                    source: "@site/docs/roadmap.mdx",
                    sourceDirName: ".",
                    slug: "/roadmap",
                    permalink: "/docs/roadmap",
                    draft: !1,
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/docs/roadmap.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 5,
                    frontMatter: { sidebar_position: 5, title: "Roadmap" },
                    sidebar: "tutorialSidebar",
                    previous: { title: "Deployment", permalink: "/docs/deployment" }
                },
                u = {},
                p = [
                    { value: "Features in the pipeline", id: "features-in-the-pipeline", level: 2 },
                    { value: "Feature Suggestions", id: "feature-suggestions", level: 2 }
                ],
                c = { toc: p },
                d = "wrapper"
            function m(e) {
                let { components: t, ...a } = e
                return (0, o.kt)(
                    d,
                    (0, r.Z)({}, c, a, { components: t, mdxType: "MDXLayout" }),
                    (0, o.kt)(
                        "p",
                        null,
                        "Exciting plans ahead! We're diligently crafting a roadmap to enhance your experience. Our focus is on innovations that will elevate our services, driven by your valuable feedback. Stay tuned for a journey of improvements designed to meet your needs and exceed expectations. Your satisfaction fuels our framework's success."
                    ),
                    (0, o.kt)("h2", { id: "features-in-the-pipeline" }, "Features in the pipeline"),
                    (0, o.kt)(
                        "ul",
                        null,
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)("strong", { parentName: "li" }, "Authentication Module"),
                            " - We're working on a new authentication module that will allow you to create and manage users. This will be a great addition to the framework, and will be available as a separate package."
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)("strong", { parentName: "li" }, "Role and Permissions Module"),
                            " - We're also working on role and permissions module that will allow you to create and manage roles and permissions as per the needs of your application. This will be available as a separate package."
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)("strong", { parentName: "li" }, "Social Login"),
                            " - We're working on a social login module that will allow you to integrate social login into your application. This will be available as a separate package."
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)("strong", { parentName: "li" }, "Notification Module"),
                            " - We're working on a notification module that will allow you to create and manage notification.Notification email, sms, push, in-app, etc. This will be available as a separate package."
                        ),
                        (0, o.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, o.kt)("strong", { parentName: "li" }, "UI Layer"),
                            " - We're working on a new UI for the framework. Which will be available with the Authentication Module. You will be able to choose form a number of platforms like React, Vue, Angular, etc."
                        )
                    ),
                    (0, o.kt)("h2", { id: "feature-suggestions" }, "Feature Suggestions"),
                    (0, o.kt)(
                        "p",
                        null,
                        "We're always looking for ways to improve our services. If you have any suggestions, please feel free to share them with us. We'd love to hear from you!\nshare your suggestions with us at ",
                        (0, o.kt)(
                            "a",
                            {
                                parentName: "p",
                                href: "https://github.com/3rd-planet/framework-x/issues/new/choose"
                            },
                            "GitHub"
                        )
                    ),
                    (0, o.kt)(n.ZP, { mdxType: "Support" })
                )
            }
            m.isMDXComponent = !0
        }
    }
])
