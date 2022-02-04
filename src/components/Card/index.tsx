import React from 'react';
import { Card } from 'antd';

const card = (props: any) => {
  return (
    <div className="site-card-border-less-wrapper">
        <Card title="eNe Soluções" bordered={true} style={{ width: 300, borderColor: 'black' }}>
          {props.children}
        </Card>
    </div>
  )
};

export default card;