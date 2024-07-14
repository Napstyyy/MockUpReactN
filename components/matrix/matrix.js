import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MatrixComponent = () => {
  const matrixData = [
    { "id": 1, "Nombre": "Nombre", "Valor": "Mauricio", "Estado": null },
    { "id": 2, "Nombre": "Apellido", "Valor": "Giraldo Arboleda", "Estado": null },
    { "id": 3, "Nombre": "Nombre Empresa", "Valor": "", "Estado": null },
    { "id": 4, "Nombre": "Contrato", "Valor": "Contrato No firmado", "Estado": 1 },
    { "id": 5, "Nombre": "Productos Servicios", "Valor": "", "Estado": 1 },
    { "id": 6, "Nombre": "Menu o Catalogo", "Valor": "Catalogo No Enviado", "Estado": 1 },
    { "id": 7, "Nombre": "Foto Documento", "Valor": "Identidad No Verificada", "Estado": 1 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.Nombre}</Text>
      <Text style={styles.cell}>{item.Valor}</Text>
      <View style={styles.cell}>
        {item.Estado === 1 ? (
          <Icon name="close" size={20} color="#ff6464" style={styles.icon} />
        ) : (
          <Icon name="check" size={20} color="#8cc8b4" style={styles.icon} />
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerTopBar}>
        <Text style={styles.headerTopBarText}>Datos Generales</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.heading}>Nombre</Text>
        <Text style={styles.heading}>Valor</Text>
        <Text style={styles.heading}>Estado</Text>
      </View>
      <FlatList
        data={matrixData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 8,
    marginHorizontal: 2,
    elevation: 1,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  headerTopBar: {
    backgroundColor: '#6AB7E2',
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 2,
    marginBottom: 15,
    width: '100%', // Full width
  },
  headerTopBarText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center', // Center text
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  heading: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
  },
  cell: {
    fontSize: 15,
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  icon: {
    alignSelf: 'center',
  }
});

export default MatrixComponent;
