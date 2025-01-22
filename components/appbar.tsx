import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface AppBarProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const AppBar: React.FC<AppBarProps> = ({ text, textStyle, containerStyle }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [visibleModal, setVisibleModal] = useState<string | null>(null);

  const handleMenuToggle = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleMenuItemPress = (item: string) => {
    setVisibleModal(item);
    setMenuVisible(false); // Aseguramos cerrar el menú
  };

  const closeModal = () => {
    setVisibleModal(null);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.itemLeft}>
        <FontAwesome name="user-circle-o" size={28} color="#6AB7E2" style={styles.icon} />
        <Text style={[styles.itemText, textStyle]}>{text}</Text>
      </View>
      <TouchableOpacity onPress={handleMenuToggle}>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="#6AB7E2" />
      </TouchableOpacity>
      {isMenuVisible && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity onPress={() => handleMenuItemPress('Option 1')} style={styles.menuItem}>
            <Text>Opción 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('Option 2')} style={styles.menuItem}>
            <Text>Opción 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('Option 3')} style={styles.menuItem}>
            <Text>Opción 3</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Modals */}
      <OptionModal
        isVisible={visibleModal === 'Option 1'}
        title="Modal para Opción 1"
        onClose={closeModal}
      />
      <OptionModal
        isVisible={visibleModal === 'Option 2'}
        title="Modal para Opción 2"
        onClose={closeModal}
      />
      <OptionModal
        isVisible={visibleModal === 'Option 3'}
        title="Modal para Opción 3"
        onClose={closeModal}
      />
    </View>
  );
};

interface OptionModalProps {
  isVisible: boolean;
  title: string;
  onClose: () => void;
}

const OptionModal: React.FC<OptionModalProps> = ({ isVisible, title, onClose }) => (
  <Modal
    transparent
    visible={isVisible}
    animationType="slide"
    onRequestClose={onClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{title}</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '80%',
  },
  icon: {
    marginRight: 10,
  },
  itemText: {
    flex: 1,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    zIndex: 999,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#6AB7E2',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default AppBar;