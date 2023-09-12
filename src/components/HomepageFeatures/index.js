import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/easy_to_use.svg').default,
        description: (
            <>
                Framework X was designed from the ground up to be easily installed and
                used to get your APIs up and running quickly.
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        Svg: require('@site/static/img/focus.svg').default,
        description: (
            <>
                Framework X lets you focus on your APIs, and It&apos;ll do the chores. Go
                start building your APIs now.
            </>
        ),
    },
    {
        title: 'Powered by Express',
        Svg: require('@site/static/img/express.svg').default,
        description: (
            <>
                Extend or customize your APIs. Framework X can
                be extended while reusing most of the code.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
