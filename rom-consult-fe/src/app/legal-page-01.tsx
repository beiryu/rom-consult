"use client";

import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";

const HeaderCentered = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Current as of 20 Jan 2026</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Privacy Policy</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Your privacy is important to us at Untitled. We respect your privacy regarding any information we may collect from you across our
                        website.
                    </p>
                </div>
            </div>
        </section>
    );
};

const ContentSectionRichText02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto prose md:prose-lg md:max-w-180">
                    <p>
                        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                        montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
                        varius id.
                    </p>
                    <p>
                        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis
                        fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
                        sodales id est ac volutpat.
                    </p>

                    <h2>What information do we collect?</h2>

                    <p>
                        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
                        turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                    </p>

                    <p>
                        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim
                        adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
                        aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus,
                        eget nunc lectus in tellus, pharetra, porttitor.
                    </p>
                    <p>
                        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
                        molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam
                        nibh orci.
                    </p>

                    <h2>How do we use your information?</h2>

                    <p>
                        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
                        turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                    </p>

                    <p>
                        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim
                        adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
                        aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus,
                        eget nunc lectus in tellus, pharetra, porttitor.
                    </p>
                    <p>
                        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
                        molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam
                        nibh orci.
                    </p>

                    <h3>Do we use cookies and other tracking technologies?</h3>

                    <p>
                        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst
                        ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                    </p>

                    <h3>How long do we keep your information?</h3>

                    <p>
                        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst
                        ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                    </p>

                    <h3>How do we keep your information safe?</h3>

                    <p>
                        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst
                        ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                    </p>

                    <h2>What are your privacy rights?</h2>

                    <p>
                        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst
                        ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                    </p>

                    <h3>How can you contact us about this policy?</h3>

                    <p>
                        Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor
                        rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa
                        erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                    </p>

                    <ol>
                        <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                        <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                        <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

const FooterLarge16 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8 md:items-center">
                    <UntitledLogo className="h-7 w-min shrink-0" />
                    <nav>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                            {[
                                { title: "Overview", href: "#" },
                                { title: "Features", href: "#" },
                                { title: "Pricing", href: "#" },
                                { title: "Careers", href: "#" },
                                { title: "Help", href: "#" },
                                { title: "Privacy", href: "#" },
                            ].map((item) => (
                                <li key={item.title}>
                                    <Button color="link-gray" size="md" href={item.href} className="max-h-5">
                                        {item.title}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="relative mt-12 flex flex-col justify-between gap-8 pt-8 md:mt-16 md:flex-row md:items-center">
                    <div className="absolute top-0 left-0 h-px w-full bg-border-secondary"></div>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex w-full flex-col gap-4 sm:flex-row md:max-w-100"
                    >
                        <Input isRequired id="newsletters-email" name="email" type="email" placeholder="Enter your email" size="lg" wrapperClassName="flex-1" />
                        <Button type="submit" size="lg">
                            Subscribe
                        </Button>
                    </Form>
                    <p className="text-sm text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const LegalPage01 = () => {
    return (
        <div className="bg-primary">
            <Header />

            <HeaderCentered />

            <ContentSectionRichText02 />

            <SectionDivider />

            <FooterLarge16 />
        </div>
    );
};

export default LegalPage01;
