import React, { useEffect, useState } from 'react';

export default function PriceCalculator() {
  const [selectedItems, setSelectedItems] = useState(['Item 01', 'Item 02', 'Item 03']);
  const [detailLevel, setDetailLevel] = useState('Low');
  const [height, setHeight] = useState(50);
  const [width, setWidth] = useState(50);
  const [discountCode, setDiscountCode] = useState('');
  const [showBreakdown, setShowBreakdown] = useState(false);

  useEffect(() => {
    // This code will only run on the client-side
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      });
    }

    // Add other client-side event listeners here
  }, []);

  const handleItemToggle = (item) => {
    setSelectedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleDetailLevelChange = (level) => {
    setDetailLevel(level);
  };

  const handleApplyDiscount = () => {
    console.log('Applying discount:', discountCode);
    // Implement discount logic here
  };

  return (
    <div className="container">
      <header className="calculator-header">
        <h1>Tattoo Price Calculator</h1>
        <img src="/profile-image.jpg" alt="Profile" className="profile-pic" />
      </header>

      <section className="style-selection">
        <h2>Style Selection</h2>
        <div className="dropdown">
          <div className="selected-items">
            {selectedItems.map(item => (
              <span key={item} className="item">
                {item} <button onClick={() => handleItemToggle(item)} className="remove-item">×</button>
              </span>
            ))}
            <button className="dropdown-toggle">▼</button>
          </div>
          <ul className="dropdown-menu">
            {['Item 01', 'Item 02', 'Item 03', 'Item 04'].map(item => (
              <li key={item}>
                <label>
                  <input 
                    type="checkbox" 
                    checked={selectedItems.includes(item)} 
                    onChange={() => handleItemToggle(item)} 
                  /> {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="details-level">
        <h2>Details Level</h2>
        <div className="button-group">
          {['Low', 'Medium', 'High'].map(level => (
            <button 
              key={level}
              className={`btn ${detailLevel === level ? 'btn-primary active' : 'btn-secondary'}`}
              onClick={() => handleDetailLevelChange(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </section>

      <section className="size-specification">
        <h2>Size Specification</h2>
        <div className="slider-container">
          <label htmlFor="height">Height: <span>{height} cm</span></label>
          <input 
            type="range" 
            id="height" 
            min="0" 
            max="100" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
          />
        </div>
        <div className="slider-container">
          <label htmlFor="width">Width: <span>{width} cm</span></label>
          <input 
            type="range" 
            id="width" 
            min="0" 
            max="100" 
            value={width} 
            onChange={(e) => setWidth(e.target.value)} 
          />
        </div>
      </section>

      <section className="apply-discounts">
        <h2>Apply Discounts</h2>
        <div className="discount-input">
          <input 
            type="text" 
            placeholder="Enter discount code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleApplyDiscount}>Apply Discount</button>
        </div>
      </section>

      <section className="estimate-summary">
        <h2>
          Estimate Summary 
          <span className="breakdown-toggle">
            Breakdown 
            <input 
              type="checkbox" 
              id="breakdown-toggle"
              checked={showBreakdown}
              onChange={(e) => setShowBreakdown(e.target.checked)}
            />
          </span>
        </h2>
        <div className="summary-content">
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>$200</span>
          </div>
          <div className="summary-item">
            <span>Discount:</span>
            <span>$20</span>
          </div>
          <div className="summary-item total">
            <span>Total:</span>
            <span>$180</span>
          </div>
          {showBreakdown && (
            <div className="summary-details">
              <div>Total Hours: 5</div>
              <div>Rate per Hour: $100</div>
            </div>
          )}
        </div>
      </section>

      <div className="notice">
        <p>Final pricing is provided after consulting with me for accuracy.</p>
      </div>

      {/* Bottom navigation */}
    </div>
  );
}