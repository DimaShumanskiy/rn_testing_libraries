import React from 'react';
import {View, StyleSheet, Platform, Image, ScrollView} from 'react-native';
import {
  Appbar,
  Avatar,
  Banner,
  Text,
  Card,
  Button,
  Title,
  Paragraph,
  Checkbox,
  FAB,
  Portal,
  Provider,
  List,
} from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const ReactNativePaper = props => {
  const [state, setState] = React.useState({open: false});
  const onStateChange = ({open}) => setState({open});
  const {open} = state;

  const [visible, setVisible] = React.useState(true);
  const _goBack = () => console.log('Went back');
  return (
    <ScrollView>
      <View style={styles.container}>
        <Appbar.Header style={{backgroundColor: 'gray'}}>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Title" subtitle={'Subtitle'} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>

        <Appbar.Header style={{backgroundColor: 'black'}}>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Title" />
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon={MORE_ICON} />
        </Appbar.Header>

        <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
          <Avatar.Icon size={24} icon="folder" />
          <Text>{`если не работаю иконки то чекни\ninfo.plist - <key>UIAppFonts</key>\nв этом проекте уже написано`}</Text>
        </View>
        <Banner
          visible={visible}
          actions={[
            {
              label: 'Fix it',
              onPress: () => setVisible(false),
            },
            {
              label: 'Learn more',
              onPress: () => setVisible(false),
            },
          ]}
          icon={({size}) => (
            <Image
              source={{
                uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
              }}
              style={{
                width: size,
                height: size,
              }}
            />
          )}>
          There was a problem processing a transaction on your credit card.
        </Banner>
        <Card>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        </Card>
        <Card>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
        <Checkbox.Item label="Item" status="checked" />
        <Provider>
          <Portal>
            <FAB.Group
              open={open}
              icon={open ? 'calendar-today' : 'plus'}
              actions={[
                {icon: 'plus', onPress: () => console.log('Pressed add')},
                {
                  icon: 'star',
                  label: 'Star',
                  onPress: () => console.log('Pressed star'),
                },
                {
                  icon: 'email',
                  label: 'Email',
                  onPress: () => console.log('Pressed email'),
                },
                {
                  icon: 'bell',
                  label: 'Remind',
                  onPress: () => console.log('Pressed notifications'),
                },
              ]}
              onStateChange={onStateChange}
              onPress={() => {
                if (open) {
                  // do something if the speed dial is open
                }
              }}
            />
          </Portal>
        </Provider>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  containerNavigate: {
    borderWidth: 1,
    paddingVertical: 4,
    marginBottom: 10,
  },
});
export default ReactNativePaper;
