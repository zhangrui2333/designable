export const Modal = {
  'zh-CN': {
    title: '弹窗',
    settings: {
      'x-component-props': {
        title: '标题',
        cancelText: '取消按钮文字',
        okText: '确定按钮文字',
        cancelFun: '取消函数',
        extra: '右侧扩展',
        width: '宽度',
        modalInitApi: '初始化api',
        modalSaveApi: '保存api',
        openFunc: '初始化函数',
        confirm: '确认函数',
        ButtonID: '事件ID', //按钮id
        modalPrefix: '字段前缀',
      },
    },
  },
  'en-US': {
    title: 'Card',
    settings: {
      'x-component-props': {
        type: 'Type',
        title: 'Title',
        extra: 'Extra',
        cardTypes: [
          { label: 'Inner', value: 'inner' },
          { label: 'Default', value: '' },
        ],
      },
    },
  },
  'ko-KR': {
    title: '카드',
    settings: {
      'x-component-props': {
        type: '타입',
        title: '제목',
        extra: '추가 항목',
        cardTypes: [
          { label: '안쪽', value: 'inner' },
          { label: '기본', value: '' },
        ],
      },
    },
  },
};
