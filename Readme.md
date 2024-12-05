# React Native Init - React Native Environment Setup Script


**react-native-init** is an easy-to-use command-line tool that automates the setup of a React Native development environment for both macOS and Windows systems. It runs the appropriate React Native setup script based on your operating system, ensuring you have everything ready for mobile app development.

## ✨ Features

- Automatically detects your **macOS** or **Windows** platform.
- Runs the correct setup script for React Native on **macOS** or **Windows**.
- Simple one-command setup for the React Native environment.
- Designed for both **macOS** and **Windows** users.


## 📦 How to run

```bash
npx react-native-init
```

The script will automatically detect your operating system and run the corresponding React Native setup script.

- On **macOS**, the script will run the setup commands required for React Native development.
- On **Windows**, the script will prompt for administrator privileges and then execute the setup script.


## 🛠️ Creating a React Native Project

Once the environment setup is complete, you can create a new React Native project by running the following command:

```bash
npx @react-native-community/cli@latest init ProjectName
```

This will initialize a new React Native project in a folder named `ProjectName`. After the project is created, navigate to the project directory:

```bash
cd ProjectName
```

Now, run the Android application with:

```bash
npm run android
```

This command will start the Android emulator (if configured) or run the app on a connected Android device.


## 📑 How It Works

1. **macOS**: The script executes a `curl` command to download and run the React Native setup script tailored for macOS.
2. **Windows**: The script uses PowerShell to run the setup script with administrator rights, ensuring the environment is set up correctly.

## 🖥️ Supported Platforms

- **macOS**: Supports React Native development on macOS systems.
- **Windows**: Supports React Native development on Windows systems, requiring administrator privileges.


## 🌟 Meet the Creator

In the ever-evolving world of mobile app development, **Aayush Chouhan** has crafted a seamless tool to get you started with React Native quickly and easily.

### 🎮 Aayush Chouhan - [@aayushchouhan24](https://github.com/aayushchouhan24)

![Aayush Chouhan](https://gravatar.com/userimage/226260988/f5429ad9b09c533449dab984eb05cdbf.jpeg?size=1024)

Aayush Chouhan is a passionate developer, specializing in mobile and web development. With a strong background in programming, he continuously strives to simplify the developer experience, ensuring that developers can focus more on building and less on setting up their environment.

[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/aayushchouhan_24/) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aayushchouhan24/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aayushchouhan24)

## 🤝 Contributing

We welcome contributions to enhance this tool! If you have ideas for new features or improvements, please feel free to open an issue or submit a pull request on our [GitHub repository](https://github.com/aayushchouhan24/rn-setup).

## 📄 License

`react-native-init` is licensed under the MIT License. For more information, refer to the [LICENSE](LICENSE) file.

## 🙌 Acknowledgements

- **[React Native](https://reactnative.dev/):** The framework for building native mobile apps using React.
- **[macOS](https://www.apple.com/macos/):** The operating system for Apple devices.
- **[Windows](https://www.microsoft.com/windows/):** The operating system for Microsoft devices.
