import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../utils/colors';

export const style = ScaledSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:colors.whitelight
    }, modalsubtitle:{
        fontSize:'12@ms',
        color:colors.Charcole,
        fontWeight:'400',
        marginBottom:'2@ms'
      },
      cardheaderblb:{
        paddingTop:'25@mvs',
        marginBottom:'-8@ms',
        paddingHorizontal:'25@ms',
        flexDirection:'row',
    },
    
    modal:{
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    modalInner1:{
        width: '320@ms',
        backgroundColor: 'white',
        borderRadius: '4@ms',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        overflow:'hidden',
        paddingHorizontal:'12@ms',
        paddingVertical:'14@ms'
      },
    modalInner:{
        width: '320@ms',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4@ms',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        overflow:'hidden'
      },
      modelheader:{
        backgroundColor:'#DFE4DE',
        width:'100%',
      },
      modaltitle:{
        paddingHorizontal:'15@ms',
        flex:1
      },
      modaltxt2:{
        color:colors.Charcole,
        fontSize:'12@ms',
        fontWeight:'400'
      },
      modaltxt1:{
        color:colors.Charcole,
        fontSize:'14@ms',
        fontWeight:'bold'
      },
      modalimg:{
        height:'28@ms',
        width:'54@ms',
        backgroundColor:colors.blue
      },
    iconf:{color:'red'},

      modelsec:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:'25@ms'
      },
      ctxt1:{
        fontSize:'14@ms',
        color:colors.red,
        fontWeight:'bold'
      },
      linktxt:{
        fontSize:'12@ms',
        color:colors.blue

      },
      linktxt1:{
        fontSize:'12@ms',
        color:colors.Charcole

      },
      ctxt2:{
        fontSize:'12@ms',
        color:colors.white,
      },
        cardlist:{
        flexDirection:'row',
        width:'90%',
       // backgroundColor:'red',
        alignSelf:'center',
        borderRadius:'6@ms',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,
        justifyContent:'space-between',
        padding:'8@ms',
        marginBottom:'12@ms'
    },
    cardlistads:{
        flexDirection:'row',
       // height:'100@mvs',
        width:'90%',
        alignSelf:'center',
        borderRadius:'6@ms',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,
        justifyContent:'space-between',
        padding:'8@ms',
        marginBottom:'12@ms'
    },
    txt1:{
        color:'white',
        fontSize:'20@ms'
    },
    txt11:{
        alignSelf:'center',
        color:'white',
        fontSize:'18@ms'
    },
    txt12:{
        alignSelf:'center',
        color:'white',
        fontSize:'12@ms'
    },
    btntxt:{
        color:colors.white,
        fontSize:'12@ms',
        marginVertical:'2@ms',
        padding:'2@ms'
    },
    btn:{
        alignSelf:'center',
        width:'75%',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',marginVertical:'8@ms'
    },
    txt2:{
        color:'white',
        fontSize:'12@ms'
    },
    txt3:{
        alignSelf:'center',
        color:colors.black,
        fontSize:'8@ms'
    },
    txt4:{
        alignSelf:'center',
        color:colors.black,
        fontSize:'10@ms',fontWeight:'bold',
        marginBottom:'8@ms'
    },
    
    card1:{
        paddingVertical:'10@ms',
        paddingLeft:'10@ms',
        paddingRight:'25@ms',
        width:'58%',
        backgroundColor:'#EFAB00',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,
        //justifyContent:'space-between',
    },
    card11:{
        paddingVertical:'10@ms',
        paddingLeft:'10@ms',
        paddingRight:'25@ms',
        width:'48%',
      
        justifyContent:'center'
    },
    card2:{
        padding:'10@ms',
        width:'40%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,
        justifyContent:'space-between',

    },
    card21:{
        padding:'10@ms',
        width:'50%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 1,
        justifyContent:'space-between',

    },
    imgStyle1: {
        height:'100@mvs',
        resizeMode:'contain',
        width:'190@ms',
    },
   
    imgStyle3: {
        
        height:'38@ms',
        width:'38@ms',
        borderRadius:'25@ms',
        borderWidth:1,
        borderColor:colors.white
      
    },
    
    stylelogo:{
        paddingHorizontal:'15@ms',
      
    },
    cardheader:{
        paddingVertical:'25@mvs',
        paddingHorizontal:'25@ms',
    },
    card:{
        backgroundColor:colors.white,
        height:'680@mvs',
        borderTopLeftRadius:'30@ms',
        borderTopRightRadius:'30@ms',
    },
    hdr:{
        fontWeight:'bold',
        fontSize:'20@ms',
        color:colors.black
    },
    
   
   
   
    
   
  
    
   
   
  
    
})