import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

interface MatrixItem {
  id: number;
  Nombre: string;
  Valor: string;
  Estado: number | null;
}

const matrixData: MatrixItem[] = [
  { id: 1, Nombre: 'Nombre', Valor: 'Mauricio', Estado: null },
  { id: 2, Nombre: 'Apellido', Valor: 'Giraldo Arboleda', Estado: null },
  { id: 3, Nombre: 'Nombre Empresa', Valor: '', Estado: null },
  { id: 4, Nombre: 'Contrato', Valor: 'Contrato No firmado', Estado: 1 },
  { id: 5, Nombre: 'Productos Servicios', Valor: '', Estado: 1 },
  { id: 6, Nombre: 'Menu o Catalogo', Valor: 'Catalogo No Enviado', Estado: 1 },
  { id: 7, Nombre: 'Foto Documento', Valor: 'Identidad No Verificada', Estado: 1 },
];

const MatrixComponent: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MatrixItem | null>(null);

  const openModal = (item: MatrixItem) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderRightActions = (item: MatrixItem) => (
    <View style={styles.actions}>
      <TouchableOpacity style={styles.actionButton} onPress={() => openModal(item)}>
        <Icon name="edit" size={20} color="#fff" />
        <Text style={styles.actionText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  const renderLeftActions = (item: MatrixItem) => (
    <View style={styles.actions}>
      <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#ff6464' }]} onPress={() => openModal(item)}>
        <Icon name="trash" size={20} color="#fff" />
        <Text style={styles.actionText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }: { item: MatrixItem }) => (
    <Swipeable
      renderLeftActions={() => renderLeftActions(item)}
      renderRightActions={() => renderRightActions(item)}
    >
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
    </Swipeable>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.headerTopBar}>
              <Text style={styles.headerTopBarText}>Datos Generales</Text>
            </View>
            <View style={styles.header}>
              <Text style={styles.heading}>Nombre</Text>
              <Text style={styles.heading}>Valor</Text>
              <Text style={styles.heading}>Estado</Text>
            </View>
          </>
        }
        data={matrixData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {selectedItem ? `Detalle de ${selectedItem.Nombre}` : ''}
            </Text>
            <Text>{selectedItem?.Valor}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    width: '100%',
  },
  headerTopBarText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
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
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    width: '100%',
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
  },
  icon: {
    alignSelf: 'center',
  }
});

export default MatrixComponent;