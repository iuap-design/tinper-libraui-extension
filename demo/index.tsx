// demo
import React  from 'react';
import { Component, Props } from '../index';
import { MetaTypes } from '../types/MetaTypes';
import './index.css';
import './test.less';
interface ButtonProps {
  text: string
  className:string
  onClick: ((event: Object) => void)
}
export class ButtonComponent implements Component<ButtonProps>  {
  manifest = {
    name: 'button',//自定义组件名称
    label: '按钮',//自定义组件文本
    description: '',//描述
    props: [//adapter适配层数据
      {
        name: 'code', //字段名称
        type: String, //字段类型
        defaultValue: '', //字段默认值
        value:'',//字段的值
        showDesign: true, //是否展示在适配层
        designConfig: { //当时showDesign值为true需要此字段
          type: MetaTypes.Text,// 适配层的可选视图类型(枚举项)
          isRequired: true,//是否时必填项
          props: {},//和type相关联,当type是MetaTypes的select,refer,IframeModal等需要添加props
          label: '编码',//在适配层页面显示的文本
          labelStyle: JSON.stringify({color: 'red'}),//在适配层页面显示的样式
          help: '这是编码字段'//提示信息
        },
      },{
        name: 'name', //字段名称
        type: String, //字段类型
        defaultValue: '', //字段默认值
        value:'',//字段的值
        showDesign: true, //是否展示在适配层
        designConfig: { //当时showDesign值为true需要此字段
          type: MetaTypes.Text,// 适配层的可选视图类型(枚举项)
          isRequired: false,//是否时必填项
          props: {},//和type相关联,当type是MetaTypes的select,refer,IframeModal等需要添加props
          label: '名称',//在适配层页面显示的文本
        },
      },{
        name: 'type',
        type: String,
        defaultValue: '',
        value:'',
        showDesign: true,
        designConfig: {
          type: MetaTypes.Select,
          props: {
            options:
            [
              { value: "primary", text: '主按钮' },
              { value: "ghost", text: '透明' },
              { value: "warning", text: '警告红' }
            ]
          },
          label: '类型',
          help: ''
        },
        /**
         * @param props 当前组件所有的props
         * @param propsName 当前组件当前字段的propsName
         * @param value 当前组件当前字段的值
         */
        onChange: function (props: Props[], propsName: string, value: string) {
          props.map((item) => {
            if(item.name === 'className') {
             item.value = `${value}-btn`;
            }
          }); 
          return props;     
        }
      },{
        name: 'className', //字段名称
        type: String, //字段类型
        defaultValue: '', //字段默认值
        value:'',//字段的值
        showDesign: true, //是否展示在适配层
        designConfig: { //当时showDesign值为true需要此字段
          type: MetaTypes.Text,// 适配层的可选视图类型(枚举项)
          isRequired: true,//是否时必填项
          props: {},//和type相关联,当type是MetaTypes的select,refer,IframeModal等需要添加props
          label: 'className',//在适配层页面显示的文本
          labelStyle: JSON.stringify({color: 'red'}),//在适配层页面显示的样式
          help: 'this is className'//提示信息
        },
      },

    ],
    children: ['button'],//可放置哪些子组件,暂时只支持数组,不支持方法
    parent: ['button']//可放置哪些父组件中,暂时只支持数组,不支持方法
  }

  render = (props?: ButtonProps) => {
    let value = props ? props.text : '按钮';
    let onClick = (event: object) => {
      props && props.onClick(event);
      console.log(event)
    }
    return (
      <button className={props&&props.className} onClick={onClick.bind(this)}>{value}</button>
    );
  }
}
