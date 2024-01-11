"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [452],
    {
        9613: (e, t, a) => {
            a.d(t, { Zo: () => p, kt: () => m })
            var n = a(9496)
            function r(e, t, a) {
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
            function i(e, t) {
                var a = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e)
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })),
                        a.push.apply(a, n)
                }
                return a
            }
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? i(Object(a), !0).forEach(function (t) {
                              r(e, t, a[t])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                          : i(Object(a)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            })
                }
                return e
            }
            function l(e, t) {
                if (null == e) return {}
                var a,
                    n,
                    r = (function (e, t) {
                        if (null == e) return {}
                        var a,
                            n,
                            r = {},
                            i = Object.keys(e)
                        for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
                        return r
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e)
                    for (n = 0; n < i.length; n++)
                        (a = i[n]),
                            t.indexOf(a) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]))
                }
                return r
            }
            var c = n.createContext({}),
                s = function (e) {
                    var t = n.useContext(c),
                        a = t
                    return e && (a = "function" == typeof e ? e(t) : o(o({}, t), e)), a
                },
                p = function (e) {
                    var t = s(e.components)
                    return n.createElement(c.Provider, { value: t }, e.children)
                },
                d = "mdxType",
                u = {
                    inlineCode: "code",
                    wrapper: function (e) {
                        var t = e.children
                        return n.createElement(n.Fragment, {}, t)
                    }
                },
                h = n.forwardRef(function (e, t) {
                    var a = e.components,
                        r = e.mdxType,
                        i = e.originalType,
                        c = e.parentName,
                        p = l(e, ["components", "mdxType", "originalType", "parentName"]),
                        d = s(a),
                        h = r,
                        m = d["".concat(c, ".").concat(h)] || d[h] || u[h] || i
                    return a
                        ? n.createElement(m, o(o({ ref: t }, p), {}, { components: a }))
                        : n.createElement(m, o({ ref: t }, p))
                })
            function m(e, t) {
                var a = arguments,
                    r = t && t.mdxType
                if ("string" == typeof e || r) {
                    var i = a.length,
                        o = new Array(i)
                    o[0] = h
                    var l = {}
                    for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c])
                    ;(l.originalType = e), (l[d] = "string" == typeof e ? e : r), (o[1] = l)
                    for (var s = 2; s < i; s++) o[s] = a[s]
                    return n.createElement.apply(null, o)
                }
                return n.createElement.apply(null, a)
            }
            h.displayName = "MDXCreateElement"
        },
        46: (e, t, a) => {
            a.d(t, { ZP: () => l })
            var n = a(8957),
                r = (a(9496), a(9613))
            const i = { toc: [{ value: "Support Framework X", id: "support-framework-x", level: 2 }] },
                o = "wrapper"
            function l(e) {
                let { components: t, ...a } = e
                return (0, r.kt)(
                    o,
                    (0, n.Z)({}, i, a, { components: t, mdxType: "MDXLayout" }),
                    (0, r.kt)("h2", { id: "support-framework-x" }, "Support Framework X"),
                    (0, r.kt)(
                        "ul",
                        null,
                        (0, r.kt)(
                            "li",
                            { parentName: "ul" },
                            "You can also support the project by following the organization and Star \u2b50 the project on ",
                            (0, r.kt)(
                                "a",
                                { parentName: "li", href: "https://github.com/3rd-planet/framework-x" },
                                "GitHub"
                            )
                        ),
                        (0, r.kt)(
                            "li",
                            { parentName: "ul" },
                            "Contribute by submitting ",
                            (0, r.kt)(
                                "a",
                                {
                                    parentName: "li",
                                    href: "https://github.com/3rd-planet/framework-x/issues/new/choose"
                                },
                                "issues and pull requests"
                            )
                        ),
                        (0, r.kt)(
                            "li",
                            { parentName: "ul" },
                            "Share the project with your friends and colleagues, any and all support is appreciated \ud83d\ude4f"
                        )
                    )
                )
            }
            l.isMDXComponent = !0
        },
        2031: (e, t, a) => {
            a.r(t),
                a.d(t, {
                    assets: () => s,
                    contentTitle: () => l,
                    default: () => h,
                    frontMatter: () => o,
                    metadata: () => c,
                    toc: () => p
                })
            var n = a(8957),
                r = (a(9496), a(9613)),
                i = a(46)
            const o = { sidebar_position: 7, title: "Super Charged Cache" },
                l = void 0,
                c = {
                    unversionedId: "overview/cache",
                    id: "overview/cache",
                    title: "Super Charged Cache",
                    description:
                        "By reducing the time it takes to access data, caching speeds up the performance of computers and applications. This is crucial for functions that require rapid data retrieval. In APIs, caching ensures that frequently visited URLs loads faster, providing a smoother experience for users.",
                    source: "@site/docs/overview/cache.mdx",
                    sourceDirName: "overview",
                    slug: "/overview/cache",
                    permalink: "/docs/overview/cache",
                    draft: !1,
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/docs/overview/cache.mdx",
                    tags: [],
                    version: "current",
                    sidebarPosition: 7,
                    frontMatter: { sidebar_position: 7, title: "Super Charged Cache" },
                    sidebar: "tutorialSidebar",
                    previous: { title: "Repository Pattern", permalink: "/docs/overview/repositories" },
                    next: { title: "Error Handling", permalink: "/docs/overview/error-handling" }
                },
                s = {},
                p = [
                    {
                        value: "How to use Cache in Framework X",
                        id: "how-to-use-cache-in-framework-x",
                        level: 2
                    },
                    { value: "Auto update cache", id: "auto-update-cache", level: 2 },
                    { value: "Example:", id: "example", level: 3 },
                    { value: "Available methods", id: "available-methods", level: 2 },
                    { value: "isCacheEnabled()", id: "iscacheenabled", level: 3 },
                    { value: "cacheUpdateInterval()", id: "cacheupdateinterval", level: 3 },
                    { value: "getCacheClient(config = null)", id: "getcacheclientconfig--null", level: 3 },
                    { value: "getCache(key)", id: "getcachekey", level: 3 },
                    {
                        value: "setCache(key, response, updater = null)",
                        id: "setcachekey-response-updater--null",
                        level: 3
                    },
                    { value: "deleteCache(cache)", id: "deletecachecache", level: 3 }
                ],
                d = { toc: p },
                u = "wrapper"
            function h(e) {
                let { components: t, ...a } = e
                return (0, r.kt)(
                    u,
                    (0, n.Z)({}, d, a, { components: t, mdxType: "MDXLayout" }),
                    (0, r.kt)(
                        "p",
                        null,
                        "By reducing the time it takes to access data, caching speeds up the performance of computers and applications. This is crucial for functions that require rapid data retrieval. In APIs, caching ensures that frequently visited URLs loads faster, providing a smoother experience for users."
                    ),
                    (0, r.kt)(
                        "admonition",
                        { type: "info" },
                        (0, r.kt)(
                            "p",
                            { parentName: "admonition" },
                            "Framework X uses ",
                            (0, r.kt)(
                                "strong",
                                { parentName: "p" },
                                (0, r.kt)(
                                    "a",
                                    { parentName: "strong", href: "https://www.npmjs.com/package/redis" },
                                    "Redis"
                                )
                            ),
                            " for caching. Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker."
                        )
                    ),
                    (0, r.kt)(
                        "h2",
                        { id: "how-to-use-cache-in-framework-x" },
                        "How to use Cache in Framework X"
                    ),
                    (0, r.kt)(
                        "p",
                        null,
                        "To use cache in Framework X, you need to add the set ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "CACHE_ENABLED=true"),
                        " property in your ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, ".env"),
                        " file.\nThere are 2 more keys available for cache configuration:"
                    ),
                    (0, r.kt)(
                        "ul",
                        null,
                        (0, r.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "CACHE_UPDATE_INTERVAL"),
                            " - The interval in seconds to update the cache. Default is 10 seconds."
                        ),
                        (0, r.kt)(
                            "li",
                            { parentName: "ul" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "CACHE_EXPIRE_TIME"),
                            " - The time in seconds to expire the cache. Default is 60 seconds."
                        )
                    ),
                    (0, r.kt)("h2", { id: "auto-update-cache" }, "Auto update cache"),
                    (0, r.kt)(
                        "p",
                        null,
                        "Framework X automatically updates the cache every 10 seconds. You can change this interval by setting the ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "CACHE_UPDATE_INTERVAL"),
                        " property in your ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, ".env"),
                        " file, provided the function and the parameters of the function from which the cache is generated."
                    ),
                    (0, r.kt)("h3", { id: "example" }, "Example:"),
                    (0, r.kt)(
                        "pre",
                        null,
                        (0, r.kt)(
                            "code",
                            { parentName: "pre", className: "language-js" },
                            'const {setCache, getCache} = require("@3rdplanet/x-core/cache")\n\nexports.index = async (req, res) => {\n\n    let responseData = await getCache(req.url)\n\n    if (responseData) {\n        return res.send(\n            successResponse("cache found...", responseData.response)\n        )\n    }\n\n    let someCalculationAnswer = someCalculations(1, 1, 1)\n\n    setCache(req.url, someCalculationAnswer, {\n        function: someCalculations,\n        params: [1, 1, 1]\n    }).then(() => {})\n\n    return res.send(\n        successResponse("cache in progress...", someCalculationAnswer)\n    )\n}\n\n'
                        )
                    ),
                    (0, r.kt)(
                        "p",
                        null,
                        "The above code will cache the response of the ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "someCalculations"),
                        " function. The cache will be updated every 10 seconds, by running the ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "someCalculations"),
                        " function with the parameters ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "[1, 1, 1]"),
                        ". You can access the updated cache by ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "response"),
                        " property of the ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "responseData"),
                        " object."
                    ),
                    (0, r.kt)(
                        "p",
                        null,
                        "If the ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "req.url"),
                        " is not access in ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "CACHE_EXPIRE_TIME"),
                        ", the cache will automatically delete itself."
                    ),
                    (0, r.kt)(
                        "p",
                        null,
                        "If the same request on ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "req.url"),
                        " is made within ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "CACHE_EXPIRE_TIME"),
                        ", the response will be returned from the cache and the update will continue in the background every ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "CACHE_UPDATE_INTERVAL"),
                        "."
                    ),
                    (0, r.kt)("h2", { id: "available-methods" }, "Available methods"),
                    (0, r.kt)(
                        "p",
                        null,
                        "Framework X provides the following methods for cache which can be accessed by ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, 'require("@3rdplanet/x-core/cache")'),
                        ":"
                    ),
                    (0, r.kt)("h3", { id: "iscacheenabled" }, "isCacheEnabled()"),
                    (0, r.kt)(
                        "p",
                        null,
                        "Returns ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "true"),
                        " if cache is enabled, otherwise ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "false"),
                        "."
                    ),
                    (0, r.kt)("h3", { id: "cacheupdateinterval" }, "cacheUpdateInterval()"),
                    (0, r.kt)(
                        "p",
                        null,
                        "Returns the cache update interval in seconds from the ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, ".env"),
                        " file."
                    ),
                    (0, r.kt)("h3", { id: "getcacheclientconfig--null" }, "getCacheClient(config = null)"),
                    (0, r.kt)(
                        "p",
                        null,
                        "Returns the Redis client. If the ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "config"),
                        " is not provided, the default config will be used from the ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, ".env"),
                        " file. The ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "config"),
                        " parameter is an object with the following properties:"
                    ),
                    (0, r.kt)(
                        "ol",
                        null,
                        (0, r.kt)(
                            "li",
                            { parentName: "ol" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "host"),
                            " - The Redis host. Default is ",
                            (0, r.kt)("inlineCode", { parentName: "li" }, "null"),
                            "."
                        ),
                        (0, r.kt)(
                            "li",
                            { parentName: "ol" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "port"),
                            " - The Redis port. Default is ",
                            (0, r.kt)("inlineCode", { parentName: "li" }, "6379"),
                            "."
                        ),
                        (0, r.kt)(
                            "li",
                            { parentName: "ol" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "password"),
                            " - The Redis password. Default is ",
                            (0, r.kt)("inlineCode", { parentName: "li" }, "null"),
                            "."
                        ),
                        (0, r.kt)(
                            "li",
                            { parentName: "ol" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "username"),
                            " - The Redis username. Default is ",
                            (0, r.kt)("inlineCode", { parentName: "li" }, "null"),
                            "."
                        ),
                        (0, r.kt)(
                            "li",
                            { parentName: "ol" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "database"),
                            " - The Redis database. Default is ",
                            (0, r.kt)("inlineCode", { parentName: "li" }, "0"),
                            "."
                        )
                    ),
                    (0, r.kt)("h3", { id: "getcachekey" }, "getCache(key)"),
                    (0, r.kt)(
                        "p",
                        null,
                        "Returns the cache data for the provided ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "key"),
                        ". If the cache is not found, ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "null"),
                        " will be returned. The returned data is an object with the following properties:"
                    ),
                    (0, r.kt)(
                        "ol",
                        null,
                        (0, r.kt)(
                            "li",
                            { parentName: "ol" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "key"),
                            " - The cache key."
                        ),
                        (0, r.kt)(
                            "li",
                            { parentName: "ol" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "response"),
                            " - The response from the cache."
                        ),
                        (0, r.kt)(
                            "li",
                            { parentName: "ol" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "last_accessed"),
                            " - The last accessed time of the cache."
                        ),
                        (0, r.kt)(
                            "li",
                            { parentName: "ol" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "last_updated"),
                            " - The last auto updated time of the cache."
                        )
                    ),
                    (0, r.kt)(
                        "h3",
                        { id: "setcachekey-response-updater--null" },
                        "setCache(key, response, updater = null)"
                    ),
                    (0, r.kt)(
                        "p",
                        null,
                        "Sets the cache data for the provided ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "key"),
                        ". The ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "response"),
                        " parameter is the response to be cached. The ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "updater"),
                        " parameter is an object with the following properties:"
                    ),
                    (0, r.kt)(
                        "ol",
                        null,
                        (0, r.kt)(
                            "li",
                            { parentName: "ol" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "function"),
                            " - The function to be called for auto update."
                        ),
                        (0, r.kt)(
                            "li",
                            { parentName: "ol" },
                            (0, r.kt)("inlineCode", { parentName: "li" }, "params"),
                            " - The parameters to be passed to the function."
                        )
                    ),
                    (0, r.kt)("h3", { id: "deletecachecache" }, "deleteCache(cache)"),
                    (0, r.kt)(
                        "p",
                        null,
                        "Deletes the provided ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "cache"),
                        " object which is returned from the ",
                        (0, r.kt)("inlineCode", { parentName: "p" }, "getCache"),
                        " method."
                    ),
                    (0, r.kt)(i.ZP, { mdxType: "Support" })
                )
            }
            h.isMDXComponent = !0
        }
    }
])
