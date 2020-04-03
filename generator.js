module.exports = (api, options, rootOptions) => {
    // options.project 可以访问上面问题数组的第一个对象的值，默认为: 'vue-web'
    console.log(`Your choice is ${options.project}`)
    console.log(`Your input is ${options.projectName}`)

    // 1.判断控制台用户的输入
    if (options.project === 'pc') {
        // render函数把该路径下的 ./template/vue-web1 文件拷贝到默认的vue项目中。
        // 如果文件的路径和文件名称相同的则覆盖，否则是叠加
        api.render('./template/pc', {
            InputOptions: {
                ...options
            }
        })
    }

    if (options.project === 'mobile') {
        // 2.拷贝文件并传递变量。例如：InputOptions对象中的属性/变量会覆盖掉该./template/base-web2路劲下html,js,json等文件对应的属性/变量
        api.render('./template/mobile', {
            InputOptions: {
                ...options
            }
        })
    }

    // 3.修改 `package.json` 里的字段
    api.extendPackage({
        // 4.添加第三库的依赖
        dependencies: {
            "axios": "^0.19.2",
            "compression-webpack-plugin": "^3.1.0",
            "core-js": "^3.6.4",
            "vue": "^2.6.11",
            "vue-i18n": "^8.15.4",
            "vue-router": "^3.1.5",
            "vuex": "^3.1.2"
        },
        // 4.添加第三库的依赖
        devDependencies: {
            "@vue/cli-plugin-babel": "~4.2.0",
            "@vue/cli-plugin-eslint": "~4.2.0",
            "@vue/cli-plugin-router": "~4.2.0",
            "@vue/cli-plugin-vuex": "~4.2.0",
            "@vue/cli-service": "~4.2.0",
            "babel-eslint": "^10.0.3",
            "eslint": "^6.7.2",
            "eslint-plugin-vue": "^6.1.2",
            "node-sass": "^4.12.0",
            "sass-loader": "^8.0.2",
            "vue-template-compiler": "^2.6.11"
        },
        // 5.添加自定义的脚本
        scripts: {
            "serve": "vue-cli-service serve --open",
            "serve:release": "vue-cli-service serve --mode release --open",
            "serve:master": "vue-cli-service serve --mode production --open",
            "build": "vue-cli-service build --mode production",
            "build:master": "vue-cli-service build --mode production",
            "build:release": "vue-cli-service build --mode release",
            "lint": "vue-cli-service lint"
        },
        "eslintConfig": {
            "root": true,
            "env": {
                "node": true
            },
            "extends": [
                "plugin:vue/essential",
                "eslint:recommended"
            ],
            "parserOptions": {
                "parser": "babel-eslint"
            },
            "rules": {}
        },
        config: {

        }
    })
}