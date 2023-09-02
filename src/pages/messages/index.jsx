import React, { useMemo } from 'react'
import LeftAccodions from '../../components/messagesAccodions'
import Message from '../../components/message'
import InputMessage from './input'

export default function Messages() {
    const messages = useMemo(() => [
        {
            sender: {
                profile: 'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM='
            },
            message: 'Work out? Are you serious right now?',
            emojies: [
                {
                    emoji: '🔥',
                    counts: 3
                },
                {
                    emoji: '🤣',
                    counts: 3
                },
            ],
            replies: 12,
            mine: false
        },
        {
            sender: {
                profile: 'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM='
            },
            message: 'Work out? Are you serious right now?',
            emojies: [
                {
                    emoji: '🔥',
                    counts: 3
                },
                {
                    emoji: '🤣',
                    counts: 3
                },
                {
                    emoji: '👍',
                    counts: 3
                },
            ],
            replies: 12,
            mine: true
        },
        {
            sender: {
                profile: 'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM='
            },
            message: 'Full time student and rockin\' it!',
            emojies: [
                {
                    emoji: '🔥',
                    counts: 3
                },
                {
                    emoji: '🤣',
                    counts: 3
                },
                {
                    emoji: '👍',
                    counts: 3
                },
            ],
            replies: 12,
            mine: false
        },
    ], [])

    return (
        <div className='body_two'>
            <section>
                <LeftAccodions />
            </section>
            <section>
                <div className='messages'>
                    {messages.map(msg => (
                        <Message {...msg} />
                    ))}
                </div>
                <InputMessage />
            </section>
        </div>
    )
}
