import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main({ navigation }) {
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

        <Callout onPress={() => {
          navigation.navigate('Profile', { github_username: 'joaovieira23' });
        }}>
          <View style={styles.callout}>
            <Text style={styles.devName}>João Victor Vieira de Andrade</Text>
            <Text style={styles.devBio}>Developer: Data Science, Java, C#, SQL, Oracle PL/SQL, HTML5, CSS3, JavaScript, Git e GitHub, React, React Native, Node.js, AWS</Text>
            <Text style={styles.devTechs}>ReactJS, React Native, Node.js</Text>
          </View>
        </Callout>
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

  callout: {
    width: 260,
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  devBio: {
    color:'#666',
    marginTop: 5,
  },

  devTechs: {
    marginTop: 5,
  }
})

export default Main;
