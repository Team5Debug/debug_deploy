plugins:[
    new webpack.DefinePlugin({
        'process.env.REACT_APP_CLIENT_KEY':JSON.stringify(process.env.REACT_APP_CLIENT),
        'process.env.REACT_APP_API_KEY':JSON.stringify(process.env.REACT_APP_API_KEY),
        'process.env.REACT_APP_GITHUB_IP':JSON.stringify(process.env.REACT_APP_GITHUB_IP),
        'process.env.REACT_APP_PORT':JSON.stringify(process.env.REACT_APP_PORT),
        'process.env.REACT_APP_PAY_API_KEY':JSON.stringify(process.env.REACT_APP_PAY_API_KEY),
        'process.env.REACT_APP_PAY_API_SECRET_KEY':JSON.stringify(process.env.REACT_APP_PAY_API_SECRET_KEY),
    })
]