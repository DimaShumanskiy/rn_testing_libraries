import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import BottomSheet, {useBottomSheetModal} from '@gorhom/bottom-sheet';

const BottomSheets = props => {
  const bottomSheetRef = useRef();
  const {dismiss, dismissAll} = useBottomSheetModal();

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
    console.log('bottomSheetRef.current', bottomSheetRef.current);
    if (!index) {
      bottomSheetRef.current.close();
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* <Button onPress={dismiss} /> */}
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    // backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
export default BottomSheets;
