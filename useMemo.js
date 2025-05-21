import React, { useState, useMemo } from 'react';

const items = [
  'React',
  'Angular',
  'Vue',
  'Svelte',
  'Next.js',
  'Gatsby',
  'Remix',
];

function FilteredList() {
  const [search, setSearch] = useState('');

  // useMemo to avoid filtering on every render unless search changes
  const filteredItems = useMemo(() => {
    console.log('Filtering...');
    return items.filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Search Frameworks</h2>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', width: '200px' }}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index} style={{ marginTop: '8px' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;

............................................................................
import React, { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num;
    }
    return result;
  };

  // Memoize the result
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>Count: {count}</p>
      <p>Calculated Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        Increment Other Count
      </button>
    </div>
  );
}

export default ExpensiveComponent;
