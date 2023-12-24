export const AutoComplete = {
  'zh-CN': {
    title: '自动完成',
    settings: {
      'x-component-props': {
        access: '入库',
        code: '编码值',
        initApi: {
          title: '初始化api',
          toolTip: 'api优先级高于编码值',
        },
        defaultActiveFirstOption: '默认高亮第一个选项',
        dropdownMatchSelectWidth: {
          title: '下拉菜单和选择器同宽',
          tooltip: '默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动',
        },
        defaultOpen: '默认展开',
        filterOption: '选项筛选器',
      },
    },
  },
  'en-US': {
    title: 'AutoComplete',
    settings: {
      'x-component-props': {
        defaultActiveFirstOption: 'Default Active First Option',
        dropdownMatchSelectWidth: 'Dropdown Match Select Width',
        defaultOpen: 'Default Open',
        filterOption: 'Filter Option',
      },
    },
  },
  'ko-KR': {
    title: '선택',
    settings: {
      'x-component-props': {
        defaultActiveFirstOption: '기본으로 첫번째 옵션을 선택함',
        dropdownMatchSelectWidth: '드롭다운 너비와 일치시킴',
        defaultOpen: '기본 오픈',
        filterOption: '옵션 필터',
      },
    },
  },
};
