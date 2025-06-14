import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
            <Header />

            <div className="pt-24 pb-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
                            Terms & Conditions
                        </h1>

                        <div className="space-y-6 text-slate-700">
                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">1. Registration Terms</h2>
                                <p className="leading-relaxed">
                                    By registering for the Mining Engineering Workshop at NIT Rourkela, you agree to abide by all terms and conditions outlined herein. Registration is subject to availability and confirmation from the organizing committee.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">2. Payment Policy</h2>
                                <p className="leading-relaxed">
                                    All registration fees must be paid in full at the time of registration. Fees are non-refundable except in cases of workshop cancellation by the institute. Payment methods accepted include online banking, UPI, and demand drafts.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">3. Cancellation Policy</h2>
                                <p className="leading-relaxed">
                                    Participants may cancel their registration up to 7 days before the workshop start date for a 50% refund. No refunds will be provided for cancellations made within 7 days of the workshop or for no-shows.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">4. Code of Conduct</h2>
                                <p className="leading-relaxed">
                                    All participants are expected to maintain professional behavior throughout the workshop. Any form of harassment, discrimination, or disruptive behavior will result in immediate removal from the program without refund.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">5. Liability</h2>
                                <p className="leading-relaxed">
                                    NIT Rourkela and the Department of Mining Engineering shall not be liable for any personal injury, loss, or damage to personal property during the workshop. Participants attend at their own risk.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">6. Intellectual Property</h2>
                                <p className="leading-relaxed">
                                    All workshop materials, presentations, and content remain the intellectual property of NIT Rourkela. Participants may not reproduce, distribute, or use materials for commercial purposes without written permission.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">7. Photography and Recording</h2>
                                <p className="leading-relaxed">
                                    By participating in the workshop, you consent to photography and video recording for promotional and educational purposes. Images may be used in institute publications and website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">8. Contact Information</h2>
                                <p className="leading-relaxed">
                                    For any queries regarding these terms and conditions, please contact the Department of Mining Engineering at NIT Rourkela through the official contact channels provided on this website.
                                </p>
                            </section>
                        </div>

                        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-slate-600 text-center">
                                Last updated: January 2025 | These terms are subject to change without prior notice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TermsConditions;