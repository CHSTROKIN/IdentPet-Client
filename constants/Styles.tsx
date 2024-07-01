import { StyleSheet, Platform } from 'react-native';
import { Colors } from './Colors';
import * as Font from 'expo-font';

export const useFonts = async () =>
  await Font.loadAsync({
    'Inclusive-Sans': require('../assets/fonts/InclusiveSans-Regular.ttf'),
    'Inclusive-Sans-Italic': require('../assets/fonts/InclusiveSans-Italic.ttf'),
  });

export const Styles = StyleSheet.create({

  // Container styles

  container_outermost: {
    flex: 1,
    backgroundColor: Colors.background,
    textAlign: 'left',
    height: '100%',
    overflow: 'visible',
  },

  container_modal_outermost: {
    flex: 1,
    backgroundColor: Colors.modal_background,
    textAlign: 'left',
    height: '100%',
  },

  container: {
    flex: 1,
    textAlign: 'left',
    alignContent: 'center',
  },

  container_with_outline: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    textAlign: 'left',
    borderColor: Colors.text,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
  },

  // Card styles

  card_container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginVertical: 10,
  },

  commonProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.10,
    shadowRadius: 3.84,
    elevation: 3,
    overflow: 'visible',
  },

  // Header styles for modal views

  modal_header: {
    backgroundColor: Colors.modal_background,
    textAlign: 'left',
    borderBottomWidth: 1,
    borderColor: Colors.text,
  },

  modal_leftHeaderButton: {
    color: Colors.text,
    fontSize: 16,
    textAlign: 'left',
    paddingLeft: 0,
  },
  
  // Text styles

  h1: {
    color: Colors.emph,    
    fontSize: 32,
    fontFamily: 'Inclusive-Sans',
    fontWeight: 'regular',
    letterSpacing: -.5,
  },
  h15: {
    color: Colors.emph,    
    fontSize: 18,
    fontFamily: 'Inclusive-Sans',
    fontWeight: 'regular',
    letterSpacing: -.5,
  },
  h2: {
    color: Colors.text,
    fontSize: 18,
    fontFamily: 'Inclusive-Sans',
    textAlign: 'left',
    letterSpacing: -.5,
  },
  text: {
    color: Colors.text,
    fontSize: 14,
    fontFamily: 'Inclusive-Sans',
    paddingBottom: 10,
  },

  bold_text: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Inclusive-Sans',
    paddingBottom: 10,
  },
  text_field: {
    color: Colors.text,
    fontSize: 16,
    borderWidth: 1,
    fontFamily: 'Inclusive-Sans',
    borderColor: Colors.text,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '100%'
  },
  errorText: {
    color: Colors.error,
    fontFamily: 'Inclusive-Sans',
    fontSize: 16,
  },

  // Forms

  form_subtitleStyle: {
    color: Colors.text,
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'Inclusive-Sans',
    marginTop: 10,
  },

  form_labelStyle: {
    color: Colors.text,
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Inclusive-Sans',
    marginTop: 10,
    flex: 1,
  },
  form_fieldStyle: {
    color: Colors.text,
    fontFamily: 'Inclusive-Sans',
    fontSize: 16,
    flex: 1,
  },
  form_fieldContainerStyle: {
    flex: 2.8,
  },

  form_longLabelStyle: {
    color: Colors.text,
    fontSize: 16,
    width: '100%',
    fontFamily: 'Inclusive-Sans',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  form_longFieldStyle: {
    color: Colors.text,
    fontSize: 16,
    flex: 1,
    fontFamily: 'Inclusive-Sans',
    height: 100,
    paddingVertical: 10,
    paddingRight: 15,
    textAlignVertical: 'top',
  },
  form_longContainerStyle: {
    flex: 1,
    borderColor: Colors.edge,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: Colors.formField,
    fontFamily: 'Inclusive-Sans',
    flexDirection: 'column',
    borderRadius: 10,
  },
  form_longFieldContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    borderTopWidth: 0.4,
    fontFamily: 'Inclusive-Sans',
    borderTopColor: '#B9B9BB',
    paddingLeft: 15,
  },

  mapLabelStyle: {
    fontSize: 16,
    marginBottom: 10,
    width: '100%',
    fontFamily: 'Inclusive-Sans',
  },
  map_containerStyle: {
   paddingBottom: 10, 
  },

  form_shortContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    fontFamily: 'Inclusive-Sans',
    borderColor: Colors.edge,
    backgroundColor: Colors.formField,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  form_shortContainerStyleF: {
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 15,
    borderBottomColor: '#B9B9BB',
    borderBottomWidth: 0.4,
    alignItems: 'center',
    borderColor: Colors.edge,
    borderWidth: 1,
    backgroundColor: Colors.formField,
    justifyContent: 'space-between',
  },
  form_shortContainerStyleL: {
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderColor: Colors.edge,
    borderWidth: 1,
    backgroundColor: Colors.formField,
    justifyContent: 'space-between',
  },
  form_shortContainerStyleM: {
    flexDirection: 'row',
    borderColor: Colors.edge,
    borderWidth: 1,
    borderBottomWidth: 0.4,
    borderBottomColor: '#B9B9BB',
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: Colors.formField,
    justifyContent: 'space-between',
  },
  form_shortContainerStyleS: {
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderColor: Colors.edge,
    borderWidth: 1,
    backgroundColor: Colors.formField,
    justifyContent: 'space-between',
  },
});