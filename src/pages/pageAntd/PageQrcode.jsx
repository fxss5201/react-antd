import React, { useState } from 'react';
import { QRCode, Form, Input, Select, Slider, Switch, Alert } from 'antd';
import { SketchPicker } from 'react-color';

const PageQrcode = () => {
  const [value, setValue] = useState('https://github.com/fxss5201/react-antd');
  const [icon, setIcon] = useState('https://avatars.githubusercontent.com/u/21698289?s=48&v=4');
  const [size, setSize] = useState(160);
  const [iconSize, setIconSize] = useState(30);
  const [color, setColor] = useState('#000');
  const [bordered, setBordered] = useState(true);
  const [errorLevel, setErrorLevel] = useState('M');

  const errorLevelList = [
    {
      value: 'L',
      label: 'L级（7%）',
    },
    {
      value: 'M',
      label: 'M级（15%）',
    },
    {
      value: 'Q',
      label: 'Q级（25%）',
    },
    {
      value: 'H',
      label: 'H级（30%）',
    },
  ]

  return (
    <div className='w-full flex'>
      <div className='mr-8 w-[600px]'>
        <Alert message="二维码纠错等级 L级 不建议与 二维码中图片的地址 一起使用，因为低级别会影响扫描结果。另外 二维码中图片 过大也会影响扫描结果。" type="info" className='mb-4' />
        <Form
          name='basic'
          initialValues={{
            value,
            icon,
            size,
            iconSize,
            color,
            bordered,
            errorLevel
          }}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          autoComplete='off'
          style={{width: '600px'}}
        >
          <Form.Item
            label="扫描后的地址"
            name="value"
            rules={[
              {
                required: true,
                message: '请输入扫描后的地址',
              },
            ]}
          >
            <Input onChange={(e) => setValue(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="二维码大小"
            name="size"
            rules={[
              {
                required: true,
                message: '请选择二维码大小',
              },
            ]}
          >
            <Slider onChange={(val) => setSize(val)} min={100} max={500} />
          </Form.Item>
          <Form.Item
            label="二维码中图片的地址"
            name="icon"
          >
            <Input onChange={(e) => setIcon(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="二维码中图片的大小"
            name="iconSize"
          >
            <Slider onChange={(val) => setIconSize(val)} min={20} max={80} />
          </Form.Item>
          <Form.Item
            label="二维码颜色"
            name="color"
            rules={[
              {
                required: true,
                message: '请选择二维码颜色',
              },
            ]}
          >
            <SketchPicker color={color} onChange={(color) => setColor(color.hex)} />
          </Form.Item>
          <Form.Item
            label="是否有边框"
            name="bordered"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: '请选择是否有边框',
              },
            ]}
          >
            <Switch onChange={(checked) => setBordered(checked)} />
          </Form.Item>
          <Form.Item
            label="二维码纠错等级"
            name="errorLevel"
            rules={[
              {
                required: true,
                message: '请选择二维码纠错等级',
              },
            ]}
          >
            <Select options={errorLevelList} onChange={(val) => setErrorLevel(val)} />
          </Form.Item>
        </Form>
      </div>
      <QRCode value={value} icon={icon} size={size} iconSize={iconSize} color={color} bordered={bordered} errorLevel={errorLevel} />
    </div>
  )
};

export default PageQrcode;