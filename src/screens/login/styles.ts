import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  bold: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  signInText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 16,
    backgroundColor: '#D9D9D982',
  },
  input: {
    height: 48,
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 16,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'center',
  },
  toggleButton: {
    marginLeft: 5,
    marginBottom: 8,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#999',
  },
});

export default styles;
