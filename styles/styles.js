import { StyleSheet } from 'react-native';

const colors = {
  primary: '#2E86C1',
  secondary: '#F5B041',
  background: '#F2F3F4',
  text: '#2C3E50',
  inputBackground: '#EAEDED',
  inputBorder: '#BFC9CA',
  inputText: '#34495E',
};

const shadows = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    backgroundColor: colors.primary,
    ...shadows,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  headerText: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.secondary,
    ...shadows,
    borderRadius: 5,
    marginTop: 20,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: colors.inputBackground,
    color: colors.inputText,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    marginBottom: 10,
  },
  eventItem: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  eventImage: {
    width: 60,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  eventDetails: {
    flex: 1,
  },
  eventName: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDescription: {
    color: colors.text,
    fontSize: 14,
    marginBottom: 5,
  },
  eventPrice: {
    color: colors.text,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default styles;