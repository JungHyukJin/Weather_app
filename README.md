# Weather Forecaster

> 크로스 플랫폼, ios, 안드로이드 앱
>
> Stacks: React, JS, Expo(폰에 설치하면 작업하면서 폰에서 작업물을 확인 가능)
>
> IDE: vsCode, Android Studio Emulator(expo를 사용하지 않는다면 사용)
>
> > 휴대폰의 geolocation에 접근하여 api에 보낸 다음, 날씨에 따라 이쁜 스크린을 만든다.



### expo?

> expo는 create-react-app같은 것, 리액트 네이티브를 위한 설정 파일같은 것들이 없다. 모든것이 셋업이 되어있다.
>
> React native CLI 방식은 개발자 본인이 native files들을 더 많이 컨트롤 하고 싶을 때 사용면 좋다. 즉, Xcode(IOS)파일과 안드로이드 스튜디오 파일을 생성해준다. 개발자가 양쪽 파일들에 다 접근할 수 있고, 결합도 가능하다. 만약 큰 회사에 다니거나, 네이티브 개발자를 안다면, 서로 협력해서도 작업이 가능하다. 

> > expo는 모든 native files들을 숨기고, 모든걸 관리해준다.
> >
> > 가장 큰 장점은, 휴대폰에서 앱을 테스트 할 수 있다. but, React Native CLI를 사용하려면, 계정이 있어야 하고, 개발자 계정도 있어야 하고, Xcode Connect를 통해서 로그인 해야하고.. 복잡하다. 하지만 expo는 대신해서 모든 것을 처리해준다. 
> >
> > 유일한 문제점은, native files들을 크게 제어 할 수 없다는 것! 하지만, 큰 문제점은 없다! React Native CLI는 버그가 너무 많다!
> >
> > expo는 다양한 모듈과 APIs가 있지만, React Native CLI는 이런 모듈들을 작동하게 만들려면 설치해야 하는 것들이 너무 많다.



#### expo로 프로젝트 시작하는 방법

1. cmd실행, 원하는 경로로 이동

   ```bash
   expo init 프로젝트명
   ```

   - 위 코드를 치면, choose a template: 라는 글이 뜨고, blank를 선택해 zero부터 시작한다.
   - 확인 후 아래코드 작성, 실행.

2. ```bash
   npm start (or yarn start)
   ```

   - 실행하면, 자동으로 웹에 export DEV tools를 오픈해준다.

3. 좌측 하단에 QR코드가 있는데, 안드로이드 폰을 열고 expo로 가서 scan QR코드를 클릭하면, expo 애플리케이션이 폰에서 프로젝트를 열고, 폰에서 앱을 테스트 할 수 있다.

   - 완료되면 아래 코드 실행.

4. ```bash
   expo login
   ```

   - 실행하, username과 password를 요청한다.



### 리액트 네이티브 or 아이폰, 안드로이드에서는 모든 것이 view다.

> view를 <div>로 생각해도 좋다. view 안에 모든 것을 넣어야 한다.
>
> 조금 다른 규칙이라면, 웹사이트에서는 text를 넣을 때, <span>을 사용하지만, 리액트 네이티브에서는 모든 text들은 <Text>여기</Text> (Text 컴포넌트) 안에 들어가야 한다.
>
> 모바일 폰에서는 거의 모든 것들이 서로 아래에 있다. 그래서, 기본적으로 flex-direction이 column이다.

```react
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>asdsafdasf dsa</Text>
      <View style={styles.yellowView}/>
      <View style={styles.blueView}/>
    </View>
  );
};

const styles = 
StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  yellowView: {
    flex:1,
    backgroundColor:"yellow"
  },
  blueView: {
    flex:1,
    backgroundColor:"blue"
  }
});
```

- flex값을 만약 1, 1, 3,으로 가져가면 1:1:3 비율로 화면 자리를 가져간다.