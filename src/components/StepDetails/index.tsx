import { Card, Col, Row } from 'antd';

const StepDetails = ({ stepData }: { stepData: any }) => {
  const keys = Object.keys(stepData);
  const displayItems = keys.map((key) => (
    <li>
      <span style={{ fontWeight: 'bold' }}>{key.toUpperCase()}:</span>{' '}
      {stepData[key]}
    </li>
  ));
  return (
    <>
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
            <ul>{displayItems}</ul>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default StepDetails;
