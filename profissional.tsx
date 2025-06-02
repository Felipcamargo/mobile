import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

// npm install expo-image (usar este código no terminal)


export default function Profissional() {
  return (
    <View style={styles.container} >
      <View style = {styles.containerConteudo}>
        <View style = {styles.containerNome}>
          <Text style={styles.nome}>Felipe</Text>
        </View>
        <View style={styles.containerLinha}>
            <Text style = {styles.linha}>
                ___________________________________________________
            </Text>
        </View>

        <View style = {styles.containerNome}>
          <Text style={styles.nome}>Formação profissional</Text>
        </View>
        <View style = {styles.containerDados}>
          <Ionicons name="person-outline" size={24} color="white" />
          <Text style = {styles.textoDados}> estudante tecnico desenvolvimento de sistema</Text>
        </View>
        <View style = {styles.containerDados}>
          <Ionicons name="book-outline" size={24} color="white" />
          <Text style = {styles.textoDados}> Curso de musica  </Text>
        </View>
        <View style={styles.containerLinha}>
            <Text style = {styles.linha}>
                ___________________________________________________
            </Text>
        </View>
        <View style = {styles.containerNome}>
          <Text style={styles.nome}>Experiencia e abilidades profissionais</Text>
        </View>
        <View style = {styles.containerDados}>
          <Ionicons name="briefcase-outline" size={24} color="white" />
          <Text style = {styles.textoDados}> musico profissional</Text>
        </View> 
        <View>
            <Text style = {styles.textoDados}>  1 - bom em tudo</Text>
            <Text style = {styles.textoDados}>  2 - responsabilidade</Text>
            <Text style = {styles.textoDados}>  3 - otimo motorista</Text>
            <Text style = {styles.textoDados}>  4 - comunicação</Text>
            <Text style = {styles.textoDados}>  5 - Trabalho em equipe</Text>

        </View>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },
  containerLinha: {
    alignItems: 'center', 
    marginVertical: 10,    
  },
  containerImg: {
    flex: 1,
    paddingTop: 60,
  },
  estiloFoto: {
    width: 300,
    height: 300,
  },
  containerConteudo: {
    flex: 1
  },
  containerNome:{
    alignItems:"center",
  },
  nome: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  linha:{
    color: "white",
    fontSize: 20,
    marginBottom: 20
  },
  containerDados: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  textoDados: {
    marginLeft: 10,
    color: "white",
    fontSize: 24,
  }
})
