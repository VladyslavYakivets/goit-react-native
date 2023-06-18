import {
  ImageBackground,
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  Image,
  Text,
    TextInput,
    Pressable,
    TouchableOpacity,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <ImageBackground
      source={require("../RegistrationScreen/bgImage.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingViewStyled}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View style={styles.form}>
            <View style={styles.avatar}>
              <Image
                source={require("../RegistrationScreen/add.png")}
                style={styles.addBtn}
              />
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput
              placeholder="Логін"
              style={styles.inputLogin}
              inputMode="text"
            />
            <TextInput
              placeholder="Адрес електронної пошти"
              style={styles.inputEmail}
              inputMode="email"
            />
            <TextInput
              placeholder="Пароль"
              style={styles.inputPass}
              secureTextEntry={true}
            />
            <View style={styles.btnContainer}>
              <Pressable style={styles.showBtn}>
                <Text style={styles.showBtnText}>{"Показати"}</Text>
              </Pressable>
            </View>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Зареєструватися</Text>
              </TouchableOpacity>
              <Pressable>
                <Text style={styles.authText}>Уже є акаунт? Увійти</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  keyboardAvoidingViewStyled: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: 549,
    backgroundColor: "#ffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
    gap: 16,
  },
  avatar: {
    position: "absolute",
    left: 128,
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addBtn: {
    position: "absolute",
    width: 25,
    height: 25,
    left: 106,
    top: 79,
  },
  title: {
    height: 36,
    fontFamily: "Roboto500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 92,
    marginBottom: 12,
  },
  inputLogin: {
    height: 50,
    marginBottom: 16,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: 16,
  },
  inputEmail: {
    height: 50,
    marginBottom: 16,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: 16,
  },
  inputPass: {
    height: 50,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: 16,
    },
  button: {
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginTop: 43,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto400",
  },
  authText: {
    textAlign: "center",
    marginTop: 16,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
      color: "#1B4371",
    marginBottom: 50,
    
  },

  showBtn: {
    position: "absolute",
    top: -50,
      right: 16,
  },
  showBtnText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },

//   avatar: {
//     position: "absolute",
//     alignSelf: "center",
//     top: -160,
//     width: 120,
//     height: 120,
//     backgroundColor: "#F6F6F6",
//     borderRadius: 16,
//   },
//   containerForm: {

//   },
//   keyboardAvoidingViewStyle: {
//     paddingLeft: 16,
//     paddingRight: 16,
//     paddingTop: 92,
//     paddingBottom: 45,
//     backgroundColor: "#fff",
//     width: "100%",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//   },
//   avatar: {
//     position: "absolute",
//     left: -50,
//     top: -150,
//     width: 120,
//     height: 120,
//     backgroundColor: "#F6F6F6",
//     borderRadius: 16,
//   },
//   addButton: {
//     position: "absolute",
//     width: 25,
//     height: 25,
//     left: 106,
//     top: 79,
//   },
// });

export default RegistrationScreen;

// import {
//   TextInput,
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   ImageBackground,
//   Button,
//   TouchableOpacity,
//   Image,
//   StatusBar,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";

// const RegistrationScreen = () => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require("../RegistrationScreen/bgImage.png")}
//         resizeMode="cover"
//         style={styles.container}
//       >

//         <KeyboardAvoidingView
//           style={styles.containerForm}
//           behavior={Platform.OS === "ios" ? "padding" : "height"}
//         >
//           <View style={styles.avatar}>
//             <Image
//               source={require("../RegistrationScreen/add.png")}
//               style={styles.addButton}
//             />
//           </View>
//           <Text style={styles.title}>Реєстрація</Text>
//           <TextInput
//             placeholder="Логін"
//             style={styles.inputLogin}
//             inputMode="text"
//           />
//           <TextInput
//             placeholder="Адрес електронної пошти"
//             style={styles.inputEmail}
//             inputMode="email"
//           />
//           <TextInput
//             placeholder="Пароль"
//             style={styles.inputPass}
//             secureTextEntry={true}
//           />
//           <View style={styles.btnContainer}>
//             <Pressable style={styles.showBtn}>
//               <Text style={styles.showBtnText}>{"Показати"}</Text>
//             </Pressable>
//           </View>
//           <View>
//             <TouchableOpacity style={styles.button}>
//               <Text style={styles.buttonText}>Зареєструватися</Text>
//             </TouchableOpacity>
//             <Pressable>
//               <Text style={styles.authText}>Уже є акаунт? Увійти</Text>
//             </Pressable>
//           </View>
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-end",
//     width: "100%",
//     alignItems: "center",
//   },
//   avatar: {
//     position: "absolute",
//     left: 128,
//     top: -60,
//     width: 120,
//     height: 120,
//     backgroundColor: "#F6F6F6",
//       borderRadius: 16,

//       ...Platform.select({
//           ios: {
//             left: 155
//         }
//     })
//   },
//   addButton: {
//     position: "absolute",
//     width: 25,
//     height: 25,
//     left: 106,
//     top: 79,
//   },
//   title: {
//     textAlign: "center",
//     fontFamily: "Roboto500",
//     fontSize: 30,
//     lineHeight: 35,
//     marginBottom: 33,
//     color: "#212121",
//   },
//   containerForm: {
//     paddingLeft: 16,
//     paddingRight: 16,
//     paddingTop: 92,
//     paddingBottom: 45,
//     backgroundColor: "#fff",
//       width: "100%",
//     borderTopLeftRadius: 25,
//       borderTopRightRadius: 25,

//   },
//   inputLogin: {
//     height: 50,
//     marginBottom: 16,
//     fontFamily: "Roboto400",
//     fontSize: 16,
//     lineHeight: 19,
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "#E8E8E8",
//     backgroundColor: "#F6F6F6",
//     borderRadius: 8,
//     padding: 16,
//   },
//   inputEmail: {
//     height: 50,
//     marginBottom: 16,
//     fontFamily: "Roboto400",
//     fontSize: 16,
//     lineHeight: 19,
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "#E8E8E8",
//     backgroundColor: "#F6F6F6",
//     borderRadius: 8,
//     padding: 16,
//   },
//   inputPass: {
//     height: 50,
//     fontFamily: "Roboto400",
//     fontSize: 16,
//     lineHeight: 19,
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "#E8E8E8",
//     backgroundColor: "#F6F6F6",
//     borderRadius: 8,
//       padding: 16,
//   },
//   button: {
//     alignItems: "center",
//     paddingTop: 16,
//     paddingBottom: 16,
//     borderRadius: 100,
//     backgroundColor: "#FF6C00",
//     marginTop: 43,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     lineHeight: 19,
//     fontFamily: "Roboto400",
//   },
//   authText: {
//     textAlign: "center",
//     marginTop: 16,
//     fontFamily: "Roboto400",
//     fontSize: 16,
//     lineHeight: 19,
//     color: "#1B4371",
//     marginBottom: 45,
//   },

//   showBtn: {
//     position: "absolute",
//     top: -35,
//     right: 16,
//   },
//   showBtnText: {
//     fontFamily: "Roboto400",
//     fontSize: 16,
//     lineHeight: 19,
//     color: "#1B4371",
//   },
// });
// export default RegistrationScreen;

// <View style={styles.containerForm}>
//   <KeyboardAvoidingView
//     style={styles.KeyboardAvoidingViewStyle}
//     behavior={Platform.OS === "ios" ? "padding" : "height"}
//   >
//     <View style={styles.avatar}>
//       <Image
//         source={require("../RegistrationScreen/add.png")}
//         style={styles.addButton}
//       />
//     </View>

//     <Text style={styles.title}>Реєстрація</Text>
//   </KeyboardAvoidingView>
// </View>;
