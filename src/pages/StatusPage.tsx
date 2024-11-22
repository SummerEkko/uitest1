import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

interface TicketOrder {
  Id: number;
  Type: string;
  CreatedAt: string;
  Description: string;
  detail: {
    order_number: string;
    status: string;
    type: string;
  };
}

const StatusPage = () => {
  // Hardcoded data to simulate API response
  const hardcodedOrders: TicketOrder[] = [
    {
      Id: 1,
      Type: "1",
      CreatedAt: "2024-11-20T12:34:56Z",
      Description: "需要安装新的净水器",
      detail: {
        order_number: "ORD12345",
        status: "进行中",
        type: "安装",
      },
    },
    {
      Id: 2,
      Type: "2",
      CreatedAt: "2024-11-19T11:22:33Z",
      Description: "维修漏水问题",
      detail: {
        order_number: "ORD12346",
        status: "已完成",
        type: "维修",
      },
    },
    {
      Id: 3,
      Type: "3",
      CreatedAt: "2024-11-18T10:11:22Z",
      Description: "检查水质问题",
      detail: {
        order_number: "ORD12347",
        status: "待处理",
        type: "检查",
      },
    },
  ];

  const [orders, setOrders] = useState<TicketOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(hardcodedOrders.length / itemsPerPage);

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      const startIndex = (page - 1) * itemsPerPage;
      const paginatedOrders = hardcodedOrders.slice(
        startIndex,
        startIndex + itemsPerPage
      );
      setOrders(paginatedOrders);
      setLoading(false);
    }, 500);
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setLoading(true);
      setPage(newPage);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <Typography variant="h4" gutterBottom>
        工单列表
      </Typography>

      {loading ? (
        <Typography>加载中...</Typography>
      ) : (
        <Grid container spacing={2}>
          {orders.length > 0 ? (
            orders.map((order) => (
              <Grid item xs={12} key={order.Id}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      工单号：{order.detail.order_number}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Order ID: {order.Id}
                    </Typography>
                    <Typography color="textSecondary">
                      类型：{" "}
                      {(() => {
                        const typeValue = Number(order.Type);
                        switch (typeValue) {
                          case 1:
                            return "安装";
                          case 2:
                            return "维修";
                          case 3:
                            return "检查";
                          default:
                            return "未知类型";
                        }
                      })()}
                    </Typography>
                    <Typography color="textSecondary">
                      状态：{order.detail.status}
                    </Typography>
                    <Typography color="textSecondary">
                      日期：{new Date(order.CreatedAt).toLocaleDateString()}
                    </Typography>
                    <Typography color="textSecondary">
                      描述：{order.Description || "无描述"}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>暂无工单。</Typography>
          )}
        </Grid>
      )}

      <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
        >
          上一页
        </Button>
        <Typography style={{ margin: "0 16px" }}>
          {page} / {totalPages}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
        >
          下一页
        </Button>
      </Box>
      <div>
        <h1>Status Page</h1>
        <Link to="/order-details">Go to Order Details</Link>
      </div>
    </div>
  );
};

export default StatusPage;
