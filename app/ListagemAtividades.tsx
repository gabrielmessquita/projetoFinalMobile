import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface Atividade {
  id: number;
  nome: string;
  responsavel: string;
  data: string;
}

export default function ListagemAtividades() {
  const router = useRouter();
  const [atividades, setAtividades] = useState<Atividade[]>([
    { id: 1, nome: 'Atividade 1', responsavel: 'João', data: '10/03/2025' },
    { id: 2, nome: 'Atividade 2', responsavel: 'Maria', data: '12/03/2025' },
    { id: 3, nome: 'Atividade 3', responsavel: 'Carlos', data: '15/03/2025' },
  ]);

  const renderItem = ({ item }: { item: Atividade }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => router.push({
        pathname: '/AtividadeDetalhes',
        params: { nome: item.nome, responsavel: item.responsavel, data: item.data }
      })}
    >
      <Text style={styles.itemText}>{item.nome}</Text>
      <Text style={styles.itemText}>Responsável: {item.responsavel}</Text>
      <Text style={styles.itemText}>Data: {item.data}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={require('../assets/images/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome name="calendar" size={60} color="white" />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Lista de Atividades</Text>
          <FlatList
            data={atividades}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />

          {/* Botão para Cadastrar Nova Atividade */}
          <TouchableOpacity style={styles.cadastroButton} onPress={() => router.push('/CadastroAtividade')}>
            <Text style={styles.cadastroButtonText}>Cadastrar Nova Atividade</Text>
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
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
  },
  cadastroButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  cadastroButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
