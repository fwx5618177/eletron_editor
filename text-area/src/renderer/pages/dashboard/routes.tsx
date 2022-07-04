/**
 * 路由
 */
import { FileTextOutlined } from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { Link } from 'react-router-dom';

const routes = (): ItemType[] => {
  const route: ItemType[] = [
    {
      label: <Link to="/dashboard/text">文章</Link>,
      key: 'text',
      title: '文章',
      icon: <FileTextOutlined />,
      //   itemIcon: <FileTextOutlined />,
      //   children: [],
    },
  ];

  return route;
};

export default routes;
