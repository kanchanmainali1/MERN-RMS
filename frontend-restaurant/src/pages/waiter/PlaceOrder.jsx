import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const PlaceOrder = () => {
  const [menu, setMenu] = useState([]);
  const [tableNo, setTableNo] = useState('');
  const [type, setType] = useState('KOT');
  const [items, setItems] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu').then(res => setMenu(res.data));
  }, []);

  const toggleItem = (id) => {
    const exists = items.find(i => i.menuItemId === id);
    if (exists) {
      setItems(items.filter(i => i.menuItemId !== id));
    } else {
      setItems([...items, { menuItemId: id, quantity: 1 }]);
    }
  };

  const updateQty = (id, qty) => {
    setItems(items.map(i => i.menuItemId === id ? { ...i, quantity: qty } : i));
  };

  const submitOrder = async () => {
    await axios.post('http://localhost:5000/api/orders', {
      tableNo,
      type,
      items,
      placedBy: user.user._id
    });
    alert('Order placed');
    setTableNo('');
    setItems([]);
  };

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Place Order</h2>
      <div className="flex gap-2 mb-4">
        <input className="border p-2 rounded" type="number" placeholder="Table No" value={tableNo} onChange={e => setTableNo(e.target.value)} />
        <select className="border p-2 rounded" value={type} onChange={e => setType(e.target.value)}>
          <option value="KOT">KOT</option>
          <option value="BOT">BOT</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {menu.map(item => (
          <div key={item._id} className="flex items-center gap-2 border p-2 rounded">
            <input type="checkbox" onChange={() => toggleItem(item._id)} checked={!!items.find(i => i.menuItemId === item._id)} />
            <span>{item.name}</span>
            {items.find(i => i.menuItemId === item._id) && (
              <input type="number" className="w-16 border p-1 rounded" min={1} value={items.find(i => i.menuItemId === item._id)?.quantity || 1}
                     onChange={e => updateQty(item._id, parseInt(e.target.value))} />
            )}
          </div>
        ))}
      </div>

      <button onClick={submitOrder} className="bg-green-600 text-white px-6 py-2 rounded">Submit Order</button>
    </div>
  );
};

export default PlaceOrder;
