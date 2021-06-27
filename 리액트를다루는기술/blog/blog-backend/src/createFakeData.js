import Post from './models/post';

export default function createFakeData() {
    const posts = [...Array(40).keys()].map((i) => ({
        title: `post ${i}`,
        body: 'sdfjsdlkfjsdlkfkjlsdfjkldssdfjsdlkfjsdlkfkjlsdfjkldssdfjsdlkfjsdlkfkjlsdfjkldssdfjsdlkfjsdlkfkjlsdfjkldssdfjsdlkfjsdlkfkjlsdfjkldssdfjsdlkfjsdlkfkjlsdfjklds',
        tags: ['fake', 'taxi'],
    }));
    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    });
}
