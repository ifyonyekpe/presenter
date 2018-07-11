export const a = `# Async Await in ASP.NET
## What is Asynchronous Programming

![intro](https://s3-us-west-1.amazonaws.com/www.jcolemorrison.com/blog/posts/1-20-2018-async-await/async-await.png)

- Asynchronous programming is a means of parallel programming in which a unit of work runs separately
from the main application thread and notifies the calling thread of its completion, failure or progress.

`

export const b = `## Why Asynchronous applications
* Responsiveness and Scalability
    > **hide latency** of potentially long-running or blocking operations (e.g. I/O) by starting in the background.
    So if you have any I/O bound needs (such as requesting from a \`network\` or \`accessing a database\`)
    >
* Performance
    > **reduce execution** time of CPU-bound computations by dividing workload into chunks and executing simultaneously
`

export const c = `## Current Asynchronous applications

#### Asynchronous JavaScript (AJAX)
\`\`\` javascript
$.get("http://www.goempyrean.com/rss", function(data) {
  alert("RSS Received!");

  // Do some other work
});
\`\`\`

#### Facebook
![Facebook](https://storyful.com/wp-content/uploads/2016/04/Facebook-create.png)
`

