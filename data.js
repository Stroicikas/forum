var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "DKxd",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jamal",
                date: Date.now(),
                content: "Hey There",
            },
            {
                author: "Laquish",
                date: Date.now(),
                content: "Hey to you too",
            },
            {
                author: "Jamal",
                date: Date.now(),
                content: "Fuck you Laquish",
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "NotDKxd",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jamal",
                date: Date.now(),
                content: "Hey There",
            },
            {
                author: "Laquish",
                date: Date.now(),
                content: "Hey to you too",
            },
            {
                author: "Jamal",
                date: Date.now(),
                content: "Fuck you Laquish",
            }
        ]
    }
]

var threads;
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}