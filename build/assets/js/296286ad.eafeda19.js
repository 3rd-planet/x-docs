"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [649],
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
            function s(e, t) {
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
            var p = n.createContext({}),
                l = function (e) {
                    var t = n.useContext(p),
                        r = t
                    return e && (r = "function" == typeof e ? e(t) : i(i({}, t), e)), r
                },
                u = function (e) {
                    var t = l(e.components)
                    return n.createElement(p.Provider, { value: t }, e.children)
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
                        p = e.parentName,
                        u = s(e, ["components", "mdxType", "originalType", "parentName"]),
                        c = l(r),
                        d = a,
                        f = c["".concat(p, ".").concat(d)] || c[d] || m[d] || o
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
                    var s = {}
                    for (var p in t) hasOwnProperty.call(t, p) && (s[p] = t[p])
                    ;(s.originalType = e), (s[c] = "string" == typeof e ? e : a), (i[1] = s)
                    for (var l = 2; l < o; l++) i[l] = r[l]
                    return n.createElement.apply(null, i)
                }
                return n.createElement.apply(null, r)
            }
            d.displayName = "MDXCreateElement"
        },
        46: (e, t, r) => {
            r.d(t, { ZP: () => s })
            var n = r(8957),
                a = (r(9496), r(9613))
            const o = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                i = "wrapper"
            function s(e) {
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
            s.isMDXComponent = !0
        },
        489: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    assets: () => l,
                    contentTitle: () => s,
                    default: () => d,
                    frontMatter: () => i,
                    metadata: () => p,
                    toc: () => u
                })
            var n = r(8957),
                a = (r(9496), r(9613)),
                o = r(46)
            const i = { sidebar_position: 1, title: "First Step" },
                s = void 0,
                p = {
                    unversionedId: "overview/first-step",
                    id: "overview/first-step",
                    title: "First Step",
                    description:
                        "The first step symbolizes initiation, pushing us from inertia to action. It lays the foundation for progress, learning, and achievement. Taking that initial stride requires courage, setting the tone for the journey ahead. Even the grandest accomplishments begin with a single, crucial step, underscoring its profound significance. So, let's get started and take that first step!",
                    source: "@site/docs/overview/first-step.mdx",
                    sourceDirName: "overview",
                    slug: "/overview/first-step",
                    permalink: "/docs/overview/first-step",
                    draft: !1,
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/docs/overview/first-step.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 1,
                    frontMatter: { sidebar_position: 1, title: "First Step" },
                    sidebar: "tutorialSidebar",
                    previous: { title: "Overview", permalink: "/docs/category/overview" },
                    next: {
                        title: "Project Template",
                        permalink: "/docs/overview/opinionated-project-template"
                    }
                },
                l = {},
                u = [
                    { value: "Pre-requisites", id: "pre-requisites", level: 2 },
                    { value: "Setup", id: "setup", level: 2 },
                    { value: "Usage", id: "usage", level: 2 }
                ],
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
                        "The first step symbolizes initiation, pushing us from inertia to action. It lays the foundation for progress, learning, and achievement. Taking that initial stride requires courage, setting the tone for the journey ahead. Even the grandest accomplishments begin with a single, crucial step, underscoring its profound significance. So, let's get started and take that first step!"
                    ),
                    (0, a.kt)("h2", { id: "pre-requisites" }, "Pre-requisites"),
                    (0, a.kt)(
                        "ul",
                        null,
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("a", { parentName: "li", href: "https://nodejs.org/en/" }, "Node.js"),
                            " (version 14 or higher)"
                        ),
                        (0, a.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, a.kt)("a", { parentName: "li", href: "https://git-scm.com/" }, "Git")
                        )
                    ),
                    (0, a.kt)(
                        "blockquote",
                        null,
                        (0, a.kt)(
                            "p",
                            { parentName: "blockquote" },
                            (0, a.kt)("strong", { parentName: "p" }, "Note:"),
                            " You can use any package manager of your choice, once Node.js is installed. ",
                            (0, a.kt)("strong", { parentName: "p" }, "npm, pnpm, and yarn"),
                            " are the most popular ones."
                        )
                    ),
                    (0, a.kt)("h2", { id: "setup" }, "Setup"),
                    (0, a.kt)(
                        "p",
                        null,
                        "Setup for Framework X is simple. Just run the following command in your terminal and follow the prompts."
                    ),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)(
                            "code",
                            { parentName: "pre", className: "language-bash" },
                            "npx @3rdplanet/framework-x\n"
                        )
                    ),
                    (0, a.kt)(
                        "blockquote",
                        null,
                        (0, a.kt)(
                            "p",
                            { parentName: "blockquote" },
                            "(",
                            (0, a.kt)(
                                "a",
                                {
                                    parentName: "p",
                                    href: "https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"
                                },
                                "npx"
                            ),
                            " comes with npm 5.2+ and higher, see ",
                            (0, a.kt)(
                                "a",
                                {
                                    parentName: "p",
                                    href: "https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"
                                },
                                "instructions for older npm versions"
                            ),
                            ")"
                        )
                    ),
                    (0, a.kt)("h2", { id: "usage" }, "Usage"),
                    (0, a.kt)(
                        "p",
                        null,
                        "Framework X comes with a ready-set setup once installed. No additional setup is required. All one have to do is start the server and start building. Use the following command to start the server."
                    ),
                    (0, a.kt)(
                        "pre",
                        null,
                        (0, a.kt)("code", { parentName: "pre", className: "language-bash" }, "npm start\n")
                    ),
                    (0, a.kt)("p", null, "open http://localhost:5000 to see your app up and running."),
                    (0, a.kt)(o.ZP, { mdxType: "Support" })
                )
            }
            d.isMDXComponent = !0
        }
    }
])
