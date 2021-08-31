import React, {useState} from "react"
import {Modal} from 'antd';
import mockData from "./mockData"
import styles from './index.less'
import CategoryTab from "../components/CategoryTab"
import LuckyCircle from "../components/LuckyCircle"
import Login from "../components/Login"

export default ({activityId}) => {
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [customerId , setCustomerId] = useState('')
    // console.log(mockData, 'mockData')
    const {headUrl} = mockData;
    const {layoutInfo: {materials}}  = mockData;
    // console.log(materials, 'materials')
    
    function handleLoginSuccess(res) {
         setLoginModalVisible(false)
    }

    const renderMaterial = () =>{
       return materials.map(item => {
           const {
            marginTop, marginBottom,background_image
           } = item
            return  <div style={{paddingTop: marginTop,paddingBottom: marginBottom}}>
                <img src={background_image} style={{width:'100%'}} alt="" />
            </div>
        })
    }
    return <div className={styles.container}>
        {/* <div className={styles.header}>
           <img className={styles.headImage} src={headUrl} alt="" />
        </div> */}
        <div className={styles.materials}>
        {/* <CategoryTab callbackLogin={() =>setLoginModalVisible(true)} activityId={activityId} /> */}
        <LuckyCircle  activityId={activityId} />
        {/* {
            renderMaterial()
        } */}
        </div>
        <Modal 
         visible={loginModalVisible}
         title={<div>&nbsp;</div>} // 必须要给一个空的div, 要撑起标题的高度
         onCancel={() => setLoginModalVisible(false)}
         footer={null}
         destroyOnClose
         maskClosable={false}
         >
           <Login callback={handleLoginSuccess}></Login>
        </Modal>
       
    </div>
}
