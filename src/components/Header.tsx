import Link from 'next/link'
import TopicCreateForm from './Topics/topic-create-form'

export default function Header() {
    return (
        <div className="flex m-4 font-sans dark:bg-black">
            <header className="flex flex-row justify-between w-full">
                <div>
                    <Link href='/'>
                        <h1>
                            SuperShopper
                        </h1>
                    </Link>
                </div>
                <div>
                    <TopicCreateForm/>
                </div>
            </header>
        </div>
    )
}