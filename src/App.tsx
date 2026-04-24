import { useEffect, useState } from "react";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const reveal = () => {
            const reveals = document.querySelectorAll(".reveal");
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        };
        window.addEventListener("scroll", reveal);
        // Déclencher une fois au chargement
        reveal();
        
        return () => window.removeEventListener("scroll", reveal);
    }, []);

    return (
        <div className="font-body-md overflow-x-hidden font-sans bg-[#f9f9f9] text-[#1a1c1c]">
            <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
                
                body {
                    background-color: #f9f9f9;
                    color: #1a1c1c;
                    scroll-behavior: smooth;
                }

                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
                
                .bento-item { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
                .bento-item:hover { transform: translateY(-4px); }
                .reveal { opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; }
                .reveal.active { opacity: 1; transform: translateY(0); }

                /* Custom Theme Classes */
                .text-primary { color: #af101a; }
                .bg-primary { background-color: #af101a; }
                .bg-primary\\/10 { background-color: rgba(175, 16, 26, 0.1); }
                .border-primary { border-color: #af101a; }
                .border-b-2.border-primary { border-bottom-color: #af101a; border-bottom-width: 2px; }
                
                .hover\\:text-primary:hover { color: #af101a; }
                .group:hover .group-hover\\:bg-primary { background-color: #af101a; }
                .group:hover .group-hover\\:text-white { color: #ffffff; }
                
                .text-on-background { color: #1a1c1c; }
                .bg-surface-container-low { background-color: #f3f3f3; }
                
                .py-section-gap { padding-top: 64px; padding-bottom: 64px; }
                .px-container-margin { padding-left: 20px; padding-right: 20px; }
                .gap-gutter { gap: 16px; }
                
                .space-y-base > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(8px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(8px * var(--tw-space-y-reverse)); }
                .space-y-stack-md > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(12px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(12px * var(--tw-space-y-reverse)); }
                .space-y-stack-lg > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse)); }

                .font-headline-xl { font-family: 'Manrope', sans-serif; font-size: 40px; line-height: 1.2; letter-spacing: -0.02em; font-weight: 800; }
                .font-headline-lg { font-family: 'Manrope', sans-serif; font-size: 32px; line-height: 1.25; letter-spacing: -0.01em; font-weight: 700; }
                .font-headline-md { font-family: 'Manrope', sans-serif; font-size: 24px; line-height: 1.3; font-weight: 700; }
                .font-body-lg { font-family: 'Manrope', sans-serif; font-size: 18px; line-height: 1.6; font-weight: 400; }
                .font-body-md { font-family: 'Manrope', sans-serif; font-size: 16px; line-height: 1.6; font-weight: 400; }
                .font-label-md { font-family: 'Manrope', sans-serif; font-size: 14px; line-height: 1.2; font-weight: 500; }
                .font-label-bold { font-family: 'Manrope', sans-serif; font-size: 14px; line-height: 1.2; letter-spacing: 0.05em; font-weight: 700; }
            ` }} />

            {/* Barre de navigation supérieure */}
            <header className="bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 flex flex-col w-full top-0 sticky z-40">
                <div className="flex justify-between items-center w-full px-5 h-16 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 lg:gap-3">
                        <img alt="Faire face à l'avenir" className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover shadow-sm bg-white" src="/logo.png" />
                        <span className="text-base sm:text-lg lg:text-xl font-black tracking-tighter text-red-600 dark:text-red-500 font-headline-md lg:font-headline-xl">Faire face à l'avenir</span>
                    </div>
                    <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
                        <a className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors font-label-bold" href="#sectors">Secteurs</a>
                        <a className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors font-label-bold" href="#properties">Propriétés</a>
                        <a className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors font-label-bold" href="#services">Services</a>
                        <a className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors font-label-bold" href="#agency">Agence</a>
                        <a className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors font-label-bold" href="#contact">Contact</a>
                    </nav>
                    <div className="flex items-center gap-4 md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="material-symbols-outlined text-zinc-900 hover:opacity-80 transition-opacity">
                            {isMenuOpen ? "close" : "menu"}
                        </button>
                    </div>
                </div>
                
                {/* Options du menu mobile */}
                {isMenuOpen && (
                    <nav className="md:hidden w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex flex-col px-6 py-4 space-y-4 shadow-lg absolute top-16 left-0">
                        <a onClick={() => setIsMenuOpen(false)} className="text-zinc-800 dark:text-zinc-200 hover:text-primary font-label-bold" href="#sectors">Secteurs</a>
                        <a onClick={() => setIsMenuOpen(false)} className="text-zinc-800 dark:text-zinc-200 hover:text-primary font-label-bold" href="#properties">Propriétés</a>
                        <a onClick={() => setIsMenuOpen(false)} className="text-zinc-800 dark:text-zinc-200 hover:text-primary font-label-bold" href="#services">Services</a>
                        <a onClick={() => setIsMenuOpen(false)} className="text-zinc-800 dark:text-zinc-200 hover:text-primary font-label-bold" href="#agency">Agence</a>
                        <a onClick={() => setIsMenuOpen(false)} className="text-zinc-800 dark:text-zinc-200 hover:text-primary font-label-bold" href="#contact">Contact</a>
                    </nav>
                )}
            </header>

            <main>
                {/* Section Héro */}
                <section className="relative min-h-[921px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img className="w-full h-full object-cover" alt="Image architecturale éblouissante d'un immeuble de luxe moderne à Kinshasa au crépuscule" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrVqVMrdmq4tycsBUT40DcM5cV0tcrmjXSHB1p4ZLxYI56KzmE161l61Ov0d1wB06bo6mE-qswB4aZ32iflQVdKkIeYRijl2SbwTiFy4mQyvNCZrdn7IERQ8pMi0SctfOcFKPfTcwpolXraTQLj_B7smoruaQ9kwrUMGpRbqLTnAjL5Mjhsnj0Eu5xNlrku8IfHQV9fHxsFYoibtoqyhKYARBHsAor5U9IVhXn4bQUtnvPIHhuu2PDpVr0iAVRtzQAtn5ef4QOo9TP" />
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-container-margin w-full">
                        <div className="max-w-2xl space-y-stack-lg">
                            <span className="text-[#D4AF37] font-label-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg inline-block">IMMOBILIER DE PRESTIGE KINSHASA</span>
                            <h1 className="text-white font-headline-xl text-5xl md:text-7xl leading-tight">Faire face à l'avenir</h1>
                            <p className="text-zinc-200 font-body-lg max-w-xl">
                                Force inébranlable et vision stratégique sur le marché immobilier congolais. Nous bâtissons des héritages et assurons votre avenir architectural au cœur de Kinshasa.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="bg-primary text-white font-label-bold px-8 py-4 rounded-lg hover:scale-95 duration-150 transition-transform">
                                    RÉSERVER UNE VISITE
                                </button>
                                <button className="border border-white text-white font-label-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                                    EXPLORER LES PROPRIÉTÉS
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section À Propos */}
                <section className="py-section-gap bg-white reveal active" id="agency">
                    <div className="max-w-7xl mx-auto px-container-margin grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-stack-md">
                            <h2 className="text-primary font-label-bold">NOTRE VISION</h2>
                            <h3 className="text-on-background font-headline-lg">L'Excellence Immobilière Redéfinie</h3>
                            <p className="text-zinc-600 font-body-md leading-relaxed">
                                Faire face à l'avenir n'est pas seulement un nom, c'est notre engagement envers chaque client. Nous croyons que l'immobilier à Kinshasa exige une compréhension profonde de l'urbanisme local alliée à des standards internationaux de luxe et de sécurité. 
                            </p>
                            <p className="text-zinc-600 font-body-md leading-relaxed">
                                Notre équipe d'experts navigue les complexités du marché pour vous offrir des opportunités exclusives de Kintambo à la Gombe, garantissant que chaque investissement soit une pierre angulaire pour les générations futures.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div>
                                    <div className="text-3xl font-black text-primary font-headline-md">15+</div>
                                    <div className="text-zinc-500 font-label-md">Années d'Expertise</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-primary font-headline-md">500+</div>
                                    <div className="text-zinc-500 font-label-md">Propriétés Sécurisées</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="rounded-xl shadow-2xl w-full h-[500px] object-cover" alt="Intérieur de salon de luxe moderne dans les hauteurs avec vue" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsJv6SvE8Ockk_WfdGmbjt1MNKIyJ43rtjWgUDHnanewCFowyqbeQrljfZ6u8WSc2Je_x-Do9zotCKGHIfnAmuyVr0_CH3q9oNNz21t-AD0-L8lXBg7Kd7WPH3XvN0jpgff5WpfooOU15yAWL-YIzisbWmpYjsrLI7NcA6g41pUb7Xaf9W4c3KNXb03NJeNDq4PrK1e_319IecuEPArZDLfeT-HMSAf28d7O38Z78PVUFceI3Q6J2K42shrvxlYCaQIgtScLds1Xkp" />
                            <div className="absolute -bottom-8 -left-8 bg-zinc-950 p-8 text-white hidden lg:block">
                                <p className="font-headline-md">"L'avenir se construit sur des bases solides."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Nos Services */}
                <section className="py-section-gap bg-surface-container-low reveal active" id="services">
                    <div className="max-w-7xl mx-auto px-container-margin">
                        <div className="text-center mb-16 space-y-base">
                            <h2 className="text-primary font-label-bold">NOS SERVICES</h2>
                            <h3 className="text-on-background font-headline-lg">Une expertise à 360°</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 bento-item group">
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <span className="material-symbols-outlined text-primary group-hover:text-white">admin_panel_settings</span>
                                </div>
                                <h4 className="text-xl font-bold mb-4 font-headline-md">Gestion immobilière</h4>
                                <p className="text-zinc-500 font-body-md">Gestion complète de vos actifs immobiliers : maintenance, recouvrement des loyers et optimisation de la valeur locative.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 bento-item group">
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <span className="material-symbols-outlined text-primary group-hover:text-white">monitoring</span>
                                </div>
                                <h4 className="text-xl font-bold mb-4 font-headline-md">Conseil en investissement</h4>
                                <p className="text-zinc-500 font-body-md">Conseil stratégique pour vos acquisitions foncières et projets de développement dans les zones à forte croissance.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 bento-item group">
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <span className="material-symbols-outlined text-primary group-hover:text-white">architecture</span>
                                </div>
                                <h4 className="text-xl font-bold mb-4 font-headline-md">Architecture & Design</h4>
                                <p className="text-zinc-500 font-body-md">Conception architecturale moderne alliant esthétique congolaise et standards de construction internationaux.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grille Bento des Secteurs */}
                <section className="py-section-gap bg-white reveal active" id="sectors">
                    <div className="max-w-7xl mx-auto px-container-margin">
                        <div className="text-center mb-16 space-y-base">
                            <h2 className="text-primary font-label-bold">TERRITOIRES D'EXCELLENCE</h2>
                            <h3 className="text-on-background font-headline-lg">Secteurs d'intervention Clés</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-[600px]">
                            {/* Gombe */}
                            <div className="md:col-span-8 relative group overflow-hidden rounded-xl bento-item">
                                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Vue aérienne du quartier de la Gombe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL4bJ_oTcD2EoXzPwhFjN8bLzZkrVWh2OBl9NvwiImfuRo0SARCP3ssQ4d387ebOXSUrpVpylg6Mh2rEFOch1ObT2510PGFN4sUeAx72oh7Vapsi7DuaLmXbT_Ei-ub0xABFc7q6ATG5dqnZARhZbMIwzzvc_Ppa2opBbcm06Eb8S1rZXCIfweEj1lZw-Yg-Itkd0YiV9gugoXaNnaMMCXsZ4MBSlwnIXCYXxLdCwugzxJpVyz59kxySv3d-_6uXv3xeQvPGuYnLuA" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <span className="text-primary font-label-bold bg-white px-3 py-1 mb-4 inline-block">PRESTIGE</span>
                                    <h4 className="text-white font-headline-md text-3xl">Gombe</h4>
                                    <p className="text-zinc-300 max-w-sm font-body-md mt-2">Le cœur financier et administratif. Penthouses de luxe et espaces d'entreprise premium.</p>
                                </div>
                            </div>
                            {/* Kintambo */}
                            <div className="md:col-span-4 relative group overflow-hidden rounded-xl bento-item">
                                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Villa moderne à Kintambo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzLNG2gt0odA9xl3LsrHI_A46THlk9nB7pw3WPIrLBWcMuwVULuR6WY-2UEvPn4gy7Pily1YqfGb4LyFeNDloHrwMIwRkk-alqwbT9ajoZ6DhoCqvoG2tgnRU5I2Cg0Ls8qchUso_Pvq36djonoAV1RxHhOdiJyB6bq3ONkqEmava0GmCd2glfbbhE23FZ_ykj3TJzEhcLp52anHKYa2wbckkhcqBaF2jAU7kO5hkaIo-qfqx-QuB3nUfJsIZsQYTgS6aqGdZqh76T" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h4 className="text-white font-headline-md">Kintambo</h4>
                                    <p className="text-zinc-300 font-body-md mt-2">Pôle résidentiel stratégique.</p>
                                </div>
                            </div>
                            {/* Ngaliema */}
                            <div className="md:col-span-4 relative group overflow-hidden rounded-xl bento-item">
                                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Domaine de luxe à Ngaliema" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0MBXaMeh1wCrv78HGZtxSyUzTiWgjMkRRbejLiqJEr6CKsd2xt3sXBb1Fj-v9bVDyrq_ZK1n1F3s-YDamgAUHh9bkgKo08XZXtwCi7xrcqQItPdqIbqqWjD6NHjMSQRTpSEda3FEmz9RQL9t_t_IxctVhde0v0SqUQHWi17jytKIp-gaFXS7NRJhU8LVjD5fDy-4Y5DFukeLGv1I6C3Ax2Q6k0aHe_AXgPpJkuNtndnht_Kw5r_3_yd7TrZvfLx4mG60AEqSZTy8z" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h4 className="text-white font-headline-md">Ngaliema</h4>
                                    <p className="text-zinc-300 font-body-md mt-2">Vie en hauteur & vues panoramiques.</p>
                                </div>
                            </div>
                            {/* Bandal */}
                            <div className="md:col-span-8 relative group overflow-hidden rounded-xl bento-item">
                                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Quartier vibrant de Bandal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOfBYg6oRsPC2H4D20BNTal3MZllhfnDRzptBlvDv8_LaivgQKcCpqC1bKlVaEH65IAiYr_0LZAtx42xrhZSYebFgUTB59Y6RPqRbtW3W5KnqlLw6c4EN2isqTgyjwSSLi-wC8242pRkhvkL-VMWXzLqS8aTxhTss7PfzrBpC88GrcAZLheAfK3rzjAUlsGG9a1_qvkrxoZ3MmI7xVrhrC-7rNIQoIPtR8M1mrnKbqC3LLsUCkFea88SNJ9NbXVjhyLgppBQoZYF88" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h4 className="text-white font-headline-md text-3xl">Bandal</h4>
                                    <p className="text-zinc-300 max-w-sm font-body-md mt-2">Croissance dynamique et résidences familiales accessibles dans une communauté vibrante.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Galerie de Propriétés */}
                <section className="py-section-gap bg-surface-container-low reveal active" id="properties">
                    <div className="max-w-7xl mx-auto px-container-margin">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                            <div className="space-y-base">
                                <h2 className="text-primary font-label-bold">NOS BIENS D'EXCEPTION</h2>
                                <h3 className="text-on-background font-headline-lg">Annonces premium à Kinshasa</h3>
                            </div>
                            <button className="text-primary font-label-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity">VOIR TOUT LE CATALOGUE</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Property 1 */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-zinc-100 group bento-item">
                                <div className="relative h-64 overflow-hidden">
                                    <img alt="Villa Royale Gombe" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9twuF7hP-bJ0Q7xgMwbXlIzNDWcyV7oHazRWdYN7WlktDwuaxYlOMrEkBerJ4tO_TtaejOOv5CEwj1I9PFKW3PpWRqeg2iuUtwMYIwGw3-Vz0z_04NAomIvmvyuWlKLLmqJULcq4N13NHJXo4fYce__uyu9C3oekKbOnK_6dD6uRuzCIpHCtFA4CqogeUt-hKT8X7DB3hjaG3DQnhoCZTOKuAxpOsJi1Pe1OVuXfUhz2XYv1NmXK1Dt-BKwsdofu8vxJgTz0Uxjlb" />
                                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-bold rounded">EN VENTE</div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-bold font-headline-md">Villa Royale - Gombe</h4>
                                        <span className="text-primary font-bold">$1,250,000</span>
                                    </div>
                                    <p className="text-zinc-500 text-sm mb-4 font-body-md">Avenue de la Justice, Gombe. Design minimaliste avec vue sur le fleuve.</p>
                                    <div className="flex gap-4 border-t border-zinc-100 pt-4">
                                        <div className="flex items-center gap-1 text-zinc-600 text-sm font-label-md">
                                            <span className="material-symbols-outlined text-lg">bed</span> 5 Pièces
                                        </div>
                                        <div className="flex items-center gap-1 text-zinc-600 text-sm font-label-md">
                                            <span className="material-symbols-outlined text-lg">bathtub</span> 4 Salles de bain
                                        </div>
                                        <div className="flex items-center gap-1 text-zinc-600 text-sm font-label-md">
                                            <span className="material-symbols-outlined text-lg">square_foot</span> 450m²
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Property 2 */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-zinc-100 group bento-item">
                                <div className="relative h-64 overflow-hidden">
                                    <img alt="Penthouse Kintambo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPu6lJBCa0gXHP7WJeIKDVdLWN0OofH-TQA8lF0KSpZH_Dt27MWwRkWVRxLRYE9rHurhLH6N0sXUfMScgl_vV2sfV1ATFPH8xoGIVf44NpIjOVPEktHj6ZAgTuevssM5izJGtB8DpBLdMnT1lONr0P47871A1oEQABgz_0IcHVjEJeSs8EHEAOmcsA-JjA6HUE5aWMjKs78JLCaZc9wH0laUOBQIlQ68_LEu9g4B5Ubn-FkiOrXl6YgJ4y4hkpGJWi6BSDP1AkHk3g" />
                                    <div className="absolute top-4 left-4 bg-zinc-900 text-white px-3 py-1 text-xs font-bold rounded">LOCATION</div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-bold font-headline-md">Horizon Penthouse</h4>
                                        <span className="text-primary font-bold">$4,500/mo</span>
                                    </div>
                                    <p className="text-zinc-500 text-sm mb-4 font-body-md">Quartier Ma Campagne, Ngaliema. Dernier étage avec terrasse panoramique.</p>
                                    <div className="flex gap-4 border-t border-zinc-100 pt-4">
                                        <div className="flex items-center gap-1 text-zinc-600 text-sm font-label-md">
                                            <span className="material-symbols-outlined text-lg">bed</span> 3 Pièces
                                        </div>
                                        <div className="flex items-center gap-1 text-zinc-600 text-sm font-label-md">
                                            <span className="material-symbols-outlined text-lg">bathtub</span> 3 Salles de bain
                                        </div>
                                        <div className="flex items-center gap-1 text-zinc-600 text-sm font-label-md">
                                            <span className="material-symbols-outlined text-lg">square_foot</span> 220m²
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Property 3 */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-zinc-100 group bento-item">
                                <div className="relative h-64 overflow-hidden">
                                    <img alt="Modern Mansion Bandal" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDtboyWYGkOaUjP2BHhWFywegIHm_YGwSzJ8uAm4UI8amnUNX8Y8skiQM6YUwALbrVqY8qUhllrrwOOhgsD1PWixD82aZMI8MJTm9Wf8mtRZ6_Y8jPEpYuBuqpr5c5ateAiftZhgapqc3HT4tEbcmvbTWm9MySZJfoxOeqUZ67TMPkNN3rpSY3_Z8ISMtUDGd_JnIbMsbE-qgoyx767RMB2Q3Wr_m_nhQjxKr-KSdBbUrFCOj0njwvwn1ytkeol4KUDQeW6XAD42Bt" />
                                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-bold rounded">EN VENTE</div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-bold font-headline-md">Bandal Modernity</h4>
                                        <span className="text-primary font-bold">$380,000</span>
                                    </div>
                                    <p className="text-zinc-500 text-sm mb-4 font-body-md">Bandalungwa, Bloc C. Villa familiale neuve sécurisée.</p>
                                    <div className="flex gap-4 border-t border-zinc-100 pt-4">
                                        <div className="flex items-center gap-1 text-zinc-600 text-sm font-label-md">
                                            <span className="material-symbols-outlined text-lg">bed</span> 4 Pièces
                                        </div>
                                        <div className="flex items-center gap-1 text-zinc-600 text-sm font-label-md">
                                            <span className="material-symbols-outlined text-lg">bathtub</span> 3 Salles de bain
                                        </div>
                                        <div className="flex items-center gap-1 text-zinc-600 text-sm font-label-md">
                                            <span className="material-symbols-outlined text-lg">square_foot</span> 300m²
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Témoignages */}
                <section className="py-section-gap bg-white reveal active">
                    <div className="max-w-7xl mx-auto px-container-margin">
                        <div className="text-center mb-16 space-y-base">
                            <h2 className="text-primary font-label-bold">TÉMOIGNAGES</h2>
                            <h3 className="text-on-background font-headline-lg">Ils nous font confiance</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                                <img alt="Client 1" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjLBKJ5TdCmt16tg2Xl5mhf4zYI4lYmQIJFet11Gh1gjh28nrDR99AVnvxKCOsvoUjA4dhIkm8agwD-XfaRPWyYYn1oxa0unxbTbevqEljWwNVV1ZXiS9gTrMZyp1gBbcXnt4UcaNJ1ihZSUysBdqQYgo3yIsO8suSbcDz6obdsMFMublMVvdXhh_jbXwCR49CVDaRH4HEKy2cu5SmUyqALp_CdyIDhPMoEG_h9Gq31svgbTYqOGimjCFo4o3dTH6nOeYrG-h78k8T" />
                                <div className="space-y-4">
                                    <div className="text-primary flex gap-1">
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                    </div>
                                    <p className="italic text-zinc-600 font-body-md leading-relaxed">"Une expertise rare à Kinshasa. Ils ont su sécuriser mon investissement à la Gombe avec un professionnalisme exemplaire. Je recommande vivement leurs conseils stratégiques."</p>
                                    <div>
                                        <p className="font-bold text-zinc-900 font-label-bold">M. Bakole</p>
                                        <p className="text-zinc-500 text-sm uppercase tracking-wider font-label-md">Entrepreneur, Gombe</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                                <img alt="Client 2" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbFrKezpS05Hz1JRHWqcYLfbAB0i5-rKvvrGRD5lGO8cergliji7i9yk1FZ-UL7jy8U9y8ENCOaDv7EYJzufbi4xeUEQpyi0Wd0sDrjTE_p7fWKxIm8IPIjO68rB2Kb36n_WVZhHj5rkytpLRZ-skypr005Vlrsa6exEYmH2aV14S5tyPzP_lzxCkIKnTOdXcLzsaUiG_VP6jEklI076e-L5uVHYTDhVzsO2QP0ClLC-c9s8ChePoOvSv_tKm3e6ARQIQMvo99PhB2" />
                                <div className="space-y-4">
                                    <div className="text-primary flex gap-1">
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined">star</span>
                                    </div>
                                    <p className="italic text-zinc-600 font-body-md leading-relaxed">"La gestion de ma propriété à Kintambo est irréprochable. Plus de soucis de loyers ou de maintenance, l'équipe s'occupe de tout avec une transparence totale."</p>
                                    <div>
                                        <p className="font-bold text-zinc-900 font-label-bold">Mme. Kabeya</p>
                                        <p className="text-zinc-500 text-sm uppercase tracking-wider font-label-md">Investisseur, Diaspora</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Contact */}
                <section className="py-section-gap bg-surface-container-low reveal active" id="contact">
                    <div className="max-w-7xl mx-auto px-container-margin">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 flex flex-col md:flex-row">
                            <div className="md:w-1/2 p-12 lg:p-20 space-y-stack-lg">
                                <h2 className="text-primary font-label-bold">ENTRER EN CONTACT</h2>
                                <h3 className="text-on-background font-headline-lg">Discutons de Votre Futur Actif</h3>
                                <div className="space-y-6 pt-4">
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary">phone</span>
                                        <div>
                                            <p className="font-label-bold text-zinc-900">Appelez-nous</p>
                                            <p className="text-zinc-500 font-body-md">+243 817 633 314</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary">mail</span>
                                        <div>
                                            <p className="font-label-bold text-zinc-900">Email</p>
                                            <p className="text-zinc-500 font-body-md">claudinilunga@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary">location_on</span>
                                        <div>
                                            <p className="font-label-bold text-zinc-900">Adresse</p>
                                            <p className="text-zinc-500 font-body-md">Kintambo - Magasin / OUA, Kinshasa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 bg-white p-12 lg:p-20 border-l border-zinc-100">
                                <form className="space-y-6">
                                    <div className="border-b border-zinc-300 py-2">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold font-label-bold">Nom Complet</label>
                                        <input className="w-full border-none p-0 focus:ring-0 bg-transparent text-on-background placeholder:text-zinc-300 outline-none font-body-md" placeholder="Perfect Tshibangu" type="text" />
                                    </div>
                                    <div className="border-b border-zinc-300 py-2">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold font-label-bold">Adresse Email</label>
                                        <input className="w-full border-none p-0 focus:ring-0 bg-transparent text-on-background placeholder:text-zinc-300 outline-none font-body-md" placeholder="perfect@brelness.com" type="email" />
                                    </div>
                                    <div className="border-b border-zinc-300 py-2">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold font-label-bold">Message</label>
                                        <textarea className="w-full border-none p-0 focus:ring-0 bg-transparent text-on-background placeholder:text-zinc-300 resize-none outline-none font-body-md" placeholder="Décrivez votre projet..." rows={3}></textarea>
                                    </div>
                                    <button className="w-full bg-primary text-white font-label-bold py-4 rounded-lg hover:opacity-90 transition-opacity" type="button">
                                        ENVOYER LE MESSAGE
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Pied de page */}
            <footer className="bg-zinc-50 border-t border-zinc-200 full-width">
                <div className="w-full py-12 px-6 flex flex-col gap-8 max-w-7xl mx-auto mb-20 md:mb-0">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="space-y-4">
                            <span className="text-lg font-bold text-zinc-900 font-headline-md tracking-tighter text-[#af101a]">Faire face à l'avenir</span>
                            <p className="text-sm font-body-md text-zinc-500 max-w-xs">
                                Leader des investissements immobiliers premium et de la gestion architecturale à travers Kinshasa.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <p className="font-label-bold text-zinc-900">Liens Rapides</p>
                                <ul className="space-y-2">
                                    <li><a className="text-zinc-500 hover:text-red-600 font-label-md transition-colors" href="#properties">Recherche de Propriétés</a></li>
                                    <li><a className="text-zinc-500 hover:text-red-600 font-label-md transition-colors" href="#sectors">Dernières Offres</a></li>
                                    <li><a className="text-zinc-500 hover:text-red-600 font-label-md transition-colors" href="#services">Services</a></li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <p className="font-label-bold text-zinc-900">Contact</p>
                                <ul className="space-y-2">
                                    <li><a className="text-zinc-500 hover:text-red-600 font-label-md" href="tel:+243817633314">+243 817 633 314</a></li>
                                    <li><a className="text-zinc-500 hover:text-red-600 font-label-md" href="mailto:claudinilunga@gmail.com">claudinilunga@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <p className="font-label-bold text-zinc-900">Légal</p>
                                <ul className="space-y-2">
                                    <li><a className="text-zinc-500 hover:text-red-600 font-label-md" href="#">Politique de Confidentialité</a></li>
                                    <li><a className="text-zinc-500 hover:text-red-600 font-label-md" href="#">Conditions d'Utilisation</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm font-body-md text-zinc-500">© 2026 Faire face à l'avenir. Kintambo - Magasin / OUA, Kinshasa.</p>
                        <div className="flex gap-4">
                            <span className="material-symbols-outlined text-zinc-400 cursor-pointer hover:text-primary transition-colors">public</span>
                            <span className="material-symbols-outlined text-zinc-400 cursor-pointer hover:text-primary transition-colors">share</span>
                            <span className="material-symbols-outlined text-zinc-400 cursor-pointer hover:text-primary transition-colors">verified_user</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Barre de navigation inférieure (Mobile uniquement) */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-white border-t border-zinc-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
                <a className="flex flex-col items-center justify-center text-red-600 bg-red-50 rounded-lg py-1 px-3" href="#properties">
                    <span className="material-symbols-outlined">search</span>
                    <span className="text-[10px] font-bold font-label-bold uppercase tracking-widest mt-1">Recherche</span>
                </a>
                <a className="flex flex-col items-center justify-center text-zinc-400 py-1 px-3 hover:text-red-500 transition-colors" href="#">
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="text-[10px] font-bold font-label-bold uppercase tracking-widest mt-1">Favoris</span>
                </a>
                <a className="flex flex-col items-center justify-center text-zinc-400 py-1 px-3 hover:text-red-500 transition-colors" href="#contact">
                    <span className="material-symbols-outlined">calendar_today</span>
                    <span className="text-[10px] font-bold font-label-bold uppercase tracking-widest mt-1">Réserver</span>
                </a>
                <a className="flex flex-col items-center justify-center text-zinc-400 py-1 px-3 hover:text-red-500 transition-colors" href="#">
                    <span className="material-symbols-outlined">person</span>
                    <span className="text-[10px] font-bold font-label-bold uppercase tracking-widest mt-1">Profil</span>
                </a>
            </nav>

            {/* Bouton d'Action Flottant */}
            <button className="fixed right-6 bottom-24 md:bottom-8 z-40 bg-primary text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" type="button">
                <span className="material-symbols-outlined">add_home_work</span>
            </button>
        </div>
    );
}
