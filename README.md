### 一、开发环境
首先，请安装 [NodeJS](https://nodejs.org/en/)。NodeJS 是一个 JS 执行环境，umi 基于 JS 编写，并且需要在你的开发机上运行，所以依赖于它。

安装完成后，执行下面的命令确认是否安装成功。
```
node -v
npm -v
```
>在 umi 中我们采用了一些 NodeJS 的新特性，请确保你的 NodeJS 版本大于等于 8.5.0。

在国内，你可以安装``cnpm``获得更快速、更安全的包管理体验。使用如下命令安装：
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
然后你可以通过如下的命令确认是否成功：
```
cnpm -v
```
通过 cnpm 你可以很方便的安装和管理一些第三方的包。比如 umi 就将通过它来安装到你的项目。

### 二、安装 umi 依赖
首先，新建一个空的文件夹，用来存放本课程后续所有的代码。

```
mkdir antd-course
cd antd-course

```

然后，调用 `cnpm init` 来初始化 `package.json`，它是 NodeJS 约定的用来存放项目的信息和配置等信息的文件。

```
cnpm init -y

```

上面命令中，参数 `-y` 表示对 npm 要求提供的信息，都自动按下回车键，表示接受默认值。

接着，安装 umi 的依赖。

```
cnpm install umi --save-dev

```

安装完成之后你会发现 `package.json` 中多出了一项 `devDependencies` 的配置。这是由于在上面命令中，参数 `--save` 可以让依赖信息保存到 `package.json` 中，这样其它开发者下载代码后就只需要执行 `cnpm install` 后就会自动安装项目依赖的包。

另外项目中还多出了一个 `node_modules` 的文件夹，它包含了大量的内容。里面存放的是项目依赖的包，umi 的代码也是被下载并安装到其中的。如果你想要了解更多，可以参考 [npm 的文档](https://docs.npmjs.com/)。

### 三、初始化 umi 的配置
接下来，让我们创建我们的第一个页面。
在创建第一个页面之前，我们需要先初始化 umi 的配置。
在 umi 中，大量的使用了配置和约定来帮助你快速开发代码。
##### 1.首先，我们先来创建配置文件，配置文件被约定为 `config/config.js`。
![应该在的目录位置](https://upload-images.jianshu.io/upload_images/7016617-f936fe134c579072.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
+ 为了让后面的开发更加高效，我们推荐你下载一款适合你的编辑器或者 IDE 来创建和编写代码。本课程中我们推荐你使用 [VS Code](https://code.visualstudio.com/)。
+ 在 umi 中，你也可以简单的使用 `.umirc.js` 来作为配置文件。当然它和 `config/config.js` 是二选一的。更多说明可以参考 umi 的[文档](https://umijs.org/guide/config.html)。
+ `config/config.js` 中初始化的内容如下：

```
export default {};

```

一开始它只是 export 了一个默认的空的对象 `{}`，并没有什么作用，但是在后面我们会用到。

我们所说的页面是指由一个独立路由对应的 UI 界面，关于路由你后续可以在[《路由配置》](https://www.yuque.com/ant-design/course/ipsba8)中了解更多。在这一章节中你只需要知道对于这个例子，就是指我们期望通过浏览器访问 `/helloworld` 的时候可以得到一个显示 `hello world` 的页面。

##### 2.我们新建一个 `src` 目录，它用来存放项目的除了配置以及单测以外的主要代码。

在 umi 中，约定的存放页面代码的文件夹是 `pages`，是复数，不过如果你喜欢单数的话你配置项中你可以添加 `singular` 为 `true` 来让 `page` 变为约定的文件夹。在本课程中我们使用单数来作为约定目录。所以你需要修改配置文件为：

```
export default {
  singular: true,
}

```

接下来让我们创建第一个页面组件，新建 `src/page/HelloWorld.js` 文件，代码如下：

```
export default () => {
  return <div>hello world</div>;
}

```

这样第一个页面就创建完成了，代码的具体含义我们会在后面的章节介绍。接下来你就可以通过 umi 来启动你的代码了。首先你需要在 `package.json` 中的 `scripts` 里面添加两个命令：

```
{
  "scripts": {
+   "dev": "umi dev",
+   "build": "umi build"
  }
}

```

`scripts` 中定义的命令，可以在项目根目录中通过 `cnpm run [scriptname]` 来运行。接下来请执行：

```
cnpm run dev
```

修改 `package.json` 的时候要注意它是一个标准的 JSON 格式的文件，如果失败请检查是不是逗号或者引号的问题。如果顺利，项目将会运行起来。你将会在命令行中看到如下的日志：

![image](http://upload-images.jianshu.io/upload_images/7016617-d5a845ee8a58aa45.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

复制日志中的地址，比如 `http://localhost:8000/`（这里的端口可能会因为被占用或者其他原因而不同，请参考你的机器中实际打印出来的地址）。并在后面加上 `helloworld` 的路径后（比如 `http://localhost:8000/helloworld`）在浏览器中打开，然后你将会看到：

![image](http://upload-images.jianshu.io/upload_images/7016617-bcd0ce9a8994e60c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在 umi 中，你可以使用约定式的路由，在 `page` 下面的 JS 文件都会按照文件名映射到一个路由，比如上面这个例子，访问 `/helloworld` 会对应到 `HelloWorld.js`。

除了约定式的路由，你也可以使用配置式的路由。至于使用哪种路由取决于你的喜好，这不是本课程的重点。在本课程中为了让开发者更好的理解路由组件嵌套，我们会使用配置式的路由。

要使用配置式的路由，你需要在配置文件 `config/config.js` 中添加如下配置：

```
export default {
  routes: [{
    path: '/',
    component: './HelloWorld',
  }],
}

```

其中 component 是一个字符串，它是相对于 `page` 目录的相对路径。在上面的配置中我们将路由的路径配置成为了 `/`，这样你访问 `http://localhost:8000/` 首页就能看到 `hello world` 了。

当有了 routes 的配置之后 umi 就不会再执行约定式对应的路由逻辑了，而是直接使用你通过配置声明的路由。关于路由的更多信息你可以参考[《路由配置》](https://www.yuque.com/ant-design/course/ipsba8)这一章节的说明。

### 添加 umi-plugin-react 插件

umi 是一个可插拔的企业级 react 应用框架，它的很多功能都是通过插件实现。尤其是 umi 官方的 [umi-plugin-react](https://umijs.org/zh/plugin/umi-plugin-react.html) 这个插件集成了常用的一些进阶的功能，为了后面的课程需要，我们需要添加该插件集到项目中。

首先通过 `cnpm install umi-plugin-react --save-dev` 来安装该插件集。然后在配置文件 `config/config.js` 中引入该插件：

```
export default {
  plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
    }],
  ],
  routes: [{
    path: '/',
    component: './HelloWorld',
  }],
}

```

### [](https://www.yuque.com/ant-design/course/wybhm9#gitignore).gitignore

cnpm 安装的依赖会被默认安装到项目的 `node_modules` 目录下。这个目录通常是不需要提交到代码仓库中的。如果你使用的是 git 来作为代码的管理工具，那么你可以添加 `.gitignore` 文件到项目根目录中，避免将不必要的代码提交到 git 仓库中。

`.gitignore` 如下：

```
node_modules
dist
.umi

```

其中 `.umi` 是 umi 在开发过程中产生的临时入口文件，便于开发调试，同样也不需要提交到代码仓库中。`dist` 是构建出来的产物，通常也不需要提交。

我们建议你可以在本地通过 git 管理起你的代码，方便在后面的课程中更好的操作你的代码。

```
git init
git add -A
git commit -m 'init'

```

## [](https://www.yuque.com/ant-design/course/wybhm9#%E6%9E%84%E5%BB%BA%E5%92%8C%E9%83%A8%E7%BD%B2)构建和部署

你可以通过 `cnpm run build` 来构建出最终的产物，执行该命令后会生成最终的 HTML、CSS 和 JS 到 `dist` 目录下。它们是浏览器可以直接识别并运行的代码，这样你就可以将它们部署到你想要的服务器上了。

### 三、使用 Ant Design 组件
##### 1.引入 antd
Ant Design 是一个服务于企业级产品的设计体系，组件库是它的 React 实现，antd 被发布为一个 npm 包方便开发者安装并使用。

在 umi 中，你可以通过在插件集 `umi-plugin-react` 中配置 antd 打开 antd 插件，antd 插件会帮你引入 antd 并实现按需编译。

在目录 `config/config.js` 下：

```
export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true
    }],
  ],
  // ...
}

```

如果使用我们的脚手架，Ant Design 已经自带了，否则你需要自己安装。

```
# 脚手架所在的目录
$ cnpm install --save antd

```

###[四、基本布局](https://www.yuque.com/ant-design/course/layout)
##### 1.第一步：添加基本布局
在 src 目录下创建 ``layout`` 文件目录，然后创建 ``index.js`` 文件，在 ``index.js`` 中我们写入:
```
import { Component } from 'react';
import { Layout } from 'antd';

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
```
上面代码中，我们创建了一个三部分的基本布局：``Header`` 、``Content`` 、``Footer``。然后我们将 ``Content`` 替换成 ``{ this.props.children }``，这样之后我们设置的路由会通过替换 ``children`` 变量实现内容的切换。
```
  <Content>{ this.props.children }</Content>
```
##### 2.第二步：添加样式
上面我们定义了导航的结构，下面我们添加一些样式，让这个布局看上去更美观一些:
```
  import { Component } from 'react';
  import { Layout } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

export default class BasicLayout extends Component {
  render() {
    return (
        <Layout>
        <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
          Sider
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
```
### [五、配置路由](https://www.yuque.com/ant-design/course/layout#%E7%AC%AC%E4%B8%89%E6%AD%A5%EF%BC%9A%E9%85%8D%E7%BD%AE%E8%B7%AF%E7%94%B1)
定义好容器组件之后，我们就可以通过路由配置的方式把路由对应的组件渲染到容器组件中去了，具体路由如何配置我们放在下面的章节中讲述。这里我们直接在 `config/config.js`  添加路由配置:
```
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: 'helloworld',
        component: './HelloWorld'
      },
    ]
  }],
```
##### 基本

`exports.routes` 需要是一个数组，数组中的每一个对象是一个路由信息，比如：

```
exports.routes = [
  {
    path: '/',
    component: 'App',
  },
  {
    path: '/user',
    component: 'User',
  }
];

```

其中，path 表示页面访问路径，component 表示 page 下的文件名，比如 `App`, `User` 分别表示 `page/App`，`page/User`。这样，访问 [http://localhost:7001/](http://localhost:7001/) 和 [http://localhost:7001/user](http://localhost:7001/user) 则会有展示 `App`, `User` 中的内容。

### [](https://www.yuque.com/ant-design/course/ipsba8#routes)routes

当需要有一个 `layout` 作为展示，可以设置 `routes`：

```
exports.routes = [
  {
    path: '/',
    component: 'App',
    routes: [{
      path: 'list'
      component: 'List',
    }, {
      path: 'admin'
      component: 'Admin',
    }]
  },
  {
    path: '/user',
    component: 'User',
  }
];

```

在 `page/App` 中：

```
export default (props) => <div style={{padding: 20}}>
    {this.props.children}
</div>

```

这样访问 `/list` 跟 `/admin` 将会都有这个 `layout`。

更多配置信息和路由使用方式请参考 umi 官方文档。

### [六、使用 model](https://www.yuque.com/ant-design/course/abl3ad)
## 软件分层

首先，我们需要简单了解一下软件架构的「分层」理念。

> 一个完整的软件，往往会被拆分成多个不同的层次，每一个层次聚焦于完成特定的功能。

![image](http://upload-images.jianshu.io/upload_images/7016617-d6713957c32005dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

上图中，左侧是服务端代码的层次结构，由 Controller、Service、Data Access 三层组成服务端系统：

1.  Controller 层负责与用户直接打交道，渲染页面、提供接口等，侧重于`展示型逻辑`。
2.  Service 层负责处理业务逻辑，供 Controller 层调用。
3.  Data Access 层顾名思义，负责与数据源对接，进行纯粹的数据读写，供 Service 层调用。

上图的右侧是前端代码的结构，同样需要进行必要的分层：

1.  Page 负责与用户直接打交道：渲染页面、接受用户的操作输入，侧重于`展示型交互性逻辑`。
2.  Model 负责处理业务逻辑，为 Page 做数据、状态的读写、变换、暂存等。
3.  Service 负责与 HTTP 接口对接，进行纯粹的数据读写。

## [](https://www.yuque.com/ant-design/course/abl3ad#%E5%BC%95%E5%85%A5-dva)引入 DVA

在 umi 中，你可以通过在插件集 umi-plugin-react 中配置 dva 打开 dva 插件。

```
export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
    }],
  ],
  // ...
}

```

Model 是前端分层中的腰部力量，承上启下，负责管理数据（状态）。业界主流的状态管理类库有 [redux](https://redux.js.org/)、[mobx](https://mobx.js.org/intro/concepts.html)，等。在我们的教程中，则使用 [DVA](https://github.com/dvajs/dva) 框架承担这一角色。

DVA 是基于 redux、redux-saga 和 react-router 的轻量级前端框架及最佳实践沉淀。其中，[model](https://dvajs.com/api/#model) 是 DVA 中最重要的概念，一个简单的 model 示例如下：

```
app.model({

  namespace: 'todoList',

  state: [],

  effects: {
    *query({ _ }, { put, call }) {
      const rsp = yield call(queryTodoListFromServer);
      const todoList = rsp.data;
      yield put({ type: 'save', payload: todoList });
    },
  },

  reducers: {
    save(state, { payload: todoList }) {
      return [...state, todoList];
    },
  },

});

```

DVA 的 model 对象有几个基本的属性，需要大家了解。

1.  `namespace`：model 的命名空间，只能用字符串。一个大型应用可能包含多个 model，通过`namespace`区分。
2.  `state`：当前 model 状态的初始值，表示当前状态。
3.  `reducers`：用于处理同步操作，可以修改 `state`，由 `action` 触发。reducer 是一个纯函数，它接受当前的 state 及一个数据体（payload）作为入参，返回一个新的 state。
4.  `effects`：用于处理异步操作（例如：与服务端交互）和业务逻辑，也是由 action 触发。但是，它不可以修改 state，要通过触发 action 调用 reducer 实现对 state 的间接操作。
5.  `action`：是 reducers 及 effects 的触发器，一般是一个对象，形如`{ type: 'add', payload: todo }`，通过 type 属性可以匹配到具体某个 reducer 或者 effect，payload 属性则是数据体，用于传送给 reducer 或 effect。

上面这些概念，初学者会觉得比较抽象，这是正常的。大家可以通过后面的例子，慢慢体会。DVA 的文档非常优秀，建议大家直接学习，参考链接：

1.  [Dva 概念](https://dvajs.com/guide/concepts.html)
2.  [Dva 图解](https://dvajs.com/guide/fig-show.html)

## 最简单的卡片列表页

我们先显示一个最简单的卡片列表页，只有卡片，不做添加操作。`src/page` 目录下建立页面文件 `puzzlecards.js`，并把它加入到路由。

首先，建立页面文件。

```
import React, { Component } from 'react';
import { Card } from 'antd';

export default class PuzzleCardsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          id: 1,
          setup: 'Did you hear about the two silk worms in a race?',
          punchline: 'It ended in a tie',
        },
        {
          id: 2,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
      ],
    }
  }
  render() {
    return (
      <div>
        {
          this.state.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
      </div>
    );
  }
}

```

其次，配置文件 `config/config.js` 内增加一条路由规则。

```
export default {

  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [

+       { path: 'puzzlecards', component: './puzzlecards' },

      ]
    }
  ],

};

```

启动应用，看到如下页面：

![image](http://upload-images.jianshu.io/upload_images/7016617-4be0584bd6e1b737.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## [](https://www.yuque.com/ant-design/course/dsl8ee#%E6%B7%BB%E5%8A%A0%E5%8D%A1%E7%89%87-%E6%8C%89%E9%92%AE)"添加卡片" 按钮

在上文的基础上，我们添加一个按钮，并在上面绑定一个处理点击事件的回调函数。思路是在回调函数中向 cardList 中添加一个新卡片数据。

最终我们的页面文件变成如下样子：

```
import React, { Component } from 'react';
import { Card, Button } from 'antd';

export default class PuzzleCardsPage extends Component {
  constructor(props) {
    super(props);
    this.counter = 100;
    this.state = {
      cardList: [
        {
          id: 1,
          setup: 'Did you hear about the two silk worms in a race?',
          punchline: 'It ended in a tie',
        },
        {
          id: 2,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
      ],
    }
  }

  addNewCard = () => {
    this.setState(prevState => {
      const prevCardList = prevState.cardList;
      this.counter += 1;
      const card = {
        id: this.counter,
        setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      };
      return {
        cardList: prevCardList.concat(card),
      };
    });
  }

  render() {
    return (
      <div>
        {
          this.state.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
          <Button onClick={this.addNewCard}> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}

```

虽然每次添加的卡片内容都相同，但是不要紧，这里只是演示用法，但是注意唯独 id 不能相同。为了产生唯一的 id，我们在组件中新加了一个 counter 成员，它只是为了产生唯一 id，并不是真的为了计数，所以初始值不重要（我们这里给了 100）。

新的页面如下：

![image](http://upload-images.jianshu.io/upload_images/7016617-168fb0b127a5000b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**到这里我们其实已经完成了想要的页面，也并没有用 dva，那 dva 到底有什么用 ？**

这里陈述几个需求：

*   在实际的前端开发中，像 cardList 中包含的那些数据，一般都是通过发起异步 http 请求从后端服务中获得。
*   我们希望把数据逻辑（cardList 相关逻辑）和视图逻辑（PuzzleCardsPage）分开管理在不同的模块中，「关注分离」使得代码更加健壮，同时易于调试。
*   我们希望这些数据在需要的时候，可以提供给不同的组件使用：也即数据共享。

而 dva 就是用来满足这些需求的：

*   通过把状态上提到 dva model 中，我们把数据逻辑从页面中抽离出来。
*   通过 effect 优雅地处理数据生成过程中的副作用，副作用中最常见的就是异步逻辑。
*   dva model 中的数据可以注入给任意组件。
*   另外，dva 允许把数据逻辑再拆分（「页面」常常就是分隔的标志），以 namespace 区分。当你觉得有必要时，不同的 namespace 之间的 state 是可以互相访问的。

> 如果你熟悉 React 中最基本的两个概念 props 和 state，一定知道 props 和 state 对于一个组件来讲都是数据的来源，而 state 又可以通过 props 传递给子组件，这像是一个鸡生蛋蛋生鸡的问题：到底谁是数据的源头 ？答案是 state，而且是广义的 state：它可以是 react 组件树中各级组件的 state，也可以是 react 组件树外部由其他 js 数据结构表示的 state，而 dva 管理的就是[ react 组件树之外的 state: Redux](https://redux.js.org/)。归根结底，props 是用来传导数据的，而 state 是数据改变的源泉。

## [](https://www.yuque.com/ant-design/course/dsl8ee#%E5%9F%BA%E4%BA%8E-dva-%E7%9A%84%1B%E7%AE%80%E5%8D%95%E5%8D%A1%E7%89%87%E5%88%97%E8%A1%A8%E9%A1%B5%EF%BC%9A%E4%BD%BF%E7%94%A8-connect-%E5%AF%B9%E6%8E%A5%E9%9D%99%E6%80%81%E7%9A%84-dva-model)基于 dva 的简单卡片列表页：使用 connect 对接静态的 dva model

如果你已经对 React 开发比较熟悉，就会知道子组件的 state 可以上提 (state hoisting)，由父组件来管理：

*   子组件间接回调到父组件的 setState 的方法来改变父组件的 state；
*   新的 state 通过 props 的形式把再次被子组件获悉。

而 dva 可以帮助我们把 state 上提到 **所有 React 组件之上**，过程是相似的：

*   页面通过调用 dispatch 函数来驱动 dva model state 的改变；
*   改变后的 dva model state通过 connect 方法注入页面。

所谓「注入」从本质上是 **控制反转** 的一种实现，这种思想在许多的语言框架中都有体现，最著名的莫过于基于 Java 语言的 Spring。组件不再负责管理数据，组件只是通过 connect 向 dva 声明所需数据。

本节中我们只做状态上提，我们只需要定义一个基本的 dva model 和使用 connect。首先，我们在 `src/model` 目录下创建一个 dva model 文件：`puzzlecards.js`。

```
export default {
  namespace: 'puzzlecards',
  state: [
    { id: 1,
      setup: 'Did you hear about the two silk worms in a race?',
      punchline: 'It ended in a tie',
    },
    {
      id: 2,
      setup: 'What happens to a frog\'s car when it breaks down?',
      punchline: 'It gets toad away',
    },
  ],
};

```

其次，修改之前的页面文件：

```
import React, { Component } from 'react';
import { Card /* ,Button */ } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  const cardList = state[namespace];
  return {
    cardList,
  };
};

@connect(mapStateToProps)
export default class PuzzleCardsPage extends Component {
  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        {/* <div>
          <Button onClick={this.addNewCard}> 添加卡片 </Button>
        </div> */}
      </div>
    );
  }
}

```

首先，注意 dva model 的定义。一个基本的 dva model 最少具备两个成员：namespace 和 state。namespace 来作为一个 model 的唯一标识，state 中就是该 model 管理的数据。

其次，看页面文件的变化：我们删除了组件本身的 state，同时添加了 `@connect(mapStateToProps)`。**connect 是连接 dva 和 React 两个平行世界的关键，一定要理解。**

*   connect 让组件获取到两样东西：1\. model 中的数据；2\. 驱动 model 改变的方法。
*   connect 本质上只是一个 javascript 函数，通过 `@` 装饰器语法使用，放置在组件定义的上方；
*   connect 既然是函数，就可以接受入参，第一个入参是最常用的，它需要是一个函数，我们习惯给它命名叫做 mapStateToProps，顾名思义就是把 dva model 中的 state 通过组件的 props 注入给组件。通过实现这个函数，我们就能实现把 dva model 的 state 注入给组件。

mapStateToProps 这个函数的入参 state 其实是 dva 中所有 state 的总合。对于初学 js 的人可能会很疑惑：这个入参是谁给传入的呢？其实你不用关心，你只需知道 dva 框架会适时调用 mapStateToProps，并传入 dva model state 作为入参，我们再次提醒：传入的 state 是个 "完全体"，包含了 **所有** namespace 下的 state！我们自己定义的 dva model state 就是以 namespace 为 key 的 state 成员。所以 `const namespace = 'puzzlecards'` 中的 `puzzlecards` 必须和 model 中的定义完全一致。dva 期待 mapStateToProps 函数返回一个 **对象**，这个对象会被 dva 并入到 props 中，在上面的例子中我们取到数据后，把它改名为 cardList 并返回（ 注意返回的不是 cardList 本身，而是一个包含了 cardList 的对象！ ），cardList 就可以在子组件中通过 props 被访问到了。

注意 render 函数中通过 `this.props.cardList` 取到了数据，数据已经不再由组件自己管理，我们得到了第一步中的页面样子：

![image](http://upload-images.jianshu.io/upload_images/7016617-b92a5499db7c1510.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里我们同时利用 Redux DevTools 展示了 Dva 中 state 的内容，证明了我们定义的 model 确实生效了。如果想时刻洞察 model 中的内容，强烈建议安装 Redux DevTools

![image](http://upload-images.jianshu.io/upload_images/7016617-5ddc96d0762f47d0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## [](https://www.yuque.com/ant-design/course/dsl8ee#%E6%B7%BB%E5%8A%A0%E5%8D%A1%E7%89%87-%E6%8C%89%E9%92%AE%EF%BC%9A%E4%BD%BF%E7%94%A8-dispatch-%08%E5%92%8C-reducer-%08%E6%94%B9%E5%8F%98-dva-model)"添加卡片" 按钮：使用 dispatch 和 reducer 改变 dva model

我们上面的例子中只是移植了 state，但是没有移植按钮和按钮上的行为。React 有一个基本的哲学：数据映射到视图。无论什么途径，我们点击按钮后，本质上都是去触发 state 的改变，state 的改变再映射回视图。所以我们这里的目标就是使得每次点击按钮，触发 dva model 的中卡片数据再添加一条。而在 dva 的语境中，是统一通过 `dispatch` 函数来做这件事情。

修改 model 文件，加入 reducers 部分：

```
export default {
  namespace: 'puzzlecards',
  state: {
    data: [
      {
        id: 1,
        setup: 'Did you hear about the two silk worms in a race?',
        punchline: 'It ended in a tie',
      },
      {
        id: 2,
        setup: 'What happens to a frog\'s car when it breaks down?',
        punchline: 'It gets toad away',
      },
    ],
    counter: 100,
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    }
  },
};

```

修改页面文件，注入新的方法：

```
import React, { Component } from 'react';
import { Card ,Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  const cardList = state[namespace].data;
  return {
    cardList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
          <Button onClick={() => this.props.onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            punchline: 'here we use dva',
          })}> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}

```

于是得到新的页面，

![image](http://upload-images.jianshu.io/upload_images/7016617-e7d0755c56ebc358.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

接下来我们解释一下都干了什么事情。

### [](https://www.yuque.com/ant-design/course/dsl8ee#%E4%BD%BF%E7%94%A8-mapdispatchtoprops-%E5%92%8C-dispatch)使用 mapDispatchToProps 和 dispatch

通过使用这两者，我们可以给组件注入方法，组件使用这些方法能给 dva model 发「消息」。`this.props.onClickAdd` 就是被注入的方法。

```
() => this.props.onClickAdd({
  setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  punchline: 'here we use dva',
})

```

注意不要写成

```
this.props.onClickAdd({
  setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  punchline: 'here we use dva',
})

```

**区别是上面定义了一个 click 事件的回调函数，而下面是直接调用函数**。回调函数在点击时被调用，又立刻调用 onClickAdd。如果直接写成 `this.props.onClickAdd({})`，就变成 render 函数执行到此处时直接调用 onClickAdd 函数了。

onClickAdd 是怎么被注入的呢 ？答案就在于我们给 connect 传入了第二个函数：mapDispatchToProps。我们习惯用这个名字是因为它精炼地说明了这个函数的作用：以 dispatch 为入参，返回一个挂着函数的对象，这个对象上的函数会被 dva 并入 props，注入给组件使用。

我们在 onClickAdd 函数中调用 dispatch 派发了一个 action，action 包含 onClickAdd 传递过来的内容 `{ setup, punchline }` 作为 payload，action 的 type 是 `puzzlecards/addNewCard`。`addNewCard` 在这个例子中是 reducer 的名字，这个我们下面会讲到。**dispatch 函数就是和 dva model 打交道的唯一途径。** dispatch 函数接受一个 **对象** 作为入参，在概念上我们称它为 *action*，唯一强制要包含的是 `type` 字段，string 类型，用来告诉 dva 我们想要干什么。我们可以选择给 action 附着其他字段，这里约定用 `payload`字段表示额外信息。

> 我们把想做的事情通过 action 描述出来，并通过 dispatch 告诉 dva model，而对这个消息的处理就是 dva 的事情了。如果深入了解 React 的读者，一定觉得这句话似曾相识。是的，dva 和 React 哲学一脉相承，React 也是遵循这个原理工作的，在组件中总要写一个 render 函数，这个函数就是向 React 描述你想要渲染出的内容，作为开发者你并不会去直接操作 DOM，而 React 负责把 render 函数的返回值转化成 DOM 元素，并由 React 最终决定渲染 DOM 的时机和流程（React 渲染引擎的执行是个异步的过程）。

接下来的问题是：派发出的 action 怎样被 dva 识别并执行 "添加卡片" 的逻辑呢 ？

### [](https://www.yuque.com/ant-design/course/dsl8ee#%E5%AE%9A%E4%B9%89-reducer)定义 reducer

dva model 中可以定义一个叫做 `reducers` 的成员用来响应 action 并修改 state。每一个 reducer 都是一个 function，action 派发后，通过 action.type 被唯一地匹配到，随后执行函数体逻辑，返回值被 dva 使用作为新的 state。state 的改变随后会被 connect 注入到组件中，触发视图改变。

reducer 的样子大概是：

```
someReducer(state /* old state */, { payload }) {
  // ... do calculation
  return {
    // ... build a new object as next state and return it
  };
}

```

reducer 应该是一个 "纯函数"，它的返回值作为新的 state。dva 会注入旧的 state 和 action 中的 payload，是否使用完全根据需要决定；返回值必须是一个新构造对象，绝不能把旧 state 的引用返回！

> reducer 干的事情和 React 中 `setState(prevState => { ... })` 很像，都要返回一个新构造的对象，但区别是：reducer 的返回值会 **整个取代 (Replace)** 老的 state，而 setState 中回调函数的返回值是会 **融合(Merge)** 到老的 state 中去。

下图标示了由 dva 驱动的整个过程，

![image](http://upload-images.jianshu.io/upload_images/7016617-2b0be78fa3bd8684.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




### 参考资料
https://www.yuque.com/ant-design/course/wybhm9#%E6%9E%84%E5%BB%BA%E5%92%8C%E9%83%A8%E7%BD%B2
