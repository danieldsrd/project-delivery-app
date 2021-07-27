import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import OrderCard from '../components/OrderCard';

const requests = [{
  id: '0001',
  salesDate: '08/04/21',
  status: 'PENDENTE',
  price: 'R$14,20',
},
{
  id: '0002',
  salesDate: '09/04/21',
  status: 'PENDENTE',
  price: 'R$20,50',
},
{
  id: '0003',
  salesDate: '19/04/21',
  status: 'PENDENTE',
  price: 'R$30,25',
}];

function Orders() {
  return (
    <Container>
      <Row xs={ 4 } md={ 3 } className="p-4">
        {
          requests.map((variant, idx) => (
            <Link key={ idx } to={ `/customer/orders/${variant.id}` }>
              <OrderCard requests={ variant } user="customer" />
            </Link>
          ))
        }
      </Row>
    </Container>
  );
}

export default Orders;
