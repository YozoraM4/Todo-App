import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    todoContainer: {
        height: hp(100),
        alignItems: 'flex-start',
    }, 
    header: {
        width: wp(100),
        fontSize: hp(3),
        color: '#ff8800',
        paddingHorizontal: hp(5),
        paddingVertical: hp(3)
    },
    taskContainer: {
        height: hp(85),
        paddingHorizontal: hp(2),
        PaddingBottom: hp(3),
    },
    task: {
        width: wp(100),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(2),
    },
    time: {
        paddingRight: hp(2),
        width: hp(6.5),
    },
    todo: {
        width: wp(80),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f2d2a2',
        paddingVertical: hp(3),
        paddingHorizontal: hp(2),
        borderRadius: hp(1),
        overflow: 'hidden',
    },
    title: {
        fontSize: hp(2.5),
        fontWeight: '500',
        color: '#fff'
    },
    sub: {
        color: '#999999',
        fontWeight: '500'
    },
    delete: {
        fontSize: hp(2),
        fontWeight: '800',
        color: '#ea4c89'
    }
})

export default styles