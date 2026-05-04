"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F5]">
            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">

                    {/* Page Header */}
                    <section className="text-center mb-10">
                        <div className="inline-flex items-center gap-3 mb-4">
                          
                            <span className="text-2xl font-extrabold tracking-widest">AERIX</span>
                        </div>
                        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
                        <p className="text-muted-foreground text-sm">Aerix Energy · Aerix Mobile Application</p>
                        <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold border border-[hsl(192,100%,45%,0.4)] bg-[hsl(192,100%,45%,0.08)] text-[hsl(192,100%,45%)]">
                            Last Updated: May 4, 2025
                        </span>
                    </section>

                    {/* Table of Contents */}
                    <div className="glass rounded-2xl p-6 mb-8 border border-border">
                        <p className="text-xs font-bold uppercase tracking-widest text-[hsl(192,100%,45%)] mb-4">Contents</p>
                        <ol className="list-decimal list-inside space-y-1">
                            {[
                                ["#s1", "App Overview"],
                                ["#s2", "Information We Collect"],
                                ["#s3", "How We Use Your Information"],
                                ["#s4", "Permissions Explained"],
                                ["#s5", "Data Sharing & Third Parties"],
                                ["#s6", "Data Security"],
                                ["#s7", "Data Retention & Storage"],
                                ["#s8", "Your Rights"],
                                ["#s9", "Children's Privacy"],
                                ["#s10", "Changes to This Policy"],
                                ["#s11", "Contact Us"],
                            ].map(([href, label]) => (
                                <li key={href}>
                                    <a href={href} className="text-sm text-muted-foreground hover:text-[hsl(192,100%,45%)] transition-colors">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Sections */}
                    <div className="space-y-5">

                        {/* 1. App Overview */}
                        <section id="s1" className="glass rounded-2xl p-7 border border-border scroll-mt-24">
                            <SectionTitle icon="⚡" title="1. App Overview" />
                            <p className="text-muted-foreground text-sm mb-3">
                                <strong className="text-foreground">Aerix</strong> is a mobile application developed by{" "}
                                <strong className="text-foreground">Aerix Energy</strong> that enables registered customers to connect to and monitor their electric vehicle (EV) using Bluetooth Low Energy (BLE). The app provides real-time vehicle telemetry, vehicle control features, service history management, and document access — all secured behind authenticated accounts.
                            </p>
                            <p className="text-muted-foreground text-sm mb-3">Core capabilities include:</p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                <li>Bluetooth BLE scanning and connection to your registered EV device</li>
                                <li>Real-time dashboard: battery level, speed, motor status, and alerts</li>
                                <li>Vehicle settings control (lighting, lock/unlock, speaker)</li>
                                <li>Service job card history and status tracking</li>
                                <li>Sales order and purchase document viewing</li>
                                <li>Secure login using your registered contact number</li>
                            </ul>
                        </section>

                        {/* 2. Information We Collect */}
                        <section id="s2" className="glass rounded-2xl p-7 border border-border scroll-mt-24">
                            <SectionTitle icon="📋" title="2. Information We Collect" />
                            <p className="text-muted-foreground text-sm mb-4">
                                We collect only the minimum data necessary to provide our services. The following categories of information are processed:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr>
                                            <TableHead>Category</TableHead>
                                            <TableHead>What We Collect</TableHead>
                                            <TableHead>Why</TableHead>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TableRow cells={[
                                            <strong key="a" className="text-foreground">Account Information</strong>,
                                            "Contact number, customer name, email address, customer ID, dealer ID",
                                            "Authentication and account management"
                                        ]} />
                                        <TableRow cells={[
                                            <strong key="b" className="text-foreground">Bluetooth Data</strong>,
                                            "BLE device MAC address, device name, connection status, last connected MAC",
                                            "Pairing and auto-connecting to your EV"
                                        ]} />
                                        <TableRow cells={[
                                            <strong key="c" className="text-foreground">Vehicle Telemetry</strong>,
                                            "Battery %, speed, motor status, fault codes, lock state — transmitted over BLE from your vehicle",
                                            "Real-time dashboard display; data is not stored on our servers"
                                        ]} />
                                        <TableRow cells={[
                                            <strong key="d" className="text-foreground">Device Information</strong>,
                                            "Device model, OS version (collected by react-native-device-info)",
                                            "Ensuring app compatibility and debugging"
                                        ]} />
                                        <TableRow cells={[
                                            <strong key="e" className="text-foreground">Session Tokens</strong>,
                                            "HTTP-only session cookies managed by our API server",
                                            "Maintaining your authenticated session securely"
                                        ]} />
                                        <TableRow cells={[
                                            <strong key="f" className="text-foreground">Service & Purchase Records</strong>,
                                            "Service job card data, sales order details retrieved from our server",
                                            "Displaying your vehicle service history and purchase records"
                                        ]} last />
                                    </tbody>
                                </table>
                            </div>
                            <Highlight>
                                <strong className="text-[hsl(192,100%,45%)]">We do not collect:</strong> GPS/location data for tracking purposes, payment card details, photos, contacts, call logs, or any background usage data.
                            </Highlight>
                        </section>

                        {/* 3. How We Use Information */}
                        <section id="s3" className="glass rounded-2xl p-7 border border-border scroll-mt-24">
                            <SectionTitle icon="🔧" title="3. How We Use Your Information" />
                            <p className="text-muted-foreground text-sm mb-3">Information collected is used strictly for the following purposes:</p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                                <li><strong className="text-foreground">EV Connectivity:</strong> Scan for, identify, and establish a BLE connection to your registered electric vehicle.</li>
                                <li><strong className="text-foreground">Auto-Connect:</strong> The last connected device MAC address is stored locally on your phone (AsyncStorage) to enable automatic reconnection on next app launch.</li>
                                <li><strong className="text-foreground">Authentication:</strong> Verify your identity via our secure API and maintain your session using server-side cookies.</li>
                                <li><strong className="text-foreground">Dashboard & Control:</strong> Receive real-time telemetry from your vehicle and send BLE control commands (lock, speed limit, lights, etc.).</li>
                                <li><strong className="text-foreground">Service History:</strong> Fetch and display your vehicle's service job cards and purchase records from Aerix Energy servers.</li>
                                <li><strong className="text-foreground">App Stability:</strong> Use device information to ensure compatibility and resolve technical issues.</li>
                            </ul>
                        </section>

                        {/* 4. Permissions */}
                        <section id="s4" className="glass rounded-2xl p-7 border border-border scroll-mt-24">
                            <SectionTitle icon="🔑" title="4. Permissions Explained" />
                            <p className="text-muted-foreground text-sm mb-4">
                                The Aerix app requests the following Android permissions. Each permission is essential to core functionality:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr>
                                            <TableHead>Permission</TableHead>
                                            <TableHead>Why It Is Required</TableHead>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TableRow cells={[
                                            <span key="a"><strong className="text-foreground">BLUETOOTH / BLUETOOTH_ADMIN</strong> <em>(Android ≤ 11)</em></span>,
                                            "Enable Bluetooth hardware and allow BLE scanning on older Android versions."
                                        ]} />
                                        <TableRow cells={[
                                            <span key="b"><strong className="text-foreground">BLUETOOTH_SCAN</strong> <em>(Android 12+)</em></span>,
                                            "Discover nearby BLE EV devices without requiring location access."
                                        ]} />
                                        <TableRow cells={[
                                            <span key="c"><strong className="text-foreground">BLUETOOTH_CONNECT</strong> <em>(Android 12+)</em></span>,
                                            "Establish and maintain the BLE connection to your EV hardware."
                                        ]} />
                                        <TableRow cells={[
                                            <span key="d"><strong className="text-foreground">BLUETOOTH_ADVERTISE</strong></span>,
                                            "Required by the BLE stack for full BLE peripheral interaction support."
                                        ]} />
                                        <TableRow cells={[
                                            <span key="e"><strong className="text-foreground">ACCESS_FINE_LOCATION</strong></span>,
                                            <span key="e2">Mandatory by Android OS for BLE scanning on Android 6–11. The app does <strong className="text-foreground">not</strong> use this to track your physical location.</span>
                                        ]} />
                                        <TableRow cells={[
                                            <span key="f"><strong className="text-foreground">INTERNET</strong></span>,
                                            "Communicate with the Aerix Energy API server for authentication, service records, and vehicle data."
                                        ]} last />
                                    </tbody>
                                </table>
                            </div>
                            <Highlight>
                                <strong className="text-[hsl(192,100%,45%)]">Note on Location Permission:</strong> Android requires <code className="text-xs bg-black/10 px-1 rounded">ACCESS_FINE_LOCATION</code> for any app that performs Bluetooth scanning on API levels 23–30. Aerix does <strong className="text-foreground">not</strong> record, store, or transmit your GPS location. This permission is solely a technical requirement imposed by the Android platform for BLE scanning.
                            </Highlight>
                        </section>

                        {/* 5. Data Sharing */}
                        <section id="s5" className="glass rounded-2xl p-7 border border-border scroll-mt-24">
                            <SectionTitle icon="🤝" title="5. Data Sharing & Third Parties" />
                            <p className="text-sm text-foreground font-semibold mb-3">We do not sell, rent, or trade your personal data to any third parties.</p>
                            <p className="text-muted-foreground text-sm mb-3">Limited data sharing occurs only in the following circumstances:</p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-3">
                                <li>
                                    <strong className="text-foreground">Aerix Energy API Server:</strong> Your contact number and session credentials are transmitted to our own secure backend for authentication and to retrieve your vehicle and service data.
                                </li>
                                <li>
                                    <strong className="text-foreground">Authorized Dealerships:</strong> Your service records and sales orders are associated with your registered Aerix dealer. Dealer staff may access this data through their own Aerix business portal — not through your app.
                                </li>
                                <li>
                                    <strong className="text-foreground">Legal Compliance:</strong> We may disclose information if required by law, court order, or to protect the rights and safety of our users.
                                </li>
                            </ul>
                            <p className="text-muted-foreground text-sm">
                                The app does <strong className="text-foreground">not</strong> integrate any third-party analytics SDKs (e.g., Firebase Analytics, Google Analytics, Facebook SDK, Crashlytics) or advertising networks.
                            </p>
                        </section>

                        {/* 6. Security */}
                        <section id="s6" className="glass rounded-2xl p-7 border border-border scroll-mt-24">
                            <SectionTitle icon="🔒" title="6. Data Security" />
                            <p className="text-muted-foreground text-sm mb-3">We implement industry-standard technical and organisational measures to protect your information:</p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-3">
                                <li><strong className="text-foreground">HTTPS Enforcement:</strong> All communication with our API uses HTTPS. Cleartext HTTP traffic is disabled at the Android application level (<code className="text-xs bg-black/10 px-1 rounded">android:usesCleartextTraffic=&quot;false&quot;</code>).</li>
                                <li><strong className="text-foreground">HTTP-Only Session Cookies:</strong> Authentication tokens are stored in secure, HTTP-only cookies managed by our server — not in JavaScript-accessible storage.</li>
                                <li><strong className="text-foreground">Local Storage:</strong> Only non-sensitive data (last connected BLE MAC address, user profile) is stored locally using AsyncStorage on your device.</li>
                                <li><strong className="text-foreground">Code Protection:</strong> The JavaScript bundle is obfuscated to protect business logic from reverse engineering.</li>
                                <li><strong className="text-foreground">Automatic Token Refresh:</strong> Session tokens are automatically refreshed and expired sessions result in immediate logout to prevent unauthorized access.</li>
                            </ul>
                            <p className="text-muted-foreground text-sm">
                                While we take all reasonable precautions, no method of electronic transmission or storage is 100% secure. We encourage you to keep your contact number and device secure.
                            </p>
                        </section>

                        {/* 7. Data Retention */}
                        <section id="s7" className="glass rounded-2xl p-7 border border-border scroll-mt-24">
                            <SectionTitle icon="🗂️" title="7. Data Retention & Storage" />
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                                <li><strong className="text-foreground">On-Device:</strong> Your user profile and last connected BLE MAC address are stored locally and are cleared when you log out or uninstall the app.</li>
                                <li><strong className="text-foreground">Server-Side:</strong> Account data, service records, and sales orders are retained on Aerix Energy servers for the duration of your active customer relationship. You may request deletion at any time (see Section 8).</li>
                                <li><strong className="text-foreground">BLE Telemetry:</strong> Real-time vehicle telemetry displayed on the dashboard is not persisted to any server. It exists only in-memory while the app is active.</li>
                            </ul>
                        </section>

                        {/* 8. Your Rights */}
                        <section id="s8" className="glass rounded-2xl p-7 border border-border scroll-mt-24">
                            <SectionTitle icon="👤" title="8. Your Rights" />
                            <p className="text-muted-foreground text-sm mb-3">As a user of the Aerix app, you have the following rights regarding your personal data:</p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-3">
                                <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you.</li>
                                <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
                                <li><strong className="text-foreground">Deletion:</strong> Request deletion of your account and associated personal data. Note that some data may be retained as required by law or for legitimate business purposes.</li>
                                <li><strong className="text-foreground">Withdrawal of Consent:</strong> Revoke Bluetooth or location permissions at any time via your device Settings. Doing so will disable BLE connectivity features.</li>
                                <li><strong className="text-foreground">Logout:</strong> You may log out of the app at any time, which clears your local session data.</li>
                            </ul>
                            <p className="text-muted-foreground text-sm">To exercise any of these rights, contact us at the address provided in Section 11.</p>
                        </section>

                        {/* 9. Children's Privacy */}
                        <section id="s9" className="glass rounded-2xl p-7 border border-border scroll-mt-24">
                            <SectionTitle icon="🧒" title="9. Children's Privacy" />
                            <p className="text-muted-foreground text-sm mb-3">
                                The Aerix application is intended solely for registered Aerix Energy customers who are adults. <strong className="text-foreground">This app is not directed at children under the age of 13</strong>, and we do not knowingly collect personal information from children under 13.
                            </p>
                            <p className="text-muted-foreground text-sm">
                                If you believe a child under 13 has provided us with personal information, please contact us immediately and we will take steps to delete such information.
                            </p>
                        </section>

                        {/* 10. Changes */}
                        <section id="s10" className="glass rounded-2xl p-7 border border-border scroll-mt-24">
                            <SectionTitle icon="🔄" title="10. Changes to This Policy" />
                            <p className="text-muted-foreground text-sm mb-3">
                                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will update the <strong className="text-foreground">"Last Updated"</strong> date at the top of this page.
                            </p>
                            <p className="text-muted-foreground text-sm">
                                We encourage you to review this policy periodically. Continued use of the Aerix app after any changes constitutes your acceptance of the updated policy.
                            </p>
                        </section>

                        {/* 11. Contact */}
                        <section id="s11" className="glass rounded-2xl p-7 border border-border scroll-mt-24">
                            <SectionTitle icon="📬" title="11. Contact Us" />
                            <p className="text-muted-foreground text-sm mb-3">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
                                <li><strong className="text-foreground">Company:</strong> Aerix Energy</li>
                                <li><strong className="text-foreground">App Name:</strong> Aerix</li>
                                <li>
                                    <strong className="text-foreground">Email:</strong>{" "}
                                    <a href="mailto:sanjeet.jha@aerixenergy.com" className="text-[hsl(192,100%,45%)] hover:underline">
                                        sanjeet.jha@aerixenergy.com
                                    </a>
                                </li>
                                <li>
                                    <strong className="text-foreground">Website:</strong>{" "}
                                    <a href="https://aerixenergy.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(192,100%,45%)] hover:underline">
                                        aerixenergy.com
                                    </a>
                                </li>
                            </ul>
                            <Highlight>
                                We aim to respond to all privacy-related inquiries within <strong className="text-[hsl(192,100%,45%)]">5 business days</strong>.
                            </Highlight>
                        </section>

                    </div>

                    {/* Footer note */}
                    <p className="text-center text-xs text-muted-foreground mt-10">
                        © 2026 Aerix Energy. All rights reserved. · This policy is publicly accessible and does not require login to view.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

/* ── Small helper components ── */

function SectionTitle({ icon, title }: { icon: string; title: string }) {
    return (
        <h2 className="flex items-center gap-3 text-base font-bold mb-4 text-foreground">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(192,100%,45%,0.18)] to-[hsl(250,100%,50%,0.18)] flex items-center justify-center text-base shrink-0">
                {icon}
            </span>
            {title}
        </h2>
    );
}

function Highlight({ children }: { children: React.ReactNode }) {
    return (
        <div className="mt-4 border-l-4 border-[hsl(192,100%,45%)] bg-[hsl(192,100%,45%,0.06)] rounded-r-lg px-4 py-3 text-sm text-muted-foreground">
            {children}
        </div>
    );
}

function TableHead({ children }: { children: React.ReactNode }) {
    return (
        <th className="text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-[hsl(192,100%,45%)] border-b border-border bg-black/5">
            {children}
        </th>
    );
}

function TableRow({ cells, last }: { cells: React.ReactNode[]; last?: boolean }) {
    return (
        <tr className={!last ? "border-b border-border/40" : ""}>
            {cells.map((cell, i) => (
                <td key={i} className="px-3 py-2 text-sm text-muted-foreground align-top">
                    {cell}
                </td>
            ))}
        </tr>
    );
}
