import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"

import styles from "./index.module.css"

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
                <img className={"logo-invert"} src={"/img/frameworkx.png"} alt={"Framework X"} />
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <p>Framework X is all about substance over style!. A well-oiled machine for API development</p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/introduction">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Framework x is all about substance over style! 3rd Planet's Framework X is like a well-oiled machine for API development, powered by Node.js and Express <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    )
}
