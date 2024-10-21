import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Information Sharing and Disclosure</h2>
          <p>We do not share your personal information with third parties except as described in this policy.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Your Rights and Choices</h2>
          <p>You have the right to access, update, or delete your personal information. You can also opt out of certain data collection and use.</p>
        </section>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
