export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
        }],
    ],
    // 需要是一个数组，数组中的每一个对象是一个路由信息
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: 'helloworld',
                component: './HelloWorld'
            },
            { path: 'puzzlecards', component: './puzzlecards' },
        ]
    }],
}
