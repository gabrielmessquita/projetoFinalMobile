import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground source={require('@/assets/images/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        {/* Ícone Representando Atividades */}
        <View style={styles.iconContainer}>
          <FontAwesome name="tasks" size={60} color="white" />
        </View>

        <Text style={styles.title}>Gerenciamento de Atividades</Text>

        {/* Botão para Cadastro */}
        <TouchableOpacity style={styles.button} onPress={() => router.push('/CadastroAtividade')}>
          <Text style={styles.buttonText}>Cadastrar Atividade</Text>
        </TouchableOpacity>

        {/* Botão para Listagem */}
        <TouchableOpacity style={styles.button} onPress={() => router.push('/ListagemAtividades')}>
          <Text style={styles.buttonText}>Listar Atividades</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
