import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function CadastroAtividade() {
  const [nome, setNome] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleCadastro = () => {
    if (!nome || !responsavel || !data || !descricao) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }
    Alert.alert('Sucesso', 'Atividade cadastrada com sucesso!');
  };

  return (
    <ImageBackground source={require('../assets/images/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome name="user" size={60} color="white" />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Cadastro de Atividade</Text>

          <TextInput 
            style={styles.input} 
            placeholder="Nome da Atividade" 
            placeholderTextColor="#bbb" //contraste a mais em "Nome da Atividade"
            value={nome} 
            onChangeText={setNome} 
          />

          <TextInput 
            style={styles.input} 
            placeholder="Responsável" 
            placeholderTextColor="#bbb"
            value={responsavel} 
            onChangeText={setResponsavel} 
          />

          <TextInput 
            style={styles.input} 
            placeholder="Data (DD/MM/AAAA)" 
            placeholderTextColor="#bbb"
            value={data} 
            onChangeText={setData} 
            keyboardType="numeric"
          />

          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Descrição" 
            placeholderTextColor="#bbb"
            value={descricao} 
            onChangeText={setDescricao} 
            multiline
          />

          <Button title="Cadastrar" onPress={handleCadastro} />
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
  iconContainer: {     // borda ao redor do icone
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  formContainer: {  // quadrado onde contem as informaçoes
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
  input: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    color: 'white',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
});

