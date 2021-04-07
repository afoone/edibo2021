import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const InvoiceDetail = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/facturas/${id}`).then((res) => setInvoice(res.data));
  }, [id]);

  return <div>Cliente: {invoice.cliente}</div>;
};

export default InvoiceDetail;
