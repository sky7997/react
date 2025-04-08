import React, { useState } from 'react';

const coffeeOptions = [
  { name: "Espresso", basePrice: 2 },
  { name: "Cappuccino", basePrice: 3 },
  { name: "Latte", basePrice: 3.5 },
  { name: "Americano", basePrice: 2.5 },
];

const sizes = [
  { name: "Small", multiplier: 1 },
  { name: "Medium", multiplier: 1.5 },
  { name: "Large", multiplier: 2 },
];

const addOns = [
  { name: "Extra Shot", price: 0.7 },
  { name: "Milk", price: 0.4 },
  { name: "Sugar", price: 0.3 },
  { name: "Whipped Cream", price: 0.6 },
];

const TAX_RATE = 0.10;

function App() {
  const [selectedCoffee, setSelectedCoffee] = useState('');
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [isBrewing, setIsBrewing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [totals, setTotals] = useState({ subtotal: 0, tax: 0, total: 0 });

  const calculateTotals = (coffeeName, sizeName, qty, addons) => {
    const coffee = coffeeOptions.find(c => c.name === coffeeName);
    const size = sizes.find(s => s.name === sizeName);
    if (!coffee || !size) return;

    const coffeePrice = coffee.basePrice * size.multiplier;
    const addonsTotal = addons.reduce((sum, addonName) => {
      const addon = addOns.find(a => a.name === addonName);
      return sum + (addon ? addon.price : 0);
    }, 0);

    const subtotal = qty * (coffeePrice + addonsTotal);
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    setTotals({
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    });
  }; //toFixed() returns a string, not a number. If you need it back as a number, you can convert it like:
  //This ensures:
//Prices look clean (e.g., $6.00 instead of $6)
//Matches professional currency formatting
//Always shows 2 decimal digits
 //Number(total.toFixed(2))

  const handleCoffeeChange = (e) => {
    const name = e.target.value;
    setSelectedCoffee(name);
    calculateTotals(name, selectedSize, quantity, selectedAddOns);
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSelectedSize(size);
    calculateTotals(selectedCoffee, size, quantity, selectedAddOns);
  };

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value);
    setQuantity(qty);
    calculateTotals(selectedCoffee, selectedSize, qty, selectedAddOns);
  };

  const handleAddonChange = (e) => {
    const { value, checked } = e.target;
    let updatedAddOns = checked
      ? [...selectedAddOns, value]
      : selectedAddOns.filter(a => a !== value);

    setSelectedAddOns(updatedAddOns);
    calculateTotals(selectedCoffee, selectedSize, quantity, updatedAddOns);
  };

  const handleBrew = () => {
    if (!selectedCoffee || !selectedSize) {
      alert("Please select coffee and size!");
      return;
    }
    setIsBrewing(true);
    setIsReady(false);

    setTimeout(() => {
      setIsBrewing(false);
      setIsReady(true);
    }, 3000);
  };

  const handleReset = () => {
    setSelectedCoffee('');
    setSelectedSize('Medium');
    setQuantity(1);
    setSelectedAddOns([]);
    setIsBrewing(false);
    setIsReady(false);
    setTotals({ subtotal: 0, tax: 0, total: 0 });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>☕ Deluxe Coffee Vending Machine</h1>

      <div style={styles.section}>
        <label>Select Coffee:</label>
        <select value={selectedCoffee} onChange={handleCoffeeChange} style={styles.select}>
          <option value="">-- Choose --</option>
          {coffeeOptions.map((coffee, i) => (
            <option key={i} value={coffee.name}>
              {coffee.name} - ${coffee.basePrice}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.section}>
        <label>Select Size:</label>
        {sizes.map((s, i) => (
          <label key={i} style={styles.radioLabel}>
            <input
              type="radio"
              name="size"
              value={s.name}
              checked={selectedSize === s.name}
              onChange={handleSizeChange}
            />
            {s.name}
          </label>
        ))}
      </div>

      <div style={styles.section}>
        <label>Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          style={styles.input}
        />
      </div>

      <div style={styles.section}>
        <label>Add-ons:</label>
        {addOns.map((addon, i) => (
          <label key={i} style={styles.checkboxLabel}>
            <input
              type="checkbox"
              value={addon.name}
              checked={selectedAddOns.includes(addon.name)}
              onChange={handleAddonChange}
            />
            {addon.name} (+${addon.price})
          </label>
        ))}
      </div>

      <div style={styles.summaryBox}>
        <h3>🧾 Order Summary</h3>
        <p>Subtotal: ${totals.subtotal}</p>
        <p>Tax (10%): ${totals.tax}</p>
        <p><strong>Total: ${totals.total}</strong></p>
      </div>

      <div style={styles.section}>
        <button style={styles.brewButton} onClick={handleBrew}>Brew</button>
        <button style={styles.resetButton} onClick={handleReset}>Reset</button>
      </div>

      {isBrewing && <p>⏳ Brewing your coffee... Please wait...</p>}

      {isReady && (
        <div style={styles.readyBox}>
          <h2>✅ Your {selectedSize} {selectedCoffee} is ready!</h2>
          <p>Enjoy your drink ☕</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '30px',
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: '#fffdf6',
    borderRadius: '15px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  heading: {
    color: '#4e342e',
    marginBottom: '20px',
  },
  section: {
    margin: '15px 0',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    marginLeft: '10px',
  },
  input: {
    padding: '5px',
    fontSize: '16px',
    width: '60px',
    marginLeft: '10px',
  },
  checkboxLabel: {
    display: 'block',
    fontSize: '15px',
    marginTop: '6px',
    textAlign: 'left',
    marginLeft: '30%',
  },
  radioLabel: {
    marginLeft: '10px',
    marginRight: '10px',
    fontSize: '15px',
  },
  brewButton: {
    backgroundColor: '#388e3c',
    color: 'white',
    padding: '10px 25px',
    marginRight: '10px',
    border: 'none',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  resetButton: {
    backgroundColor: '#d32f2f',
    color: 'white',
    padding: '10px 25px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  summaryBox: {
    backgroundColor: '#f1f1f1',
    padding: '15px',
    borderRadius: '10px',
    margin: '20px 0',
    textAlign: 'left',
    maxWidth: '400px',
    marginInline: 'auto',
  },
  readyBox: {
    marginTop: '20px',
    backgroundColor: '#d0f8ce',
    padding: '15px',
    borderRadius: '10px',
  },
};

export default App;
