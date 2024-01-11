"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [918],
    {
        1706: (e, t, a) => {
            a.d(t, { Z: () => g })
            var n = a(8957),
                l = a(9496),
                r = a(5924),
                o = a(8376),
                s = a(412),
                c = a(8139),
                i = a(3867),
                d = a(5661),
                m = a(9089)
            function u(e) {
                return l.createElement(
                    "svg",
                    (0, n.Z)({ viewBox: "0 0 24 24" }, e),
                    l.createElement("path", {
                        d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
                        fill: "currentColor"
                    })
                )
            }
            const p = { breadcrumbHomeIcon: "breadcrumbHomeIcon_BZAf" }
            function b() {
                const e = (0, m.Z)("/")
                return l.createElement(
                    "li",
                    { className: "breadcrumbs__item" },
                    l.createElement(
                        i.Z,
                        {
                            "aria-label": (0, d.I)({
                                id: "theme.docs.breadcrumbs.home",
                                message: "Home page",
                                description: "The ARIA label for the home page in the breadcrumbs"
                            }),
                            className: "breadcrumbs__link",
                            href: e
                        },
                        l.createElement(u, { className: p.breadcrumbHomeIcon })
                    )
                )
            }
            const E = { breadcrumbsContainer: "breadcrumbsContainer__9vB" }
            function h(e) {
                let { children: t, href: a, isLast: n } = e
                const r = "breadcrumbs__link"
                return n
                    ? l.createElement("span", { className: r, itemProp: "name" }, t)
                    : a
                      ? l.createElement(
                            i.Z,
                            { className: r, href: a, itemProp: "item" },
                            l.createElement("span", { itemProp: "name" }, t)
                        )
                      : l.createElement("span", { className: r }, t)
            }
            function v(e) {
                let { children: t, active: a, index: o, addMicrodata: s } = e
                return l.createElement(
                    "li",
                    (0, n.Z)(
                        {},
                        s && {
                            itemScope: !0,
                            itemProp: "itemListElement",
                            itemType: "https://schema.org/ListItem"
                        },
                        { className: (0, r.Z)("breadcrumbs__item", { "breadcrumbs__item--active": a }) }
                    ),
                    t,
                    l.createElement("meta", { itemProp: "position", content: String(o + 1) })
                )
            }
            function g() {
                const e = (0, s.s1)(),
                    t = (0, c.Ns)()
                return e
                    ? l.createElement(
                          "nav",
                          {
                              className: (0, r.Z)(o.k.docs.docBreadcrumbs, E.breadcrumbsContainer),
                              "aria-label": (0, d.I)({
                                  id: "theme.docs.breadcrumbs.navAriaLabel",
                                  message: "Breadcrumbs",
                                  description: "The ARIA label for the breadcrumbs"
                              })
                          },
                          l.createElement(
                              "ul",
                              {
                                  className: "breadcrumbs",
                                  itemScope: !0,
                                  itemType: "https://schema.org/BreadcrumbList"
                              },
                              t && l.createElement(b, null),
                              e.map((t, a) => {
                                  const n = a === e.length - 1
                                  return l.createElement(
                                      v,
                                      { key: a, active: n, index: a, addMicrodata: !!t.href },
                                      l.createElement(h, { href: t.href, isLast: n }, t.label)
                                  )
                              })
                          )
                      )
                    : null
            }
        },
        2040: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Y })
            var n = a(9496),
                l = a(4141),
                r = a(8489)
            const o = n.createContext(null)
            function s(e) {
                let { children: t, content: a } = e
                const l = (function (e) {
                    return (0, n.useMemo)(
                        () => ({
                            metadata: e.metadata,
                            frontMatter: e.frontMatter,
                            assets: e.assets,
                            contentTitle: e.contentTitle,
                            toc: e.toc
                        }),
                        [e]
                    )
                })(a)
                return n.createElement(o.Provider, { value: l }, t)
            }
            function c() {
                const e = (0, n.useContext)(o)
                if (null === e) throw new r.i6("DocProvider")
                return e
            }
            function i() {
                const { metadata: e, frontMatter: t, assets: a } = c()
                return n.createElement(l.d, {
                    title: e.title,
                    description: e.description,
                    keywords: t.keywords,
                    image: a.image ?? t.image
                })
            }
            var d = a(5924),
                m = a(9906),
                u = a(91)
            function p() {
                const { metadata: e } = c()
                return n.createElement(u.Z, { previous: e.previous, next: e.next })
            }
            var b = a(1188),
                E = a(1980),
                h = a(8376),
                v = a(5661)
            function g(e) {
                let { lastUpdatedAt: t, formattedLastUpdatedAt: a } = e
                return n.createElement(
                    v.Z,
                    {
                        id: "theme.lastUpdated.atDate",
                        description: "The words used to describe on which date a page has been last updated",
                        values: {
                            date: n.createElement(
                                "b",
                                null,
                                n.createElement("time", { dateTime: new Date(1e3 * t).toISOString() }, a)
                            )
                        }
                    },
                    " on {date}"
                )
            }
            function f(e) {
                let { lastUpdatedBy: t } = e
                return n.createElement(
                    v.Z,
                    {
                        id: "theme.lastUpdated.byUser",
                        description: "The words used to describe by who the page has been last updated",
                        values: { user: n.createElement("b", null, t) }
                    },
                    " by {user}"
                )
            }
            function _(e) {
                let { lastUpdatedAt: t, formattedLastUpdatedAt: a, lastUpdatedBy: l } = e
                return n.createElement(
                    "span",
                    { className: h.k.common.lastUpdated },
                    n.createElement(
                        v.Z,
                        {
                            id: "theme.lastUpdated.lastUpdatedAtBy",
                            description:
                                "The sentence used to display when a page has been last updated, and by who",
                            values: {
                                atDate:
                                    t && a
                                        ? n.createElement(g, { lastUpdatedAt: t, formattedLastUpdatedAt: a })
                                        : "",
                                byUser: l ? n.createElement(f, { lastUpdatedBy: l }) : ""
                            }
                        },
                        "Last updated{atDate}{byUser}"
                    ),
                    !1
                )
            }
            var Z = a(8957)
            const N = { iconEdit: "iconEdit_OYEL" }
            function L(e) {
                let { className: t, ...a } = e
                return n.createElement(
                    "svg",
                    (0, Z.Z)(
                        {
                            fill: "currentColor",
                            height: "20",
                            width: "20",
                            viewBox: "0 0 40 40",
                            className: (0, d.Z)(N.iconEdit, t),
                            "aria-hidden": "true"
                        },
                        a
                    ),
                    n.createElement(
                        "g",
                        null,
                        n.createElement("path", {
                            d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
                        })
                    )
                )
            }
            function k(e) {
                let { editUrl: t } = e
                return n.createElement(
                    "a",
                    {
                        href: t,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: h.k.common.editThisPage
                    },
                    n.createElement(L, null),
                    n.createElement(
                        v.Z,
                        {
                            id: "theme.common.editThisPage",
                            description: "The link label to edit the current page"
                        },
                        "Edit this page"
                    )
                )
            }
            var C = a(3867)
            const T = { tag: "tag_m0f0", tagRegular: "tagRegular_BRdb", tagWithCount: "tagWithCount_dwsf" }
            function U(e) {
                let { permalink: t, label: a, count: l } = e
                return n.createElement(
                    C.Z,
                    { href: t, className: (0, d.Z)(T.tag, l ? T.tagWithCount : T.tagRegular) },
                    a,
                    l && n.createElement("span", null, l)
                )
            }
            const w = { tags: "tags_N5g9", tag: "tag_TpKC" }
            function x(e) {
                let { tags: t } = e
                return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                        "b",
                        null,
                        n.createElement(
                            v.Z,
                            { id: "theme.tags.tagsListLabel", description: "The label alongside a tag list" },
                            "Tags:"
                        )
                    ),
                    n.createElement(
                        "ul",
                        { className: (0, d.Z)(w.tags, "padding--none", "margin-left--sm") },
                        t.map((e) => {
                            let { label: t, permalink: a } = e
                            return n.createElement(
                                "li",
                                { key: a, className: w.tag },
                                n.createElement(U, { label: t, permalink: a })
                            )
                        })
                    )
                )
            }
            const B = { lastUpdated: "lastUpdated_e0Br" }
            function y(e) {
                return n.createElement(
                    "div",
                    { className: (0, d.Z)(h.k.docs.docFooterTagsRow, "row margin-bottom--sm") },
                    n.createElement("div", { className: "col" }, n.createElement(x, e))
                )
            }
            function A(e) {
                let { editUrl: t, lastUpdatedAt: a, lastUpdatedBy: l, formattedLastUpdatedAt: r } = e
                return n.createElement(
                    "div",
                    { className: (0, d.Z)(h.k.docs.docFooterEditMetaRow, "row") },
                    n.createElement("div", { className: "col" }, t && n.createElement(k, { editUrl: t })),
                    n.createElement(
                        "div",
                        { className: (0, d.Z)("col", B.lastUpdated) },
                        (a || l) &&
                            n.createElement(_, {
                                lastUpdatedAt: a,
                                formattedLastUpdatedAt: r,
                                lastUpdatedBy: l
                            })
                    )
                )
            }
            function M() {
                const { metadata: e } = c(),
                    { editUrl: t, lastUpdatedAt: a, formattedLastUpdatedAt: l, lastUpdatedBy: r, tags: o } = e,
                    s = o.length > 0,
                    i = !!(t || a || r)
                return s || i
                    ? n.createElement(
                          "footer",
                          { className: (0, d.Z)(h.k.docs.docFooter, "docusaurus-mt-lg") },
                          s && n.createElement(y, { tags: o }),
                          i &&
                              n.createElement(A, {
                                  editUrl: t,
                                  lastUpdatedAt: a,
                                  lastUpdatedBy: r,
                                  formattedLastUpdatedAt: l
                              })
                      )
                    : null
            }
            var I = a(3037),
                H = a(7724)
            const V = {
                tocCollapsibleButton: "tocCollapsibleButton_bcUr",
                tocCollapsibleButtonExpanded: "tocCollapsibleButtonExpanded_zdtX"
            }
            function P(e) {
                let { collapsed: t, ...a } = e
                return n.createElement(
                    "button",
                    (0, Z.Z)({ type: "button" }, a, {
                        className: (0, d.Z)(
                            "clean-btn",
                            V.tocCollapsibleButton,
                            !t && V.tocCollapsibleButtonExpanded,
                            a.className
                        )
                    }),
                    n.createElement(
                        v.Z,
                        {
                            id: "theme.TOCCollapsible.toggleButtonLabel",
                            description: "The label used by the button on the collapsible TOC component"
                        },
                        "On this page"
                    )
                )
            }
            const S = {
                tocCollapsible: "tocCollapsible_uPSR",
                tocCollapsibleContent: "tocCollapsibleContent_JV4_",
                tocCollapsibleExpanded: "tocCollapsibleExpanded_V6SO"
            }
            function R(e) {
                let { toc: t, className: a, minHeadingLevel: l, maxHeadingLevel: r } = e
                const { collapsed: o, toggleCollapsed: s } = (0, I.u)({ initialState: !0 })
                return n.createElement(
                    "div",
                    { className: (0, d.Z)(S.tocCollapsible, !o && S.tocCollapsibleExpanded, a) },
                    n.createElement(P, { collapsed: o, onClick: s }),
                    n.createElement(
                        I.z,
                        { lazy: !0, className: S.tocCollapsibleContent, collapsed: o },
                        n.createElement(H.Z, { toc: t, minHeadingLevel: l, maxHeadingLevel: r })
                    )
                )
            }
            const D = { tocMobile: "tocMobile_EIeq" }
            function z() {
                const { toc: e, frontMatter: t } = c()
                return n.createElement(R, {
                    toc: e,
                    minHeadingLevel: t.toc_min_heading_level,
                    maxHeadingLevel: t.toc_max_heading_level,
                    className: (0, d.Z)(h.k.docs.docTocMobile, D.tocMobile)
                })
            }
            var F = a(2843)
            function O() {
                const { toc: e, frontMatter: t } = c()
                return n.createElement(F.Z, {
                    toc: e,
                    minHeadingLevel: t.toc_min_heading_level,
                    maxHeadingLevel: t.toc_max_heading_level,
                    className: h.k.docs.docTocDesktop
                })
            }
            var q = a(6350),
                J = a(8441)
            function W(e) {
                let { children: t } = e
                const a = (function () {
                    const { metadata: e, frontMatter: t, contentTitle: a } = c()
                    return t.hide_title || void 0 !== a ? null : e.title
                })()
                return n.createElement(
                    "div",
                    { className: (0, d.Z)(h.k.docs.docMarkdown, "markdown") },
                    a && n.createElement("header", null, n.createElement(q.Z, { as: "h1" }, a)),
                    n.createElement(J.Z, null, t)
                )
            }
            var G = a(1706)
            const K = { docItemContainer: "docItemContainer_odLl", docItemCol: "docItemCol_dpSd" }
            function X(e) {
                let { children: t } = e
                const a = (function () {
                    const { frontMatter: e, toc: t } = c(),
                        a = (0, m.i)(),
                        l = e.hide_table_of_contents,
                        r = !l && t.length > 0
                    return {
                        hidden: l,
                        mobile: r ? n.createElement(z, null) : void 0,
                        desktop: !r || ("desktop" !== a && "ssr" !== a) ? void 0 : n.createElement(O, null)
                    }
                })()
                return n.createElement(
                    "div",
                    { className: "row" },
                    n.createElement(
                        "div",
                        { className: (0, d.Z)("col", !a.hidden && K.docItemCol) },
                        n.createElement(b.Z, null),
                        n.createElement(
                            "div",
                            { className: K.docItemContainer },
                            n.createElement(
                                "article",
                                null,
                                n.createElement(G.Z, null),
                                n.createElement(E.Z, null),
                                a.mobile,
                                n.createElement(W, null, t),
                                n.createElement(M, null)
                            ),
                            n.createElement(p, null)
                        )
                    ),
                    a.desktop && n.createElement("div", { className: "col col--3" }, a.desktop)
                )
            }
            function Y(e) {
                const t = `docs-doc-id-${e.content.metadata.unversionedId}`,
                    a = e.content
                return n.createElement(
                    s,
                    { content: e.content },
                    n.createElement(
                        l.FG,
                        { className: t },
                        n.createElement(i, null),
                        n.createElement(X, null, n.createElement(a, null))
                    )
                )
            }
        },
        91: (e, t, a) => {
            a.d(t, { Z: () => i })
            var n = a(8957),
                l = a(9496),
                r = a(5661),
                o = a(5924),
                s = a(3867)
            function c(e) {
                const { permalink: t, title: a, subLabel: n, isNext: r } = e
                return l.createElement(
                    s.Z,
                    {
                        className: (0, o.Z)(
                            "pagination-nav__link",
                            r ? "pagination-nav__link--next" : "pagination-nav__link--prev"
                        ),
                        to: t
                    },
                    n && l.createElement("div", { className: "pagination-nav__sublabel" }, n),
                    l.createElement("div", { className: "pagination-nav__label" }, a)
                )
            }
            function i(e) {
                const { previous: t, next: a } = e
                return l.createElement(
                    "nav",
                    {
                        className: "pagination-nav docusaurus-mt-lg",
                        "aria-label": (0, r.I)({
                            id: "theme.docs.paginator.navAriaLabel",
                            message: "Docs pages",
                            description: "The ARIA label for the docs pagination"
                        })
                    },
                    t &&
                        l.createElement(
                            c,
                            (0, n.Z)({}, t, {
                                subLabel: l.createElement(
                                    r.Z,
                                    {
                                        id: "theme.docs.paginator.previous",
                                        description: "The label used to navigate to the previous doc"
                                    },
                                    "Previous"
                                )
                            })
                        ),
                    a &&
                        l.createElement(
                            c,
                            (0, n.Z)({}, a, {
                                subLabel: l.createElement(
                                    r.Z,
                                    {
                                        id: "theme.docs.paginator.next",
                                        description: "The label used to navigate to the next doc"
                                    },
                                    "Next"
                                ),
                                isNext: !0
                            })
                        )
                )
            }
        },
        1980: (e, t, a) => {
            a.d(t, { Z: () => c })
            var n = a(9496),
                l = a(5924),
                r = a(5661),
                o = a(8376),
                s = a(1017)
            function c(e) {
                let { className: t } = e
                const a = (0, s.E)()
                return a.badge
                    ? n.createElement(
                          "span",
                          { className: (0, l.Z)(t, o.k.docs.docVersionBadge, "badge badge--secondary") },
                          n.createElement(
                              r.Z,
                              { id: "theme.docs.versionBadge.label", values: { versionLabel: a.label } },
                              "Version: {versionLabel}"
                          )
                      )
                    : null
            }
        },
        1188: (e, t, a) => {
            a.d(t, { Z: () => h })
            var n = a(9496),
                l = a(5924),
                r = a(9475),
                o = a(3867),
                s = a(5661),
                c = a(4178),
                i = a(8376),
                d = a(947),
                m = a(1017)
            const u = {
                unreleased: function (e) {
                    let { siteTitle: t, versionMetadata: a } = e
                    return n.createElement(
                        s.Z,
                        {
                            id: "theme.docs.versions.unreleasedVersionLabel",
                            description:
                                "The label used to tell the user that he's browsing an unreleased doc version",
                            values: { siteTitle: t, versionLabel: n.createElement("b", null, a.label) }
                        },
                        "This is unreleased documentation for {siteTitle} {versionLabel} version."
                    )
                },
                unmaintained: function (e) {
                    let { siteTitle: t, versionMetadata: a } = e
                    return n.createElement(
                        s.Z,
                        {
                            id: "theme.docs.versions.unmaintainedVersionLabel",
                            description:
                                "The label used to tell the user that he's browsing an unmaintained doc version",
                            values: { siteTitle: t, versionLabel: n.createElement("b", null, a.label) }
                        },
                        "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."
                    )
                }
            }
            function p(e) {
                const t = u[e.versionMetadata.banner]
                return n.createElement(t, e)
            }
            function b(e) {
                let { versionLabel: t, to: a, onClick: l } = e
                return n.createElement(
                    s.Z,
                    {
                        id: "theme.docs.versions.latestVersionSuggestionLabel",
                        description: "The label used to tell the user to check the latest version",
                        values: {
                            versionLabel: t,
                            latestVersionLink: n.createElement(
                                "b",
                                null,
                                n.createElement(
                                    o.Z,
                                    { to: a, onClick: l },
                                    n.createElement(
                                        s.Z,
                                        {
                                            id: "theme.docs.versions.latestVersionLinkLabel",
                                            description:
                                                "The label used for the latest version suggestion link label"
                                        },
                                        "latest version"
                                    )
                                )
                            )
                        }
                    },
                    "For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."
                )
            }
            function E(e) {
                let { className: t, versionMetadata: a } = e
                const {
                        siteConfig: { title: o }
                    } = (0, r.Z)(),
                    { pluginId: s } = (0, c.gA)({ failfast: !0 }),
                    { savePreferredVersionName: m } = (0, d.J)(s),
                    { latestDocSuggestion: u, latestVersionSuggestion: E } = (0, c.Jo)(s),
                    h = u ?? (v = E).docs.find((e) => e.id === v.mainDocId)
                var v
                return n.createElement(
                    "div",
                    {
                        className: (0, l.Z)(
                            t,
                            i.k.docs.docVersionBanner,
                            "alert alert--warning margin-bottom--md"
                        ),
                        role: "alert"
                    },
                    n.createElement("div", null, n.createElement(p, { siteTitle: o, versionMetadata: a })),
                    n.createElement(
                        "div",
                        { className: "margin-top--md" },
                        n.createElement(b, { versionLabel: E.label, to: h.path, onClick: () => m(E.name) })
                    )
                )
            }
            function h(e) {
                let { className: t } = e
                const a = (0, m.E)()
                return a.banner ? n.createElement(E, { className: t, versionMetadata: a }) : null
            }
        }
    }
])
