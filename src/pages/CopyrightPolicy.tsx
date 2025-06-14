import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CopyrightPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
            <Header />

            <div className="pt-24 pb-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
                            Copyright Policy
                        </h1>

                        <div className="space-y-6 text-slate-700">
                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">1. Website Copyright</h2>
                                <p className="leading-relaxed">
                                    All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software, is the property of the Department of Mining Engineering, NIT Rourkela, or its content suppliers and is protected by Indian and international copyright laws.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">2. Educational Material</h2>
                                <p className="leading-relaxed">
                                    Workshop materials, presentations, course content, and educational resources provided during the program are protected by copyright. These materials are for educational purposes only and may not be reproduced, distributed, or modified without explicit written permission.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">3. Image and Media Rights</h2>
                                <p className="leading-relaxed">
                                    All photographs, videos, and multimedia content displayed on this website are either owned by NIT Rourkela or used under proper licensing agreements. Unauthorized use, reproduction, or distribution of these materials is strictly prohibited.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">4. Third-Party Content</h2>
                                <p className="leading-relaxed">
                                    Some content on this website may be sourced from third parties. We respect the intellectual property rights of others and expect our users to do the same. If you believe any content infringes your copyright, please contact us immediately.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">5. Fair Use Policy</h2>
                                <p className="leading-relaxed">
                                    Limited use of website content for academic research, criticism, comment, or educational purposes may be permitted under fair use provisions. However, commercial use is strictly prohibited without written authorization.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">6. DMCA Compliance</h2>
                                <p className="leading-relaxed">
                                    We comply with the Digital Millennium Copyright Act (DMCA) and similar international regulations. If you believe your copyrighted work has been used improperly, please notify us with detailed information for prompt review and action.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">7. User-Generated Content</h2>
                                <p className="leading-relaxed">
                                    Any content submitted by users through registration forms, feedback, or other means grants NIT Rourkela a non-exclusive license to use such content for educational and promotional purposes related to the workshop program.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold mb-3 text-slate-800">8. Reporting Copyright Infringement</h2>
                                <p className="leading-relaxed">
                                    To report copyright infringement, please contact the Department of Mining Engineering at NIT Rourkela with the following information: description of the copyrighted work, location of the infringing material, your contact information, and a statement of good faith belief that the use is unauthorized.
                                </p>
                            </section>
                        </div>

                        <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                            <p className="text-sm text-slate-600 text-center">
                                This copyright policy is effective as of January 2025 and may be updated periodically to reflect changes in law or practice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CopyrightPolicy;