# Heroku部署（deployment）流程

### 登录[heroku官网](https://www.heroku.com/)注册或登录账号
按操作成功登陆后，会看到下面的界面
![界面1](https://ucarecdn.com/c1556b7e-10e4-4545-ac4b-a8ab40a44627/WX201902201957242x.png) 


### 创建一个新的app
1. 如图，点击 Create new app
![界面2](https://ucarecdn.com/50240326-d81c-4ab8-88eb-e53755dd3ac0/1550710910465.jpg) 

2. 给自己app取一个响亮的名字（不能重名），然后确定
![界面3](https://ucarecdn.com/81e6cb28-b81c-45bf-a700-f4e4ec0f1101/WX201902202004452x.png) 

### 下载[heroku命令行工具](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

请根据自己平台下载，macOS上在终端可以通过下面命令来安装

```
brew tap heroku/brew && brew install heroku
```

### 在本地初始化heroku
1. 登录heroku, 在终端运行下列命令，之后按提示操作

```
heroku login
```

2. 确保当前目录为你的项目文件夹，保存本地项目更改，

```
git add -A
```

```
git commit -am "make it better"
```


3. 然后运行下列命令，添加heroku远端仓库

```
heroku git:remote -a <your-app-name>
```

其中`<your-app-name>`是你刚才取得app名，我这里是`my-new-app-666`

### 一键部署

运行

```
git push heroku master
```
部署可能需要几分钟时间，当出现下面提示时，部署完成

![界面4](https://ucarecdn.com/7b1e16f7-566b-4096-be6a-273bf0a2e27c/WX201902202031022x.png) 


### 查看应用

刷新刚才的heroku页面，点击open app即可显示网站，
![界面5](https://ucarecdn.com/1685814c-66d7-4a65-992e-4d14b2ed193a/WX201902202034522x.png)

### 更新应用
本地代码更改后，将更改commit，接着运行下列命令即可

```
git push heroku master
```
