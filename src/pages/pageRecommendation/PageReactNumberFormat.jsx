import { NumericFormat, PatternFormat } from 'react-number-format';
import { Input, Typography, theme } from 'antd';
import CodeHighlighter from '../../components/CodeHighlighter';

const { Title, Paragraph } = Typography;
const { useToken } = theme;

const PageReactNumberFormat = () => {
  const { token } = useToken();
  const { colorPrimary } = token;
  console.log(token)
  return <>
    <Title><a href="https://github.com/s-yadav/react-number-format" target="_blank" rel="noreferrer" style={{color: colorPrimary}}>react-number-format</a></Title>
    <Title level={2} style={{ marginTop: '0.5em' }}>安装：</Title>
    <CodeHighlighter lang='sh'>
      {'npm install react-number-format'}
    </CodeHighlighter>
    <Title level={2} style={{ marginTop: '0.5em' }}>例子：</Title>
    <div className='mb-4'>
      <Title level={3} style={{ marginTop: '0.5em' }}>1. 自定义渲染输入框</Title>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`import { NumericFormat } from 'react-number-format';
import { Input } from 'antd';

<NumericFormat value={12323} customInput={Input} />`}
      </CodeHighlighter>
      <NumericFormat value={12323} customInput={Input} />
    </div>
    <div className='mb-4'>
      <Title level={3} style={{ marginTop: '0.5em' }}>2. 定义显示方式</Title>
      <Paragraph className='my-2'>displayType="input"</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat value={12323} displayType="input" customInput={Input} />`}
      </CodeHighlighter>
      <NumericFormat value={12323} displayType="input" customInput={Input} />
      <Paragraph className='my-2'>displayType="text"</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat value={12323} displayType="text" />`}
      </CodeHighlighter>
      <Paragraph><NumericFormat value={12323} displayType="text" /></Paragraph>
    </div>
    <div className='mb-4'>
      <Title level={3} style={{ marginTop: '0.5em' }}>3. 输入限定</Title>
      <Paragraph className='my-2'>限定只能输入数字</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat
  type="text"
  value="123456789"
  valueIsNumericString={false}
  displayType="input"
  customInput={Input}
/>`}
      </CodeHighlighter>
      <NumericFormat
        type="text"
        value="123456789"
        valueIsNumericString={false}
        displayType="input"
        customInput={Input}
      />
    </div>
    <div className='mb-4'>
      <Title level={3} style={{ marginTop: '0.5em' }}>4. onValueChange</Title>
      <Paragraph className='my-2'>onValueChange</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat
  value={1234}
  prefix="$"
  customInput={Input}
  onValueChange={(values, sourceInfo) => {
    console.log(values, sourceInfo);
  }}
/>`}
      </CodeHighlighter>
      <NumericFormat
        value={1234}
        prefix="$"
        customInput={Input}
        onValueChange={(values, sourceInfo) => {
          console.log(values, sourceInfo);
        }}
      />
    </div>
    <div className='mb-4'>
      <Title level={3} style={{ marginTop: '0.5em' }}>5. 输入格式</Title>
      <Paragraph className='my-2'>allowLeadingZeros: 允许前导零</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat value="0020020220" allowLeadingZeros thousandSeparator="," customInput={Input} />`}
      </CodeHighlighter>
      <NumericFormat value="0020020220" allowLeadingZeros thousandSeparator="," customInput={Input} />
      <Paragraph className='my-2'>allowNegative: 允许负</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat value="-12" allowNegative customInput={Input} />`}
      </CodeHighlighter>
      <NumericFormat value="-12" allowNegative customInput={Input} />
    </div>
    <div className='mb-4'>
      <Title level={3} style={{ marginTop: '0.5em' }}>6. 小数</Title>
      <Paragraph className='my-2'>decimalScale: 小数点位数（多余位数会四舍五入）</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat value={12323.3336} decimalScale={3} customInput={Input} />`}
      </CodeHighlighter>
      <NumericFormat value={12323.3336} decimalScale={3} customInput={Input} />
      <Paragraph className='my-2'>decimalSeparator: 小数点</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat value={12323.3336} decimalScale={3} decimalSeparator="," customInput={Input} />`}
      </CodeHighlighter>
      <NumericFormat value={12323.3336} decimalScale={3} decimalSeparator="," customInput={Input} />
    </div>
    <div className='mb-4'>
      <Title level={3} style={{ marginTop: '0.5em' }}>7. 前缀、后缀</Title>
      <Paragraph className='my-2'>prefix: 前缀</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat value={1234} prefix={'$'} customInput={Input} />`}
      </CodeHighlighter>
      <NumericFormat value={1234} prefix={'$'} customInput={Input} />
      <Paragraph className='my-2'>suffix: 后缀</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat value={1234} suffix={'/ -'} customInput={Input} />`}
      </CodeHighlighter>
      <NumericFormat value={1234} suffix={'/ -'} customInput={Input} />
    </div>
    <div className='mb-4'>
      <Title level={3} style={{ marginTop: '0.5em' }}>8. 分位</Title>
      <Paragraph className='my-2'>thousandsGroupStyle: 千分位（thousand）</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat type="text" value={1231231} thousandsGroupStyle="thousand" thousandSeparator="," customInput={Input} />`}
      </CodeHighlighter>
      <NumericFormat type="text" value={1231231} thousandsGroupStyle="thousand" thousandSeparator="," customInput={Input} />
      <Paragraph className='my-2'>thousandsGroupStyle: 千分位（wan）</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat type="text" value={1231231} thousandsGroupStyle="wan" thousandSeparator="," customInput={Input} />`}
      </CodeHighlighter>
      <NumericFormat type="text" value={1231231} thousandsGroupStyle="wan" thousandSeparator="," customInput={Input} />
      <Paragraph className='my-2'>thousandSeparator: 分隔符</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<NumericFormat type="text" value={1231231} thousandsGroupStyle="thousand" thousandSeparator="|" customInput={Input} />`}
      </CodeHighlighter>
      <NumericFormat type="text" value={1231231} thousandsGroupStyle="thousand" thousandSeparator="|" customInput={Input} />
    </div>
    <div className='mb-4'>
      <Title level={3} style={{ marginTop: '0.5em' }}>9. 格式化输入</Title>
      <Paragraph className='my-2'>format: 格式</Paragraph>
      <Paragraph className='my-2'>allowEmptyFormatting: 允许空格式</Paragraph>
      <Paragraph className='my-2'>mask: 占位符</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`import { PatternFormat } from 'react-number-format';
import { Input } from 'antd';

<PatternFormat format="+86 ### #### ####" allowEmptyFormatting mask="_" customInput={Input} />`}
      </CodeHighlighter>
      <PatternFormat format="+86 ### #### ####" allowEmptyFormatting mask="_" customInput={Input} />
      <Paragraph className='my-2'>patternChar: format模式字符</Paragraph>
      <CodeHighlighter lang='javascript' className='mb-2'>
        {`<PatternFormat format="+86 %%% %%%% %%%%" allowEmptyFormatting mask="_" patternChar="%" customInput={Input} />`}
      </CodeHighlighter>
      <PatternFormat format="+86 %%% %%%% %%%%" allowEmptyFormatting mask="_" patternChar="%" customInput={Input} />
    </div>
  </>
}

export default PageReactNumberFormat;
