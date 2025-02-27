import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function AtividadeDetalhes() {
  const router = useRouter();
  const { nome, responsavel, data } = useLocalSearchParams(); 

  return (
    <ImageBackground source={require('../assets/images/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>📌</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Detalhes da Atividade</Text>

          <Text style={styles.detailText}><Text style={styles.bold}>Nome:</Text> {nome}</Text>
          <Text style={styles.detailText}><Text style={styles.bold}>Responsável:</Text> {responsavel}</Text>
          <Text style={styles.detailText}><Text style={styles.bold}>Data:</Text> {data}</Text>

          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
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
  iconText: {
    fontSize: 40,
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
