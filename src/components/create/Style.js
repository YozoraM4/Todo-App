import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    createContainer: {
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },  
    header: {
        width: wp(100),
        fontSize: hp(3),
        color: '#ff8800',
        paddingHorizontal: hp(5),
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {
        width: wp(70),
        height: hp(6),
        paddingHorizontal: hp(2.5),
        backgroundColor: '#fff',
        borderRadius: hp(1),
        borderWidth: 1,
        borderColor: '#c2cee5',
        marginVertical: hp(1.5)
    },
    createBtn: {
        backgroundColor: '#ff8800',
        paddingHorizontal: hp(6),
        paddingVertical: hp(1.5),
        borderRadius: hp(1)
    },
    textWhite: {
        color: '#fff'
    }
})

export default styles