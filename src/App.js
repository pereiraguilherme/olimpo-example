
import { Button, Avatar, Input, Checkbox } from 'olimpo'
import {FormControlLabel } from '@material-ui/core';
import { Row, Col} from 'antd';
import './App.css'
function returnOlimpoInput(placeholder) {
  return (<Input 
    style={{height: 50, width:250}}
    backgroundColor='#e6eaed'
    shape='round'
    placeholder={placeholder}
  />)
}

function returnAntdInput(placeholder) {
  return (<Input 
    framework='antd'
    style={{height: 50, width:250}}
    backgroundColor='#e6eaed'
    bordered={true}
    placeholder={placeholder}
  />)
}

function returnMaterialuiInput(placeholder) {
  return (<Input 
    framework='materialui'
    variant='filled'
    style={{height: 50, width:250, backgroundColor:'white'}}
    label={placeholder}
  />)
}

function renderDefaultOlimpo() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor:'#4287f5'}}>
      <Row style={{marginBottom:50}}>
        <Col span={8}/>
        <Col span={8} flex=''>
          <div style={{marginLeft: 180, marginTop:50}}>
            <Avatar 
              src='https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png'
              shape='circle'
              size='large'
              value='Guilherme Pereira'
              backgroundColor='#333230'/>
          </div>
        </Col>
        <Col span={8}/>
      </Row>
      <Row style={{marginBottom:10}}>
        <Col span={8}/>
        <Col span={8}>
          <div style={{marginLeft: 180}}>
            {returnOlimpoInput('Username')}
          </div>
        </Col>
        <Col span={8}/>
      </Row>
      <Row style={{marginBottom:25}} >
        <Col span={8}/>
        <Col span={8}>
          <div style={{marginLeft: 180}}>
            {returnOlimpoInput('Password')}
          </div>
        </Col>
        <Col span={8}/>
      </Row>
      <Row style={{marginBottom:50}} >
        <Col span={8}/>
        <Col span={8}>
          <div style={{marginLeft: 180}}>
            <Checkbox 
            backgroundColor='#333230'
            label='Remember me'/>
          </div>
        </Col>
        <Col span={8}/>
      </Row>
      <Row>
        <Col span={8}/>
        <Col span={8}>
          <Button 
            shape='round'
            text='Log in'
            color='#333230'
            textColor='white'
            style={{
              marginLeft:100,
              width: 400, 
              height: 50,
              fontColor: 'white'}}/>
        </Col>
        <Col span={8}/>
      </Row>
    </div>
  )
}

function renderAntd() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor:'#4287f5'}}>
      <Row style={{marginBottom:50}}>
        <Col span={8}/>
        <Col span={8} flex=''>
          <div style={{marginLeft: 180, marginTop:50}}>
            <Avatar 
              framework='antd'
              src='https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png'
              shape='circle'
              size={250}/>
          </div>
        </Col>
        <Col span={8}/>
      </Row>
      <Row style={{marginBottom:10}}>
        <Col span={8}/>
        <Col span={8}>
          <div style={{marginLeft: 180}}>
            {returnAntdInput('Username')}
          </div>
        </Col>
        <Col span={8}/>
      </Row>
      <Row style={{marginBottom:25}} >
        <Col span={8}/>
        <Col span={8}>
          <div style={{marginLeft: 180}}>
            {returnAntdInput('Password')}
          </div>
        </Col>
        <Col span={8}/>
      </Row>
      <Row style={{marginBottom:50}} >
        <Col span={8}/>
        <Col span={8}>
          <div style={{marginLeft: 180}}>
            <Checkbox 
            framework='antd'
            backgroundColor='#333230'
            label='Remember me'/>
          </div>
        </Col>
        <Col span={8}/>
      </Row>
      <Row>
        <Col span={8}/>
        <Col span={8}>
          <Button 
            framework='antd'
            type='primary'
            shape='round'
            text='Log in'
            style={{
              marginLeft:100,
              width: 400, 
              height: 50,
              backgroundColor: '#333230',
              color: 'white'
              }}/>
        </Col>
        <Col span={8}/>
      </Row>
    </div>
  )
}
function renderMaterialUI() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor:'#4287f5'}}>
      <Row style={{marginBottom:50}}>
        <Col span={8}/>
        <Col span={8} flex=''>
          <div style={{marginLeft: 180, marginTop:50}}>
            <Avatar 
              framework='materialui'
              src='https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png'
              style={{width:250, height:250}}/>
          </div>
        </Col>
        <Col span={8}/>
      </Row>
      <Row style={{marginBottom:10}}>
        <Col span={8}/>
        <Col span={8}>
          <div style={{marginLeft: 180}}>
            {returnMaterialuiInput('Username')}
          </div>
        </Col>
        <Col span={8}/>
      </Row>
      <Row style={{marginBottom:25}} >
        <Col span={8}/>
        <Col span={8}>
          <div style={{marginLeft: 180}}>
            {returnMaterialuiInput('Password')}
          </div>
        </Col>
        <Col span={8}/>
      </Row>
      <Row style={{marginBottom:50}} >
        <Col span={8}/>
        <Col span={8} style={{marginLeft: 175}}>
          <FormControlLabel
              control={<Checkbox color='default' framework='materialui'/>}
              label="Remember me"
          />
        </Col>
        <Col span={8}/>
      </Row>
      <Row>
        <Col span={8}/>
        <Col span={8}>
          <Button 
            framework='materialui'
            type='primary'
            shape='round'
            text='Log in'
            style={{
              marginLeft:100,
              width: 400, 
              height: 50,
              backgroundColor: '#333230',
              color: 'white'
              }}/>
        </Col>
        <Col span={8}/>
      </Row>
      
    </div>
  )
}
function App() {
  return(
    <div>
      {renderMaterialUI()}
    </div>
  )
}

export default App;
