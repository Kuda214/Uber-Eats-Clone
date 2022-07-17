import logo from './logo.svg';
import './App.css';
import { Card, Descriptions, Divider, List, Button} from 'antd';
import dishes from '../src/assets/data/dishes.json';

function App() {
  return (
    <Card title={'Order Title'} style={{marginLeft:20}}>
      <Descriptions bordered column={{lg:1, md:1,sm:1}}>
        <Descriptions.Item label="Customer">
          Kuda Christine
        </Descriptions.Item>
        <Descriptions.Item label="Customer Address">
          166 South Street Borksburgg Yeah
        </Descriptions.Item>
      </Descriptions>
    <Divider></Divider>

    <List
      dataSource={dishes}
      renderItem={(dishItem) => (
        <List.Item>
          <div style={{fontWeight:'bold'}}>{dishItem.name} x {dishItem.quantity}</div>
          <div>$ {dishItem.price}</div>
        </List.Item>
      )}>
      
    </List>
    <Divider></Divider>

    <div style={styles.totalContainer}>
      <h2>Total:  {" "} </h2>
      <h2 style={styles.totalPrice}>{" "}$ 42.96</h2>
    </div>
    <Divider></Divider>
      
    <div style={styles.buttonContainer}>
        <Button block type='danger' size='large' style={styles.button}>
          Decline Order
        </Button>
        <Button block type='primary' size='large'>
          Accept Order
        </Button>
        
    </div>
    <Button block type='primary' size='large'>
          Food Is Done
        </Button>

    <Divider></Divider>

    </Card>
  );
}

export default App;


const styles = {
  totalContainer:{
    flexDirection: 'row',
    display: 'flex',
  },
  totalPrice:{
    marginLeft:'auto',
    fontWeight:'bold'

  },
  buttonContainer:{
    display:'flex',
    padding: 30
  },
  button:{
    marginRight: 15,
    marginLeft:15,
  }
}