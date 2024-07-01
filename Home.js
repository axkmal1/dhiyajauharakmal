import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Kontak from './kontak';

const Home = ({ navigation }) => {
  const handlePress = (gambar, judul, telpon) => {
    navigation.navigate('About', { gambar, judul, telpon });
  };

  return (
    <View style={styles.container}>
      <Kontak
      gambar={require('../assets/foto.jpg')}
        judul="Akmal"
      />
      <Button
        title="Deskripsi"
        onPress={() => handlePress(require('../assets/foto.jpg'), 'Dhiya jauhar akmal', '087805761574')}
      />

      <Kontak
      gambar={require('../assets/jeyjoy.jpg')}
        judul="Fajar"
      />
      <Button
        title="Deskripsi"
        onPress={() => handlePress(require('../assets/jeyjoy.jpg'), 'Fajar budniman', '085758225942')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
