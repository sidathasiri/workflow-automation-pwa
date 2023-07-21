import { Card, Col, List, Row } from 'antd';

const StepDetails = ({ stepData }: { stepData: any }) => {
  const keys = Object.keys(stepData);

  return (
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
          title={stepData.title}
          extra={`Status: ${stepData.status}`}
          style={{ width: 600 }}
        >
          <List
            size='small'
            dataSource={keys}
            renderItem={(key) => (
              <List.Item>
                <span style={{ fontWeight: 'bold' }}>{key.toUpperCase()}:</span>
                {stepData[key]}
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default StepDetails;
