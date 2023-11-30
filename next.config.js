/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nextui.org',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'dog.ceo',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.dog.ceo',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'placekitten.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'dl5zpyw5k3jeb.cloudfront.net',
                port: '',
                pathname: '**',
            }
        ],
    }
}

module.exports = nextConfig
