import React from 'react';

const features = [
  {
    icon: '🔒',
    title: 'End-to-End Encryption',
    desc: 'Your passwords are encrypted and stored securely. Only you can access them.'
  },
  {
    icon: '⚡',
    title: 'Instant Access',
    desc: 'Retrieve and manage your passwords instantly, anytime, anywhere.'
  },
  {
    icon: '📱',
    title: 'Mobile Friendly',
    desc: 'Designed to work beautifully on all your devices, from desktop to mobile.'
  },
  {
    icon: '🛡️',
    title: 'Privacy First',
    desc: 'We never share your data. Your privacy is our top priority.'
  }
];

const Features = () => (
  <section className="features-list">
    {features.map((f, i) => (
      <div className="feature-item" key={i}>
        <div className="text-5xl mb-3" aria-label={f.title}>{f.icon}</div>
        <h3 className="text-xl font-bold mb-2" style={{fontFamily: 'Montserrat'}}> {f.title} </h3>
        <p className="text-base text-gray-700">{f.desc}</p>
      </div>
    ))}
  </section>
);

export default Features; 