import React from 'react';

const Footer = () => {

    return (
        <footer className="bg-background text-textPrimary py-8 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h3 className="text-secondary font-medium mb-3 text-lg">🏠 Shop Address</h3>
                    <p className="leading-relaxed text-sm">
                        [Your Full Address]
                    </p>

                    <h3 className="text-secondary font-medium mt-6 mb-1 text-lg">📞 Phone</h3>
                    <p className="text-textPrimary text-sm">[Phone Number]</p>

                    <h3 className="text-secondary font-medium mt-6 mb-1 text-lg">📧 Email</h3>
                    <p className="text-textPrimary text-sm">[Email Address]</p>
                </div>

                <div>
                    <h3 className="text-secondary font-medium mb-3 text-lg">🌐 Website</h3>
                    <a
                        href="[Website URL]"
                        className="text-accent text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        [Website URL]
                    </a>

                    <h3 className="text-secondary font-medium mt-6 mb-3 text-lg">📱 Follow Us</h3>
                    <div className="flex space-x-6 text-accent text-sm">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
                    </div>
                </div>

                <div>
                    <h3 className="text-secondary font-medium mb-3 text-lg">🔗 Quick Links</h3>
                    <nav className="flex flex-col space-y-2 text-textPrimary text-sm">
                        <a href="/" className="hover:text-accent transition">Home</a>
                        <a href="/shop" className="hover:text-accent transition">Shop</a>
                        <a href="/about" className="hover:text-accent transition">About Us</a>
                        <a href="/contact" className="hover:text-accent transition">Contact</a>
                        <a href='/terms' className="hover:text-accent transition">Terms & Conditions</a>
                        <a href="/returns" className="hover:text-accent transition">Return Policy</a>
                    </nav>
                </div>

            </div>

            <div className="max-w-5xl mx-auto mt-8 text-center text-textSecondary text-xs select-none">
                &copy; {new Date().getFullYear()} Your Shop Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
