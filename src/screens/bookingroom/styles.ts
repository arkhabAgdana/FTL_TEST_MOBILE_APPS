import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  form: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAEDED',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  placeholderText: {
    flex: 1,
    color: '#999',
  },
  submitButton: {
    backgroundColor: '#FAEDED',
    paddingVertical: 14,
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});

export default styles;
