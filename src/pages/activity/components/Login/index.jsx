import React, { Component } from 'react';
import { Divider } from 'antd';
import classnames from 'classnames';
import SignForm from '@hx/common-singin';
import styles from './index.less';
import logo from './LOGO.png';

const signTypes = {
  mobile: 'loginBySMS',
  account: 'loginByAccount',
};

export default class Index extends Component {
  state = {
    type: 'loginBySMS',
  }
  render() {
    const { type } = this.state;
    const { callback } = this.props;
    const signFormProps = {
      // environment: LOGIN_DEV && 'dev',
      onSuccess: async (res) => {
        // 登录成功的操作
        callback(res);
      },
      onFailed: (val) => {
      },
      registerPlace: 421,
      onlyLogin: true,
      signType: type, // 登录框类型 loginByPwd | loginBySMS register
      loginParams: {
        register: true,
        needServiceToken: true,
        systemCode: 'haixue-upcore-api',
        extendInfoData: {
          account: '课程包',
        },
      },
      showFoucus: false,
      hideAgreements: true,
      eleProps: {
        mobileInput: {
          placeholder: '请使用下单手机号登录',
          allowClear: true,
        },
        smsButton: {
          type: 'default',
        },
        submitButton: {
          block: true,
          style: {
            borderRadius: 8,
          },
        },
        accountInput: {
          allowClear: true,
        },
        passwordInput: {
          allowClear: true,
        },
        captchaInput: {
          allowClear: true,
        },
        smsInput: {
          allowClear: true,
        },
        smsButtonChildren: '获取验证码',
      },
    };

    return (
    //   <div className={styles.modal} onClick={(e) => { e.stopPropagation(); return false; }}>
        <div className={styles.card}>
             <SignForm {...signFormProps} key={type} />
        </div>
    //   </div>

    
    );
  }
}


// export default Login;
