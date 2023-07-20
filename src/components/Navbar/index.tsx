import React, { useState } from 'react';
import {
  CheckOutlined,
  HomeOutlined,
  Loading3QuartersOutlined,
  LoadingOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: '',
    icon: <HomeOutlined />,
  },
  {
    label: 'Workflows',
    key: 'SubMenu',
    icon: <PlayCircleOutlined />,
    children: [
      {
        type: 'group',
        children: [
          {
            label: 'In Progress',
            icon: <Loading3QuartersOutlined />,
            key: 'workflows/inprogress',
          },
          {
            label: 'Completed',
            icon: <CheckOutlined />,
            key: 'workflows/completed',
          },
        ],
      },
    ],
  },
];

const NavigationBar: React.FC = () => {
  const [current, setCurrent] = useState('inprogress');
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <Menu
      theme='dark'
      onClick={onClick}
      selectedKeys={[current]}
      mode='horizontal'
      items={items}
    />
  );
};

export default NavigationBar;
