import React, { useState, useEffect } from 'react';
import { Typography, Box, Paper, Divider } from '@mui/material';
import { Link } from "react-router-dom";

const OrderDetailsPage = () => {
  // Hardcoded worker info for the order
  const hardcodedWorkerInfo = {
    name: '张三',
    phoneNumber: '123-456-7890',
    email: 'zhangsan@example.com',
    serviceDate: '2024-11-25 14:00',
    status: '进行中',
  };

  const [workerInfo, setWorkerInfo] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    serviceDate: '',
    status: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay with a timeout
    setTimeout(() => {
      setWorkerInfo(hardcodedWorkerInfo);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Typography>加载中...</Typography>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        工单状态：{workerInfo.status}
      </Typography>
      <Paper variant="outlined" sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          工人信息
        </Typography>
        <Typography variant="body1">姓名：{workerInfo.name}</Typography>
        <Typography variant="body1">Phone Number: {workerInfo.phoneNumber}</Typography>
        <Typography variant="body1">Email: {workerInfo.email}</Typography>
        <Typography variant="body1">上门服务日期：{workerInfo.serviceDate}</Typography>
      </Paper>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="body1">
        请保证当天家里有人，如果事情可以取消工单。工人上门服务一小时前会打电话确认，此时您还有一次机会取消工单，否则下次上门服务会多收$20元上门费。
      </Typography>
    </Box>
    
  );
};

export default OrderDetailsPage;
