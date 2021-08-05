import React from 'react'

type Author = {
    imageUrl: string,
    href: string,
    name: string
}

type Props = {
    author: Author,
    href: string,
    datetime: string,
    date: string
}

export default function ThreadTileHead({ author, href, datetime, date }: Props) {
    return (
        <>
            <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={author.imageUrl} alt="" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                    <a href={author.href} className="hover:underline">
                        {author.name}
                    </a>
                </p>
                <p className="text-sm text-gray-500">
                    <a href={href} className="hover:underline">
                        <time dateTime={datetime}>{date}</time>
                    </a>
                </p>
            </div>
        </>
    )
}
