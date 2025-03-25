import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";
import noteService from "@/services/noteService";
import { ActivityIndicator } from "react-native";

const NoteScreen = () => {
  const [notes, setNotes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    const response = await noteService.getNotes();
    if (response.error) {
      setError(response.error);
      Alert.alert("Error", response.error);
    } else {
      setNotes(response.data);
      setError(null);
    }

    setLoading(false);
  };

  // Add note feature after API integration
  const addNote = async () => {
    if (newNote.trim() === "") return;

    const response = await noteService.addNote(newNote);
    if (response.error) {
      Alert.alert("Error", response.error);
    } else {
      setNotes([...notes, response.data]);
    }

    setNewNote("");
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <>
          {error && <Text style={styles.errorText}>{error}</Text>}
          <NoteList notes={notes} />
        </>
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f8ff",
  },

  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    padding: 15,
    backgroundColor: "#c4b5fd",
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default NoteScreen;
