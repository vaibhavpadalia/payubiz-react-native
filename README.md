# PayUBiz Payment Gateway

Implemented PayUBiz payment gateway using React Native's webview and SDK.
Used `sha512` for encryption of data and sending it.

Packages Used:
* `js-sha512` for encrypting data into SHA512
* `payu-non-seam-less-react` React Native SDK for seamless integration

<b>Note: If you are using PayU's react native SDK, then link it with android and iOS before proceeding.</b>

<details close>
<summary>Manual linking (Android)</summary>
<br>
Open "android/settings.gradle" file and add following lines:<br>

```
include ':payu-non-seam-less-react'
project(':payu-non-seam-less-react').projectDir = new File(rootProject.projectDir, '../node_modules/payu-non-seam-less-react/android')
```

Open "android/app/build.gradle" file and add the following line under dependencies:

```
implementation project(':payu-non-seam-less-react')
```

Make following changes to "AndroidManifest.xml"

```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools"
  package="com.appname">
...
...
...
<application
      tools:replace="android:icon, android:allowBackup, android:usesCleartextTraffic"
>
...
```

And finally open "MainApplication.java" and add the following:

```
import com.payubiz.PayUBizSdkPackage;
...
...
new PayUBizSdkPackage(),
```
</details>

<br>

<details close>
<summary>Manual Linking (iOS)</summary>
<br>

Add following line to "PodFile":

```
pod 'react-native-biz-sdk', :path => '../node_modules/payu-non-seam-less-react'
```

And then run pod install inside "ios/" folder.
</details>

<br>
Note: Sandbox URL is used here to post the data.


## Screen:

<img src="image.png" width="350px">