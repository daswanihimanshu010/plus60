import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    },
    roundimg:{
        width:'15%',
        
    },
    modalsubtitle:{
        fontSize:'12@ms',
        color:colors.Charcole,
        fontWeight:'400',
        marginBottom:'2@ms'
      },
      cardheaderblb:{
        paddingTop:'15@mvs',
        marginBottom:'-8@ms',
        paddingHorizontal:'25@ms',
        flexDirection:'row',
    },
      modalInner:{
        width: '320@ms',
        backgroundColor: 'white',
        borderRadius: '4@ms',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        overflow:'hidden',
        paddingHorizontal:'12@ms',
        paddingVertical:'14@ms'
      },
      modal:{
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    line:{
        borderBottomWidth:1,
        width:'100%',
        alignSelf:'center',
        marginVertical:'10@ms',
        borderBottomColor:colors.blacklight

    },
    round:{
        backgroundColor:'black',
        width:'40@ms',
        height:'40@ms',
        borderRadius:'25@ms',
        overflow:'hidden'
    },
    cardtxt:{
        width:'85%',
    },
    txt1:{
        fontWeight:'700',
        color:'#564e4e',
        fontSize:'15@ms'
    },
    txt2:{
        color:colors.Charcole,
        fontSize:'13@ms',
        marginTop:'5@ms',
        fontWeight:'500'
    },
    verticalline:{
        height: '22@mvs',
        width: 1,
        backgroundColor:colors.blacklight
    },
    iconf:{color:'red'},

    txt3:{
        color:'#b7aaaa',
        fontSize:'13@ms',
        fontWeight:'500',
        marginTop:'2@ms'
    },
    txt5:{alignSelf:'center',color:'green',fontWeight:'700'},
    address:{flexDirection:'row',marginTop:'6@ms'},
    txt4:{
        color:'#b7aaaa',
        fontSize:'13@ms',
        fontWeight:'500',
        lineHeight:'14@ms',
        marginLeft:'5@ms'
    },
    cardlist:{
        padding:'15@ms',
        width:'90%',
        alignSelf:'center',
   
        borderRadius:'10@ms',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,
        marginBottom:'12@mvs'
    },
    txt3type:{
        fontWeight:'500',
        color:colors.white,
        fontSize:'12@ms',
        alignSelf:'center'
        
    },
    txt3typeview:{
        marginVertical:'2@ms',
        padding:'5@ms',
        backgroundColor:colors.Golden,
        borderRadius:'15@ms',
        width:'30%',
        
    },
    searchbar:{
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#DFDFDF',
        borderRadius:'25@ms',
        width:'95%',
        paddingHorizontal:'25@ms',
        paddingVertical:'5@ms',
        color:colors.Charcole
    },
    imgStyle1: {
        
        height:'60@mvs',
        resizeMode:'contain',
        width:'110@ms',
    },
    
    imgStyle3: {
        
        height:'38@ms',
        width:'38@ms',
        borderRadius:'25@ms',
        borderWidth:1,
        borderColor:colors.white
      
    },
    cardheadertxt:{
        marginLeft:'6@ms',
        color:colors.black,
        fontSize:'14@ms',
        lineHeight:'25@ms',
        fontWeight:'400'
    },
    stylelogo:{
        paddingHorizontal:'15@ms',
        height:'130@mvs',
    },
   
    cardheader:{
        paddingVertical:'25@mvs',
        paddingHorizontal:'25@ms',

        flexDirection:'row',
        justifyContent:'space-between'
    },
    
    card:{
        backgroundColor:colors.white,
        height:'630@mvs',
        borderTopLeftRadius:'30@ms',
        borderTopRightRadius:'30@ms',
        paddingVertical:'25@mvs'
    },
    hdr:{
   
        fontWeight:'bold',
        fontSize:'20@ms',
        color:colors.black
    },
    
   
   
   
    
   
  
    
   
   
  
    
})