react项目

1. 快速开始
    i.https://github.com/basarat/react-typescript.git
    ii.cd react-typescript
    iii.npm i

2. 手动创建

    i.创建文件夹
        mkdir project
        cd project
    ii.创建tsconfig.json
    {
        "compilerOptions":{
            "sourceMap":true,
            "module":"CommonJs",
            "exMoudleInterop":true,
            "resolveJsonMoudle":true,
            "experimentalDecorators":true,
            "target":"ES5",
            "jxs":"react",
            "lib":[
                "dom",
                "es6"
            ]
        },
        "include":[
            "src"
        ],
        "compileonSave":false
    }
    iii:创建package.json
    iiii.创建一个 webpack.config.js
