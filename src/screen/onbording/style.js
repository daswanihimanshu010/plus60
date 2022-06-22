import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    },
    imgStyle: {
        alignSelf : 'center',
        height:'50%',
        resizeMode:'contain',
        width:'40%',
    },
    imgStyle1: {
        
        height:'100@mvs',
        resizeMode:'contain',
        width:'190@ms',
        alignSelf : 'center',
        marginTop:'-25@ms'
    },
  
    stylelogo:{
        height:'22%',
        justifyContent:'center',
        alignItems:'center'
    },
    stylerow:{
        height:'17%',
    },
    stylewrap:{
        width:'100%',
        height:'95%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    box1:{
        width:'28%',
        height:'100%',
        backgroundColor:colors.Golden,
        justifyContent:'center',
        alignItems:'center'
    },
    lconStyle:{
        width:'60%',
        height:'50%',
        resizeMode:'contain',
    },
    lconStyle1:{
        width:'30%',
        height:'50%',
        resizeMode:'contain',
    },
    styletxt1:{
        color:colors.Charcole,
        fontSize: '13@ms',
        fontWeight: 'bold',

    },
    styletxts2:{
        color:colors.Golden,
        fontSize: '13@ms',
        fontWeight: 'bold',

    },modal:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
        
    },camtxt:{
        alignSelf:'center',marginTop:2,
        fontSize:'14@ms',
        color:colors.Charcole
    },
    modalInner1:{
        width:'80%',

        padding:'25@ms',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
    styletxt2:{
        color:colors.Charcole,
        fontSize: '15@ms',
    },
    styletxt3:{
        color:colors.Golden,
        fontSize: '15@ms',
    },
    box2:{
        width:'70%',
        height:'100%',
        backgroundColor:colors.black,
      //  flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
  
    stylebootam:{
        height:'33%',
    },
    stylewrap1:{
        height:'31%',
        flexDirection:'row',
        alignItems:'flex-end', 
        justifyContent:'space-evenly',
        paddingVertical:'5@ms'
    },
    btnstylelogin:{
        height:'60%',
        width:'43%',
        backgroundColor:colors.Golden,
        borderRadius:'6@ms',
        alignItems:'center',
        justifyContent:'center'
    },
    btnstylesignup:{
        height:'60%',
        width:'43%',
        backgroundColor:colors.Charcole,
        borderRadius:'6@ms',
        alignItems:'center',
        justifyContent:'center'
    },
    stylewrap2:{
        height:'69%',
    },
    btm1:{
        height:'60%',
        justifyContent:'space-evenly'
    },
    btm2:{
        height:'40%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    roundfb:{
        backgroundColor:'#516EAB',
        height:'30@ms',
        width:'30@ms',
        borderRadius:'25@ms',
        marginLeft:'15@ms'

    },
    roundgoogle:{
        backgroundColor:'#DD4B39',
        height:'30@ms',
        width:'30@ms',
        borderRadius:'25@ms',
        marginLeft:'15@ms'

    },
    roundtwitter:{
        backgroundColor:'#00A6D3',
        height:'30@ms',
        width:'30@ms',
        borderRadius:'25@ms',
        marginLeft:'15@ms'

    },
    styletxt4:{
        color:colors.Charcole,
        alignSelf:'center',
        fontSize:'11@ms',
    },
    styletxt5:{
        color:colors.Charcole,
        alignSelf:'center',
        fontSize:'11@ms',
    }
    
})