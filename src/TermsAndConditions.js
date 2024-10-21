import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>By accessing and using ZVortex's services, you agree to be bound by these Terms and Conditions.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Use of Service</h2>
          <p>You agree to use ZVortex's services only for lawful purposes and in accordance with these Terms.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account and password.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
          <p>All content and materials available on ZVortex are the property of ZVortex and are protected by applicable intellectual property laws.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p>ZVortex shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service.</p>
        </section>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default TermsAndConditions;
