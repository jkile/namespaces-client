import {
    ChatAltIcon,
    EyeIcon,
    ShareIcon,
    ThumbUpIcon,
} from '@heroicons/react/solid'
import ThreadTileHead from './ThreadTileHead/ThreadTileHead'
import ThreadTileMenu from './ThreadTileMenu/ThreadTileMenu'

type Author = {
    imageUrl: string,
    name: string,
    href: string
}
type ThreadData = {
    id: string,
    href: string,
    author: Author,
    datetime: string,
    date: string,
    title: string,
    body: string,
    likes: string,
    replies: string,
    views: string
}
type Props = {
    threadData: ThreadData
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ThreadTile({ threadData: { id, author, href, datetime, date, title, body, likes, replies, views  } }: Props) {
    return (
        <li key={id} className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
            <article aria-labelledby={'question-title-' + id}>
                <div>
                    <div className="flex space-x-3">
                        <ThreadTileHead author={author} href={href} datetime={datetime} date={date} />
                        <ThreadTileMenu />
                    </div>
                    <h2 id={'question-title-' + id} className="mt-4 text-base font-medium text-gray-900">
                        {title}
                    </h2>
                </div>
                <div
                    className="mt-2 text-sm text-gray-700 space-y-4"
                    dangerouslySetInnerHTML={{ __html: body }}
                />
                <div className="mt-6 flex justify-between space-x-8">
                    <div className="flex space-x-6">
                        <span className="inline-flex items-center text-sm">
                            <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">{likes}</span>
                                <span className="sr-only">likes</span>
                            </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                            <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">{replies}</span>
                                <span className="sr-only">replies</span>
                            </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                            <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <EyeIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">{views}</span>
                                <span className="sr-only">views</span>
                            </button>
                        </span>
                    </div>
                    <div className="flex text-sm">
                        <span className="inline-flex items-center text-sm">
                            <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ShareIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">Share</span>
                            </button>
                        </span>
                    </div>
                </div>
            </article>
        </li>
    )
}
