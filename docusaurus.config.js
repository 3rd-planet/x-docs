// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Framework X",
    tagline: "Your Accelerated Path to API Creation",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://frameworkx.info",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "3rd-planet", // Usually your GitHub org/user name.
    projectName: "framework-x", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    plugins: [
        [
            "@dipakparmar/docusaurus-plugin-umami",
            {
                websiteId: "95d5528c-1a9e-451c-81b8-203dee9341c3",
                analyticsDomain: "us.umami.is",
                dataDomains: "frameworkx.info"
            }
        ]
    ],

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"]
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/"
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/3rd-planet/x-docs/blob/main/"
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            })
        ]
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            metadata: [
                { name: "keywords", content: "Framework X, API, NodeJs, Express" },
                {
                    name: "description",
                    content:
                        "Framework x is all about substance over style! 3rd Planet's Framework X is like a well-oiled machine for API development, powered by Node.js and Express"
                }
            ],
            image: "img/frameworkx.png",
            navbar: {
                title: "Framework X",
                logo: {
                    alt: "Framework X Logo",
                    src: "img/frameworkx.png"
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Documentation"
                    },
                    {
                        position: "left",
                        label: "Contributors",
                        to: "/contributors"
                    },
                    {
                        href: "https://github.com/3rd-planet/framework-x",
                        label: "GitHub",
                        position: "right"
                    }
                ]
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Pages",
                        items: [
                            {
                                label: "Documentation",
                                to: "/docs/introduction"
                            },
                            {
                                label: "Contributors",
                                to: "/contributors"
                            }
                        ]
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/H8Cxk2QZ"
                            }
                        ]
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/3rd-planet/framework-x"
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} 3rd Planet. Built with Docusaurus.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            },
            algolia: {
                appId: "ZZR6P6BR18",
                apiKey: "beaebbbdb3370bca0c9513bf53354837",
                indexName: "frameworkx",
                contextualSearch: true,
                searchParameters: {},
                searchPagePath: "search"
            },
            announcementBar: {
                id: "support_ukraine",
                content:
                    'You can support the project by <a target="_blank" rel="noopener noreferrer" href="https://github.com/3rd-planet/framework-x"> Star ⭐ the project on GitHub.</a>',
                backgroundColor: "#20232a",
                textColor: "#fff",
                isCloseable: false
            }
        })
}

module.exports = config
