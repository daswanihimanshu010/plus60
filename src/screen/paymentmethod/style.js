import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    viewStyle:{
        flex:1,
      //  alignItems:'center',
     //   justifyContent:'center',
       // backgroundColor:colors.white
    },
    icon:{
        alignSelf : 'center',
        height:'55@ms',
        resizeMode:'contain',
        width:'55@ms',
    },
    stylelogo:{
        height:'22%',
        justifyContent:'center',
        alignItems:'center'
    },
    wrapp:{
        height:'78%',
    //    backgroundColor:'red'
    },
    headerstyle:{
        height:'10%',
        backgroundColor:colors.headerview,
        justifyContent:'center',
        alignItems:'center'

    },
    txtstyle1:{
        color:colors.whitelight,
        fontSize:'20@ms',
        fontWeight:'300'
    },
    txtstyle3:{
        color:colors.Golden,
        fontSize:'17@ms',
        fontWeight:'300'
    },
    field:{
       
        width:'70%',
        alignSelf:'center',
        marginTop:'35@ms',
        
    },
    txtstyle2:{
        color:colors.Charcole,
        fontSize:'15@ms',
        alignSelf:'center',
        marginLeft:'15@ms',
        fontWeight:'400'
    },
    view:{
         flexDirection:'row',
         marginBottom:'15@mvs'
    },
    input:{
        width:'100%',
        height:'40@ms',
        marginTop:'3@ms',
        marginBottom:'10@ms',
        backgroundColor:colors.white,
        borderRadius:'8@ms',
        shadowColor:colors.shadow,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.9,
        shadowRadius: 2,
        elevation: 6,
    },
    btn:{
        width:'100%',
        marginTop:'75@mvs',
        height:'45@ms',
        backgroundColor:colors.Charcole,
        borderRadius:'8@ms',
        justifyContent:'center',
        alignItems:'center',

    },




   
    backgroundImage:{
        flex:1,
        resizeMode: 'cover',
        
      },
      imgStyle: {
        alignSelf : 'center',
        height:'50%',
        resizeMode:'contain',
        width:'40%',
       // marginTop:'10@ms'
    },
    imgStyle1: {
        
        height:'50%',
        resizeMode:'contain',
        width:'40%',
        alignSelf : 'center',
        marginTop:'-18@ms'
    },
    
})