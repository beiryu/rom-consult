const platforms = [
    {
        name: "Google",
        iconUrl: "https://cdn.simpleicons.org/google/4285F4",
    },
    {
        name: "Meta",
        iconUrl: "https://cdn.simpleicons.org/meta/0668E1",
    },
    {
        name: "Docker",
        iconUrl: "https://cdn.simpleicons.org/docker/2496ED",
    },
    {
        name: "Linux",
        iconUrl: "https://cdn.simpleicons.org/linux/FCC624",
    },
    {
        name: "Cloudflare",
        iconUrl: "https://cdn.simpleicons.org/cloudflare/F38020",
    },
    {
        name: "Kubernetes",
        iconUrl: "https://cdn.simpleicons.org/kubernetes/326CE5",
    },
    {
        name: "GitHub",
        iconUrl: "https://cdn.simpleicons.org/github/181717",
    },
    {
        name: "GitLab",
        iconUrl: "https://cdn.simpleicons.org/gitlab/FC6D26",
    },
    {
        name: "DigitalOcean",
        iconUrl: "https://cdn.simpleicons.org/digitalocean/0080FF",
    },
    {
        name: "Vercel",
        iconUrl: "https://cdn.simpleicons.org/vercel/000000",
    },
    {
        name: "Netlify",
        iconUrl: "https://cdn.simpleicons.org/netlify/00C7B7",
    },
];

export const SocialProofFullWidth = () => {
    return (
        <section className="bg-transparent">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto w-full max-w-240 rounded-xl border border-secondary bg-primary px-6 py-10 shadow-3xl md:px-10 md:py-12">
                    <div className="flex flex-col gap-8">
                        <p className="text-center text-md font-medium text-tertiary">Trusted by teams using</p>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
                            {platforms.map((platform) => (
                                <div key={platform.name} className="inline-flex items-center gap-2 rounded-lg border border-secondary bg-primary px-3 py-2">
                                    <img alt={platform.name} src={platform.iconUrl} className="size-5" />
                                    <span className="text-sm font-medium text-secondary">{platform.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
