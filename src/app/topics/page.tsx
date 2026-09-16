interface TopicShowPageProps {
    params: Promise<{
        slug: string
    }>;
}

export default async function TopicsPage({params}:TopicShowPageProps) {
    const {slug} = await params;
    
    return <div>TopicsPage: {slug}</div>
}