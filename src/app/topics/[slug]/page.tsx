interface SlugPageProps {
    params: Promise<{
        slug: string
    }>;
}

export default async function SlugPage({params}:SlugPageProps) {
    const {slug} = await params;
    
    return <div>SlugPage: {slug}</div>
}