export const Button = {
  'zh-CN': {
    title: '按钮',
    settings: {
      'x-component-props': {
        children: '文本',
        variant: '按钮变种',
        type: '按钮类型',
        size: '尺寸',
        shape: '按钮形状',
        block: '是否为块级元素',
        clickEvent: {
          title: '点击事件配置',
          api: '类型',
          path: '路径',
          method: '方法',
          action: {
            title: '表达式',
            tooltip: "()=>{console.log('点击事件')}",
          },
          onCancel: '保存关闭弹窗',
        },
        // customIcon: {
        //   title: "自定义图标",
        //   useIcon: "使用自定义图标",
        //   icon: "图标样式",
        //   inline: "图标内联",
        //   src: "图片链接(优先)",
        //   width: "图片宽度",
        //   height: "图片高度",
        // },
        style: {},
      },
    },
  },
};
