import React, { useState } from 'react';
import { Card, Col, Divider, Row, Steps } from 'antd';

const Workflow: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'This is a description.';

  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Step 1',
            description,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />

      <Divider />

      <Row
        style={{
          justifyContent: 'center',
        }}
      >
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Card
            title={`Step ${current + 1}`}
            extra={<a href='#'>Link</a>}
            style={{ width: 600 }}
          >
            <p>content</p>
            <p>content</p>
            <p>content</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Workflow;
