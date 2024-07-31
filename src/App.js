import { Card } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const myName = 'Rafi Bettaieb';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Card style={{
        width: '760px',
        height: '1100px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        border: 'none',
        backgroundColor: '#fff',
        padding: '20px' 
      }}>
        <Card.Body className="text-center">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image style={{ borderRadius: '15px', width: '30px', height: 'auto', border: '2px solid #ddd' }} />
          </div>
          <div style={{ textAlign: 'center', padding: '10px' }}>
            <Name />
          </div>
          <div style={{ textAlign: 'center', padding: '10px' }}>
            <Price />
          </div>
          <div style={{ textAlign: 'center', padding: '10px' }}>
            <Description />
          </div>
        </Card.Body>
      </Card>
      <p style={{ fontSize: '1.5rem', color: 'white', marginTop: '20px' }}>
        Hello, {myName ? myName : 'there!'}
      </p>
      {myName && (
        <img
          src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Your Image"
          style={{
            borderRadius: '15px',
            width: '500px',
            height: 'auto',
            border: '2px solid #ddd',
            marginTop: '20px'
          }}
        />
      )}
    </div>
  );
}

export default App;
