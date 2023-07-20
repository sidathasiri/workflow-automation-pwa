import type { MenuProps } from 'antd';
import {
  CheckOutlined,
  HomeOutlined,
  Loading3QuartersOutlined,
  PlayCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';

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
  {
    label: 'Profile',
    key: 'profile',
    icon: <UserOutlined />,
    style: { marginLeft: 'auto' },
  },
];

export default items;
