"use strict"
;(self.webpackChunkx_docs_new = self.webpackChunkx_docs_new || []).push([
    [85],
    {
        528: (e, t, a) => {
            a.r(t), a.d(t, { default: () => d })
            var l = a(9496),
                n = a(5924),
                c = a(4141),
                r = a(8376),
                m = a(6088),
                s = a(8441),
                i = a(2843)
            const o = { mdxPageWrapper: "mdxPageWrapper_j20M" }
            function d(e) {
                const { content: t } = e,
                    {
                        metadata: { title: a, description: d, frontMatter: p }
                    } = t,
                    { wrapperClassName: _, hide_table_of_contents: g } = p
                return l.createElement(
                    c.FG,
                    { className: (0, n.Z)(_ ?? r.k.wrapper.mdxPages, r.k.page.mdxPage) },
                    l.createElement(c.d, { title: a, description: d }),
                    l.createElement(
                        m.Z,
                        null,
                        l.createElement(
                            "main",
                            { className: "container container--fluid margin-vert--lg" },
                            l.createElement(
                                "div",
                                { className: (0, n.Z)("row", o.mdxPageWrapper) },
                                l.createElement(
                                    "div",
                                    { className: (0, n.Z)("col", !g && "col--8") },
                                    l.createElement(
                                        "article",
                                        null,
                                        l.createElement(s.Z, null, l.createElement(t, null))
                                    )
                                ),
                                !g &&
                                    t.toc.length > 0 &&
                                    l.createElement(
                                        "div",
                                        { className: "col col--2" },
                                        l.createElement(i.Z, {
                                            toc: t.toc,
                                            minHeadingLevel: p.toc_min_heading_level,
                                            maxHeadingLevel: p.toc_max_heading_level
                                        })
                                    )
                            )
                        )
                    )
                )
            }
        }
    }
])
