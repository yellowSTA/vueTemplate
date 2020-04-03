module.exports = [
    {
        type: 'list', // 即类型为 选择项
        name: 'project', // 名称，作为下面 generator.js导出 函数 options 的键
        message: '请选择你要生成的项目类型', // 提示语
        choices: [
            {
                name: 'pc project',
                value: 'pc'
            },
            {
                name: 'mobile project',
                value: 'mobile'
            }
        ],
        default: 'pc',
    },
    {
        type: 'input', // 类型为 输入项
        name: 'projectName', // 名称，作为下面 generator.js导出 函数 options 的键
        message: '请输入项目的名称', // 提示语
        default: 'vue-web'
    }
]