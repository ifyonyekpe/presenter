export const a = `# Synchronous vs Asynchronous Requests
### Synchronous Request
Assuming a request is dependent on some external resource, like accessing a \`database\` or a \`Web API\`.
Request is blocked waiting for the external resource to return before execution continues processing the request.


![Synchronous Request](https://i-msdn.sec.s-msft.com/dynimg/IC751088.png)
**Waiting synchronously for external resource to complete**


Seems all well and good until your ASP.NET server gets more request that it can handle.
All othe extra request have to wait

![More Request](https://i-msdn.sec.s-msft.com/dynimg/IC751087.png)
**Two Threaded Server Receiving Three Requeest**

Note: the third request is in danger of an HTTP Error 503 (Service unavailable), since it's timer is going.
Also the two threads are effectively doing nothing just waiting for their respective external resource to return.
`
export const b = `# Synchronous vs Asynchronous Requests
### Asynchronous Request
Asynchronous request handlers operate differently.
This time call to the external resource is processed asynchronously

![Asynchronous Request](https://i-msdn.sec.s-msft.com/dynimg/IC751086.png)
**Waiting asynchronously for external resource to complete**

#### Important Difference
* The request thread frees up and is returned to the thread pool while the asynchronous call is in progress
* The thread is no longer associated with the requests.

> **Note**: for synchronous request, the \`same thread\` is used for the lifetime of the request;
      however with asynchronous handlers, in contrast, \`different threads\` may be assigned to the same request

#### Benefits
* Responsiveness and Scalability
    > **hide latency** of potentially long-running or blocking operations (e.g. I/O) by starting in the background.
    So if you have any I/O bound needs (such as requesting from a \`network\` or \`accessing a database\`)
    >
* Performance
    > **reduce execution** time of CPU-bound computations by dividing workload into chunks and executing simultaneously
`
