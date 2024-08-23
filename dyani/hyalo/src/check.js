import { initDb } from './db/init.js'
import { Post } from './db/models/post.js'

await initDb()

const post = new Post({
    title: 'Hello Mongoose!',
    author: 'Daniel Bugl',
    contents: 'This post is stored in a MongoDB database using Mongoose.',
    tags: ['mongoose', 'mongodb'],
})


const createdPost = await post.save()

const posts = await Post.findByIdAndUpdate(createdPost._id, {
  $set: { title: 'Hello again, Mongoose!' },
})

console.log(posts)