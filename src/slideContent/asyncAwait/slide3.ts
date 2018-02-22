export const slide3 = `# Synchronous vs Asynchronous Requests
### Asynchronous Request
Asynchronous request handlers operate differently. 
This time call to the external resource is processed asynchronously

![Asynchronous Request](https://i-msdn.sec.s-msft.com/dynimg/IC751086.png)
**Waiting asynchronously for external resource to complete**

Important Difference
* The request thread frees up and is returned to the thread pool while the asynchronous call is in progress
* The thread is no longer associated with the requests.

> **Note**: for synchronous request, the \`same thread\` is used for the lifetime of the request; 
      however with asynchronous handlers, in contrast, \`different threads\` may be assigned to the same request
`
