import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet, Linking, ToastAndroid  } from 'react-native';
import { BlurView } from 'react-native-blur';

import ParallaxScrollView from '@/components/ParallaxScrollView';

const fazerChamada = async () => {
  // Exemplo de uso
  const numero = "18991207281"; 
  const url = `tel:${numero}`;
  try {
    await Linking.openURL(url);
  } catch (error) {
    console.error("Erro ao abrir o cliente de telefone:", error);
  }
};

export default function HomeScreen() {
  const openUrl = async (url) => {
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    } else {
      ToastAndroid.show("Can't open this URL", ToastAndroid.SHORT);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/fundo.jpg')}
          style={styles.profileImage}
        />

      }
      
      renderHeader={() => (
        <BlurView
          style={styles.blurContainer}
          blurType="light"
          blurAmount={10}
        >

        </BlurView>
      )}
    >

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{}}>
          <Image
          source={require('@/assets/images/perfil2.jpeg')}
          style={{width: 100, height: 100, borderRadius: 100,  }} 
        />
          </View>
        </View>

      <Text style={styles.title}>João Vitor Dutra Macedo</Text>
          <Text style={styles.title}>_______________________________</Text>  
          <Text style={styles.texto}>Estudante</Text>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => openUrl('https://www.facebook.com/')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>  
      </View>

      <View>
      <TouchableOpacity
          onPress={() => openUrl('instagram://user?username=joaovitordutramacedo')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity
          onPress={() => openUrl('https://wa.me/5518991207281')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Whatsapp</Text>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity
          onPress={() => openUrl('https://www.linkedin.com/in/jo%C3%A3o-vitor-dutra-macedo-989b53313/')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Linkedin</Text>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity
          onPress={() => openUrl('https://github.com/xuxuReserva')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity
          onPress={fazerChamada}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Telefone</Text>
        </TouchableOpacity>
      </View>
     
    </ParallaxScrollView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  perfil: {
    borderRadius: 10,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',

  },
  profileImage: {
    width: 395,
    height: 250,
    marginHorizontal: 10,
    resizeMode: "repeat",
    
  },
  blurContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: "center"
  },
  texto: {
    fontSize: 20,
    color: '#fff',
    textAlign: "center",
    fontWeight: 'bold'
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 70,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});