import React from 'react';

const tips = [
  'Use unique passwords for every account.',
  'Enable two-factor authentication whenever possible.',
  'Never share your master password with anyone.',
  'Update your passwords regularly for maximum security.'
];

const Tips = () => (
  <section className="tips-section">
    <h2 className="text-2xl font-bold mb-2">Security Tips</h2>
    <ul className="tips-list">
      {tips.map((tip, i) => (
        <li key={i}>{tip}</li>
      ))}
    </ul>
  </section>
);

export default Tips; 