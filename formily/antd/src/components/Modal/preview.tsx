import { Card as AntdCard, Modal as AntdModal, Button, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { createBehavior, createResource } from '@edan-cli/designable-core';
import { DnFC } from '@edan-cli/designable-react';
import { useField, useFieldSchema } from '@formily/react';
import { merge } from 'lodash';
import { AllLocales } from '../../locales';
import { AllSchemas } from '../../schemas';
import { createVoidFieldSchema } from '../Field';
import { GlobalStore, parseParams, parseUrl, eventBus } from '../../utils';

export const CustomModal: React.FC = (props: any) => {
  const field = useField();
  const schema = useFieldSchema();
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const initModalFieldRef = useRef<any>(null);
  const closeModal = () => {
    resetForm();
    setModalVisible(false);
  };

  const resetForm = () => {
    field?.form.setValues(initModalFieldRef.current);
  };

  const getFormItemInitValue = (properties: any) => {
    if (!properties) {
      return {};
    }
    let fromFields = {};
    const traverse = (obj: any) => {
      Object.values(obj).forEach((value) => {
        if (typeof value === 'object' && value !== null) {
          if (value['x-decorator'] == 'FormItem') {
            fromFields[value['name']] = field?.form.getValuesIn([value['name']]);
          }
          traverse(value);
        }
      });
    };
    traverse(properties);
    return fromFields;
  };

  useEffect(() => {
    // console.log("弹窗参数children", props.children);
    if (field.props.name != null && field.props.name != '') {
      // console.log("$AddListen", props["$AddListen"]);
      eventBus.addListener(field.props.name as string, (msg) => {
        //e.preventDefault()

        //e.stopImmediatePropagation();
        //dataparam={}
        let modalPrefix = props?.modalPrefix;
        if (modalPrefix == null) modalPrefix = 'row|';

        let row = msg;
        openModal();

        let initialValues = {};
        //判断是否需要初始化

        if (props?.modalInitApi != null && props?.modalInitApi != '' && msg != null) {
          let modalInitApi = props?.modalInitApi;
          fetch(modalInitApi, {
            method: 'post',
            body: row,
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
            }
          })
            .then((response: any) => {
              if (response.code == 200) {
                initialValues = response.data;
                let row = {};
                for (let i in initialValues) {
                  if (
                    i != 'password' &&
                    i != 'pwd' &&
                    i.indexOf('salt') < 0 &&
                    i.indexOf('pwd') < 0
                  )
                    row[modalPrefix + i] = initialValues[i];
                  else row[modalPrefix + i] = '';
                }
                // console.log("参数1",props)

                let oldvalues = field?.form?.values;

                field?.form.setValues({ ...oldvalues, ...row });
                field?.form.validate('*');
                if (props?.openFunc != null) {
                  let openFunc = eval(props?.openFunc);
                  initialValues = openFunc(row);
                }
              } else {
                message.error(response.message);
              }
            })
            .catch((err) => {
              message.error(err);
            });
        } else if (props?.openFunc != null) {
          let openFunc = eval(props?.openFunc);
          initialValues = openFunc(row);
        } else {
            let data = {};
            try {
              for (let i in row) {
                if(row[i]){
                  data[modalPrefix + i] = row[i];
                }
              }
            } catch (error) {
            }
            let oldvalues = field?.form.values;
            let value = merge(data, oldvalues);
            // console.log("value 111", value);
            field?.form.setValues(value);
            field?.form.validate('*');
        }
      });
    }
  }, []);

  useEffect(() => {
    if (modalVisible) {
      const properties = JSON.parse(JSON.stringify(schema?.properties || ''));
      initModalFieldRef.current = getFormItemInitValue(properties);
    }
  }, [modalVisible]);

  const confirm = () => {
    let valid = field?.form.valid;
    if (!valid) {
      message.error('请检查输入的数据');
      return false;
    }
    const valuse = field?.form.values;
    let modalPrefix = props?.modalPrefix;
    if (modalPrefix == null) modalPrefix = 'row|';
    let row: Record<string, any> = {};
    for (let i in valuse) {
      if (i.indexOf(modalPrefix) >= 0) {
        row[i.replace(modalPrefix, '')] = valuse[i];
      }
    }
    let ISClose = true;
    let api = '';
    let query = {};
    let modalSaveApi = props?.modalSaveApi;
    if (modalSaveApi != null && modalSaveApi.trim() != '') {
      api = parseUrl(modalSaveApi).api;
      query = parseUrl(modalSaveApi).query || {};
    }

    row = merge(row, GlobalStore.getStorage('params'), parseParams(window.location.href), query);
    if (props?.modalSaveApi != null && props?.modalSaveApi != '') {
      fetch(api, {
        method: 'post',
        body: row as any,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        }
      })
        .then((response:any) => {
          if (response.code == 200) {
            ISClose = ExeConfirm(row);
            message.success(response.message);
            if (ISClose) setModalVisible(false);
          }
        })
        .catch((err) => {
          message.error(err);
        });
    } else if (props?.confirm != null && props?.confirm != '') {
      ISClose = ExeConfirm(row);
      if (ISClose) setModalVisible(false);
    }
  };

  const ExeCode = (code: any) => {
    let valid = field?.form.valid;
    if (!valid) {
      message.error('请检查输入的数据');
      return false;
    }
    const valuse = field?.form.values;
    let modalPrefix = props?.modalPrefix;
    if (modalPrefix == null) modalPrefix = 'row|';
    let row = {};
    // console.log({ valuse });

    for (let i in valuse) {
      if (i.indexOf(modalPrefix) >= 0) {
        row[i.replace(modalPrefix, '')] = valuse[i];
      }
    }

    if (typeof code == 'string') {
      try {
        let confirm2 = eval(code);
        confirm2(row);
      } catch (e) {}
    }
    if (typeof code == 'function') {
      try {
        code(row);
      } catch (e) {
      }
    }
  };

  function cancel() {
    if (props?.cancelFun != null && props?.cancelFun != '') {
      ExeCode(props?.cancelFun);
    }
    closeModal();
  }

  function ExeConfirm(row) {
    let ISClose = true;
    if (typeof props?.confirm == 'string') {
      try {
        let confirm2 = eval(props?.confirm);
        ISClose = confirm2(row);
      } catch (e) {}
    }
    if (typeof props?.confirm == 'function') {
      try {
        let confirm2 = props?.confirm;

        ISClose = confirm2(row);
      } catch (e) {}
    }
    return ISClose;
  }

  let cancelText = '取消';
  if (props?.cancelText != null && props?.cancelText != '') {
    cancelText = props?.cancelText;
  }

  let okText = '确定';
  if (props?.okText != null && props?.okText != '') {
    okText = props?.okText;
  }

  return (
    <>
      <AntdModal
        bodyStyle={{ padding: '24px 24px 10px 24px' }}
        zIndex={1003}
        {...props}
        className="dn-modal"
        open={modalVisible}
        destroyOnClose
        maskClosable={false}
        onOk={() => {
          confirm();
        }}
        onCancel={() => {
          cancel();
        }}
        footer={[
          <div style={{ textAlign: 'center' }} key="footer-button">
            <Button key="confirm" type="primary" shape="round" onClick={confirm}>
              {okText}
            </Button>
            <Button key="cancel" style={{ marginLeft: '8px' }} shape="round" onClick={cancel}>
              {cancelText}
            </Button>
          </div>,
        ]}
      >
        {props.children}
      </AntdModal>

      {!field.designable != null && !field.designable == true ? null : (
        <AntdCard
          title={<span data-content-editable="x-component-props.title">{props.title}</span>}
          {...props}
        >
          {props.children}
          <Button shape="round" style={{ display: 'none' }} type="primary" onClick={openModal}>
            打开弹窗
          </Button>
        </AntdCard>
      )}
    </>
  );
};

export const Modal: DnFC<React.ComponentProps<any>> = CustomModal;

Modal.Behavior = createBehavior({
  name: 'Modal',
  extends: ['Field'],
  selector: (node: any) => node.props['x-component'] === 'Modal',
  designerProps: {
    droppable: true,
    propsSchema: createVoidFieldSchema(AllSchemas.Modal),
  },
  designerLocales: AllLocales.Modal,
});

Modal.Resource = createResource("Displays", {
  icon: 'Modal',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'Modal',
        'x-decorator': 'FormItem',
        title: '',
        'x-component-props': {
          title: 'Title',
        },
      },
    },
  ],
});
