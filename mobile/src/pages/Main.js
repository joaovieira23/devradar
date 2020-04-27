import React, { useEffect, useState } from 'react';
import { StyleSheet, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        })

      }
    }

    loadInitialPosition();
  }, [])

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -23.677324,  longitude: -46.542673 }}>
        <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/45154356?s=460&u=3ae25f40bfcf6c661c7fad6f27ea1f471acf88ac&v=4' }}/>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF',
  },
})

export default Main;
