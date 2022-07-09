import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import LottieView from 'lottie-react-native';

const config = {
  1: require('../assets/lottie/eco.json'),
  2: require('../assets/lottie/loader.json'),
  3: require('../assets/lottie/switch.json'),
  4: require('../assets/lottie/refresh.json'),
};

const LottieFiles = props => {
  const animation = React.useRef(null);
  const ifFirstRun = React.useRef(true);
  const [like, setLike] = useState(false);

  React.useEffect(() => {
    if (ifFirstRun.current) {
      // для первого рендера
      // если это компонента !!
      if (like) {
        animation.current.play(66, 66);
      } else {
        animation.current.play(19, 19);
      }
      ifFirstRun.current = false;
    } else if (like) {
      // посдедующие рендер
      animation.current.play(19, 50);
    } else {
      animation.current.play(0, 19);
    }
  }, [like]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Ты любишь это ?</Text>
      <View>
        <TouchableOpacity onPress={() => setLike(prev => !prev)}>
          <LottieView
            ref={animation}
            style={styles.heartLottie}
            source={require('../assets/lottie/like.json')}
            autoPlay={false}
            loop={false}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        большое количество анимаций тормозит прилагу
      </Text>
      {Object.entries(config).map(([key, val]) => (
        <View key={key}>
          <LottieView style={styles.icon} source={val} autoPlay />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 22,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  heartLottie: {
    width: 100,
    height: 100,
  },
  icon: {
    width: 200,
    height: 200,
  },
});
export default LottieFiles;
