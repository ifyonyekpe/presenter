export const slide2 = `# Synchronous vs Asynchronous Requests
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
