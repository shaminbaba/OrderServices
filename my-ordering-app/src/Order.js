import React, { useState } from 'react';

export default function OrderForm() {
  const [order, setOrder] = useState({
    orderId: '',
    orderDate: '',
    cart: {
      cartId: '',
      totalPrice: '',
      customer: {
        customerId: '',
        firstName: '',
        lastname: '',
        age: '',
        gender: 'male',
        mobileNumber: '',
        email: '',
        password: '',
        address: {
          addressId: '',
          buildingName: '',
          streetNo: '',
          area: '',
          city: '',
          state: '',
          country: '',
          pinCode: '',
        },
      },
      items: [
        {
          itemId: '',
          itemName: '',
          quantity: '',
          cost: '',
          category: {
            categoryId: '',
            categoryName: '',
          },
        },
      ],
    },
  });

  // Update deeply nested fields
  const handleChange = (path, value) => {
    const keys = path.split('.');
    const updatedOrder = { ...order };
    let obj = updatedOrder;
    for (let i = 0; i < keys.length - 1; i++) {
      obj = obj[keys[i]];
    }
    obj[keys[keys.length - 1]] = value;
    setOrder(updatedOrder);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...order.cart.items];
    if (field.includes('category.')) {
      const [_, key] = field.split('.');
      updatedItems[index].category[key] = value;
    } else {
      updatedItems[index][field] = value;
    }
    setOrder({
      ...order,
      cart: {
        ...order.cart,
        items: updatedItems,
      },
    });
  };

  const addItem = () => {
    setOrder({
      ...order,
      cart: {
        ...order.cart,
        items: [
          ...order.cart.items,
          {
            itemId: '',
            itemName: '',
            quantity: '',
            cost: '',
            category: {
              categoryId: '',
              categoryName: '',
            },
          },
        ],
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Data:', order);
    // You can send this JSON using fetch or axios
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <h3>Order Info</h3>
        <input placeholder="Order ID" onChange={(e) => handleChange('orderId', e.target.value)} />
        <input type="date" onChange={(e) => handleChange('orderDate', e.target.value)} />

        <h3>Cart Info</h3>
        <input placeholder="Cart ID" onChange={(e) => handleChange('cart.cartId', e.target.value)} />
        <input placeholder="Total Price" onChange={(e) => handleChange('cart.totalPrice', e.target.value)} />

        <h3>Customer Info</h3>
        <input placeholder="Customer ID" onChange={(e) => handleChange('cart.customer.customerId', e.target.value)} />
        <input placeholder="First Name" onChange={(e) => handleChange('cart.customer.firstName', e.target.value)} />
        <input placeholder="Last Name" onChange={(e) => handleChange('cart.customer.lastname', e.target.value)} />
        <input placeholder="Age" onChange={(e) => handleChange('cart.customer.age', e.target.value)} />
        <select onChange={(e) => handleChange('cart.customer.gender', e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input placeholder="Mobile" onChange={(e) => handleChange('cart.customer.mobileNumber', e.target.value)} />
        <input placeholder="Email" onChange={(e) => handleChange('cart.customer.email', e.target.value)} />
        <input placeholder="Password" onChange={(e) => handleChange('cart.customer.password', e.target.value)} />

        <h3>Address Info</h3>
        <input placeholder="Address ID" onChange={(e) => handleChange('cart.customer.address.addressId', e.target.value)} />
        <input placeholder="Building Name" onChange={(e) => handleChange('cart.customer.address.buildingName', e.target.value)} />
        <input placeholder="Street No" onChange={(e) => handleChange('cart.customer.address.streetNo', e.target.value)} />
        <input placeholder="Area" onChange={(e) => handleChange('cart.customer.address.area', e.target.value)} />
        <input placeholder="City" onChange={(e) => handleChange('cart.customer.address.city', e.target.value)} />
        <input placeholder="State" onChange={(e) => handleChange('cart.customer.address.state', e.target.value)} />
        <input placeholder="Country" onChange={(e) => handleChange('cart.customer.address.country', e.target.value)} />
        <input placeholder="Pin Code" onChange={(e) => handleChange('cart.customer.address.pinCode', e.target.value)} />

        <h3>Items</h3>
        {order.cart.items.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <input placeholder="Item ID" onChange={(e) => handleItemChange(index, 'itemId', e.target.value)} />
            <input placeholder="Item Name" onChange={(e) => handleItemChange(index, 'itemName', e.target.value)} />
            <input placeholder="Quantity" onChange={(e) => handleItemChange(index, 'quantity', e.target.value)} />
            <input placeholder="Cost" onChange={(e) => handleItemChange(index, 'cost', e.target.value)} />
            <input placeholder="Category ID" onChange={(e) => handleItemChange(index, 'category.categoryId', e.target.value)} />
            <input placeholder="Category Name" onChange={(e) => handleItemChange(index, 'category.categoryName', e.target.value)} />
          </div>
        ))}

        <button type="button" onClick={addItem}>+ Add Item</button>
        <br /><br />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}