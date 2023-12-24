const ValidatorFormats = [
  { label: 'URL', value: 'url' },
  { label: '이메일', value: 'email' },
  { label: '숫자', value: 'number' },
  { label: '상수', value: 'integer' },
  { label: 'ID', value: 'idcard' },
  { label: '휴대폰 번호', value: 'phone' },
  { label: '통화', value: 'money' },
  { label: '중국', value: 'zh' },
  { label: '날짜', value: 'date' },
  { label: 'Zip', value: 'zip' },
]

export default {
  'ko-KR': {
    settings: {
      'x-validator': {
        title: '유효성 검사 도구',
        addValidatorRules: '유효성 검사 규칙 추가',
        drawer: '규칙 수정',
        triggerType: {
          title: '트리거 타입',
          placeholder: '선택하세요',
          dataSource: ['onInput', 'onFocus', 'onBlur'],
        },
        format: {
          title: '포맷',
          placeholder: '선택하세요',
          dataSource: ValidatorFormats,
        },
        validator: {
          title: '사용자 정의 유효성 검사 도구',
          tooltip: '형식: function (value){ return "Error Message"}',
        },
        pattern: 'RegExp',
        len: '길이 제한',
        max: '길이/값 Lt',
        min: '길이/값 Gt',
        exclusiveMaximum: '길이/값 Lte',
        exclusiveMinimum: '길이/값 Gte',
        whitespace: '공백 없음',
        required: '필수 항목',
        message: {
          title: '오류 메시지',
          tooltip:
            '오류 메시지는 현재의 규칙 셋의 하나의 빌트인 규칙에 대해서만 적용됩니다. 여러 빌트인 규칙에 대한 오류 메시지를 사용자 정의해야 하는 경우 여러 규칙으로 분할하세요.',
        },
      },
    },
    SettingComponents: {
      DataSourceSetter: {
        nodeProperty: '노드 속성',
        pleaseSelectNode: '왼쪽에 있는 트리에서 노드를 선택하세요.',
        addKeyValuePair: '키/값 쌍 추가',
        configureDataSource: '구성',
        dataSource: 'Options',
        defaultTitle: '기본 제목',
        dataSourceTree: 'Options 트리',
        addNode: '노드 추가',
        label: '레이블',
        value: '값',
        item: '아이템',
      },
      ReactionsSetter: {
        configureReactions: '구성',
        relationsFields: '관련 필드',
        variableName: '변수 이름',
        variableNameValidateMessage: '표준 변수 이름이 아닙니다.',
        pleaseInput: '입력해주세요',
        sourceField: 'Source Field',
        sourceProperty: '필드 속성',
        variableType: '변수 타입',
        operations: '작업',
        addRelationField: '관련 필드 추가',
        propertyReactions: '구성 리엑션(자바스크립트 표현식만 지원함)',
        actionReactions: '액션 리엑션(선택사항, 자바스크립트 구문을 지원함)',
        visible: '보기/없음',
        hidden: '보기/UI 숨기기',
        display: '디스플레이',
        pattern: '패턴',
        title: '제목',
        description: '설명',
        value: '값',
        initialValue: '초기값',
        dataSource: 'Options',
        required: '필수 항목',
        component: '컴포넌트',
        componentProps: '컴포넌트 속성',
        decorator: '테코레이터',
        decoratorProps: '테코레이터 속성',
        pleaseSelect: '선택하세요',
        expressionValueTypeIs: '표현식 값 타입은',
      },
      ValidatorSetter: {
        pleaseSelect: '선택하세요',
        formats: ValidatorFormats,
      },
    },
  },
}
