import React, { FC } from 'react'
import 'antd/dist/antd.css'
// import './_app'

import Button from '../src/components/Button'
import Card from '../src/components/Card'
import Alert from '../src/components/Alert'

const App: FC = () => (
  <div className="App">
    <Button />
    <br/>
    <Card>
      <p>ReactJS</p>
      <p>NextJS</p>
      <p>Ant Design</p>
      <p>Agora vai!</p>
    </Card>
    <br/>
    <Alert/>
  </div>
);

export default App;
