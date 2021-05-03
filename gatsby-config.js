const config = {
    logo: 'assets/illustrations/online_learning.svg',
    defaultTitle: 'Computer Science Lessons',
    author: 'Adam McDaniel',
    legalName: 'Adam McDaniel',
    defaultDescription: 'This is our ENGL360 final project landing page!',
    socialLinks: {},
    googleAnalyticsID: 'UA-88875900-4',
    themeColor: '#6b63ff',
    backgroundColor: '#6b63ff',
    social: {},
    address: {},
    contact: {},
    foundingDate: '2021',
};

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: config.defaultTitle,
        description: config.defaultDescription,
        author: config.author,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-nprogress',
            options: {
                color: config.themeColor,
                showSpinner: false,
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: config.googleAnalyticsID,
                head: true,
            },
        },
        {
            resolve: 'gatsby-plugin-favicon',
            options: {
                logo: './static/favicon/favicon.png',
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    twitter: false,
                    yandex: false,
                    windows: false,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: config.defaultTitle,
                short_name: 'starter',
                start_url: '/',
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: 'minimal-ui',
                icon: './static/favicon/favicon.png',
            },
        },
        'gatsby-plugin-offline',
    ],
};