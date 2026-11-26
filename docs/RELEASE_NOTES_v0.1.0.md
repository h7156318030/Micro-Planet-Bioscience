# Micro-Planet Bioscience v0.1.0（Windows 安装版）

## 下载

- `MicroPlanetBioscience-Setup-0.1.0.exe`（约 148 MB）
- 系统要求：Windows 10 / 11。无需管理员权限，无需单独安装 Python。

## 安装

1. 双击 `MicroPlanetBioscience-Setup-0.1.0.exe`，按向导（中文或英文）一路下一步。
2. 安装后，开始菜单和（可选）桌面上会出现 “Micro-Planet Bioscience”，点击即可打开应用窗口。
3. 首次使用时，聊天页会询问是否使用 Kilo 的免费模型（无需账号），请按需选择。
4. 卸载：在 “设置 → 应用” 中找到 Micro-Planet Bioscience 并卸载。卸载时默认保留你的数据。

默认位置：
- 程序：`%LOCALAPPDATA%\Programs\Micro-Planet-Bioscience`
- 数据（对话、文件、设置）：`%LOCALAPPDATA%\Micro-Planet-Bioscience\data`

## 新增

- Windows 图形安装向导（中英文），按当前用户安装，不需要管理员权限。
- 桌面应用窗口：不再是浏览器标签页，关闭窗口即停止后台服务。
- 内置 Kilo Gateway 免费模型（无需账号、无需密钥），默认模型为 `nvidia/nemotron-3-ultra-550b-a55b:free`（能使用工具）。
- 首次使用 Kilo 前会询问一次。你输入的内容会发送给 Kilo 和模型提供方，请只用于日常问题，不要用于未发表的研究或患者数据。
- 安装包内置 Python 运行环境和核心依赖（包括 pandas、biopython）。

## 变更

- 默认模型列表只保留 Kilo 的免费模型，去掉了开发者自用的 OpenRouter 预设与 ChatGPT 默认入口。ChatGPT 或其他服务商可在“设置 → 模型”中自行添加。
- 没有可用模型时，智能体仍可启动；设置好模型后自动加载，不需要重启。
- 升级安装只替换程序文件，不改动你的数据。

## 已知问题

- Kilo 的免费模型由第三方提供，可能限流或暂时不可用。`kilo-auto/free` 每次会换一个模型，不适合需要工具的任务，建议选 Nemotron。
- 安装包未做代码签名，Windows 可能显示 SmartScreen 提示，点击 “更多信息 → 仍要运行” 即可。
- 本版本不包含组件下载功能。依赖大型科学计算包（如 scanpy、rdkit）的工具需要这些组件，缺少时工具会报错。
- 应用固定使用本机端口 18765（服务）和 13001（页面）。如果这两个端口被其他程序占用，应用可能连到错误的服务而停在加载界面，请先关闭占用端口的程序。

## 反馈

问题请在 GitHub Issues 中提交，并附上 `%LOCALAPPDATA%\Micro-Planet-Bioscience\data\launcher.log` 的内容。
